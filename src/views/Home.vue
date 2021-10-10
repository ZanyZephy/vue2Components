<template>
  <div>
    <!-- <BasicTable
      :columns="columns"
      :data="tableData"
      :pagination="pagination"
      ref="table"
    >
      <el-table-column label="姓名" prop="name"></el-table-column>
      <el-table-column label="年龄" prop="age"></el-table-column>
      <el-table-column label="性别" prop="sex"></el-table-column>
    </BasicTable>
    <EditTable></EditTable> -->
    <el-table
      :row-key="getRowKey"
      :data="getData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column :reserve-selection="true" type="selection" width="55">
      </el-table-column>
      <el-table-column label="日期" width="120" data-key="date">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120"> </el-table-column>
      <el-table-column prop="address" label="地址" show-overflow-tooltip>
      </el-table-column>
    </el-table>
    <div style="margin-top: 20px">
      <el-button @click="toggleSelection([tableData[1], tableData[2]])"
        >切换第二、第三行的选中状态</el-button
      >
      <el-button @click="toggleSelection()">取消选择</el-button>
      <el-button @click="prevPage()">上一页</el-button>
      <el-button @click="nextPage()">下一页</el-button>
    </div>

    <BasicTable
      :row-key="getRowKey"
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
      :pagination="false"
    >
      <el-table-column :reserve-selection="true" type="selection" width="55">
      </el-table-column>
      <el-table-column label="日期" width="120" data-key="date">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column label="个人信息" width="120">
        <el-table-column
          :data-key="'name'"
          prop="name"
          label="姓名"
          width="120"
        >
        </el-table-column>
        <el-table-column
          data-key="address"
          prop="address"
          label="地址"
          show-overflow-tooltip
        >
        </el-table-column>
      </el-table-column>
    </BasicTable>
    <div style="margin-top: 20px">
      <el-button @click="toggleSelection([tableData[1], tableData[2]])"
        >切换第二、第三行的选中状态</el-button
      >
      <el-button @click="toggleSelection()">取消选择</el-button>
      <el-button @click="prevPage()">上一页</el-button>
      <el-button @click="nextPage()">下一页</el-button>
    </div>
  </div>
</template>

<script>
import BasicTable from "@/components/Table/BasicTable.vue";
// import EditTable from "@/components/Table/src/components/edit-table/index";
export default {
  components: {
    BasicTable,
    // EditTable,
  },
  computed: {
    getData() {
      return this.tableData.slice(
        (this.currentPage - 1) * 5,
        this.currentPage * 5
      );
    },
  },
  data() {
    return {
      currentPage: 1,
      columns: [
        {
          label: "你的名字",
          prop: "name",
        },
        {
          label: "你的年龄",
          prop: "age",
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
          id: 1,
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          id: 2,
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          id: 3,
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          id: 4,
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          id: 5,
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          id: 6,
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          id: 7,
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          id: 8,
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          id: 9,
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          id: 10,
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          id: 11,
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          id: 12,
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          id: 13,
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          id: 14,
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          id: 15,
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          id: 16,
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          id: 17,
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          id: 18,
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          id: 19,
        },
      ],
      multipleSelection: [],
    };
  },
  mounted() {
    // console.log(this.$refs.table);
  },
  methods: {
    nextPage() {
      this.currentPage++;
        console.log('33')
    },
    prevPage() {
      this.currentPage--;
      console.log('33')
    },
    getRowKey(row) {
      return row.id;
    },

    getHeader(data) {
      console.log(data);
    },
    onChange() {
      this.pagination.currentPage--;
      console.log(this.pagination.currentPage);
    },
    toggleSelection(rows) {
      console.log(this.$refs.multipleTable);
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
  },
};
</script>
<style scoped>
.header {
  background-color: red;
  height: 540px;
}
</style>
