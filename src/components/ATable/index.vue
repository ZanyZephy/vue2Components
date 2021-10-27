<template>
    <div>
        <AgGridVue
            v-bind="$attrs"
            v-on="$listeners"
            class="ag-theme-balham ag-table"
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
        <!-- 分页 -->
        <!-- <Row type="flex" :justify="getPaginationConf.position" v-if="getPaginationConf !== false">
            <Pagination
                :small="getPaginationConf.small"
                :background="getPaginationConf.background"
                :page-size.sync="getPaginationConf.pageSize"
                :total="getPaginationConf.total"
                :page-count="getPaginationConf.pageCount"
                :pager-count="getPaginationConf.pagerCount"
                :current-page.sync="getPaginationConf.currentPage"
                :layout="getPaginationConf.layout"
                :page-sizes="getPaginationConf.pageSizes"
                :popper-class="getPaginationConf.popperClass"
                :prev-text="getPaginationConf.prevText"
                :next-text="getPaginationConf.nextText"
                :disabled="getPaginationConf.disabled"
                :hide-on-single-page="getPaginationConf.hideOnSinglePage"
                @size-change="getPaginationConf.onSizeChange"
                @current-change="getPaginationConf.onCurrentChange"
                @prev-click="getPaginationConf.onPrevClick"
                @next-click="getPaginationConf.onNextClick"
            ></Pagination>
        </Row> -->
    </div>
</template>
<script>

import { AgGridVue } from "@ag-grid-community/vue";
import { Pagination, Row } from 'element-ui'
import { AG_GRID_LOCALE_CN } from './locale.cn.js'
import CellDatePicker from './editor/datePicker/index.vue'
import CellCheckBox from './editor/checkBox/index.vue'
import CellCheckBoxRender from './editor/checkBox/render.vue'
export default {
    inheritAttrs: false,
    name: "ATable",
    components: {
        AgGridVue,
        Row,
        Pagination,
        CellDatePicker,
        CellCheckBox,
        CellCheckBoxRender
    },
    computed: {
        getPaginationConf() {
            if (
                Object.prototype.toString.call(this.pagination) === "[object Object]"
            ) {
                return Object.assign(this.paginationConf, this.pagination);
            } else {
                return this.paginationConf;
            }
        },
    },
    data() {
        return {
            frameworkComponents: [
                CellDatePicker,
                CellCheckBox,
                CellCheckBoxRender
            ],
            paginationConf: {
                small: false,
                background: true,
                pageSize: 10,
                total: 0,
                pageCount: undefined,
                pagerCount: 7,
                currentPage: 1,
                layout: "prev, pager, next",
                pageSizes: [10, 20, 30, 40, 50, 100],
                popperClass: undefined,
                prevText: undefined,
                nextText: undefined,
                disabled: false,
                hideOnSinglePage: false,
                position: "end",
                onSizeChange: () => { },
                onCurrentChange: () => { },
                onPrevClick: () => { },
                onNextClick: () => { },
            },
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
<style scoped>
.ag-table {
    height: 100%;
}
</style>