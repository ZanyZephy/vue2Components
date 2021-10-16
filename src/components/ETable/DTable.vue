<template>
  <el-dialog
    class="elDialog"
    :title="title"
    :visible.sync="dialogVisible"
    :width="width"
    center
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
        <el-button
          size="mini"
          type="primary"
          @click="getData"
          :disabled="isLoading"
          >查询</el-button
        >
        <!-- 多选确认 -->
        <el-button
          v-if="isMultiple"
          size="mini"
          type="primary"
          @click="onConfirm"
          >确认</el-button
        >
      </el-col>
    </div>
    <ETale
      v-loading="isLoading"
      :height="height"
      :data="tableData"
      :columns="columns"
      v-on="$listeners"
      v-bind="$attrs"
      @selection-change="handleSelectionChange"
      ref="elTable"
      :pagination="{
        pageSize: params.pageSize,
        currentPage: params.pageNum,
        onCurrentChange,
        onSizeChange,
        layout: 'total, sizes, prev, pager, next, jumper',
      }"
    >
      <template v-if="$slots.default">
        <slot></slot>
      </template>
      <template v-else-if="!isMultiple">
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              type="primary"
              size="mini"
              @click="onSelect(scope.$index, scope.row)"
              >确认</el-button
            >
          </template>
        </el-table-column>
      </template>
    </ETale>
  </el-dialog>
</template>
<script>
import ETale from "./BasicTable.vue";
export default {
  inheritAttrs: false,
  props: {
    width: {
      type: null,
      default: "800px",
    },
    height: {
      type: Number,
      default: 400,
    },
  },
  data() {
    return {
      title: "", //弹窗标题
      keywords: "", //关键词
      dialogVisible: true, //是否显示弹窗
      tableData: [], //表格数据
      columns: [], //
      multipleSelection: [], //选择的选项
      params: {
        pageSize: 10,
        pageNum: 1,
      },
      isLoading: false, //是否正在请求
      mark: null, //父级传递的标记
      isMultiple: false, //是否多选
    };
  },
  components: {
    ETale,
  },
  mounted() {},
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    onCurrentChange(val) {
      this.params.pageNum = val;
      this.getData();
    },
    onSizeChange(val) {
      this.params.pageSize = val;
      this.getData();
    },

    onSelect(index, value) {
      this.dialogVisible = false;
      this.$emit("select-change", value, this.mark);
    },
    onConfirm() {
      this.dialogVisible = false;
      this.$emit("select-change", this.multipleSelection, this.mark);
    },
    async open(options) {
      const { title, api, columns = [], params = {} } = options;
      //打开弹窗
      this.dialogVisible = true;
      this.title = title;
      this.columns = columns;
      this.$nextTick(() => {
        const cols = this.$refs.elTable.$children[0].columns;
        this.isMultiple = cols.some((item) => item.type === "selection");
      });
      this.api = api;
      this.params = Object.assign(this.params, params);
      this.getData();
    },
    async getData() {
      if (!this.isLoading) {
        this.isLoading = true;
        fetch("http://jsonplaceholder.typicode.com/posts?_page=1&_limit=2")
          .then((response) => {
            return response.json();
          })
          .then((myJson) => {
            console.log(myJson);
            this.tableData = myJson;
          });
      }
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
