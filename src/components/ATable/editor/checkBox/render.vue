<template>
    <Checkbox
        size="mini"
        class="editor"
        v-model="value"
        ref="editor"
     
        v-bind="getDefaultConfig"
    ></Checkbox>
</template>
<script>
import { Checkbox } from "element-ui";
export default {
    name: "CheckBoxRender",
    components: {
        Checkbox,
    },
    data() {
        return {
            value: null,
            defaultConfig: {
                trueLable: 1,
                falseLable: 0
            }
        }
    },
    computed: {
        getDefaultConfig(){
            return this.defaultConfig
        }
    },
    mounted() {
        const isObject = (object) => Object.prototype.toString.call(object) === '[object Object]'
        if (this.params.editorAttrs !== undefined && isObject(this.params.editorAttrs)) {
            Object.keys(this.params.editorAttrs).forEach(key => {
                const value = this.params.editorAttrs[key]
                this.defaultConfig[key] = value !== undefined ? value : this.defaultConfig[key]
            })
        }
        console.log(this.defaultConfig.falseLable)
        this.value = 1;
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