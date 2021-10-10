<template>
  <el-table
    ref="elTable"
    class="elTable"
    v-on="$listeners"
    v-bind="$attrs"
    size="mini"
    border
    style="width: 100%"
  >
    <TCol v-for="(item, index) in prop" :key="index" :item="item"></TCol>
    <slot></slot>
    
  </el-table>
</template>
<script>
import TCol from "./table-column.vue";
export default {
  inheritAttrs: false,
  props: ["prop"],
  components: {
    TCol,
  },
  mounted(){
    console.log(this)   
  }
};
</script>
<style scoped>
/* 选中单元格 */
.elTable ::v-deep .active {
  position: relative;
  outline: none;
  user-select: none;
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
  z-index: 9;
}
/* 禁止编辑单元格 */
.elTable ::v-deep .disabled {
  background-color: #d3d3d3 !important;
}
</style>
