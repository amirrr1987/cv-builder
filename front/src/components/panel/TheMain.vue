<template>
    <div id="printMe" class="overflow-y-scroll">
        <main class="grid grid-cols-12">
            <section class=" col-span-3 grid grid-rows-silde gap-y-5 bg-primary-lightest py-3 px-5">
                <div class="">
                    <img class="w-36 h-36 rounded-full m-auto" :src="personalStore.$state.profile.image"
                        :title="fullName" :alt="fullName">
                    <div class="text-center ">
                        <div class="font-bold capitalize text-lg mt-3 text-primary-dark">{{ fullName }}</div>
                        <div class="capitalize text-base text-primary-dark ">{{ personalStore.$state.profile.title }}
                        </div>
                        <div class="text- font-light text-gray">
                            (
                            <span class="text-green-600" v-if="personalStore.$state.profile.subTitle.length > 0">{{
                            personalStore.$state.profile.subTitle
                            }}</span>
                            <span class="text-yellow-500">.js</span>
                            )
                        </div>
                    </div>
                </div>
                <hr>
                <div>
                    <div class="capitalize font-bold text-primary-dark"> {{ $t('aboutMe') }}</div>
                    <div class="p-1 text-xs font-light text-gray" v-if="personalStore.$state.profile.about.length > 0">
                        {{ personalStore.$state.profile.about }}</div>
                </div>
                <div>
                    <div class="capitalize font-bold text-primary-dark"> {{ $t('contactMe') }}</div>
                    <template v-for="item in personalStore.$state.profile.contacts" :key="item.index">
                        <div class="p-1 text-xs font-light text-gray flex items-center gap-x-1"
                            v-if="item.label.length > 0">
                            <Icon :icon="item.icon" />
                            <span>{{ item.label }}</span>
                        </div>
                    </template>
                </div>
                <div class="">
                    <div class="capitalize font-bold text-primary-dark">{{ $t('skillSummary') }} </div>
                    <div class="p-1 text-xs capitalize font-light  text-gray">
                        <template v-for="item in personalStore.$state.profile.skillsSummary" :key="item.index">
                            <div>{{ item.label }}</div>
                        </template>
                    </div>
                </div>
                <div class="">
                    <div class="capitalize font-bold text-primary-dark">{{ $t('education') }}</div>
                    <template v-for="item in personalStore.$state.profile.educations" :key="item.index">
                        <div class="p-1 text-xs font-light text-gray ">
                            {{ item.label }}
                        </div>
                    </template>
                </div>
                <div class="">
                    <div class="capitalize font-bold text-primary-dark">{{ $t('teachingExprince') }}
                    </div>
                    <div class="p-1 text-xs font-light text-gray ">
                        <template v-for="item in personalStore.$state.profile.techExperiences" :key="item.index">
                            <div>{{ item.label }}</div>
                        </template>
                    </div>
                </div>
                <div class="grid gap-y-1 text-center auto-rows-min py-5">
                    <template v-for="item in personalStore.$state.profile.socials" :key="item.index">
                        <a :href="item.link" target="_blank" class="flex items-center space-x-1 mb-1">
                            <Icon :icon="item.icon" />
                            <span class="text-xs text-gray ">{{ item.label }}</span>
                        </a>
                    </template>
                </div>
            </section>
            <section class="bg-white grid auto-rows-max gap-y-5 p-5 col-span-9">
                <div class="grid auto-rows-max gap-y-3">
                    <div class="grid auto-rows-max gap-y-3">
                        <div class="capitalize font-bold text-lg text-primary-dark">{{ $t('softwareKnowledge') }}
                        </div>
                        <template v-for="item in personalStore.$state.profile.softwareKnowledges">

                            <div class="grid grid-cols-[max-content,1fr] gap-x-2 gap-y-1 px-3 items-center">
                                <div class="font-medium text-primary-dark"> {{ item.label }}:</div>
                                <div class="text-sm text-gray-light">
                                    <template v-for="skill in item.skills">
                                        {{ skill.label }},
                                    </template>
                                </div>
                                <!-- <div class="font-medium text-primary-dark">CSS:</div>
                                <div class="text-sm text-gray-light">Flex Box, Grid Layout, Animation, BEM, SCSS</div>
                                <div class="font-medium text-primary-dark">CSS Framework:</div>
                                <div class="text-sm text-gray-light">Bootstrap, TailwindCSS, Bulma</div>
                                <div class="font-medium text-primary-dark">javaScript</div>
                                <div class="text-sm text-gray-light">Bom, Dom, Axios, ES6</div>
                                <div class="font-medium text-primary-dark">Vue.js</div>
                                <div class="text-sm text-gray-light">Vue Option API,Vue Composition API, Vue-Router,
                                    Vuex
                                </div>
                                <div class="font-medium text-primary-dark">Vue.js Framework:</div>
                                <div class="text-sm text-gray-light">Vuetify, Ant Desgin, BootstrapVue</div>
                                <div class="font-medium text-primary-dark">Protocol:</div>
                                <div class="text-sm text-gray-light">REST</div>
                                <div class="font-medium text-primary-dark">Control Version:</div>
                                <div class="text-sm text-gray-light">Git, Git Flow</div> -->
                            </div>
                        </template>
                        <!-- <div class="grid grid-cols-[max-content,1fr] gap-x-2 gap-y-1 px-3 items-center">
                            <div class="font-medium text-primary-dark">Basic:</div>
                            <div class="text-sm text-gray-light">HTML, CSS, javaScript </div>
                            <div class="font-medium text-primary-dark">CSS:</div>
                            <div class="text-sm text-gray-light">Flex Box, Grid Layout, Animation, BEM, SCSS</div>
                            <div class="font-medium text-primary-dark">CSS Framework:</div>
                            <div class="text-sm text-gray-light">Bootstrap, TailwindCSS, Bulma</div>
                            <div class="font-medium text-primary-dark">javaScript</div>
                            <div class="text-sm text-gray-light">Bom, Dom, Axios, ES6</div>
                            <div class="font-medium text-primary-dark">Vue.js</div>
                            <div class="text-sm text-gray-light">Vue Option API,Vue Composition API, Vue-Router, Vuex
                            </div>
                            <div class="font-medium text-primary-dark">Vue.js Framework:</div>
                            <div class="text-sm text-gray-light">Vuetify, Ant Desgin, BootstrapVue</div>
                            <div class="font-medium text-primary-dark">Protocol:</div>
                            <div class="text-sm text-gray-light">REST</div>
                            <div class="font-medium text-primary-dark">Control Version:</div>
                            <div class="text-sm text-gray-light">Git, Git Flow</div>
                        </div> -->
                    </div>
                    <hr class="mx-5">
                    <div class="capitalize font-bold text-lg text-primary-dark flex justify-between">
                        <span>{{ $t('experience') }} </span>
                        <span>{{ personalStore.$state.profileId }} </span>
                    </div>

                    <template v-for="item in personalStore.$state.profile.experiences" :key="item">
                        <ExperienceItem :title="item.title" :companyName="item.company.name"
                            :companyUrl="item.company.url" :description="item.description" :skills="item.skills"
                            :beginDate="item.beginDate" :endDate="item.endDate" />
                    </template>
                </div>
            </section>
        </main>
    </div>
</template>
<script setup lang="ts">
import stores from '@/stores'
import { Icon } from '@iconify/vue';
import ExperienceItem from "@/components/panel/ExperienceItem.vue";
import { computed } from 'vue';

const print = {
    mounted: () => print
}
const personalStore = stores.useProfileStore()
const fullName = computed(() => {
    return `${personalStore.$state.profile.fullName.first} ${personalStore.$state.profile.fullName.last}`
})
</script>