<template>
    <div>
        <Input v-model="value" clearable >
            <template #suffix>
                <i class="el-icon-more el-input__icon" @click="openDialog"></i>
            </template>
        </Input>
        <Dialog>
            


        </Dialog>
    </div>
</template>
<script>
import { Input, Dialog } from 'element-ui'
import 
export default {
    components: {
        Input,
        Dialog
    },
    data() {
        return {
            value: null,
        }
    }
}

</script>