<template>
    <nav class="shadow py-4">
        <div class="px-4 flex justify-between">
            {{ userStore.state.user.mobile }}
            <Button type="primary" @click="toggleLogin" :loading="!userStore.state.isLogin">
                {{ userStore.state.isLogin ? 'Logout' : 'Login' }}
            </Button>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/UserStore'
import { computed, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { Button } from "ant-design-vue/es";
const route = useRoute()
const router = useRouter()
const userId = String(route.params.userId)
const userStore = useUserStore()

const toggleLogin = () => {
    userStore.state.isLogin = !userStore.state.isLogin
    localStorage.removeItem('token')
    router.push({ name: 'TheLogin' })
}


onMounted(async () => {
    try {
        await userStore.getUserData(userId)

    } catch (error) {
        console.log('🔥 getOneCv error', error)
    }
})
</script>
