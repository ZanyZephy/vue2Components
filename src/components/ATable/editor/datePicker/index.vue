<template>
    <DatePicker
        size="mini"
        class="editor"
        v-model="value"
        v-bind="getAttrs"
        ref="editor"
        @blur="onBlur"
    ></DatePicker>
</template>
<script>
import { DatePicker } from "element-ui";
export default {
    name: "CellDatePicker",
    components: {
        DatePicker,
    },
    computed: {
        getAttrs({ $data }) {
            return Object.assign({
                'value-format': "yyyy-MM-dd"
            }, $data.params.editorAttrs)
        }
    },
    data() {
        return {
            value: null
        }
    },
    methods: {
        onBlur() {
            this.params.stopEditing()
        },
        getValue() {
            return this.value;
        },
    },
    mounted() {
        this.value = this.params.value;
        this.$nextTick(() => this.$refs.editor.focus());
    }
}
</script>

<style scoped>
.editor {
    width: 100%;
    height: 100%;
}
.editor ::v-deep .el-input__inner {
    width: 100%;
    height: 100%;
    border-radius: 0;
    border: none;
}
.editor ::v-deep .el-input__icon {
    height: 100%;
    line-height: 100%;
}
</style>