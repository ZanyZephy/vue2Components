<template>
    <Checkbox class="editor" :value="value" ref="editor" :disabled="true" v-bind="getAttrs"></Checkbox>
</template>
<script>
import { Checkbox } from "element-ui";
export default {
    name: "CellCheckBoxRender",
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
                size: "mini"
            }, $data.params.bind)
        }
    },
    mounted() {
        this.value = this.params.value;
        this.$nextTick(() => {
            this.$refs.editor.$el.querySelector('.el-checkbox__input').classList.remove("is-disabled");
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