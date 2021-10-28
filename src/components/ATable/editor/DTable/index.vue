<template>
    <el-dialog
        class="elDialog"
        center
        :append-to-body="true"
        title="提示"
        :visible.sync="dialogVisible"
        width="800px"
        @close="onClose"
    >
        <div class="searchBar">
            <div class="searchInput">
                <label :style="{ width: '100px' }" for="keywords">搜索关键词：</label>
                <el-input
                    clearable
                    :style="{ width: '80%' }"
                    id="keywords"
                    size="mini"
                    v-model="keywords"
                    placeholder
                    @keydown.enter.native="getData"
                ></el-input>
            </div>
            <el-col :span="12" :style="{ marginLeft: '10px' }">
                <el-button size="mini" type="primary" @click="getData" :disabled="isLoading">查询</el-button>
                <el-button size="mini" type="primary" @click="getSelectedRows">确认</el-button>
            </el-col>
        </div>
        <BasicTable
            rowSelection="single"
            :defaultColDef="defaultColDef"
            @grid-ready="onGridReady"
            :style="{ height: '400px' }"
            :columnDefs="columnDefs"
            :rowData="rowData"
        ></BasicTable>
    </el-dialog>
</template>
<script>
import { Dialog } from 'element-ui'
import BasicTable from '../../BasicTable/index.vue'
export default {
    name: "CellDialog",
    components: {
        BasicTable,
        Dialog,
    },
    data() {
        return {
            isLoading: false,
            value: null,
            dialogVisible: false,
            columnDefs: [
                { headerName: "名字", field: 'name' },
                { headerName: "年龄", field: 'age' }
            ],
            rowData: [
                { name: "小猪猪", age: 18 },
                { name: "大猪猪", age: 20 }
            ],
            defaultColDef: {
                flex: 1,
                minWidth: 150,
                editable: false,//默认可编辑
                filter: true,//默认可筛选
                sortable: true,//默认可排序
                resizable: true,//可调整列宽度
                floatingFilter: true,
            },//默认列配置
            keywords: " ",
        }
    },
    methods: {
        getValue() {
            return this.value;
        },
        onClose() {
            this.params.stopEditing()
        },
        onGridReady(params) {
            console.log(params)
            this.gridApi = params.api;
            this.columnApi = params.columnApi;
        },
        getSelectedRows() {
            const selectedRows = this.gridApi.getSelectedRows();
            this.dialogVisible = false
            this.value = selectedRows
           this.gridApi.stopEditing()
            console.log(selectedRows)
        },
        getData() {

        }
    },
    mounted() {
        this.dialogVisible = true;
    }
}
</script>

<style scoped>
.elDialog ::v-deep .el-dialog__header {
    padding: 10px;
}
.elDialog ::v-deep .el-dialog__body {
    padding: 10px;
}
.searchBar {
    width: 100%;
    margin-bottom: 10px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
}
.searchInput {
    width: 50%;
    display: flex;
    align-items: center;
    flex-flow: row nowrap;
}
</style>