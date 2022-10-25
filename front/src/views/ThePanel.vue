<template>
    <div class="grid grid-cols-12 grid-rows-[max-content,1fr] h-screen">
        <ThePanelHeader class="col-span-12" />
        <ThePanelSide class="col-span-3" />
        <ThePanelMain class="col-span-9" />
    </div>
</template>
<script setup lang="ts">
import ThePanelHeader from "@/layouts/panel/ThePanelHeader.vue";
import ThePanelMain from "@/layouts/panel/ThePanelMain.vue";
import ThePanelSide from "@/layouts/panel/ThePanelSide.vue";
</script>