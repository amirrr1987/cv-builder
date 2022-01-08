<template>
    <div class="the-user">
      <TheForm/>
      <TheResume/>
    </div>
</template>
<script lang="ts">
import {defineComponent} from "vue";
import TheForm from "../layouts/user/TheForm.vue";
import TheResume from "../layouts/user/TheResume.vue";

export default defineComponent({
    name: "TheUser",
    setup() {
        return {};
    },
    components: { TheForm, TheResume }
});
</script>
<style>
.the-user{
  @apply grid grid-cols-[max-content,1fr] gap-3 p-3 bg-red-500 h-full
}
</style>
