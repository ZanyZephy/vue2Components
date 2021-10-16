<template>
  <div>
    <!-- 表格主体 -->
    <el-table
      ref="elTable"
      :data="getData"
      size="mini"
      border
      style="width: 100%"
      v-on="$listeners"
      v-bind="$attrs"
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
      :style="{ marginTop: '10px' }"
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
  </div>
</template>

<script>
import BasicColumn from "./BasicColumn.vue";
export default {
  inheritAttrs: false,
  components: {
    BasicColumn,
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
      elTable: this.$refs.elTable,
    };
  },
  computed: {
    getData() {
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
