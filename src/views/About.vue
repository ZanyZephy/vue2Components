<template>
  <div>
    <ag-grid-vue
      style="width: 100%; height: 500px"
      class="ag-theme-alpine"
      :columnDefs="columnDefs"
      :defaultColDef="defaultColDef"
      :rowData="rowData"
      :enableRangeSelection="true"
      :enableFillHandle="true"
      :undoRedoCellEditing="true"
      @grid-ready="onGridReady"
      :undoRedoCellEditingLimit="undoRedoCellEditingLimit"
      @first-data-rendered="onFirstDataRendered"
      @cell-value-changed="onCellValueChanged"
      :enableCellChangeFlash="true"

    ></ag-grid-vue>
          <!-- :localeText="{
        pinColumn: 'Pin 9999',
        pinLeft: 'Pin Left',
        pinRight: 'Pin Right',
        noPin: 'No Pin',
      }" -->
  </div>
</template>

<script>
// import { AgGridVue } from "@ag-grid-community/vue";
// import { Grid, GridOptions } from '@ag-grid-community/core';

export default {
  components: {
    // 'ag-grid-vue': AgGridVue
  },
  data() {
    return {
      columnDefs: [
        {
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
    this.rowData = this.getRows();
  },
  methods: {
    getRows() {
      return Array.apply(null, Array(100)).map(function (_, i) {
        return {
          a: "a-" + i,
          b: "b-" + i,
          c: "c-" + i,
          d: "d-" + i,
          e: "e-" + i,
          f: "f-" + i,
          g: "g-" + i,
          h: "h-" + i,
        };
      });
    },
    onFirstDataRendered() { },
    onCellValueChanged() { },
    undo() { },
    redo() { },
    onGridReady() { },
  },
};
</script>
