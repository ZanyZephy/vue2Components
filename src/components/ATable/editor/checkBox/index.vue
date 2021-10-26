<template>
    <Checkbox
        size="mini"
        class="editor"
        v-model="value"
        v-bind="defaultConfig"
        ref="editor"
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
            defaultConfig: {
                trueLable: 1,
                falseLable: 0
            }
        }
    },
    // computed: {
    //     getDefaultConfig() {
    //         return this.defaultConfig
    //     }
    // },
    methods: {
        getValue() {
            return this.value;
        },
    },
    mounted() {
        const isObject = (object) => Object.prototype.toString.call(object) === '[object Object]'
        if (this.params.editorAttrs !== undefined && isObject(this.params.editorAttrs)) {
            Object.keys(this.params.editorAttrs).forEach(key => {
                const value = this.params.editorAttrs[key]
                this.defaultConfig[key] = value !== undefined ? value : this.defaultConfig[key]
            })
        }
        console.log(this.defaultConfig)
        if (this.defaultConfig.trueLable === this.params.value) {
            this.value = this.defaultConfig.falseLable
        } else {
            this.value = this.defaultConfig.trueLable
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