<template>
  <div>
    <AgGridVue
      v-bind="$attrs"
      v-on="$listeners"
      class="ag-theme-balham"
      :style="{ height: 'calc(100% - 32px)' }"
      :enableRangeSelection="enableRangeSelection"
      :defaultColDef="defaultColDef"
      :enableFillHandle="enableFillHandle"
      :undoRedoCellEditing="undoRedoCellEditing"
      :undoRedoCellEditingLimit="undoRedoCellEditingLimit"
      :enableCellChangeFlash="enableCellChangeFlash"
      :enableBrowserTooltips="enableBrowserTooltips"
      :rowDragManaged="rowDragManaged"
      :animateRows="animateRows"
      :maintainColumnOrder="maintainColumnOrder"
      :localeText="localeText"
      :rowSelection="rowSelection"
      :suppressRowClickSelection="suppressRowClickSelection"
      :suppressCopyRowsToClipboard="suppressCopyRowsToClipboard"
      :suppressDragLeaveHidesColumns="suppressDragLeaveHidesColumns"
      @grid-ready="onGridReady"
      :stopEditingWhenCellsLoseFocus="true"
      @selectionChanged="onSelectionChanged"
    ></AgGridVue>
    <!-- 分页 -->
    <Row
      type="flex"
      :style="{ padding: '0 10px' }"
      align="middle"
      justify="space-between"
      v-if="getElPagination !== false"
    >
      <span class="el-pagination__selected"
        >已选 {{ selectedRows.length }} 条</span
      >
      <Pagination
        :small="getElPagination.small"
        :background="getElPagination.background"
        :page-size.sync="getElPagination.pageSize"
        :total="getElPagination.total"
        :page-count="getElPagination.pageCount"
        :pager-count="getElPagination.pagerCount"
        :current-page.sync="getElPagination.currentPage"
        :layout="getElPagination.layout"
        :page-sizes="getElPagination.pageSizes"
        :popper-class="getElPagination.popperClass"
        :prev-text="getElPagination.prevText"
        :next-text="getElPagination.nextText"
        :disabled="getElPagination.disabled"
        :hide-on-single-page="getElPagination.hideOnSinglePage"
        @size-change="getElPagination.onSizeChange"
        @current-change="getElPagination.onCurrentChange"
        @prev-click="getElPagination.onPrevClick"
        @next-click="getElPagination.onNextClick"
      ></Pagination>
    </Row>
  </div>
</template>
<script>
import { AgGridVue } from "@ag-grid-community/vue";
import { Pagination, Row } from "element-ui";
import { AG_GRID_LOCALE_CN } from "./locale.cn.js";
export default {
  inheritAttrs: false,
  name: "BasicTable",
  components: {
    AgGridVue,
    Row,
    Pagination,
  },
  computed: {
    getElPagination() {
      const isObject = (obj) =>
        Object.prototype.toString.call(obj) === "[object Object]";
      if (!isObject(this.elPagination)) return this.elPaginationDefault;
      const config = Object.assign(this.elPaginationDefault, this.elPagination);
      this.$emit("update:elPagination", config);
      return config;
    },
  },
  methods: {
    autoSizeAll(skipHeader) {
      const allColumnIds = [];
      this.gridColumnApi.getAllColumns().forEach(function (column) {
        allColumnIds.push(column.colId);
      });
      this.gridColumnApi.autoSizeColumns(allColumnIds, skipHeader);
    },
    onGridReady(params) {
      this.gridApi = params.api;
      this.gridColumnApi = params.columnApi;
      this.selectedRows = this.gridApi.getSelectedRows();
      //自适应宽度
      //   this.autoSizeAll(false)
    },
    onSelectionChanged() {
      this.selectedRows = this.gridApi.getSelectedRows();
    },
  },
  data() {
    return {
      columnTypesDefault: {
        checkBox: {}, //复选框
        select: {}, //下拉框
      },
      selectedRows: [],
      gridApi: null,
      gridColumnApi: null,
      elPaginationDefault: {
        small: false,
        background: true,
        pageSize: 50,
        total: 0,
        pageCount: undefined,
        pagerCount: 7,
        currentPage: 1,
        layout: "total, sizes, prev, pager, next, jumper",
        pageSizes: [50, 100, 150, 200],
        popperClass: undefined,
        prevText: undefined,
        nextText: undefined,
        disabled: false,
        hideOnSinglePage: false,
        onSizeChange: () => {},
        onCurrentChange: () => {},
        onPrevClick: () => {},
        onNextClick: () => {},
      },
    };
  },
  props: {
    elPagination: {
      type: [Object, Boolean],
      default: false,
    },
    suppressRowClickSelection: {
      type: Boolean,
      default: false,
    }, //禁止点击行选择
    suppressCopyRowsToClipboard: {
      type: Boolean,
      default: true,
    }, //禁用行复制
    suppressDragLeaveHidesColumns: {
      type: Boolean,
      default: true,
    }, //禁止隐藏列
    rowSelection: {
      type: String,
      default: "multiple",
    }, //多行选择
    rowDragManaged: {
      type: Boolean,
      default: true,
    }, //在托管拖动中，网格负责在拖动行时重新排列行
    animateRows: {
      type: Boolean,
      default: true,
    }, //启用行动画
    maintainColumnOrder: {
      type: Boolean,
      default: true,
    }, //顺序都保证与定义的顺序相匹配
    localeText: {
      type: Object,
      default: () => AG_GRID_LOCALE_CN,
    }, //设置中文语言包
    enableRangeSelection: {
      type: Boolean,
      default: true,
    }, //启用范围选择
    enableFillHandle: {
      type: Boolean,
      default: true,
    }, //启用填充
    undoRedoCellEditing: {
      type: Boolean,
      default: false,
    }, //启用撤消
    undoRedoCellEditingLimit: {
      type: Number,
      default: 10,
    }, //撤销次数
    enableCellChangeFlash: {
      type: Boolean,
      default: true,
    }, //数据更改后让单元格闪烁
    enableBrowserTooltips: {
      type: Boolean,
      default: true,
    }, //浏览器提示
    defaultColDef: {
      type: Object,
      default: () => {
        return {
          width: 120,
          editable: true, //默认可编辑
          filter: true, //默认可筛选
          sortable: true, //默认可排序
          resizable: true, //可调整列宽度
          floatingFilter: true,
        }; //默认列配置
      },
    },
  },
};
</script>
<style scoped>
.ag-theme-balham ::v-deep .ag-body-viewport .disabled {
  background: gray;
  color: #fff;
}
.el-pagination__selected {
  font-size: 13px;
  color: rgb(96, 98, 102);
  box-sizing: border-box;
  display: inline-block;
  font-weight: 400;
  height: 28px;
  line-height: 28px;
  vertical-align: top;
  white-space: nowrap;
}
</style>
