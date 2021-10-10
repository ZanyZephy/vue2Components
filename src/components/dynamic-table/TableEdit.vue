<template>
  <div
    style="position: absolute"
    :style="{
      top: top + 'px',
      left: left + 'px',
      width: width + 'px',
      height: height + 'px',
    }"
  >
    <template v-if="type === 'Input'">
      <el-input
        v-bind="attrs"
        v-on="events"
        class="editInput"
        size="mini"
        @blur="onBlur"
        ref="edit"
        v-model="value"
        @keydown.enter.native="onEnter"
      ></el-input>
    </template>

    <template v-if="type === 'DatePicker'">
      <el-date-picker
        v-bind="attrs"
        v-on="events"
        class="editInput"
        size="mini"
        @blur="onBlur"
        ref="edit"
        value-format="yyyy-MM-dd"
        v-model="value"
        type="date"
        @keydown.enter.native="onEnter"
      ></el-date-picker>
    </template>

    <template v-if="type === 'Select'">
      <el-select
        @visible-change="onVisibleChange"
        ref="edit"
        size="mini"
        class="editSelect"
        v-model="value"
        placeholder="请选择"
      >
        <el-option
          v-for="item in slots.default.options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </template>

    <el-dialog
      class="dialog"
      title="提示"
      :visible.sync="centerDialogVisible"
      width="900px"
      center
    >
      <div class="searchBar">
        <label for="search"> 搜索关键词：</label>
        <el-input
          id="search"
          size="mini"
          placeholder=""
          v-model="keywords"
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
      <Table
        ref="elTable"
        v-on="slots.default.events"
        v-bind="slots.default.attrs"
        size="mini"
        border
        style="width: 100%"
      >
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >确认</el-button
            >
          </template>
        </el-table-column>
      </Table>
      <el-row type="flex" justify="end" :style="{ marginTop: '10px' }">
        <el-pagination
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
  </div>
</template>
<script>
import Table from "./table.vue";
export default {
  data() {
    return {
      type: "", //编辑器类型
      value: "", //数据
      width: 0,
      height: 0,
      left: -999,
      top: 0,
      attrs: {},
      events: {},
      slots: { default: { events: null, attrs: null } },
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
      queryParams: {
        pageNum: 1,
        pageSize: 20,
      },
      totalPage: 400, //总页数
      keywords: "", //搜索关键词
      centerDialogVisible: true,
      api: undefined,
    };
  },
  components: {
    Table,
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    onSearch() {
      console.log('666')
    },
    handleSizeChange(val) {
      this.queryParams.pageSize = val;
    },
    handleCurrentChange(val) {
      this.queryParams.pageNum = val;
    },
    //打开编辑器
    async onOpen(editor) {
      if (editor) {
        const { type, attrs, events, slots, api } = editor;
        this.type = type;
        this.attrs = attrs ?? {};
        this.events = events ?? {};
        this.slots = slots ?? {
          default: { events: null, attrs: null, options: [] },
        };
        this.api = api ?? "";
      } else {
        this.type = "Input";
      }
      this.$nextTick(() => {
        const handler = {
          Input: () => this.$refs.edit.focus(),
          TimePicker: () => this.$refs.edit.focus(),
          DatePicker: () => this.$refs.edit.focus(),
          DateTimePicker: () => this.$refs.edit.focus(),
          Select: async () => {
            const { options } = this.slots;
            if (!Array.isArray(options)) {
              this.slots.options = [];
            }
            this.$refs.edit.toggleMenu();
            if (!this.api) return;
            if (
              Object.prototype.toString.call(this.api) === "[object Function]"
            ) {
              const { data } = await this.api(this.queryParams);
              this.tableData = data;
            } else if (
              Object.prototype.toString.call(this.api) === "[object String]"
            ) {
            }
          },
          Dialog: async () => {
            this.centerDialogVisible = true;
            console.log(this.api);
            if (!this.api) return;
            if (
              Object.prototype.toString.call(this.api) === "[object Function]"
            ) {
              const data = await this.api(this.queryParams);
              this.tableData = data;
            }
          },
        };
        if (!(this.type in handler)) {
          throw `${this.type}类型不存在，存在类型有${Object.keys(
            handler
          ).toString()}`;
        }
        handler[this.type]();
      });
    },

    //select显示和隐藏
    onVisibleChange(visible) {
      if (!visible) {
        this.left = -999;
        this.onChange(this.value);
        this.value = "";
        this.type = "";
      }
    },

    onBlur() {
      this.left = -999;
      this.onChange(this.value);
      this.value = "";
    },

    onEnter() {
      this.$refs.edit.blur();
    },

    onChange(e) {
      return e;
    },
  },
};
</script>
<style scoped>
/* 重置css样式 */
/* input输入框，datepicker */
.editInput,
.editSelect {
  width: 100%;
  height: 100%;
}
.editInput ::v-deep .el-input__inner {
  border-radius: 0;
  border: none;
  height: 100%;
  line-height: 100%;
}
.editSelect ::v-deep .el-input {
  width: 100%;
  height: 100%;
}
.editSelect ::v-deep .el-input .el-input__inner {
  border-radius: 0;
  border: none;
  height: 100%;
  line-height: 100%;
}
.dialog ::v-deep .el-dialog__header {
  padding: 10px;
}

.dialog ::v-deep .el-dialog__body {
  padding: 10px;
}

.searchBar {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
</style>
