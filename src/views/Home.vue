<template>
  <div>
    <!-- <PTable
      :writable="writable"
      :data="tableData"
      :columns="columns"
      :pagination="pagination"
    ></PTable>
    <el-button type="primary" @click="getData">点我</el-button>
    <el-button type="primary" @click="edit">批量修改</el-button> -->
    <ag-grid-vue
      :enableRangeSelection="true"
      style="width: 100%; height: 500px"
      class="ag-theme-alpine"
      :columnDefs="columnDefs"
      :rowData="rowData"
      :modules="AllModules"
      :enableBrowserTooltips="true"
      :enableFillHandle="true"
      :localeTextFunc="localeTextFunc"
    >
    </ag-grid-vue>
    <!-- <DTable ref="dtable" :height="390" @select-change="onSelect"> </DTable> -->
    <el-button type="primary" @click="onChange">点我</el-button>
  </div>
</template>

<script>
import PTable from "@/components/PTable/Table.vue";
import { AgGridVue } from "ag-grid-vue";
import { AllModules } from "@ag-grid-enterprise/all-modules";
import DTable from "@/components/ETable/DTable.vue";
export default {
  components: {
    // PTable,
    AgGridVue,
    // DTable,
  },
  beforeMount() {
    this.columnDefs = [
      { field: "make", enableBrowserTooltips: true },
      { field: "model" },
      { field: "price" },
    ];

    this.rowData = [
      { make: "Toyota111111111111222222222", model: "Celica", price: 35000 },
      { make: "Ford", model: "Mondeo", price: 32000 },
      { make: "Porsche", model: "Boxter", price: 72000 },
    ];
  },
  methods: {
    localeTextFunc(key, defaultValue) {
      console.log(key, defaultValue);
      return defaultValue ? defaultValue.toUpperCase() : "";
    },
    onSelect(value, index) {
      console.log(value, index);
    },
    handleEdit(index, value) {
      console.log(index, value);
    },
    // api(params) {
    //   fetch("http://jsonplaceholder.typicode.com/posts?_page=1&_limit=2")
    //     .then((response) => {
    //       return response.json();
    //     })
    //     .then((myJson) => {
    //       console.log(myJson);
    //       this.tableData = myJson;
    //     });
    // },
    onChange(e) {
      this.$refs.dtable.open({
        title: "测试",
        api: "",
        columns: [
          { type: "selection" },
          { label: "ID", prop: "id" },
          { label: "标题", prop: "title" },
          { label: "文章", prop: "body" },
        ],
      });
    },
    getData() {
      console.log(this.tableData);
    },
    edit() {
      this.writable = !this.writable;
    },
  },
  data() {
    return {
      AllModules,
      writable: true,
      columns: [
        {
          label: "名字",
          prop: "name",
          readonly: () => {},
        },
        {
          label: "日期",
          prop: "date",
        },
        {
          label: "地址",
          prop: "address",
        },
        {
          label: "个人信息",
          children: [
            {
              label: "姓名",
              prop: "name",
            },
            {
              label: "日期",
              prop: "date",
            },
          ],
        },
      ],
      pagination: {
        currentPage: 1,
        onCurrentChange: (val) => {
          console.log(val);
        },
      },
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          sex: "男",
          id: 1,
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          sex: "男",
          id: 2,
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          sex: "男",
          id: 3,
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          sex: "男",
          id: 4,
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          sex: "男",
          id: 5,
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          sex: "男",
          id: 6,
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          sex: "男",
          id: 7,
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          sex: "男",
          id: 8,
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          sex: "男",
          id: 9,
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          sex: "男",
          id: 10,
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          sex: "男",
          id: 11,
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          sex: "男",
          id: 12,
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          sex: "男",
          id: 13,
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          sex: "男",
          id: 14,
        },
      ],
    };
  },
};
</script>
