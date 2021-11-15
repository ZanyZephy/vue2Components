<template>
    <Checkbox v-bind="getAttrs" class="editor" v-model="value"></Checkbox>
</template>
<script>
import { Checkbox } from "element-ui";
export default {
    name: "CellCheckBox",
    components: {
        Checkbox,
    },
    data() {
        return {
            value: null,
        }
    },
    computed: {
        getAttrs({ $data }) {
            return Object.assign({
                'true-label': 1,
                'false-label': 0,
                size: 'mini'
            }, $data.params.bind)
        }
    },
    methods: {
        getValue() {
            return this.value;
        },
    },
    mounted() {
        if (this.getAttrs['true-label'] === this.params.value) {
            this.value = this.getAttrs['false-label']
        } else {
            this.value = this.getAttrs['true-label']
        }
        this.$nextTick(() => {
            this.params.stopEditing()
        })
    }
}
</script>

<style scoped>
.editor {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.editor ::v-deep .el-input__inner {
    width: 100%;
    height: 100%;
    border-radius: 0;
    border: none;
}
</style>