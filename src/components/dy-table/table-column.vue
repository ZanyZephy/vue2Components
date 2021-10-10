<template>
  <el-table-column v-bind="item" v-if="item.children">
    <table-column
      v-for="(child, index) in item.children"
      :key="index"
      :item="child"
    ></table-column>
  </el-table-column>
  <el-table-column v-bind="item" v-else> </el-table-column>
</template>
<script>
export default {
  inheritAttrs: false,
  name: "TableColumn",
  props: ["item"],
};
</script>
