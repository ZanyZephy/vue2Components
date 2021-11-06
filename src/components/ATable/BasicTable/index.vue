<template>
    <div>
        <AgGridVue
            v-bind="$attrs"
            v-on="$listeners"
            class="ag-theme-balham"
            :style="{ height: 'calc(100% - 32px)' }"
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
            @grid-ready="onGridReady"
            @selectionChanged="onSelectionChanged"
        ></AgGridVue>
        <!-- 分页 -->
        <Row type="flex" :justify="getPaginationConf.position" v-if="getPaginationConf !== false">
            <span>已选{{ selectedRows.length }}</span>
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
        </Row>
    </div>
</template>
<script>
import { AgGridVue } from "@ag-grid-community/vue";
import { Pagination, Row } from 'element-ui'
import { AG_GRID_LOCALE_CN } from './locale.cn.js'
export default {
    inheritAttrs: false,
    name: "BasicTable",
    components: {
        AgGridVue,
        Row,
        Pagination
    },
    computed: {
        getPaginationConf() {
            const isObject = (obj) => Object.prototype.toString.call(obj) === "[object Object]"
            if (!isObject(this.elPagination)) return this.elPaginationDef;
            const config = Object.assign(this.elPaginationDef, this.elPagination);
            this.$emit('update:elPagination', config);
            return config
        },
    },
    methods: {
        onGridReady(params) {
            this.gridApi = params.api;
            this.gridColumnApi = params.columnApi;
            this.selectedRows = this.gridApi.getSelectedRows()
        },
        onSelectionChanged() {
            this.selectedRows = this.gridApi.getSelectedRows()
            console.log(this.selectedRows)
        }
    },
    data() {
        return {
            selectedRows: [],
            gridApi: null,
            gridColumnApi: null,
            elPaginationDef: {
                small: false,
                background: true,
                pageSize: 10,
                total: 0,
                pageCount: undefined,
                pagerCount: 7,
                currentPage: 1,
                layout: "total, sizes, prev, pager, next, jumper",
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
        elPagination: {
            type: [Object, Boolean],
            default: true,
        },
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