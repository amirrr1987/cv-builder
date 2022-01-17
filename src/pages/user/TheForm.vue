<template>
  <div class="the-form">
      <input type="text" placeholder="first name">
      <input type="text" placeholder="last name">
      <input type="text" placeholder="your title">
  </div>
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
    @apply w-96 p-3 border rounded
}
input{
    @apply block w-full mb-3 py-2 px-3 rounded capitalize border outline-transparent
}
</style>