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
    <CellComponent
      class="editor"
      v-bind="getComponentProps"
      :component="getComponent"
      @change="handleChange"
      v-model="value"
      @keydown.enter.native="handleEnter"
    ></CellComponent>
  </div>
</template>

<script>
import { CellComponent } from "./CellComponent.js";
export default {
  components: {
    CellComponent: CellComponent,
  },
  data() {
    return {
      value: 0,
      width: 0,
      height: 0,
      left: -999,
      top: 0,
    };
  },
  computed: {
    getComponent() {
      return "Input";
    },
    getComponentProps() {
      const component = this.getComponent;
      // console.log(component);
      return {
        size: "mini",
      };
    },
  },
  methods: {
    handleChange(e) {
      // const component = unref(getComponent);
      // if (!e) {
      //   currentValueRef.value = e;
      // } else if (e?.target && Reflect.has(e.target, "value")) {
      //   currentValueRef.value = e.target.value;
      // } else if (component === "Checkbox") {
      //   currentValueRef.value = e.target.checked;
      // } else if (isString(e) || isBoolean(e) || isNumber(e)) {
      //   currentValueRef.value = e;
      // }
      // const onChange = props.column?.editComponentProps?.onChange;
      // if (onChange && isFunction(onChange)) onChange(...arguments);
      // table.emit?.("edit-change", {
      //   column: props.column,
      //   value: unref(currentValueRef),
      //   record: toRaw(props.record),
      // });
      // handleSubmiRule();
    },
  },
  mounted() {
    // console.log();
  },
};
</script>

<style scoped>
.editor {
  width: 100%;
  height: 100%;
}
.editor ::v-deep .el-input__inner {
  width: 100%;
  height: 100%;
  border-radius: 0;
  border: none;
}
</style>
