<template>
    <div class="grid grid-cols-12 grid-rows-[max-content,1fr] h-screen">
        <TheHeader class="col-span-12" />
        <TheSide class="col-span-3" />
        <TheMain class="col-span-9" />
    </div>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { useCvStore } from '@/stores/CvStore'
import TheHeader from "@/layouts/single/TheHeader.vue";
import TheMain from "@/layouts/single/TheMain.vue";
import TheSide from "@/layouts/single/TheSide.vue";
const route = useRoute()
const cvStore = useCvStore()

const cvId = String(route.params.cvId)
const userId = String(route.params.userId)

onMounted(() => {
    console.log('userId',userId);
    cvStore.getOneCv(userId,cvId)
})

</script>