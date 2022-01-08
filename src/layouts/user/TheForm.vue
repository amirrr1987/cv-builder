<template>
  <div class="the-form">TheForm</div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TheForm",
  setup() {
    return {};
  },
});
</script>
<style>
.the-form{
    @apply bg-gray-700 w-96 p-3
}
</style>