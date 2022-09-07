<template>
    <nav class="py-3 shadow relative z-50">
        <div class="mx-auto px-3">
            <div class="flex justify-between items-center">
                <div class="flex gap-x-3">
                    <Button type="primary" @click="updatePrsonal">
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
                                <MenuItem @click="changeLang('en')">
                                <div class="flex gap-x-3 items-center">
                                    <Icon icon="circle-flags:us" />
                                    <span>English</span>
                                </div>
                                </MenuItem>
                                <MenuItem @click="changeLang('fa')">
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
                                    <Icon size="" icon="emojione:flag-for-iran" />
                                    Persian
                                </div>
                                </MenuItem>
                            </Menu>
                        </template>
                    </Dropdown>
                    <Select v-model:value="currentLocale" @change="changeLocale">
                        <SelectOption v-for="(locale, i) in locales" :key="`locale-${i}`" :value="locale">
                            {{ locale }}
                        </SelectOption>
                    </select>
                </div>
            </div>
        </div>
    </nav>
</template>
<script setup lang="ts">
import stores from '@/stores'
import { Dropdown, Menu, MenuItem, Button, Select, SelectOption } from "ant-design-vue";
import { Icon } from '@iconify/vue';
import { onMounted, onUnmounted, reactive, ref } from 'vue';
import { useI18n } from "vue-i18n";
const profileStore = stores.useProfileStore()
const updatePrsonal = () => {
    profileStore.updatePersonal()
}
const { locale } = useI18n()
const currentLocale = ref('en')
const locales = reactive(["fa", "en"])
const html = window.document.getElementsByTagName('html')
const changeLocale = () => {
    
    locale.value = currentLocale.value
    html[0].classList.toggle('is-rtl')
}
onMounted(()=>{
    // if (profileStore.$state.profile.theme.lang === "fa"){
        // html[0].classList.toggle('is-rtl')
    // }
    locale.value = profileStore.$state.profile.theme.lang

})
onUnmounted(() => {
    html[0].classList.remove('is-rtl')
})
</script>