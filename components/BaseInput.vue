<template>
    <div>
        <a-form-item name="email" :rules="rules" >
            <a-input :value="internalValue" @input="onInput" placeholder="Email">
                <template #prefix>
                    <slot name="prefix">
                    </slot>
                </template>
            </a-input>
        </a-form-item>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{
    modelValue: string,
    rules?: any[]
}>()

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void
}>()

const internalValue = ref(props.modelValue)
watch(() => props.modelValue, (val) => {
    internalValue.value = val
})

const onInput = (e: Event) => {
    const target = e.target as HTMLInputElement
    internalValue.value = target.value
    emit('update:modelValue', target.value)
}
</script>
<style lang="css" scoped>

</style>