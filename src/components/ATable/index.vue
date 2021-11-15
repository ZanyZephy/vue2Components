<template>
    <div>
        <BasicTable
            style="height:100%"
            v-bind="$attrs"
            v-on="$listeners"
            :frameworkComponents="frameworkComponents"
        ></BasicTable>
    </div>
</template>
<script>
import BasicTable from './BasicTable/index.vue'
import CellDatePicker from './Editor/DatePicker/index.vue'
import CellCheckBox from './Editor/CheckBox/index.vue'
import CellCheckBoxRender from './Editor/CheckBox/render.vue'
import CellDialog from './Editor/DTable/index.vue'
import YearSelect from './Editor/YearSelect/index.vue'
export default {
    inheritAttrs: false,
    name: "ATable",
    components: {
        BasicTable,
        CellDatePicker,
        CellCheckBox,
        CellCheckBoxRender,
        CellDialog,
        YearSelect
    },
    data() {
        return {
            frameworkComponents: [
                CellDatePicker,
                CellCheckBox,
                CellCheckBoxRender,
                CellDialog,
                YearSelect
            ],
        }
    },
}
</script>