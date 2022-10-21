
<template>
    <div class="grid grid-cols-[450px,1fr] grid-rows-[max-content,1fr] h-screen">
        <Header class="col-start-1 col-end-3 row-start-1 row-end-2" />
        <TheSide class="col-start-1 col-end-2 row-start-2 row-end-3" />
        <TheMain class="col-start-2 col-end-3 row-start-2 row-end-3" />
    </div>
</template>

<script setup lang="ts">

import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useCvStore } from '@/stores/CvStore'

import TheSide from "@/components/panel/TheSide.vue";
import TheMain from "@/components/panel/TheMain.vue";
import Header from "@/components/panel/TheHeader.vue";

const route = useRoute()
const id = String(route.params.id)
const cvStore = useCvStore()
const router = useRouter()
onMounted(async () => {
    try {
        await cvStore.getData(id)
        if (cvStore.state.cv._id.length < 3) {
            router.push('/panel/auth/register')
        }
    } catch (error) {
        console.log(error);
    }
})
</script>

<style>

</style>