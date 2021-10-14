<template>
  <el-dialog
    title="提示"
    :visible.sync="dialogVisible"
    width="30%"
    :before-close="handleClose"
  >
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
import ETale from "../ETale/BasicTable.vue";
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
