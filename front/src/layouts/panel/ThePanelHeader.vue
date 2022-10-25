<template>
    <nav class="shadow py-4">
        <div class="px-4">
            {{userStore.state.user.mobile}}
            {{userStore.state.user._id}}
            {{userStore.state.isLogin}}
        </div>
    </nav>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/UserStore'
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute()
const userId = String(route.params.userId)
const userStore = useUserStore()
onMounted(async () => {
    try {
        await userStore.getUserData(userId)
    } catch (error) {
        console.log('🔥 getOneCv error', error)
    }
})
</script>