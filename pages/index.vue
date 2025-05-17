<template>
    <a-space direction="vertical">
        <a-input v-model:value="value" placeholder="Basic usage" style="background-color: red" />
        <a-input v-model:value.lazy="value1" autofocus placeholder="Lazy usage" style="background-color: #e6f7ff" />
        <ProvinceSelcet></ProvinceSelcet>
    </a-space>
    <div class="p-4">
        <h2>Count: {{ counter.count }}</h2>
        <h3>Double: {{ counter.doubleCount }}</h3>
        <button @click="counter.increment">➕ เพิ่ม</button>
        <button @click="counter.reset">🔁 รีเซ็ต</button>
    </div>
</template>

<script lang="ts" setup>
import { watch, ref } from 'vue';
const { $axios } = useNuxtApp()
const value = ref<string>('');
const value1 = ref<string>('');

watch(value, () => {
    console.log(value.value);
});
watch(value1, () => {
    console.log(value1.value);
}); import { useCounterStore } from '~/stores/counter';

const counter = useCounterStore();
// onMounted(async () => {
//     const res = await $axios.get('/province');
//     console.log(res.data);
// })
</script>