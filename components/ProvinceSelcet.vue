<template>
    <a-space>
        <a-select ref="select" v-model:value="value1" style="width: 200px" :options="options1" @focus="focus"
            @change="handleChange"></a-select>
        <!-- <a-select v-model:value="value3" style="width: 120px" loading :options="options3"></a-select> -->
    </a-space>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import type { SelectProps } from 'ant-design-vue';
const value1 = ref('lucy');
const options1 = ref<SelectProps['options']>([
    {
        value: 'jack',
        label: 'Jack',
    },
    {
        value: 'lucy',
        label: 'Lucy',
    },
    {
        value: 'yiminghe',
        label: 'Yiminghe',
    },
]);
const focus = () => {
    console.log('focus');
};

const handleChange = (value: string) => {
    console.log(`selected ${value}`);
};
</script>
