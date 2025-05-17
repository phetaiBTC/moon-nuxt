<template>
    <div>
        <a-dropdown :trigger="['click']" :placement="'bottomRight'">
            <a class="ant-dropdown-link" @click.prevent>
                <SettingOutlined style="font-size: 20px;" />
            </a>
            <template #overlay>
                <a-menu>
                    <a-menu-item key="0">
                        <h1>Lang</h1>
                        <a-radio-group v-model:value="value1">
                            <a-radio-button value="a">English</a-radio-button>
                            <a-radio-button value="b">Laos</a-radio-button>
                        </a-radio-group>
                    </a-menu-item>


                    <!-- <a-menu-item key="1"> -->
                    <!-- <a href="http://www.alipay.com/">1st menu item</a> -->
                    <a-button type="primary" class="w-full" @click="() => {
                        useCookie('token').value = null;
                        navigateTo('/auth/login')
                    }">Logout</a-button>
                    <!-- </a-menu-item> -->
                </a-menu>
            </template>
        </a-dropdown>
    </div>
</template>

<script setup lang="ts">
import {
    SettingOutlined

} from '@ant-design/icons-vue';
const value1 = ref<string>('a');
const activeKey = ref(['1']);
</script>

<style scoped></style>