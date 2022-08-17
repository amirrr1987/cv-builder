<template>

  <!-- ***************************************************** -->

  <div class="px-3 mb-2">
    <div class=" grid grid-cols-1fr-max mb-2">
      <div class="font-medium text-primary-dark">
        <span>{{title}} </span>
        <span> at </span>
        <a :href="officeUrl" target="_blank" class="cap">{{office}}</a>
      </div>
      <div class="font-light text-xs text-gray-light">
        <span
          v-if="begin"
        >
          ( {{month}} M )
        </span>
        <span>{{begin}}</span>
        <span v-if="end"> / {{end}}</span>
        <span v-else> / Precent</span>
    </div>
    </div>

      <ul class="px-3 mx-3 text-sm font-light list-disc text-gray-light">
        <li class="">
          {{description}}
        </li>
        <li class="">
          {{technology}}
        </li>
      </ul>
    
    
  </div>

  <!-- ***************************************************** -->
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ExperienceItem",
  props: {
    title: { type: String, default: "Front End Developer" },
    office: { type: String, default: "office" },
    officeUrl: { type: String, default: "officeUrl" },
    technology: { type: String, default: "technology" },
    description: { type: String, default: "description" },
    begin: { type: String, default: "" },
    end: { type: String, default: "" },
    month: { type: String, default: "6" },
  },
  setup() {

  },
});
</script>
