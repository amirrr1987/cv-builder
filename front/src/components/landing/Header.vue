<template>
    <header>
        <nav class="py-3 shadow-sm relative z-50">
            <div class="container mx-auto px-3">
                <div class="grid grid-cols-3">
                    <a href="https://flowbite.com" class="flex items-center">
                        <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="ResumeITLogo">
                        <span
                            class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">ResumeIT</span>
                    </a>
                    <ul class="flex justify-center items-center gap-x-5">
                        <li>
                            <a href="#" class="font-medium text-base text-primary-600" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#" class="font-medium text-base text-gray-600">Team</a>
                        </li>
                        <li>
                            <a href="#" class="font-medium text-base text-gray-600">Contact</a>
                        </li>
                        <button v-print="'#printMe'">Print the entire page</button>

                    </ul>
                    <div class="flex justify-end gap-x-5 items-center">

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
                        <RouterLink to="/auth/login" class="font-medium text-base text-gray-600">Login</RouterLink>
                        <RouterLink to="/auth/register"
                            class="font-normal text-base bg-primary-600 text-primary-50 px-5 py-1 rounded-lg">Signup
                        </RouterLink>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup lang="ts">

import { Dropdown, Menu, MenuItem } from "ant-design-vue";

import { Icon } from '@iconify/vue';
</script>