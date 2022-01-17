<template>
  <div class="grid grid-cols-[16rem,1fr] gap-5">
    <div class="bg-blue-100 p-3">
      <div class="">{{ userInfo.fName }}</div>
      <div class="">{{ userInfo.lName }}</div>
      <div class="">{{ userInfo.jobTitle }}</div>
      <div class="">{{ userInfo.aboutMe }}</div>
      <div class="">{{ userInfo.email }}</div>
      <div class="">{{ userInfo.mobile }}</div>
      <div class="">{{ userInfo.aboutMe }}</div>
    </div>

    <div class="p-3">
      <div class="">
        software knowledge
      </div>
      <div class="">experience</div>

    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import { GetDataStore } from "./../../store";
export default defineComponent({
  name: "TheResume",
  setup() {
    const userInfo = computed(() => {
      return GetDataStore("UserInfo");
    });
    return {
      userInfo,
    };
  },
});
</script>
<style>
.the-resume {
  @apply p-3 border rounded;
}
</style>
