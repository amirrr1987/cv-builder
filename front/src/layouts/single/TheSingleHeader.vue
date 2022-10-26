<template>
    <nav class="py-3 border-b relative z-50">
        <div class="mx-auto px-3">
            <div class="flex justify-between items-center">
                <div class="flex gap-x-3">
                    <Button type="primary" @click="">
                        Update
                    </Button>
                    <Button type="primary" v-print="'#printMe'">
                        Print CV
                    </Button>
                </div>
                <div class="flex items-center gap-x-4">
                    <Dropdown>
                        <a class="ant-dropdown-link text-xl" @click.prevent>
                            <Icon icon="fa:language" />
                        </a>
                        <template #overlay>
                            <Menu>
                                <MenuItem @click="changeLocale('en')">
                                <div class="flex gap-x-3 items-center">
                                    <Icon icon="circle-flags:us" />
                                    <span>English</span>
                                </div>
                                </MenuItem>
                                <MenuItem @click="changeLocale('fa')">
                                <div class="flex gap-x-3 items-center">
                                    <Icon icon="emojione:flag-for-iran" />
                                    Persian
                                </div>
                                </MenuItem>
                            </Menu>
                        </template>
                    </Dropdown>
                    <Dropdown>
                        <Button type="text">
                            <Icon icon="iconoir:profile-circled" />
                        </Button>
                        <template #overlay>
                            <Menu>
                                <MenuItem>
                                <div class="flex gap-x-3 items-center">

                                </div>
                                </MenuItem>
                                <MenuItem>
                                <div class="flex gap-x-3 items-center">

                                    Persian
                                </div>
                                </MenuItem>
                            </Menu>
                        </template>
                    </Dropdown>
                    <Select v-model:value="theme.font" :class="`font-${theme.font}`">
                        <SelectOption value="sofia" class="font-sofia">Sofia</SelectOption>
                        <SelectOption value="roboto" class="font-roboto">Roboto</SelectOption>
                        <SelectOption value="spaceMono" class="font-spaceMono">Space Mono</SelectOption>
                        <SelectOption value="calibri" class="font-calibri">Calibri</SelectOption>
                        <SelectOption value="helvetica" class="font-helvetica">Helvetica</SelectOption>
                        <SelectOption value="georgia" class="font-georgia">Georgia</SelectOption>
                        <SelectOption value="vazir" class="font-vazir">Vazir</SelectOption>
                    </Select>
                    <Dropdown>
                        <Button type="text" :style="{backgroundColor: theme.color}">
                            <Icon icon="pepicons:paint-pallet" />
                        </Button>
                        <template #overlay>
                            <RadioGroup v-model:value="theme.color"
                                class="grid grid-cols-4 gap-1 p-1 bg-gray-50 shadow border">
                              
                                <RadioButton value="pink" class="!bg-pink-500 !w-6 !h-6 !p-0" />
                                <RadioButton value="rose" class="!bg-rose-500 !w-6 !h-6 !p-0" />
                                <RadioButton value="orange" class="!bg-orange-500 !w-6 !h-6 !p-0" />
                                <RadioButton value="yellow" class="!bg-yellow-500 !w-6 !h-6 !p-0" />
                                <RadioButton value="amber" class="!bg-amber-500 !w-6 !h-6 !p-0" />
                                <RadioButton value="lime" class="!bg-lime-500 !w-6 !h-6 !p-0" />
                                <RadioButton value="green" class="!bg-green-500 !w-6 !h-6 !p-0" />
                                <RadioButton value="emerald" class="!bg-emerald-500 !w-6 !h-6 !p-0" />
                                <RadioButton value="teal" class="!bg-teal-500 !w-6 !h-6 !p-0" />
                                <RadioButton value="cyan" class="!bg-cyan-500 !w-6 !h-6 !p-0" />
                                <RadioButton value="sky" class="!bg-sky-500 !w-6 !h-6 !p-0" />
                                <RadioButton value="blue" class="!bg-blue-500 !w-6 !h-6 !p-0" />
                                <RadioButton value="indigo" class="!bg-indigo-500 !w-6 !h-6 !p-0" />
                                <RadioButton value="purple" class="!bg-purple-500 !w-6 !h-6 !p-0" />
                                <RadioButton value="violet" class="!bg-violet-500 !w-6 !h-6 !p-0" />
                                <RadioButton value="fuchsia" class="!bg-fuchsia-500 !w-6 !h-6 !p-0" />
                                <RadioButton value="gray" class="!bg-gray-500 !w-6 !h-6 !p-0" />
                                <RadioButton value="slate" class="!bg-slate-500 !w-6 !h-6 !p-0" />
                                <RadioButton value="stone" class="!bg-stone-500 !w-6 !h-6 !p-0" />
                                <RadioButton value="neutral" class="!bg-neutral-500 !w-6 !h-6 !p-0" />
                                <RadioButton value="zinc" class="!bg-zinc-500 !w-6 !h-6 !p-0" />
                                <RadioButton value="light" class="!bg-light-500 !w-6 !h-6 !p-0" />
                                <RadioButton value="dark" class="!bg-dark-500 !w-6 !h-6 !p-0" />
                             
                            </RadioGroup>
                        </template>
                    </Dropdown>
                </div>
            </div>
        </div> 
    </nav>
</template>
<script setup lang="ts">
import { useCvStore } from '@/stores/CvStore'
import { Dropdown, Menu, MenuItem, Button, RadioGroup, RadioButton, Select, SelectOption } from "ant-design-vue";
import { Icon } from '@iconify/vue';
import { onMounted, onUnmounted, computed } from 'vue';
import { useI18n } from "vue-i18n";
const cvStore = useCvStore()




const { locale } = useI18n()
const html = window.document.getElementsByTagName('html')
const changeLocale = (flag: string) => {
    locale.value = flag
    html[0].classList.toggle('is-rtl')
}

const theme = computed(() => {
    console.log('cvStore.state.cv.theme',cvStore.state.cv.theme);
    return cvStore.state.cv.theme
})

onMounted(() => {
    locale.value = cvStore.state.cv.theme.lang

})
onUnmounted(() => {
    html[0].classList.remove('is-rtl')
})
</script>