<template>
  <div>
    <ATable
      :enableRangeSelection="enableRangeSelection"
      :style="{ width: '100%', height: ' 500px' }"
      :columnDefs="carMain"
      :rowData="rowData"
      rowSelection="multiple"
      :suppressRowClickSelection="true"
      :elPagination.sync="pagination"
      onCellValueChanged="onCellValueChanged"
      @dataChanged="onDataChanged"
    ></ATable>

    <!-- <DTable :columnDefs="carMain" :rowData="rowData"></DTable> -->
    <!-- <ElSelect v-model="value1" multiple placeholder="请选择">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </ElSelect>-->
    <el-button style="z-index: 9999;" type="primary" @click="onChange">点我</el-button>
  </div>
</template>

<script>
import ATable from "@/components/ATable/index.vue";
import { carMain } from './index'
// import DTable from '@/components/ATable/editor/DTable/index.vue'
// import ElSelect from '@/components/el-select/index.vue';
export default {
  components: {
    ATable,
    // DTable
    // ElSelect
  },
  data() {
    return {
      pagination: {
        pageSize: 10,
        currentPage: 1,
        onCurrentChange: (e) => {
          console.log(e)
        }
      },
      carMain,
      value1: ['选项1'],
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      enableRangeSelection: true,
      columnDefs: [
        {
          rowDrag: true,
          headerCheckboxSelection: true,
          checkboxSelection: true,
          field: "a", editable: function (e) {
            if (e.data.b === 'b-1') {
              return false;
            } else {
              return true
            }
          }, cellStyle: function (params) {
            // console.log(params)
            if (params.value == 'a-1') {
              console.log('999')
              //mark police cells as red
              return { color: 'red', backgroundColor: 'green' };
            }
            return null;
          }
        },
        { field: "b" },
        { field: "c" },
        { field: "d" },
        { field: "e" },
        { field: "f" },
        { field: "g" },
        { field: "h" },
      ],
      defaultColDef: {
        flex: 1,
        editable: true,
      },
      rowData: [],
      undoRedoCellEditingLimit: 5,
    };
  },
  beforeMount() {
    // console.log(Grid, GridOptions)
    // setTimeout(()=>{
    //   this.enableRangeSelection=false;
    // },5000)
    this.rowData = this.getRows();
  },
  methods: {
    onChange() {
      console.log(this.rowData)
      console.log(this.pagination.currentPage)
            console.log(this.pagination.pageSize)
      // this.value1.push('选项3')
    },
    onDataChanged(e) {
      console.log(e)
    },
    getRows() {
      return Array.apply(null, Array(22)).map(function (_, i) {
        return {
          carHanle: {
            buyer: "",
          },
          carSourceName:"",
          channelName: 1
        };
      });
    },
    onFirstDataRendered() { },
    onCellValueChanged(e) {
      console.log(e)
    },
    undo() { },
    redo() { },
    onGridReady() { },
  },
};
</script>
