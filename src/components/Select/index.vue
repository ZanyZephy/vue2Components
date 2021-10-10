<template>
  <div>
    <div class="container">
      <el-input
        :class="{ outline: isShow }"
        @focus="onFocus"
        readonly
        :value="readValue"
        :placeholder="placeholder"
        :size="size"
        :disabled="disabled"
        :suffix-icon="[
          'el-select__caret el-icon-arrow-up',
          isShow ? 'is-reverse' : '',
        ]"
        @click.native="onMouseDown"
      >
      </el-input>
      <div
        class="content"
        :style="{
          display: isShow ? 'block' : 'none',
          top: position == 'top' ? '-260px' : '',
        }"
      >
        <div class="xm-toolbar">
          <el-button type="primary" size="mini" @click="changeAll"
            >全选</el-button
          >
          <el-button type="primary" size="mini" @click="resetChecked"
            >清空</el-button
          >
        </div>
        <el-input
          size="mini"
          placeholder="输入关键字进行过滤"
          clearable
          v-model="filterText"
        >
        </el-input>
        <div class="treeData">
          <el-tree
            @check-change="onCheckChange"
            show-checkbox
            class="filter-tree"
            :data="data"
            :node-key="valueKey"
            :props="{ label: labelKey }"
            default-expand-all
            :filter-node-method="filterNode"
            ref="tree"
          >
          </el-tree>
        </div>
        <div class="xm-paging">
          <el-pagination
            small
            background
            layout="prev, pager, next"
            :total="data.length"
          >
          </el-pagination>
        </div>
      </div>
    </div>
    <div v-show="isShow" class="overlay" @click="onMouseDown"></div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    "label-key": {
      type: String,
      default: "dictLabel",
    },
    "value-key": {
      type: String,
      default: "dictValue",
    },
    value: {
      type: Array,
      default: () => [],
    },
    size: {
      type: String,
      default: "mini",
    }, //大小
    disabled: {
      type: Boolean,
      default: false,
    }, //是否禁用
    placeholder: {
      type: String || Number,
      default: "请选择",
    },
    clearable: {
      type: Boolean,
      default: true,
    },
    position: {
      type: String,
      default: "bottom",
    },
  },
  data() {
    return {
      isShow: false, //显示或隐藏下拉框
      filterText: "", //文字筛选
    };
  },
  mounted() {
    this.$refs.tree.setCheckedKeys(this.value);
  },
  computed: {
    readValue: function () {
      return this.value.toString();
    },
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val);
    },
  },
  methods: {
    onFocus() {
      this.isShow = true;
    },
    onMouseDown() {
      this.isShow = !this.isShow;
    },
    filterNode(value, data) {
      if (!value) return true;
      return data[this.labelKey].indexOf(value) !== -1;
    },
    onCheckChange() {
      const value = this.$refs.tree.getCheckedKeys();
      this.$emit("update:value", value);
      this.$emit("change", value);
    },
    //取消全选
    resetChecked() {
      this.$refs.tree.setCheckedKeys([]);
    },
    //全选
    changeAll() {
      const ids = this.data.map((item) => item[this.valueKey]);
      this.$refs.tree.setCheckedKeys(ids);
    },
  },
};
</script>
<style scoped>
.el-select__caret {
  color: #c0c4cc;
  font-size: 14px;
  -webkit-transition: -webkit-transform 0.3s;
  transition: -webkit-transform 0.3s;
  transition: transform 0.3s;
  transition: transform 0.3s, -webkit-transform 0.3s;
  -webkit-transform: rotateZ(180deg);
  transform: rotateZ(180deg);
  cursor: pointer;
}
.el-select__caret.is-reverse {
  -webkit-transform: rotateZ(0);
  transform: rotateZ(0);
}
/* .el-select .el-input .el-select__caret.is-show-close {
  font-size: 14px;
  text-align: center;
  -webkit-transform: rotateZ(180deg);
  transform: rotateZ(180deg);
  border-radius: 100%;
  color: #c0c4cc;
  -webkit-transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.el-select .el-input .el-select__caret.is-show-close:hover {
  color: #909399;
} */
.outline ::v-deep .el-input__inner {
  border-color: #409eff;
  outline: 0;
  outline-color: initial;
  outline-style: initial;
  outline-width: 0px;
}
.container {
  position: relative;
  z-index: 999;
}
.show {
  display: block;
}
.overlay {
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
}

.content {
  width: 100%;
  height: 260px;
  line-height: 0;
  position: absolute;
  z-index: 999;
  min-width: fit-content;
  border: 1px solid #e6e6e6;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 12%);
  animation-name: xm-upbit;
  animation-duration: 0.3s;
  animation-fill-mode: both;
  padding: 0 10px;
  box-sizing: border-box;
}
.treeData {
  height: 150px;
  overflow-y: scroll;
}
::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}
::-webkit-scrollbar-thumb {
  background-color: #dddddd;
  background-clip: padding-box;
  min-height: 28px;
}
::-webkit-scrollbar-thumb:hover {
  background-color: #bbb;
}

.xm-toolbar {
  width: 100%;
  overflow-x: scroll;
  padding: 5px 0;
  box-sizing: border-box;
}

.xm-paging {
  display: flex;
  align-items: center;
  height: 40px;
}
</style>
