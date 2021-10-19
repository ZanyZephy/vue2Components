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
  </div>
</template>

<script>
import { AgGridVue } from "ag-grid-vue";
export default {
  components: {
    "ag-grid-vue": AgGridVue,
  },
  data() {
    return {
      columnDefs: [
        { field: "a" },
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
    this.rowData = this.getRows();
    console.log(this.rowData);
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
    onFirstDataRendered() {},
    onCellValueChanged() {},
    undo() {},
    redo() {},
    onGridReady() {},
  },
};
</script>
