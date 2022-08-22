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
</script>
