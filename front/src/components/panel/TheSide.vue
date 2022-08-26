<template>
    <aside class="bg-white p-5 h-screen overflow-y-scroll col-span-2">
        <div class="mb-6">
            <label for="img" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Image</label>
            <input v-model="profile.image" type="text" id="img"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="" required="true">
        </div>
        <hr class="my-5">
        <div class="mb-6">
            <label for="fname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First
                name</label>
            <input v-model="profile.fullName.first" type="text" id="fname"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="" required="true">
        </div>
        <hr class="my-5">
        <div class="mb-6">
            <label for="lname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last name</label>
            <input v-model="profile.fullName.last" type="text" id="lname"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="" required="true">
        </div>
        <hr class="my-5">
        <div class="mb-6">
            <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Title</label>
            <input v-model="profile.title" type="text" id="title"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="" required="true">
        </div>
        <hr class="my-5">
        <div class="mb-6">
            <label for="subTitle"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">SubTitle</label>
            <input v-model="profile.subTitle" type="text" id="subTitle"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="" required="true">
        </div>
        <hr class="my-5">
        <div class="mb-6">
            <label for="about" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">About</label>
            <textarea v-model="profile.about" type="text" id="about"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="" required="true">
                </textarea>
        </div>
        <hr class="my-5">
        <div class="grid gap-y-3">
            <div class="grid grid-cols-12 gap-x-3">
                <label class="col-span-11 block text-sm font-medium text-gray-900 dark:text-gray-300">Contacts</label>
                <button type="button" @click.prevent="profileStore.addContacts"
                    class="col-span-1 text-blue-500 rounded-full text-2xl">+</button>
            </div>
            <div class="grid grid-cols-12 gap-3">
                <template v-for="(item, index) in profile.contacts" :key="index">
                    <select v-model="item.icon" id="icons"
                        class="col-span-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Choose a country</option>
                        <template v-for="item in contactIcons">
                            <option :value="item.icon">
                                {{ item.label }}
                            </option>
                        </template>
                    </select>
                    <input v-model="item.label" type="text" id="mobile"
                        class="col-span-9 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="" required="true">
                    <div class="col-span-1">
                        <button type="button" @click.prevent="profileStore.removeContacts(index)"
                            class="col-span-1 text-red-500 rounded-full text-2xl">-</button>
                    </div>
                </template>
            </div>
        </div>
        <hr class="my-5">
        <div class="grid gap-y-3">
            <div class="grid grid-cols-12 gap-x-3">
                <label class="col-span-11 block text-sm font-medium text-gray-900 dark:text-gray-300">Skill
                    Summary</label>
                <button type="button" @click.prevent="profileStore.addSkillSummary"
                    class="col-span-1 text-blue-500 rounded-full text-2xl">+</button>
            </div>
            <div class="grid grid-cols-12 gap-3">
                <template v-for="(item, index) in profile.skillsSummary" :key="index">
                    <input v-model="item.label" type="text" id="mobile"
                        class="col-span-11 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="" required="true">
                    <div class="col-span-1">
                        <button type="button" @click.prevent="profileStore.removeSkillSummary(index)"
                            class="col-span-1 text-red-500 rounded-full text-2xl">-</button>
                    </div>
                </template>
            </div>
        </div>
        <hr class="my-5">
        <div class="grid gap-y-3">
            <div class="grid grid-cols-12 gap-x-3">
                <label class="col-span-11 block text-sm font-medium text-gray-900 dark:text-gray-300">Educations</label>
                <button type="button" @click.prevent="profileStore.addEducations"
                    class="col-span-1 text-blue-500 rounded-full text-2xl">+</button>
            </div>
            <div class="grid grid-cols-12 gap-3">
                <template v-for="(item, index) in profile.educations" :key="index">
                    <input v-model="item.label" type="text" id="mobile"
                        class="col-span-11 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="" required="true">
                    <div class="col-span-1">
                        <button type="button" @click.prevent="profileStore.removeEducations(index)"
                            class="col-span-1 text-red-500 rounded-full text-2xl">-</button>
                    </div>
                </template>
            </div>
        </div>
        <hr class="my-5">
        <div class="grid gap-y-3">
            <div class="grid grid-cols-12 gap-x-3">
                <label class="col-span-11 block text-sm font-medium text-gray-900 dark:text-gray-300">Teaching</label>
                <button type="button" @click.prevent="profileStore.addTechExperiences"
                    class="col-span-1 text-blue-500 rounded-full text-2xl">+</button>
            </div>
            <div class="grid grid-cols-12 gap-3">
                <template v-for="(item, index) in profile.techExperiences" :key="index">
                    <input v-model="item.label" type="text" id="mobile"
                        class="col-span-11 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="" required="true">
                    <div class="col-span-1 flex justify-center items-center">
                        <button type="button" @click.prevent="profileStore.removeTechExperiences(index)"
                            class="col-span-1 text-red-500 rounded-full text-sm">
                            <Icon icon="icon-park-outline:close" />
                        </button>
                    </div>
                </template>
            </div>
        </div>
        <hr class="my-5">
        <div class="grid gap-y-3">
            <div class="grid grid-cols-12 gap-x-3">
                <label class="col-span-11 block text-base font-bold text-gray-900 dark:text-gray-300">Socials</label>
                <button type="button" @click.prevent="profileStore.addSocials"
                    class="col-span-1 text-green-400 rounded-full text-2xl">
                    <Icon icon="icon-park-outline:plus" />
                </button>
            </div>
            <div class="grid gap-y-3">
                <template v-for="(item, index) in profile.socials" :key="index">
                    <div class="bg-gray-200 grid grid-cols-12 gap-1 items-center justify-center p-2 rounded">
                        <input v-model="item.label" type="text" id="mobile"
                            class="col-span-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="" required="true">
                        <select v-model="item.icon" id="icons"
                            class="col-span-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Choose a country</option>
                            <template v-for="item in contactIcons">
                                <option :value="item.icon">
                                    {{ item.label }}
                                </option>
                            </template>
                        </select>
                        <input v-model="item.link" type="text" id="mobile"
                            class="col-span-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="" required="true">
                        <div class="col-span-2 flex justify-center items-center">
                            <button type="button" @click.prevent="profileStore.removeSocials(index)"
                                class="col-span-1 text-red-500 rounded text-sm">
                                <Icon icon="icon-park-outline:close" />
                            </button>
                        </div>
                    </div>
                </template>
            </div>
        </div>
        <hr class="my-5">
        <div class="grid gap-y-3">
            <div class="grid grid-cols-12 gap-x-3">
                <label
                    class="col-span-11 block text-base font-bold text-gray-900 dark:text-gray-300">Experiences</label>
                <button type="button" @click.prevent="profileStore.addExperiences"
                    class="col-span-1 text-green-400 rounded-full text-2xl">
                    <Icon icon="icon-park-outline:plus" />
                </button>
            </div>
            <div class="grid gap-y-3">
                <template v-for="(item, index) in profile.experiences" :key="index">
                    <div class="grid grid-cols-12 gap-3 bg-gray-200 p-2 rounded">
                        <div class="col-span-11">
                            <label for="">label</label>
                            <input v-model="item.label" type="text" id="mobile"
                                class="col-span-11 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="" required="true">
                        </div>
                        <div class="col-span-1  flex justify-center items-start">
                            <button type="button" @click.prevent="profileStore.removeExperiences(index)"
                                class="col-span-1 text-red-500 rounded text-sm">
                                <Icon icon="icon-park-outline:close" />
                            </button>
                        </div>
                        <div class="col-span-12">
                            <label for="">company</label>
                            <input v-model="item.company" type="text" id="mobile"
                                class="col-span-11 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="" required="true">
                        </div>
                        <div class="col-span-12">
                            <label for="">description</label>
                            <textarea v-model="item.description" type="text" id="mobile"
                                class="col-span-11 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="" required="true" rows="5"></textarea>
                        </div>
                        <div class="col-span-6">
                            <label for="">beginDate</label>
                            <input v-model="item.beginDate" type="text" id="mobile"
                                class="col-span-11 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="" required="true">
                        </div>
                        <div class="col-span-6">
                            <label for="">endDate</label>
                            <input v-model="item.endDate" type="text" id="mobile"
                                class="col-span-11 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="" required="true">
                        </div>
                    </div>
                </template>
            </div>
        </div>
        <hr class="my-5">
        <button @click="updatePrsonal" class="bg-green-400 text-white rounded px-5 py-2">Update</button>
    </aside>
</template>
<script setup lang="ts">
import stores from '@/stores'
import { computed, reactive } from 'vue';
import { Icon } from '@iconify/vue';
const profileStore = stores.useProfileStore()
const profile = computed(() => {
    return profileStore.$state.profile
})
const updatePrsonal = () => {
    profileStore.updatePersonal()
}
const contactIcons = reactive([
    {
        label: "linkedin",
        icon: "cib:linkedin"
    },
    {
        label: "phone",
        icon: "cib:phone"
    },
    {
        label: "mail",
        icon: "cib:gmail"
    },
    {
        label: "skype",
        icon: "cib:skype"
    },
    {
        label: "twitter",
        icon: "cib:twitter"
    },
    {
        label: "github",
        icon: "cib:github"
    },
    {
        label: "codewars",
        icon: "cib:codewars"
    },
    {
        label: "stack-overflow",
        icon: "cib:stackoverflow"
    }, 
    {
        label: "codepen",
        icon: "cib:codepen"
    },
])
</script>