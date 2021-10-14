<template>
  <el-dialog
    title="提示"
    :visible.sync="dialogVisible"
    width="50%"
    :before-close="handleClose"
  >
    <div class="searchBar">
      <el-col :span="8">
        <span>搜索关键词：</span>
        <el-input size="mini" v-model="keywords" placeholder=""></el-input>
      </el-col>
      <el-col :span="8" style="margin-left: 12px">
        <el-button size="mini" type="primary">查询</el-button>
        <el-button size="mini" type="primary">确认</el-button>
      </el-col>
    </div>
    <ETale
      v-on="$listeners"
      v-bind="$attrs"
      :data="tableData"
      :columns="columns"
      :pagination="pagination"
    ></ETale>
    <el-button type="primary">点我</el-button>
  </el-dialog>
</template>
<script>
import ETale from "./BasicTable.vue";
export default {
  inheritAttrs: false,
  data() {
    return {
      title: "", //
      dialogVisible: false,
      tableData: [], //表格数据
      columns: [], //
      pagination: {
        currentPage: 1,
        onCurrentChange: (val) => {
          console.log(val);
        },
      },
    };
  },
  components: {
    ETale,
  },
  methods: {
    async open(options) {
      const { title, api, columns } = options;
      //打开弹窗
      this.dialogVisible = true;
      this.title = title;
      this.columns = columns;
      const { data, code } = this.api(this.params);
      if (code !== 200) return;
      this.tableData = data;
    },
  },
};
</script>
<style scoped>
div ::v-deep .el-dialog__header {
  padding: 10px;
}
div ::v-deep .el-dialog__body {
  padding: 10px;
}
.searchBar {
  margin-bottom: 10px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}
</style>
