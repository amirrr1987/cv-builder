<template>
    <aside class="bg-white p-5 h-screen overflow-y-scroll col-span-2">

        <div class="mb-6">
            <label for="img" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">img</label>
            <input v-model="personalStore.$state.image" type="text" id="img"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="" required="true">
        </div>

        <div class="mb-6">
            <label for="fname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">first
                name</label>
            <input v-model="personalStore.$state.fullName.first" type="text" id="fname"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="" required="true">
        </div>

        <div class="mb-6">
            <label for="lname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">last name</label>
            <input v-model="personalStore.$state.fullName.last" type="text" id="lname"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="" required="true">
        </div>

        <div class="mb-6">
            <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">title</label>
            <input v-model="personalStore.$state.title" type="text" id="title"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="" required="true">
        </div>

        <div class="mb-6">
            <label for="subTitle"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">subTitle</label>
            <input v-model="personalStore.$state.subTitle" type="text" id="subTitle"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="" required="true">
        </div>


        <div class="mb-6">
            <label for="about" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">about</label>
            <input v-model="personalStore.$state.about" type="text" id="about"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="" required="true">
        </div>


        <div class="mb-6">
            <label for="mobile" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">mobile</label>
            <input v-model="personalStore.$state.mobile" type="text" id="mobile"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="" required="true">
        </div>


        <div class="mb-6">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">email</label>
            <input v-model="personalStore.$state.email" type="text" id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="" required="true">
        </div>

        <hr class="my-3">
        <div class="flex justify-between mb-5">
            <div>skillSummary</div>
            <button type="button" @click.prevent="personalStore.addSkillSummary"
                class="text-blue-500 w-8 h-8 rounded-full text-2xl">+</button>

        </div>
        <template v-for="(item, index) in personalStore.$state.skillSummary" :key="index">

            <div class="mb-6">


                <div class="grid grid-cols-[1fr,max-content] gap-1 items-center border px-3 ">
                    <input v-model="item.skill" type="text" :id="`skillSummary${index + 1}`"
                        class="outline-none border-0 focus:outline-0" placeholder="" required="true">
                    <button @click.prevent="personalStore.removeSkillSummary(index)"
                        class="text-red-500 w-8 h-8 rounded-full text-3xl">-</button>
                </div>
            </div>

        </template>



        <div class="mb-6">
            <label for="education"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">education</label>
            <input v-model="personalStore.$state.education" type="text" id="education"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="" required="true">
        </div>


        <hr class="my-3">
        <div class="flex justify-between mb-5">
            <div>teaching</div>
            <button type="button" @click.prevent="personalStore.addTeaching"
                class="text-blue-500 w-8 h-8 rounded-full text-2xl">+</button>

        </div>

        <template v-for="(item, index) in personalStore.$state.teaching" :key="item">
            <div class="mb-6">
                <div class="grid grid-cols-[1fr,max-content] gap-1 items-center border px-3 ">
                    <input v-model="item.title" type="text" :id="`skillSummary${index + 1}`"
                        class="outline-none border-0 focus:outline-0" placeholder="" required="true">
                    <button @click.prevent="personalStore.removeTeaching(index)"
                        class="text-red-500 w-8 h-8 rounded-full text-3xl">-</button>
                </div>
            </div>

        </template>


        <button @click="updatePrsonal" class="bg-red-500 px-5 py-2">update</button>



    </aside>
</template>
<script setup lang="ts">
import stores from '@/stores'
import Services from '@/services';
const personalStore = stores.usePersonalStore()


const updatePrsonal = async () => {
    try {
        const { data } = await Services.UpdatePersonalApi('63032a93f270bed204018ce1', personalStore.$state)

        console.log('🔥 data', data)

    } catch (error) {
        console.log('🔥 error', error)
    }
}
</script>