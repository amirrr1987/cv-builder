<template>
    <TheHeader/>
    <div class="container mx-auto grid grid-cols-4 gap-4">
        <template v-for="(cv,index) in cvStore.state.cvs" :key="index">
            <div @click="getId(cv._id)">
                <div class="bg-red-500">{{cv.title}}</div>
                <div class="bg-red-500">{{cv.about}}</div>
            </div>
        </template>
    </div>
</template>
<script setup lang="ts">

import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useCvStore } from '@/stores/CvStore'
import TheHeader from "@/layouts/panel/TheHeader.vue";
const route = useRoute()
const cvStore = useCvStore()
const router = useRouter()
const userId = String(route.params.userId)

onMounted(async () => {
    try {
        await cvStore.getAllCv(userId)
    } catch (error) {
        console.log(error);
    }
})
const getId = (cvId: string) => {
    router.push({ name: 'TheSingle', params: { id: userId, cvId: cvId } })
}
</script>