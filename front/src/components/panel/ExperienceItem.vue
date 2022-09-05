<template>

  <!-- ***************************************************** -->

  <div class="px-3 mb-2">
    <div class=" grid grid-cols-[1fr,max-content] mb-2">
      <div class="font-medium text-primary-dark">
        <span>{{ data.title }} </span>
        <span class="mx-1"> {{$t('at')}} </span>
        <a :href="data.companyUrl" target="_blank" class="cap">{{ data.companyName }}</a>
      </div>
      <div class="font-light text-xs text-gray-light">
        <span>( {{ duration }} )</span>
        <span class="ml-3"> {{ data.beginDate }}</span>
        <span> / {{ data.endDate }}</span>
      </div>
    </div>

    <ul class="px-3 mx-3 text-sm font-light list-disc text-gray-light">
      <li class="">
        {{ data.description }}
      </li>
      <li class="">
        <template v-for="item in data.skills" :key="item">
          <span class="mr-1">{{ item.label }},</span>
        </template>
      </li>
    </ul>

  </div>

  <!-- ***************************************************** -->
</template>
<script setup lang="ts">
import { computed, defineComponent } from "vue";
import moment from 'moment'

interface Props {
  title: string;
  companyName: string;
  companyUrl: string;
  description: string;
  beginDate?: string;
  endDate?: string;
  skills: any;

}

const props = withDefaults(defineProps<Props>(), {
  title: "",
  companyName: "",
  companyUrl: "",
  description: "",
  beginDate: "",
  endDate: "",
  skills: [''],
})


const data = computed(() => {
  return props
})


const duration = computed(() => {
  const startTime = moment(props.beginDate)
  const endTime = moment(props.endDate)
  const duration = moment.duration(endTime.diff(startTime));
  if (duration.asMonths() > 12) {
    return `${(duration.asMonths() / 12).toFixed(1)} Year`
  }
  else {
    return `${(duration.asMonths().toFixed(0))} month`
  }

})
</script>
