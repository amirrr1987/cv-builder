<template>
    <div class="grid grid-cols-12">
        <TheSide />
        <TheMain />
    </div>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import stores from '@/stores'
import Services from "@/services";
import TheSide from "@/components/panel/TheSide.vue";
import TheMain from "@/components/panel/TheMain.vue";

const route = useRoute()
const personalId = String(route.params.personalId)
onMounted(async () => {
    try {
        const { data } = await Services.GetPersonalApi(personalId);
        console.log(data);
        stores.usePersonalStore().$state = data;
    } catch (error) {
    }
})
</script>
<style>
/* #app {
    @apply grid min-h-screen grid-cols-12;
} */
</style>