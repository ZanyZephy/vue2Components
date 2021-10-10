<template>
  <div>
    <el-table
      :data="getData"
      size="mini"
      border
      style="width: 100%"
      v-on="$listeners"
      v-bind="$attrs"
    >
      <slot></slot>
      <template #append="data">
        <slot name="append" v-bind="data || {}"></slot>
      </template>
    </el-table>
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
      >
      </el-pagination>
    </el-row>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
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
    };
  },
  computed: {
    getData() {
      const { currentPage, pageSize } = this.paginationConf;
      return this.data.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
      );
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
};
</script>
