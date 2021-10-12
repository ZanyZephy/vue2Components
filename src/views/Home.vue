<template>
  <div>
    <PTable
      :writable="writable"
      :data="tableData"
      :columns="columns"
      :pagination="pagination"
    ></PTable>
    <el-button type="primary" @click="getData">点我</el-button>
    <el-button type="primary" @click="edit">批量修改</el-button>
  </div>
</template>

<script>
import PTable from "@/components/PTable/Table.vue";
export default {
  components: {
    PTable,
  },
  methods: {
    getData() {
      console.log(this.tableData);
    },
    edit() {
      this.writable = !this.writable;
    },
  },
  data() {
    return {
      writable: true,
      columns: [
        {
          label: "名字",
          prop: "name",
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
          sex:"男",
          id: 1,
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          sex:"男",
          id: 2,
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          sex:"男",
          id: 3,
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          sex:"男",
          id: 4,
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          sex:"男",
          id: 5,
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          sex:"男",
          id: 6,
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          sex:"男",
          id: 7,
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          sex:"男",
          id: 8,
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          sex:"男",
          id: 9,
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          sex:"男",
          id: 10,
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          sex:"男",
          id: 11,
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          sex:"男",
          id: 12,
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          sex:"男",
          id: 13,
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          sex:"男",
          id: 14,
        },
      ],
    };
  },
};
</script>
