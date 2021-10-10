<template>
  <el-dialog
    ref="elDialog"
    class="elDialog"
    :title="tableTitle"
    :visible.sync="dialogVisible"
    width="900px"
    center
  >
    <div class="searchBar">
      <label for="search"> 搜索关键词：</label>
      <el-input
        id="search"
        size="mini"
        placeholder=""
        v-model="queryParams.keywords"
        :style="{ width: '30%', margin: '0 20px 0 0' }"
      >
      </el-input>
      <el-button
        @click="onSearch"
        size="mini"
        type="primary"
        icon="el-icon-search"
        >搜索</el-button
      >
      <!-- <el-button size="mini" type="primary">确认</el-button> -->
    </div>
    <DTable v-bind="$attrs" v-on="$listeners" ref="elTable"></DTable>

    <el-row type="flex" justify="end" :style="{ marginTop: '10px' }">
      <el-pagination
        ref="elPagination"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="queryParams.pageNum"
        :page-sizes="[20, 50, 70, 100]"
        :page-size="queryParams.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalPage"
      >
      </el-pagination>
    </el-row>
  </el-dialog>
</template>

<script>
import DTable from "@/components/dy-table/index";
export default {
  inheritAttrs: false,
  components: {
    DTable,
  },
  data() {
    return {
      elTable: null,
      elPagination: null,
      elDialog: null,
      queryParams: {}, //查询参数
      dialogVisible: false, //显示或隐藏弹窗
      totalPage: 0, //总条数
    };
  },
  mounted() {},
  methods: {
    open(options) {
      this.dialogVisible = true;
      const {
        tableData,
        tableProp,
        tableTitle,
        tableApi,
        tableAttrs,
        tableEvents,
      } = options;
      this.$nextTick(() => {
        this.elTable = this.$refs.elTable;
        this.elPagination = this.$refs.elPagination;
        this.elDialog = this.$refs.elDialog;
        //设置表格数据
        console.log(this.elTable)
        this.elTable.data = tableData;
        // this.console.log(this.elTable);
      });
    },
    //搜索
    onSearch() {},
    handleSizeChange(val) {
      this.queryParams.pageSize = val;
    },
    handleCurrentChange(val) {
      this.queryParams.pageNum = val;
    },
  },
};
</script>

<style scoped>
.elDialog ::v-deep .el-dialog__header {
  padding: 10px;
}

.elDialog ::v-deep .el-dialog__body {
  padding: 10px;
}

.searchBar {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
</style>
