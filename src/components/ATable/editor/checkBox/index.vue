<template>
    <Checkbox
        size="mini"
        class="editor"
        v-model="value"
        ref="editor"
        v-bind="getAttrs"
        @keydown.enter.native="onKeyDown"
    ></Checkbox>
</template>
<script>
import { Checkbox } from "element-ui";
export default {
    name: "CheckBox",
    components: {
        Checkbox,
    },
    data() {
        return {
            value: null,
        }
    },
    computed: {
        getAttrs() {
            return Object.assign({
                'true-lable': 1,
                'false-lable': 0
            }, this.params.editorAttrs)
        }
    },
    methods: {
        getValue() {
            return this.value;
        },
    },
    mounted() {
        this.value = this.params.value;
        if (this.getAttrs['true-lable'] === this.value) {
            this.value = this.getAttrs['false-lable']
            console.log(this.value)
        } else {
            this.value = this.getAttrs['true-lable']
            console.log(this.value)
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