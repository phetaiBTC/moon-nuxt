<template>
    <a-flex style="height: 100vh;width: 100%;" justify="center" align="center" class="bg-[#6d6d6d]">
        <a-form :model="formState" name="normal_login" class="shadow-xl bg-[#e2e2e2]" style="padding: 20px;"
            @finish="onFinish" @finishFailed="onFinishFailed">
            <h1 class="text-3xl font-bold text-center">Login</h1>

            <BaseInput v-model="formState.email" :rules="[
                { required: true, message: 'Please input your Email!' },
                { type: 'email', message: 'The input is not valid E-mail!' }
            ]">
                <template #prefix>
                    <UserOutlined class="site-form-item-icon" />
                </template>
            </BaseInput>
            <a-form-item name="password" :rules="[{ required: true, message: 'Please input your password!' }]">
                <a-input-password placeholder="Password" v-model:value="formState.password">
                    <template #prefix>
                        <LockOutlined class="site-form-item-icon" />
                    </template>
                </a-input-password>
            </a-form-item>

            <a-form-item>
                <a-form-item name="remember" no-style>
                    <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
                </a-form-item>
                <a class="login-form-forgot" href="">Forgot password</a>
            </a-form-item>

            <a-form-item>
                <a-button :disabled="disabled" type="primary" html-type="submit" class="login-form-button">
                    Log in
                </a-button>
                Or
                <a href="">register now!</a>
            </a-form-item>
        </a-form>
    </a-flex>

</template>
<script lang="ts" setup>
definePageMeta({
    layout: 'auth'
})
import { reactive, computed } from 'vue';
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';

const { $axios } = useNuxtApp()
const { $notify } = useNuxtApp();
interface FormState {
    email: string;
    password: string;
    remember: boolean;
}
const formState = reactive<FormState>({
    email: '',
    password: '',
    remember: true,
});
const onFinish = async () => {
    try {
        await $axios.post('/auth/login', {
            email: formState.email,
            password: formState.password
        }).then((res: any) => {
            $notify('success', res.data.message);
            const token = useCookie('token', {
                maxAge: 60 * 60 * 168, // 7 วัน
                path: '/',
                sameSite: 'strict'
            });
            token.value = res.data.access_token;
            navigateTo('/');
        })

    } catch (err: any) {
        $notify('error', err.response?.data?.message || 'เกิดข้อผิดพลาด');
    }
};


const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};
const disabled = computed(() => {
    return !(formState.email && formState.password);
});
</script>
<style scoped></style>
