<template>
  <TheSide />
  <TheMain />
</template>
<script setup lang="ts">
import TheSide from "./views/TheSide.vue";
import TheMain from "./views/TheMain.vue";

import stores from './stores'
import { onMounted } from "vue";
import Services from "./services";
// import { Icon } from '@iconify/vue';
// import ExperienceItem from "./components/ExperienceItem.vue";
// const personalStore = stores.usePersonalStore()


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
  @apply grid min-h-screen grid-cols-12;
}
</style>