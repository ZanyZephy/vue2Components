<template>
  <div>
    <!-- TODO:工具栏 -->
    <!-- 表格主体 -->
    <el-table
      ref="elTable"
      class="elTable"
      :data="getData"
      size="mini"
      border
      style="width: 100%"
      v-on="$listeners"
      v-bind="$attrs"
      @cell-click="onCellClick"
      @cell-dblclick="onCellDblClick"
      @mousedown.native="(e) => onMouseDown(e, true)"
      @mousemove.native="(e) => onMouseMove(e)"
      @mouseup.native="() => onMouseUp(onSelect, false)"
    >
      <template #default="data">
        <BasicColumn
          v-for="(column, index) in columns"
          :key="column.prop || index"
          :column="column"
        ></BasicColumn>
        <slot v-bind="data || {}"></slot>
      </template>
      <template #append="data">
        <slot name="append" v-bind="data || {}"></slot>
      </template>
    </el-table>

    <!-- 分页 -->
    <el-row
      type="flex"
      :justify="getPaginationConf.position"
      v-if="getPaginationConf !== false"
    >
      <el-pagination
        :small="getPaginationConf.small"
        :background="getPaginationConf.background"
        :page-size.sync="getPaginationConf.pageSize"
        :total="getPaginationConf.total || data.length"
        :page-count="getPaginationConf.pageCount"
        :pager-count="getPaginationConf.pagerCount"
        :current-page.sync="getPaginationConf.currentPage"
        :layout="getPaginationConf.layout"
        :page-sizes="getPaginationConf.pageSizes"
        :popper-class="getPaginationConf.popperClass"
        :prev-text="getPaginationConf.prevText"
        :next-text="getPaginationConf.nextText"
        :disabled="getPaginationConf.disabled"
        :hide-on-single-page="getPaginationConf.hideOnSinglePage"
        @size-change="getPaginationConf.onSizeChange"
        @current-change="getPaginationConf.onCurrentChange"
        @prev-click="getPaginationConf.onPrevClick"
        @next-click="getPaginationConf.onNextClick"
      ></el-pagination>
    </el-row>
    <!-- 单元格编辑 -->
    <EditTable ref="tableEdit"></EditTable>
    <!-- TODO:右键菜单 -->
  </div>
</template>

<script>
import BasicColumn from "./BasicColumn.vue";
import EditTable from "./src/components/edit-table/index.js";
import { get, set } from "lodash-es";
import {
  initTable,
  initSelectArea,
  onMouseDown,
  onMouseMove,
  onMouseUp,
} from "./sel-cell";
export default {
  inheritAttrs: false,
  components: {
    BasicColumn,
    EditTable,
  },
  props: {
    columns: {
      type: Array,
      default: () => [],
    },
    pagination: {
      type: [Object, Boolean],
      default: () => {
        return {};
      },
    },
    data: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  mounted() {
    document.onkeydown = (e) => {
      const { ctrlKey, key, code } = e;
      console.log(code);
      if (code === "Backspace") {
        this.cacheCellList.forEach((item) => {
          const { index, key } = item.dataset;
          set(this.data[index], key, "");
        });
      }
    };
    //初始化table
    this.$nextTick(() => {
      const wrapper = this.$refs.elTable.$el.querySelector(
        ".el-table__body-wrapper"
      );
      initSelectArea(wrapper);
    });
  },

  data() {
    return {
      paginationConf: {
        small: false,
        background: true,
        pageSize: 10,
        total: 0,
        pageCount: undefined,
        pagerCount: 7,
        currentPage: 1,
        layout: "prev, pager, next",
        pageSizes: [10, 20, 30, 40, 50, 100],
        popperClass: undefined,
        prevText: undefined,
        nextText: undefined,
        disabled: false,
        hideOnSinglePage: false,
        position: "end",
        onSizeChange: () => {},
        onCurrentChange: () => {},
        onPrevClick: () => {},
        onNextClick: () => {},
      },
      cell: null,
      cacheCell: {},
      cacheCellList: [], //
      isMouseDown: false,
      isMoveDown: true, //是否向下移动
      tdList: [],
    };
  },
  computed: {
    getData() {
      this.$nextTick(() => {
        const table = this.$refs.elTable.$el.querySelector(
          ".el-table__body-wrapper table"
        );
        const columns = this.$refs.elTable.columns;
        initTable(table, columns, (arr) => {
          console.log(arr);
          this.cacheCellList = arr;
        });
      });
      if (this.paginationConf.total === 0) {
        const { currentPage, pageSize } = this.paginationConf;
        return this.data.slice(
          (currentPage - 1) * pageSize,
          currentPage * pageSize
        );
      } else {
        return this.data;
      }
    },
    getPaginationConf() {
      if (
        Object.prototype.toString.call(this.pagination) === "[object Object]"
      ) {
        return Object.assign(this.paginationConf, this.pagination);
      } else {
        return this.paginationConf;
      }
    },
  },

  //方法兼容
  methods: {
    onMouseDown,
    onMouseMove,
    onMouseUp,
    onSelect(e) {
      console.log(e);
    },
    //双击单元格，进入编辑状态
    onCellDblClick(row, column, cell, event) {
      const classList = Array.from(cell.classList);
      if (classList.includes("disabled") || classList.includes("readonly"))
        return;
      //调整位置坐标和宽高
      const { width, height, left, top } = cell.getBoundingClientRect();
      Object.assign(this.$refs.tableEdit, {
        width,
        height,
        left,
        top,
      });
      //读取当前单元格数据
      this.$refs.tableEdit.value = get(row, column.property);
      //聚焦修改框，设置单元格类型，传递必要参数
      const editor = this.edit[column.property];
      this.$refs.tableEdit.onOpen(editor);
      //设置回调函数，接收修改的数据
      this.$refs.tableEdit.onChange = (value) => {
        console.log(value);
        //设置数据
        set(row, column.property, value);
        //聚焦当前单元格
        this.cell.focus();
      };
    },

    //点击选中单元格，可进行复制
    onCellClick(row, column, cell, event) {
      console.log("99996");
      if (this.cell) {
        this.cell.removeAttribute("tabindex");
        this.cell.classList.remove("active");
        this.cell.onkeydown = null;
      }
      this.cell = cell;
      this.cell.setAttribute("tabindex", "1");
      this.cell.classList.add("active");
      this.cell.focus();
      //键盘操作事件
      this.cell.onkeydown = (e) => {
        const { ctrlKey, key, code } = e;
        //复制功能
        if (ctrlKey === true && key === "c") {
          navigator.clipboard.writeText(get(row, column.property));
          this.$message({
            message: "复制成功",
            type: "success",
          });
        }
        //回车进入编辑状态
        if (code === "Enter") {
          console.log("触发了编辑事件");
          this.onCellDblClick(row, column, cell, event);
        }
        //方向键控制单元格位置
        if (
          ["ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown"].includes(code)
        ) {
          const curel = document.activeElement; //当前元素
          const curcellIndex = curel.cellIndex; // 当前元素行单元格索引
          const curRowIndex = curel.parentElement.sectionRowIndex; //当前元素行的索引；
          const curtbody = curel.parentElement.parentElement.children; //当前tbody内容的整个表单
          //按上键
          if (code === "ArrowUp") {
            //第一行往上就是最后一行
            if (curRowIndex - 1 < 0) {
              curtbody[curtbody.length - 1].children[curcellIndex].click();
            } else {
              curtbody[curRowIndex - 1].children[curcellIndex].click();
            }
            //按下键
          } else if (code === "ArrowDown") {
            //最后一行往下就是第一行
            if (curRowIndex + 1 == curtbody.length) {
              curtbody[0].children[curcellIndex].click();
            } else {
              curtbody[curRowIndex + 1].children[curcellIndex].click();
            }
            //按左键
          } else if (code === "ArrowLeft") {
            //第一个往左就是最后一个
            if (curcellIndex - 1 < 0) {
              curtbody[curRowIndex].children[
                curtbody[curRowIndex].children.length - 1
              ].click();
            } else {
              curtbody[curRowIndex].children[curcellIndex - 1].click();
            }
            //按右键
          } else if (code === "ArrowRight") {
            if (curcellIndex + 1 == curtbody[curRowIndex].children.length) {
              curtbody[curRowIndex].children[0].click();
            } else {
              curtbody[curRowIndex].children[curcellIndex + 1].click();
            }
          }
        }
      };
    },

    clearSelection() {
      this.$refs.elTable.clearSelection();
    }, //用于多选表格，清空用户的选择	—
    toggleRowSelection(row, selected) {
      this.$refs.elTable.toggleRowSelection(row, selected);
    }, //	用于多选表格，切换某一行的选中状态，如果使用了第二个参数，则是设置这一行选中与否（selected 为 true 则选中）	row, selected
    toggleAllSelection() {
      this.$refs.elTable.toggleAllSelection();
    }, //	用于多选表格，切换所有行的选中状态	-
    toggleRowExpansion(row, expanded) {
      this.$refs.elTable.toggleRowExpansion(row, expanded);
    }, //	用于可展开表格与树形表格，切换某一行的展开状态，如果使用了第二个参数，则是设置这一行展开与否（expanded 为 true 则展开）	row, expanded
    setCurrentRow(row) {
      this.$refs.elTable.setCurrentRow(row);
    }, //	用于单选表格，设定某一行为选中行，如果调用时不加参数，则会取消目前高亮行的选中状态。	row
    clearSort() {
      this.$refs.elTable.clearSort();
    }, //	用于清空排序条件，数据会恢复成未排序的状态	—
    clearFilter(columnKey) {
      this.$refs.elTable.clearFilter(columnKey);
    }, //	不传入参数时用于清空所有过滤条件，数据会恢复成未过滤的状态，也可传入由columnKey组成的数组以清除指定列的过滤条件	columnKey
    doLayout() {
      this.$refs.elTable.doLayout();
    }, //	对 Table 进行重新布局。当 Table 或其祖先元素由隐藏切换为显示时，可能需要调用此方法	—
    sort(prop, order) {
      this.$refs.elTable.sort(prop, order);
    }, //	手动对 Table 进行排序。参数prop属性指定排序列，order指定排序顺序。	prop: string, order: string
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
</style>
<style scoped>
.smart-corner {
  position: absolute;
  right: -5px;
  bottom: -5px;
  background-color: #4b8cff;
  height: 5px;
  width: 5px;
  border: 2px solid #fff;
  cursor: crosshair;
  z-index: 4;
  display: block;
  /* transform: translate(-4px, -5px); */
}
.elTable ::v-deep .active {
  position: relative;
  outline: none;
  user-select: none;
  z-index: 999;
  background-color: red;
}
.elTable ::v-deep .active:before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border: solid rgba(1, 136, 251, 1);
  box-sizing: border-box;
  pointer-events: none;
}
/* 禁止编辑单元格 */
.elTable ::v-deep .disabled {
  background-color: #d3d3d3 !important;
}
</style>
