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
    getData(){
      fetch()
    },

    open(options) {
      const { title, api, columns, table } = options;
      //打开弹窗
      this.dialogVisible = true;
      this.title = title;
      this.columns = columns;
    },
  },
};
</script>
