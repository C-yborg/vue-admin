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
				<el-form-item label="验证码" prop="code" class="item-from">
					<el-row :gutter="10">
						<el-col :span="15">
				  			<el-input v-model.number="ruleForm.code"></el-input>
						</el-col>
						<el-col :span="9">
				  			<el-button type="success" class="block">获取验证码</el-button>
						</el-col>
					</el-row>
				</el-form-item>
				<el-form-item>
				  	<el-button type="danger" @click="submitForm('ruleForm')" class="login-btn block">提交</el-button>
				</el-form-item>
			</el-form>
		<!-- 表单end -->
		</div>
		
	</div>
</template>

<script>
import { stripscript, validateEmail, validatePassword, validateVCode  } from '@/utils/validate.js'
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
			let reg = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/;
    	  if (value === '') {
    	    callback(new Error('请输入密码'));
    	  } else if (!reg.test(value)) {
    	    callback(new Error('密码为6到20位的字母+数字'));
    	  } else {
			  callback();
		  }
    	};
		//验证验证码
		let validateCode = (rule, value, callback) => {
			let reg = /^[a-z0-9]{6}$/;
        	if (!value) {
        	  	return callback(new Error('年龄不能为空'));
        	} else if (!reg.test(value)) {
				callback(new Error('验证码格式有误'))
			} else {
				callback();
			}
    	};
		return {
			menuTab:[
				{ txt: '登录', current: true },
				{ txt: '注册', current: false }
			],
			ruleForm: {
        		username: '',
        		password: '',
        		code: ''
        	},
        	rules: {
        		username: [
        		  { validator: validateUsername, trigger: 'blur' }
        		],
        		password: [
        		  { validator: validatePassword, trigger: 'blur' }
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
		toggleMenu(data) {
			this.menuTab.forEach(elem => {
				elem.current = false;
			})
			data.current = true;
		},
		submitForm(formName) {
    	    this.$refs[formName].validate((valid) => {
    	      if (valid) {
    	        alert('submit!');
    	      } else {
    	        console.log('error submit!!');
    	        return false;
    	      }
    	    });
    	},
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