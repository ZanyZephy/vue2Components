<template>
  <el-dialog class="elDialog" :title="title" :visible.sync="dialogVisible" :width="width" center>
    <div class="searchBar">
      <div class="searchInput">
        <label :style="{ width: '100px' }" for="keywords">搜索关键词：</label>
        <el-input
          :style="{ width: '80%' }"
          id="keywords"
          size="mini"
          v-model="keywords"
          placeholder
        ></el-input>
      </div>
      <el-col :span="12" :style="{ marginLeft: '10px' }">
        <el-button size="mini" type="primary" @click="getData">查询</el-button>
        <el-button size="mini" type="primary" @click="onConfirm">确认</el-button>
      </el-col>
    </div>
    <ETale
      :height="height"
      :data="tableData"
      :columns="columns"
      v-on="$listeners"
      v-bind="$attrs"
      :pagination="pagination"
    ></ETale>
  </el-dialog>
</template>
<script>
import ETale from "./BasicTable.vue";
export default {
  inheritAttrs: false,
  props: {
    width: {
      type: null,
      default: "800px"
    },
    height: {
      type: Number,
      default: 400
    }
  },
  data() {
    return {
      title: "", //弹窗标题
      keywords: "",//关键词
      dialogVisible: true,//是否显示弹窗
      tableData: [], //表格数据
      columns: [], //
      pagination: {//分页数据
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
      this.columns = columns || [
        { label: '姓名', prop: 'make' },
        { label: '价钱', prop: 'price' },
        { label: '型号', prop: 'model' },
      ];
      this.api = api
      this.getData()
    },
    async getData() {
      // const { data, code } = await this.api(this.params);
      // if (code !== 200) return;
      this.tableData = [
        { make: "Ford", model: "Celica", price: 35000 },
        { make: "Ford", model: "Mondeo", price: 32000 },
        { make: "Porsche", model: "Boxter", price: 72000 },
        { make: "Porsche", model: "Boxter", price: 72000 },
        { make: "Porsche", model: "Boxter", price: 72000 },
        { make: "Porsche", model: "Boxter", price: 72000 },
        { make: "Porsche", model: "Boxter", price: 72000 },
        { make: "Porsche", model: "Boxter", price: 72000 },
        { make: "Porsche", model: "Boxter", price: 72000 },
        { make: "Porsche", model: "Boxter", price: 72000 },
        { make: "Porsche", model: "Boxter", price: 72000 },
        { make: "Porsche", model: "Boxter", price: 72000 },
        { make: "Porsche", model: "Boxter", price: 72000 },
        { make: "Porsche", model: "Boxter", price: 72000 },
        { make: "Porsche", model: "Boxter", price: 72000 },
      ];
    },
    onConfirm() {

    }
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