<template>
  <div class="px-3 mb-2">
    <div class="grid grid-cols-[1fr,max-content] mb-2">
      <div class="font-medium text-primary-dark">
        <span>{{ props.item?.title }} </span>
        <span class="mx-1"> {{ $t("at") }} </span>
        <!-- <a :href="data.companyUrl" target="_blank" class="cap">{{ data.companyName }}</a> -->
      </div>
      <div class="font-light text-xs text-gray-light">
        <span>( {{ props.item?.title }} )</span>
        <span class="ml-3"> {{ props.item?.title }}</span>
        <span> / {{ props.item?.title }}</span>
      </div>
    </div>

    <ul class="px-3 mx-3 text-sm font-light list-disc text-gray-light">
      <li class="">
        {{ duration }}
      </li>
      <li class="">
        <template v-for="item in props.item?.skills" :key="item">
          <span class="mr-1">{{ item.label }},</span>
        </template>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import moment from "moment";
interface Props {
  item: any;
}
// interface Item {
//   title?: string;
//   companyName?: string;
//   companyUrl: string;
//   description: string;
//   beginDate?: string;
//   endDate?: string;
//   skills: Label[];
// }
// interface Label {
//   label: string;
// }
const props = withDefaults(defineProps<Props>(), {
  item: {
    title: "",
    companyName: "",
    companyUrl: "",
    description: "",
    beginDate: "",
    endDate: "",
    skills: [{ label: "" }],
  },
});
const duration = computed(() => {
  const startTime = moment(props.item.beginDate);
  const endTime = moment(props.item.endDate);
  const duration = moment.duration(endTime.diff(startTime));
  if (duration.asMonths() > 12) {
    return `${(duration.asMonths() / 12).toFixed(1)} Year`;
  } else {
    return `${duration.asMonths().toFixed(0)} month`;
  }
});
</script>
