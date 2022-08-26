<template>
    <main class="col-span-10 grid grid-cols-12 overflow-y-scroll h-screen">
        <section class=" col-span-2 grid grid-rows-silde gap-y-5 bg-primary-lightest py-3 px-5">
            <div class="">
                <img class="w-36 h-36 rounded-full m-auto" :src="personalStore.$state.profile.image" :title="fullName"
                    :alt="fullName">
                <div class="text-center ">
                    <div class="font-bold capitalize text-lg mt-3 text-primary-dark">{{ fullName }}</div>
                    <div class="capitalize text-base text-primary-dark ">{{ personalStore.$state.profile.title }}</div>
                    <div class="text- font-light text-gray">
                        (
                        <span class="text-green-600">{{ personalStore.$state.profile.subTitle }}</span>
                        <span class="text-yellow-500">.js</span>
                        )
                    </div>
                </div>
            </div>
            <hr>
            <div>
                <div class="capitalize font-bold text-primary-dark">about me</div>
                <div class="p-1 text-xs font-light text-gray">{{ personalStore.$state.profile.about }}</div>
            </div>
            <div>
                <div class="capitalize font-bold text-primary-dark">contact me</div>
                <template v-for="(item, index) in personalStore.$state.profile.contacts" :key="index">
                    <div class="p-1 text-xs font-light text-gray flex items-center gap-x-1">
                        <Icon :icon="item.icon" />
                        <span>{{ item.label }}</span>
                    </div>
                </template>
            </div>
            <div class="">
                <div class="capitalize font-bold text-primary-dark">skill summery</div>
                <div class="p-1 text-xs capitalize font-light  text-gray">
                    <template v-for="(item, index) in personalStore.$state.profile.skillsSummary" :key="index">
                        <div>{{ item.label }}</div>
                    </template>
                </div>
            </div>
            <div class="">
                <div class="capitalize font-bold text-primary-dark">education</div>
                <template v-for="(item, index) in personalStore.$state.profile.educations" :key="index">
                    <div class="p-1 text-xs font-light text-gray ">
                        {{ item.label }}
                    </div>
                </template>
            </div>
            <div class="">
                <div class="capitalize font-bold text-primary-dark">teaching exprince</div>
                <div class="p-1 text-xs font-light text-gray ">
                    <template v-for="(item, index) in personalStore.$state.profile.techExperiences" :key="index">
                        <div>{{ item.label }}</div>
                    </template>
                </div>
            </div>
            <div class="grid gap-y-1 text-center auto-rows-min py-5">
                <template v-for="item in personalStore.$state.profile.socials" :key="index">
                    <a :href="item.link" target="_blank"
                        class="flex items-center space-x-1">
                        <Icon :icon="item.icon" />
                        <span class="text-xs text-gray ">{{item.label}}</span>
                    </a>
                </template>
            </div>
        </section>
        <section class="bg-white grid auto-rows-max gap-y-5 p-5 col-span-10">
            <div class="grid auto-rows-max gap-y-3">
                <div class="grid auto-rows-max gap-y-3">
                    <div class="capitalize font-bold text-lg text-primary-dark">software knowledge</div>
                    <div class="grid grid-cols-max-1fr gap-x-2 gap-y-1 px-3 items-center">
                        <div class="font-medium text-primary-dark">Basic:</div>
                        <div class="text-sm text-gray-light">HTML, CSS, javaScript </div>
                        <div class="font-medium text-primary-dark">CSS:</div>
                        <div class="text-sm text-gray-light">Flex Box, Grid Layout, Animation, BEM, SCSS</div>
                        <div class="font-medium text-primary-dark">CSS Framework:</div>
                        <div class="text-sm text-gray-light">Bootstrap, TailwindCSS, Bulma</div>
                        <div class="font-medium text-primary-dark">javaScript</div>
                        <div class="text-sm text-gray-light">Bom, Dom, Axios, ES6</div>
                        <div class="font-medium text-primary-dark">Vue.js</div>
                        <div class="text-sm text-gray-light">Vue Option API,Vue Composition API, Vue-Router, Vuex</div>
                        <div class="font-medium text-primary-dark">Vue.js Framework:</div>
                        <div class="text-sm text-gray-light">Vuetify, Ant Desgin, BootstrapVue</div>
                        <div class="font-medium text-primary-dark">Protocol:</div>
                        <div class="text-sm text-gray-light">REST</div>
                        <div class="font-medium text-primary-dark">Control Version:</div>
                        <div class="text-sm text-gray-light">Git, Git Flow</div>
                    </div>
                </div>
                <hr class="mx-5">
                <div class="capitalize font-bold text-lg text-primary-dark">experience</div>
                <ExperienceItem office="hacoupian" officeUrl="http://hacoupian.net/"
                    description="In ERP Web Application : Create customer survery module, Create laundery management panel admin, Create employment modele"
                    technology="Vue.js Compotion Api, TypeScript, Ant Design Vue, Tailwind, LESS, SCSS "
                    begin="Apr, 2021" month="8" />
                <ExperienceItem office="Asrevira" officeUrl="https://asrevira.com/"
                    description="Protal Application width 4 user accessibility" technology="Vue.js, Vuetify, Vuex, SCSS"
                    begin="Sep, 2020" end="May, 2021" month="8" />
                <ExperienceItem title="Web Developer" office="HakimTejarat" officeUrl="http://hakimtejarat.com/"
                    description="Create local Web Applications for user and create website"
                    technology="Vue.js, HTML, bootstrap, SCSS, Wordpress " begin="Jun, 2019" end="Sep, 2020"
                    month="14" />
                <ExperienceItem title="Front End Developer" office="ABC Startup Accelerator"
                    officeUrl="http://www.ablockchain.center/"
                    description="create Web and Landing page for startups, create cryptocurrency stratup front-end"
                    technology="HTML, CSS, javaScript, Bootstrap" begin="Sep, 2018" end="Jun, 2019" month="8" />
                <ExperienceItem title="Technician" office="Shalchilar" officeUrl="https://www.shalchilar.net/"
                    description="Update Website" technology="Ventilator Technician : learn new desvice and repair"
                    begin="May, 2016" end="Oct , 2018" month="29" />
                <ExperienceItem title="IT" office="Ansar Hoveze" officeUrl="https://bayatechgroup.com/bayatek-company/"
                    description="handle Website width wordpress and fix users issuse"
                    technology="HTML, CSS, javaScript, Bootstrap, Wordpress, Network+" begin="Oct, 2015" end="Jun, 2016"
                    month="6" />
                <ExperienceItem title="Help Desk" office="Mofid middle school" officeUrl="https://mofidsch.ir/m1/"
                    description="Network: fix users issuse and interm HTML CSS" technology="HTML, CSS,Network+"
                    begin="Aug, 2014" end="Sep, 2015" month="12" />
                <ExperienceItem title="HelpDesk" office="Farzanegan Pouya High School"
                    officeUrl="http://www.farzaneganepoya.ir/school/#/Frontpage" description="fix users issue"
                    technology="Network+" begin="Sep, 2012" end="Sep, 2013" month="12" />
            </div>
        </section>
    </main>
</template>
<script setup lang="ts">
import stores from '@/stores'
import { Icon } from '@iconify/vue';
import ExperienceItem from "@/components/panel/ExperienceItem.vue";
import { computed } from 'vue';
const personalStore = stores.useProfileStore()
const fullName = computed(() => {
    return `${personalStore.$state.profile.fullName.first} ${personalStore.$state.profile.fullName.last}`
})
</script>