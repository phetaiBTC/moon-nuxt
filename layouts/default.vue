<template>
    <a-layout style="min-height: 100vh">
        <a-layout-sider v-model:collapsed="collapsed" collapsible>
            <div :class="['logo', collapsed ? 'collapsed' : '']">
                <img src="https://i.pinimg.com/236x/db/16/45/db1645cc1ed95625a5dff41ee9a0f164.jpg" alt="..." width="100"
                    class="rounded-full">
                <h1 class="text-[#fff]" style="margin: 5px 0 !important;" v-show="!collapsed">phet
                </h1>
                <h1 class="text-[#fff]" v-show="!collapsed">hgudhaw@gmail.com</h1>
            </div>
            <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
                <a-menu-item key="1">
                    <HomeOutlined />
                    <span><nuxt-link to="/">{{ $t('home') }}</nuxt-link></span>
                </a-menu-item>
                <a-menu-item key="2">
                    <FileDoneOutlined />
                    <span><nuxt-link to="/hotel_profile">{{ $t('hotel_profile') }}</nuxt-link></span>
                </a-menu-item>
                <a-menu-item key="3">
                    <WalletOutlined />
                    <span>{{ $t('booking.title') }}</span>
                </a-menu-item>
                <a-sub-menu key="sub1">
                    <template #title>
                        <span>
                            <user-outlined />
                            <span>{{ $t('rooms.title') }}</span>
                        </span>
                    </template>
                    <a-menu-item key="3">{{ $t('rooms.manager') }}</a-menu-item>
                    <a-menu-item key="4">{{ $t('rooms.update_status') }}</a-menu-item>
                </a-sub-menu>
                <a-sub-menu key="sub2">
                    <template #title>
                        <span>
                            <team-outlined />
                            <span>Team</span>
                        </span>
                    </template>
                    <a-menu-item key="6">Team 1</a-menu-item>
                    <a-menu-item key="8">Team 2</a-menu-item>
                </a-sub-menu>
                <a-menu-item key="9">
                    <file-outlined />
                    <span>File</span>
                </a-menu-item>
            </a-menu>
        </a-layout-sider>
        <a-layout>
            <a-layout-header style="background: #fff; padding: 0">
                <div class="flex justify-end px-10">
                    <BtnSetting />
                </div>
            </a-layout-header>
            <a-layout-content style="margin: 0 16px">
                <!-- <a-breadcrumb style="margin: 16px 0">
                    <a-breadcrumb-item>User</a-breadcrumb-item>
                    <a-breadcrumb-item>Bill</a-breadcrumb-item>
                </a-breadcrumb> -->
                <div :style="{ padding: '24px', background: '#fff', minHeight: '360px', marginTop: '20px' }">
                    <slot></slot>
                </div>
            </a-layout-content>
            <a-layout-footer style="text-align: center">
                Ant Design ©2018 Created by Ant UED
            </a-layout-footer>
        </a-layout>
    </a-layout>
</template>
<script lang="ts" setup>
import {
    FileDoneOutlined,
    DesktopOutlined,
    UserOutlined,
    TeamOutlined,
    FileOutlined,
    HomeOutlined,
    WalletOutlined
} from '@ant-design/icons-vue';
import { ref } from 'vue';
const collapsed = ref<boolean>(false);
const selectedKeys = ref<string[]>(['1']);
</script>
<style scoped>
#components-layout-demo-side .logo {
    height: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
    background: #fff;
}

[data-theme='dark'] .site-layout .site-layout-background {
    background: #141414;
}

.logo {
    height: 160px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: all 0.3s ease;
    overflow: hidden;
}

.logo.collapsed {
    height: 80px;
}

.logo img {
    transition: all 0.3s ease;
}

.logo.collapsed img {
    width: 50px;
}

.logo h1 {
    margin: 0;
    font-size: 16px;
    transition: all 0.3s ease;
}
</style>
