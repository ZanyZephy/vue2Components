<template>
  <div>
    <Table
      ref="elTable"
      v-on="$listeners"
      v-bind="$attrs"
      size="mini"
      border
      style="width: 100%"
      @cell-click="onCellClick"
      @cell-dblclick="onCellDblClick"
    ></Table>
    <!-- 编辑器 -->
    <TableEdit ref="tableEdit"></TableEdit>
  </div>
</template>
<script>
import Table from "./table.vue";
import TableEdit from "./TableEdit";
import { get, set } from "lodash-es";
export default {
  inheritAttrs: false,
  props: ["edit"],
  components: {
    Table,
    TableEdit,
  },
  data() {
    return {
      elTable: null,
      cell: null,
    };
  },
  mounted() {
    this.elTable = this.$refs.elTable.$refs.elTable;
  },
  methods: {
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
  },
};
</script>
