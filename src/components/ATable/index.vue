<template>
    <AgGridVue
        v-bind="$attrs"
        v-on="$listeners"
        class="ag-theme-balham"
        :enableRangeSelection="enableRangeSelection"
        :defaultColDef="defaultColDef"
        :enableFillHandle="enableFillHandle"
        :undoRedoCellEditing="undoRedoCellEditing"
        :enableCellChangeFlash="enableCellChangeFlash"
        :undoRedoCellEditingLimit="undoRedoCellEditingLimit"
        :localeText="localeText"
        :enableBrowserTooltips="enableBrowserTooltips"
        :rowDragManaged="true"
        :animateRows="true"
        :suppressColumnMoveAnimation="false"
        :frameworkComponents="frameworkComponents"
    ></AgGridVue>
</template>
<script>

import { AgGridVue } from "@ag-grid-community/vue";
import { AG_GRID_LOCALE_CN } from './locale.cn.js'
import CellDatePicker from './editor/datePicker/index.vue'
import CheckBox from './editor/checkBox/index.vue'
import CheckBoxRender from './editor/checkBox/render.vue'
export default {
    inheritAttrs: false,
    name: "ATable",
    components: {
        AgGridVue,
        CellDatePicker,
        CheckBox,
        CheckBoxRender
    },
    data() {
        return {
            frameworkComponents: [
               CellDatePicker,
               CheckBox,
               CheckBoxRender
            ]
        }
    },
    props: {
        localeText: {
            type: Object,
            default: () => AG_GRID_LOCALE_CN,
        },//设置中文语言包
        enableRangeSelection: {
            type: Boolean,
            default: true,
        },//启用范围选择
        enableFillHandle: {
            type: Boolean,
            default: true,
        },//启用填充
        undoRedoCellEditing: {
            type: Boolean,
            default: true,
        },//启用撤消
        undoRedoCellEditingLimit: {
            type: Number,
            default: 5,
        },//撤销次数
        enableCellChangeFlash: {
            type: Boolean,
            default: true,
        },//数据更改后让单元格闪烁
        enableBrowserTooltips: {
            type: Boolean,
            default: true,
        },//浏览器提示
        defaultColDef: {
            type: Object,
            default: () => {
                return {
                    flex: 1,
                    minWidth: 150,
                    editable: true,//默认可编辑
                    filter: true,//默认可筛选
                    sortable: true,//默认可排序
                    resizable: true,//可调整列宽度
                    floatingFilter: true,
                }//默认列配置
            }
        },
    },
}
</script>