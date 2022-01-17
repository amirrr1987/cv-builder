<template>
  <div class="w-96 p-3 border rounded grid auto-rows-max overflow-y-scroll">
    <label for="photo">photo :</label>
    <input type="file" name="photo" />

    <label for="firstName">first name :</label>
    <input
      type="text"
      placeholder="first name"
      name="firstName"
      v-model.trim="userInfo.fName"
    />

    <label for="firstName">last name :</label>
    <input type="text" placeholder="last name" v-model.trim="userInfo.lName" />

    <label for="firstName">job title :</label>
    <input
      type="text"
      placeholder="job title"
      v-model.trim="userInfo.jobTitle"
    />

    <label for="firstName">about me :</label>
    <textarea v-model.trim="userInfo.aboutMe" placeholder="about me" />

    <label for="firstName">mobile :</label>
    <input
      type="tel"
      v-model.trim="userInfo.mobile"
      required
      placeholder="mobile"
    />

    <label for="email">email :</label>
    <input
      type="email"
      v-model.trim="userInfo.email"
      required
      placeholder="email"
    />

    <label for="skillSummary"
      >Skill Summary :
      <button @click="addSkillSummary">
        <i class="icon--plus"></i></button
    ></label>
    <template v-for="(item, index) in skillSummaryList" :key="index">
      <input
        type="text"
        v-model.trim="item.url"
        required
        placeholder="Skill Summary"
      />
    </template>

    <textarea v-model.trim="userInfo.aboutMe" placeholder="education" />




    <label for="links"
      >links :
      <button @click="addlink">
        <i class="icon--plus"></i></button
    ></label>


    <template v-for="(item, index) in linkList" :key="index">
      <input
        type="text"
        v-model.trim="item.url"
        required
        placeholder="social"
      />
    </template>


    <select v-model="userInfo.links">
      <template v-for="(item, index) in icons.glyphs" :key="index">
        <option>{{ item.css }}</option>
      </template>
    </select>


  </div>
</template>
<script lang="ts">
import { defineComponent, ref, watchEffect, reactive } from "vue";
import { SetDataStore } from "./../../store";
import icons from "./../../global/icons.json";
export default defineComponent({
  name: "TheForm",
  setup() {
    const userInfo = ref<any>({});
    watchEffect(() => SetDataStore("UserInfo", userInfo.value));
    const iconClass = ref("");

    const skillSummaryList = ref([
      {
        url: "",
        icon: "",
      },
    ]);
    const addSkillSummary = () => {
      skillSummaryList.value.push({
        url: "",
        icon: "",
      });
    };

    const linkList = ref([
      {
        url: "",
        icon: "",
      },
    ]);
    const addlink = () => {
      linkList.value.push({
        url: "",
        icon: "",
      });
    };

    return {
      userInfo,
      iconClass,
      icons,
      skillSummaryList,
      addSkillSummary,
      linkList,
      addlink
    };
  },
});
</script>
<style>
label {
  @apply block w-full mb-3 capitalize;
}
input,
textarea,
select {
  @apply block w-full mb-3 py-2 px-3 rounded capitalize border outline-transparent;
}
</style>
