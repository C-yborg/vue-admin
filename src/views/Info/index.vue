<template>
    <div>
        <el-row :gutter="14">
            <el-col :span="4">
                <div class="label-wrap category">
                    <label for="">类型：</label>
                    <div class="wrap-content">
                        <el-select
                            v-model="categoryValue"
                            placeholder="请选择"
                            style="width:100%;"
                        >
                            <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            >
                            </el-option>
                        </el-select>
                    </div>
                </div>
            </el-col>
            <el-col :span="7">
                <div class="label-wrap date">
                    <label for="">日期：</label>
                    <div class="wrap-content">
                        <el-date-picker
                            v-model="dateValue"
                            type="datetimerange"
                            align="right"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期"
                            :default-time="['12:00:00', '08:00:00']"
                            style="width:100%;"
                        >
                        </el-date-picker>
                    </div>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="label-wrap key-work">
                    <label for="">关键词：</label>
                    <div class="wrap-content">
                        <el-select v-model="search_key" style="width:100%;">
                            <el-option
                                v-for="item in searchOption"
                                :key="item.value"
                                :value="item.value"
                                :label="item.label"
                            ></el-option>
                        </el-select>
                    </div>
                </div>
            </el-col>
            <el-col :span="3">
                <el-input
                    v-model="search_keyWork"
                    placeholder="请输入内容"
                    style="width:100%;"
                ></el-input>
            </el-col>
            <el-col :span="3">
                <el-button type="danger" style="width:100%;">搜索</el-button>
            </el-col>
            <el-col :span="3">
                <el-button
                    type="danger"
                    class="pull-right"
                    style="width:100%;"
                    @click="dialogInfo = true"
                    >新增</el-button
                >
            </el-col>
        </el-row>

        <!-- 表格 -->
        <el-table :data="tableData" border style="width: 100%;margin-top:30px">
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column prop="title" label="标题"></el-table-column>
            <el-table-column prop="category" label="类型"></el-table-column>
            <el-table-column prop="date" label="日期"></el-table-column>
            <el-table-column prop="user" label="管理员"></el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button size="mini" type="danger">删除</el-button>
                    <el-button size="mini" type="success">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>

        <!-- 底部分页 -->
        <el-row style="margin-top:30px;">
            <el-col :span="12">
                <el-button size="medium">批量删除</el-button>
            </el-col>
            <el-col :span="12">
                <el-pagination
                    background
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    layout="total, sizes, prev, pager, next, jumper"
                    :page-sizes="[5, 10, 50, 100]"
                    :total="1000"
                    class="pull-right"
                >
                </el-pagination>
            </el-col>
        </el-row>

        <!-- 新增弹窗 -->
        <DialogInfo :flag="dialogInfo" @close="closeDialog" />
    </div>
</template>

<script>
import DialogInfo from './dialog/info';
export default {
    components: { DialogInfo },
    data() {
        return {
            dialogInfo: false,
            options: [
                {
                    value: '选项1',
                    label: '黄金糕',
                },
                {
                    value: '选项2',
                    label: '双皮奶',
                },
                {
                    value: '选项3',
                    label: '蚵仔煎',
                },
                {
                    value: '选项4',
                    label: '龙须面',
                },
                {
                    value: '选项5',
                    label: '北京烤鸭',
                },
            ],
            categoryValue: '',
            dateValue: '',
            searchOption: [
                { value: 'id', label: 'ID' },
                { value: 'title', label: '标题' },
            ],
            search_key: '',
            search_keyWork: '',
            tableData: [
                {
                    title: 'asdasdasd',
                    category: '新闻',
                    date: '2016-05-02',
                    user: '王小虎',
                },
                {
                    title: 'asdasdasd',
                    category: '新闻',
                    date: '2016-05-03',
                    user: '王小虎',
                },
                {
                    title: 'asdasdasd',
                    category: '新闻',
                    date: '2016-05-04',
                    user: '王小虎',
                },
            ],
        };
    },
    mounted() {},
    methods: {
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
        closeDialog() {
            this.dialogInfo = false;
        },
    },
};
</script>

<style lang="scss" scoped>
@import '../../styles/config.scss';
.label-wrap {
    &.category {
        @include labelDom(left, 60, 40);
    }
    &.date {
        @include labelDom(right, 50, 40);
    }
    &.key-work {
        @include labelDom(right, 60, 40);
    }
}
</style>
