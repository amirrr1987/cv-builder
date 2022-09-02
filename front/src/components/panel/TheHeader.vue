<template>

    <nav class="py-3 shadow relative z-50">
        <div class="mx-auto px-3">
            <div class="flex justify-between items-center">

                <div class="item">
                    <Button type="primary" @click="updatePrsonal">
                        Update
                    </Button>
                </div>

                <div class="flex items-center gap-x-4">
                    <Dropdown>
                        <a class="ant-dropdown-link text-xl" @click.prevent>
                            <Icon icon="fa:language" />

                        </a>
                        <template #overlay>
                            <Menu>
                                <MenuItem>
                                <div class="flex gap-x-3 items-center">
                                    <Icon icon="circle-flags:us" />
                                    <span>English</span>
                                </div>
                                </MenuItem>

                                <MenuItem>
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
                                    <Icon icon="circle-flags:us" />
                                    <span>English</span>
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
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">

import stores from '@/stores'
import { Dropdown, Menu, MenuItem, Button } from "ant-design-vue";

import { Icon } from '@iconify/vue';
const profileStore = stores.useProfileStore()

const updatePrsonal = () => {
    profileStore.updatePersonal()
}
</script>