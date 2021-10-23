<template>
    <el-select v-on="$listeners" v-bind="$attrs" class="elSelect" @change="onChange" ref="elSelect">
        <template #[item]="data" v-for="item in Object.keys($slots)">
            <slot :name="item" v-bind="data || {}"></slot>
        </template>
    </el-select>
</template>
<script>
export default {
    name: "ESelect",
    inheritAttrs: false,
    watch: {
        '$attrs.value': {
            handler: function () {
                this.onChange()
            },
            immediate: true,
            deep: true,
        }
    },
    methods: {
        onChange() {
            this.$nextTick(() => {
                const labels = this.$refs.elSelect.selected.map(item => item.label)
                this.$refs.elSelect.$el.children[1].children[0].value = labels.toString();
            })
        }
    },
}

</script>
<style scoped>
.elSelect ::v-deep .el-select__tags {
    display: none;
}
</style>