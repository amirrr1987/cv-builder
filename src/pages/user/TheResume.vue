<template>
  <div class="grid grid-cols-[16rem,1fr] gap-5">
    <div class="bg-blue-100 p-3">
      <div class="flex flex-col items-center">
        <img
          class="rounded-full w-20 h-20"
          src="./../../assets/logo.png"
          alt=""
        />
        <div class="">{{ userInfo.fName ?? "First Name" }}</div>
        <div class="">{{ userInfo.lName ?? "Last Name" }}</div>
        <div class="">{{ userInfo.jobTitle ?? "jobTitle" }}</div>
      </div>
      <div class="">
        <h3>about me :</h3>
        <p>{{ userInfo.aboutMe ?? "about Me" }}</p>
      </div>
      <div class="">
        <h3>contact me:</h3>
        <span class="block"
          ><i class="icon--email"></i>{{ userInfo.email ?? "email@compony.domian" }}</span
        >
        <span class="block"
          ><i class="icon--phone"></i>{{ userInfo.mobile ?? "+999999999999999" }}</span
        >
      </div>
    </div>

    <div class="p-3">
      <div class="">software knowledge</div>
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
