
<template>
    <Layout>
        <LayoutHeader class="header">

            <Menu v-model:selectedKeys="selectedKeys1" theme="dark" mode="horizontal" :style="{ lineHeight: '64px' }">
                <MenuItem key="1">nav 1</MenuItem>
                <MenuItem key="2">nav 2</MenuItem>
                <MenuItem key="3">nav 3</MenuItem>
            </Menu>
        </LayoutHeader>
        <Layout>
            <LayoutSider width="350" style="background: #fff">

                <TheSide />
                <Menu v-model:selectedKeys="selectedKeys2" v-model:openKeys="openKeys" mode="inline"
                    :style="{ height: '100%', borderRight: 0 }">
                    <SubMenu key="sub1">
                        <template #title>
                            <span>
                                <user-outlined />
                                subnav 1
                            </span>
                        </template>
                        <MenuItem key="1">option1</MenuItem>
                        <MenuItem key="2">option2</MenuItem>
                        <MenuItem key="3">option3</MenuItem>
                        <MenuItem key="4">option4</MenuItem>
                    </SubMenu>
                    <SubMenu key="sub2">
                        <template #title>
                            <span>
                                <laptop-outlined />
                                subnav 2
                            </span>
                        </template>
                        <MenuItem key="5">option5</MenuItem>
                        <MenuItem key="6">option6</MenuItem>
                        <MenuItem key="7">option7</MenuItem>
                        <MenuItem key="8">option8</MenuItem>
                    </SubMenu>
                    <SubMenu key="sub3">
                        <template #title>
                            <span>
                                <notification-outlined />
                                subnav 3
                            </span>
                        </template>
                        <MenuItem key="9">option9</MenuItem>
                        <MenuItem key="10">option10</MenuItem>
                        <MenuItem key="11">option11</MenuItem>
                        <MenuItem key="12">option12</MenuItem>
                    </SubMenu>
                </Menu>
            </LayoutSider>
            <Layout style="padding: 0 24px 24px">
                <LayoutContent :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
                    <TheMain />
                </LayoutContent>
            </Layout>
        </Layout>
    </Layout>
</template>

<script setup lang="ts">

import { Layout, LayoutHeader, LayoutSider, LayoutContent, Menu, MenuItem, SubMenu } from "ant-design-vue";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import stores from '@/stores'
import TheSide from "@/components/panel/TheSide.vue";
import TheMain from "@/components/panel/TheMain.vue";

const route = useRoute()
const personalId = String(route.params.personalId)
const profileStore = stores.useProfileStore()
profileStore.setProfileId(personalId)
onMounted(async () => {
    try {
        await profileStore.getData()
    } catch (error) {
        console.log(error);
    }
})


const selectedKeys1 = ref(['2'])
const selectedKeys2 = ref(['1'])
const collapsed = ref(false)
const openKeys = ref(['sub1'])
</script>

<style>
#components-layout-demo-top-side-2 .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top-side-2 .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

.site-layout-background {
  background: #fff;
}
</style>