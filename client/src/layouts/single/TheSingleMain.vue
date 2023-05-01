<template>
  <!-- <div  class="overflow-y-scroll print:min-h-screen print:bg-red-400" :class="`font-${cvStore.state.cv.theme.font}`"> -->
  <main id="printMe" class="grid grid-cols-12 min-h-full overflow-y-scroll">
    <section
      class="col-span-3 grid grid-rows-silde gap-y-5 py-3 px-5"
      :class="`bg-${cvStore.state.cv.theme.color}-50`"
    >
      <div class="">
        <img
          class="w-36 h-36 rounded-full m-auto"
          :src="cvStore.state.cv.image"
          :title="fullName"
          :alt="fullName"
        />
        <div class="text-center">
          <div
            class="font-bold capitalize text-lg mt-3"
            :class="`text-${cvStore.state.cv.theme.color}-900`"
          >
            {{ fullName }}
          </div>
          <div
            class="capitalize text-base"
            :class="`text-${cvStore.state.cv.theme.color}-900`"
          >
            {{ cvStore.state.cv.title }}
          </div>
          <div class="text- font-light text-dark-50">
            (
            <span
              class="text-green-600"
              v-if="cvStore.state.cv.subTitle.length > 0"
              >{{ cvStore.state.cv.subTitle }}</span
            >
            <span class="text-yellow-500">.js</span>
            )
          </div>
        </div>
      </div>
      <hr />
      <div>
        <div
          class="capitalize font-bold"
          :class="`text-${cvStore.state.cv.theme.color}-900`"
        >
          {{ $t("aboutMe") }}
        </div>
        <div
          class="p-1 text-xs font-light text-dark-50"
          v-if="cvStore.state.cv.about.length > 0"
        >
          {{ cvStore.state.cv.about }}
        </div>
      </div>
      <div>
        <div
          class="capitalize font-bold"
          :class="`text-${cvStore.state.cv.theme.color}-900`"
        >
          {{ $t("contactMe") }}
        </div>
        <template v-for="item in cvStore.state.cv.contacts" :key="item.index">
          <div
            class="p-1 text-xs font-light text-dark-50 flex items-center gap-x-1"
            v-if="item.label.length > 0"
          >
            <Icon :icon="item.icon" />
            <span>{{ item.label }}</span>
          </div>
        </template>
      </div>
      <div class="">
        <div
          class="capitalize font-bold"
          :class="`text-${cvStore.state.cv.theme.color}-900`"
        >
          {{ $t("skillsSummary") }}
        </div>
        <div class="p-1 text-xs capitalize font-light text-dark-50">
          <template
            v-for="item in cvStore.state.cv.skillsSummary"
            :key="item.index"
          >
            <div>{{ item.label }}</div>
          </template>
        </div>
      </div>
      <div class="">
        <div
          class="capitalize font-bold"
          :class="`text-${cvStore.state.cv.theme.color}-900`"
        >
          {{ $t("education") }}
        </div>
        <template v-for="item in cvStore.state.cv.educations" :key="item.index">
          <div class="p-1 text-xs font-light text-dark-50">
            {{ item.label }}
          </div>
        </template>
      </div>
      <div class="">
        <div
          class="capitalize font-bold"
          :class="`text-${cvStore.state.cv.theme.color}-900`"
        >
          {{ $t("teachingExperience") }}
        </div>
        <div class="p-1 text-xs font-light text-dark-50">
          <template
            v-for="item in cvStore.state.cv.techExperiences"
            :key="item.index"
          >
            <div>{{ item.label }}</div>
          </template>
        </div>
      </div>
      <div class="grid gap-y-1 text-center auto-rows-min py-5">
        <template v-for="item in cvStore.state.cv.socials" :key="item.index">
          <a
            :href="item.link"
            target="_blank"
            class="flex items-center space-x-1 mb-1"
          >
            <Icon :icon="item.icon" />
            <span class="text-xs text-dark-50">{{ item.label }}</span>
          </a>
        </template>

      </div>

    </section>
    <section class="bg-white grid auto-rows-max gap-y-5 p-5 col-span-9 relative">
      <div class="grid auto-rows-max gap-y-3">
        <div class="grid auto-rows-max gap-y-3">
          <div
            class="capitalize font-bold text-lg"
            :class="`text-${cvStore.state.cv.theme.color}-900`"
          >
            {{ $t("softwareKnowledge") }}
          </div>
          <template v-for="item in cvStore.state.cv.softwareKnowledges">
            <div
              class="grid grid-cols-[max-content,1fr] gap-x-2 gap-y-1 px-3 items-center"
            >
              <div class="font-semibold text-primary-dark">
                {{ item.label }}:
              </div>
              <div class="text-sm text-dark-50-light">
                <template v-for="skill in item.skills">
                  {{ skill.label }},
                </template>
              </div>
            </div>
          </template>
        </div>
        <hr class="mx-5" />
        <div
          class="capitalize font-bold text-lg flex justify-between"
          :class="`text-${cvStore.state.cv.theme.color}-900`"
        >
          <span>{{ $t("experience") }} </span>
        </div>
        <template
          v-for="(item, index) in cvStore.state.cv.experiences ?? []"
          :key="index"
        >
          <ExperienceItem :item="item" />
        </template>
      </div>
            <img src="@/assets/images/qr-code.png" class="w-14 h-14 absolute right-4 top-4" alt="">

    </section>
  </main>
  <!-- </div> -->
</template>
<script setup lang="ts">
import { useCvStore } from "@/stores/CvStore";
import { Icon } from "@iconify/vue";
import ExperienceItem from "@/components/panel/ExperienceItem.vue";
import { computed, onMounted } from "vue";
const print = {
  mounted: () => print,
};

const cvStore = useCvStore();
const fullName = computed(() => {
  return `${cvStore.state.cv.fullName.first} ${cvStore.state.cv.fullName.last}`;
});
</script>
