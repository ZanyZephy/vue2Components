<template>
  <el-table-column v-bind="column" v-if="column.children">
    <BasicColumn
      v-for="(item, index) in column.children"
      :key="item.prop || index"
      :column="item"
    ></BasicColumn>
  </el-table-column>
  <el-table-column v-bind="column" v-else>
    <template #[item]="data" v-for="item in Object.keys($slots)">
      <slot :name="item" v-bind="data || {}"></slot>
    </template>
  </el-table-column>
</template>
<script>
export default {
  inheritAttrs: false,
  name: "BasicColumn",
  props: ["column"],
};
</script>
