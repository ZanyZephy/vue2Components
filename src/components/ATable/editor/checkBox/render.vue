<template>
    <Checkbox
        size="mini"
        class="editor"
        :value="value"
        ref="editor"
        :disabled="true"
        v-bind="getAttrs"
    ></Checkbox>
</template>
<script>
import { Checkbox } from "element-ui";
export default {
    name: "CheckBoxRender",
    components: {
        Checkbox,
    },
    computed: {
        getAttrs() {
            console.log(Object.assign({
                'true-lable': 1,
                'false-lable': 0
            }, this.params.editorAttrs))
            return Object.assign({
                'true-lable': 1,
                'false-lable': 0
            }, this.params.editorAttrs)
        }
    },
    data() {
        return {
            value: null,
        }
    },
    beforeMount() {
        this.value = this.params.value;
        console.log(this.value)
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