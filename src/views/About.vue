<template>
  <div>
    <ATable
      :style="{ width: '100%', height: ' 500px' }"
      :columnDefs="carMain"
      :rowData="rowData"
      :elPagination.sync="pagination"
      @grid-ready="onGridReady"
    ></ATable>
    <el-button type="primary" @click="onChange">点我</el-button>
  </div>
</template>

<script>
import ATable from "@/components/ATable/index.vue";
import { carMain } from "./index";
export default {
  components: {
    ATable,
  },
  data() {
    return {
      pagination: {
        pageSize: 10,
        currentPage: 1,
        onCurrentChange: (e) => {
          console.log(e);
        },
      },
      carMain,
      rowData: [],
    };
  },
  async beforeMount() {
    this.$nextTick(() => {
      console.log(this.gridApi);
      console.log(this.columnApi);
    });
    this.rowData = await this.getRows();
  },
  methods: {
    onGridReady(params) {
      console.log(params);
      this.gridApi = params.api;
      this.columnApi = params.columnApi;
      this.columnApi.getColumn("billState").colDef.refData = {
        1: "小猪猪",
      };
    },
    getBillStateMap() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({
            1: "小猪猪",
          });
        }, 3000);
      });
    },
    onChange() {
      this.gridApi.stopEditing();
      console.log(this.rowData);
      console.log(this.pagination.currentPage);
      console.log(this.pagination.pageSize);
    },
    getRows() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const list = Array.apply(null, Array(22)).map((_, i) => {
            return {
              billState: Math.ceil(Math.random() * 3),
              carHanle: {
                buyer: "小猪猪",
              },
              carSourceName: "车场",
              channelName: 1,
            };
          });
          resolve(list);
        }, 2000);
      });
    },
    onCellValueChanged(e) {
      console.log(e);
    },
  },
};
</script>
