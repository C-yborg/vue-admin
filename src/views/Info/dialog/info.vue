<template>
    <el-dialog title="新增" :visible.sync="dialog_info_flag" @close="close" width="580px">
        <el-form :model="form">
            <el-form-item label="活动名称" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="活动区域" :label-width="formLabelWidth">
                <el-select v-model="form.region" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
        </el-form>
    </el-dialog>
</template>

<script>
export default {
    data() {
        return {
            dialog_info_flag: true,
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: '',
            },
            formLabelWidth: '80px',
        };
    },
    methods: {
        close() {
            this.dialog_info_flag = false;
            this.$emit('close', false);
        },
    },
    //单向数据流 父级  -> 子级   不能反向修改
    props: {
        flag: {
            type: Boolean,
            default: false,
        },
    },
    watch: {
        flag(newValue, oldValue) {
            this.dialog_info_flag = newValue;
        },
    },
};
</script>

<style lang="scss" scoped></style>
