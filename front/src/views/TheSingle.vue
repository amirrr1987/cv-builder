<template>
    <TheHeader />
    <TheMain />
    <TheSide />
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

onMounted(() => {
    cvStore.getOneCv(cvId)
})

</script>