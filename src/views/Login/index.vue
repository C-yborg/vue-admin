<template>
	<div id="login">
		<div class="login-wrap">
			<ul class="menu-tab">
				<li v-for="item in menuTab" :key="item.id" :class="{ current: item.current }" @click="toggleMenu(item)">{{item.txt}}</li>
			</ul>
			<!-- 表单start -->
			<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" size="medium" label-position="top" class="login-form">
				<el-form-item label="邮箱" prop="username" class="item-from">
				  	<el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="密码" prop="password" class="item-from">
				  	<el-input type="password" minlength="6" maxlength="20" v-model="ruleForm.password" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="重复密码" prop="passwords" class="item-from" v-if="model === 'register'">
				  	<el-input type="password" minlength="6" maxlength="20" v-model="ruleForm.passwords" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="验证码" prop="code" class="item-from">
					<el-row :gutter="10">
						<el-col :span="15">
				  			<el-input v-model="ruleForm.code"></el-input>
						</el-col>
						<el-col :span="9">
				  			<el-button type="success" class="block" @click="getSms()" :disabled='codeButtonStatus.status'>{{codeButtonStatus.text}}</el-button>
						</el-col>
					</el-row>
				</el-form-item>
				<el-form-item>
				  	<el-button type="danger" @click="submitForm('ruleForm')" class="login-btn block" :disabled='loginButtonStatus'>{{model === 'login' ? '登录' :'注册' }}</el-button>
				</el-form-item>
			</el-form>
		<!-- 表单end -->
		</div>
		
	</div>
</template>

<script>
import { GetSms, Register, Login } from '@/api/login';
import { stripscript, validateEmail, validatePass, validateVCode  } from '@/utils/validate.js'
export default {
	name: "login",
	data() {
		//验证邮箱
    	let validateUsername = (rule, value, callback) => {
    	  	if (value === '') {
    	  	  callback(new Error('请输入邮箱'));
    	  	} else if (validateEmail(value)) {
    	  	    callback(new Error('邮箱格式有误'));
    	  	} else {
				callback();
			}
    	};
		//验证密码
    	let validatePassword= (rule, value, callback) => {
			// this.ruleForm.password = stripscript(value);
			// value = this.ruleForm.password;
    	  if (value === '') {
    	    callback(new Error('请输入密码'));
    	  } else if (validatePass(value)) {
    	    callback(new Error('密码为6到20位的字母+数字'));
    	  } else {
			  callback();
		  }
    	};
		//验证重复密码
    	let validatePasswords= (rule, value, callback) => {
			// this.ruleForm.password = stripscript(value);
			// value = this.ruleForm.password;
			//用v-show的话 如果模块为login  直接通过
			// if (this.model === 'login') { callback(); }
    	  	if (value === '') {
    	  	  callback(new Error('请再次输入密码'));
    	  	} else if (value != this.ruleForm.password) {
    	  	  callback(new Error('重复密码不正确'));
    	  	} else {
				  callback();
		  	}
    	};
		//验证验证码
		let validateCode = (rule, value, callback) => {
        	if (!value) {
        	  	return callback(new Error('年龄不能为空'));
        	} else if (validateVCode(value)) {
				callback(new Error('验证码格式有误'))
			} else {
				callback();
			}
    	};
		return {
			menuTab:[
				{ txt: '登录', current: true, type: 'login' },
				{ txt: '注册', current: false, type: 'register' }
			],
			//登录注册切换模块
			model: 'login',
			//登陆注册按钮状态
			loginButtonStatus: true,
			//获取验证码按钮状态
			codeButtonStatus: {
				status: false,
				text: '获取验证码'
			},
			//倒计时
			timer: null,
			//表单数据
			ruleForm: {
        		username: '',
        		password: '',
				passwords:'',
        		code: ''
        	},
        	rules: {
        		username: [
        		  { validator: validateUsername, trigger: 'blur' }
        		],
        		password: [
        		  { validator: validatePassword, trigger: 'blur' }
        		],
				passwords: [
        		  { validator: validatePasswords, trigger: 'blur' }
        		],
        		code: [
        		  { validator: validateCode, trigger: 'blur' }
        		]
        	}
		}
	},
	created() {},
	mounted() {},
	methods:{
		//切换登录、注册
		toggleMenu(data) {
			this.menuTab.forEach(elem => {
				elem.current = false;
			})
			this.model = data.type;
			//当前选中模块深色背景色
			data.current = true;
			//重置 清空表单数据
			this.$refs.ruleForm.resetFields();   //等价 this.$refs['ruleForm'].resetFields();
		},
		//提交表单
		submitForm(formName) {
    	    this.$refs[formName].validate((valid) => {
    	      if (valid) {
				  let requestData = {
						username: this.ruleForm.username,
						password: this.ruleForm.password,
						code: this.ruleForm.code
				  }
				  Register(requestData).then(response => {
					  console.log(response);
					  let data = response.data;
					  this.$message({
						  message: data.message,
						  type: 'success'
					  })
				  }).catch(error => {

				  });
    	        // alert('submit!');
    	      } else {
    	        console.log('error submit!!');
    	        return false;
    	      }
    	    });
    	},
		//获取验证码
		getSms() {
			// if (this.ruleForm.username === '') {
			// 	this.$message.error('邮箱不能为空！')
			// 	return false;
			// }
			//请求的接口
			if (validateEmail(this.ruleForm.username)) {
				this.$message.error('邮箱格式有误，请重新输入！');
				return false;
			}
			//请求验证码后 按钮禁用，文本改为’发送中‘
			this.codeButtonStatus.status = true;
			this.codeButtonStatus.text = '发送中';

			GetSms({username: this.ruleForm.username, model: this.model})
			.then(response => {
				let data = response.data
				this.$message({
					message: data.message,
					type: 'success'
				})
				this.loginButtonStatus = false;
				this.countDown(5);
			})
			.catch(error => {
				console.log(error);
			})
		},
		//验证码倒计时
		countDown(number) {
			let time = number;
			this.timer = setInterval(() => {
				time--;
				console.log(time);
				if ( time === 0 ) {
					clearInterval(this.timer);
					this.codeButtonStatus.status = false;
					this.codeButtonStatus.text = '再次获取'
				} else {
					this.codeButtonStatus.text = `倒计时${time}秒`;
				}
			},1000)
		}
	},
};
</script>

<style lang='scss' scoped>
#login {
	height: 100vh;
	background-color: #344a5f;
}
.login-wrap {
	width: 330px;
	margin: auto;
}
.menu-tab {
	text-align: center;
	li {
		display: inline-block;
		width: 88px;
		line-height: 36px;
		font-size: 14px;
		color: #fff;
		border-radius: 2px;
		cursor: pointer;
	}
	.current {
		background-color: rgba(0, 0, 0, .1);
	}
}
.login-form {
	/deep/ label {
		display: block;
		padding-bottom: 3px ;
		font-size: 14px;
		color: #fff;
	}
	.item-from {
		margin-bottom: 13px;
	}
	.block {
		display: block;
		width: 100%;
	}
	.login-btn { margin-top: 19px; }
}
</style>