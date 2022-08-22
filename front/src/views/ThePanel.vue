<template>
    <TheSide />
    <TheMain />
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import stores from '@/stores'
import Services from "@/services";
import TheSide from "@/components/panel/TheSide.vue";
import TheMain from "@/components/panel/TheMain.vue";
onMounted(async () => {
    try {
        const { data } = await Services.GetPersonalApi();
        console.log(data);
        stores.usePersonalStore().$state = data[0];
    } catch (error) {
    }
})
</script>
<style>
#app {
    /* @apply grid min-h-screen grid-cols-12; */
}
</style>