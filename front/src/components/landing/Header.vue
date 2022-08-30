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
                            <a class="ant-dropdown-link" @click.prevent>
                                Hover me

                            </a>
                            <template #overlay>
                                <Menu>
                                    <MenuItem>
                                    <svg class="mr-2 w-5 h-5 rounded-full" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        viewBox="0 0 3900 3900">
                                        <path fill="#b22234" d="M0 0h7410v3900H0z"></path>
                                        <path d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0"
                                            stroke="#fff" stroke-width="300">
                                        </path>
                                        <path fill="#3c3b6e" d="M0 0h2964v2100H0z"></path>
                                        <g fill="#fff">
                                            <g id="d">
                                                <g id="c">
                                                    <g id="e">
                                                        <g id="b">
                                                            <path id="a"
                                                                d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z">
                                                            </path>
                                                            <use xlink:href="#a" y="420"></use>
                                                            <use xlink:href="#a" y="840"></use>
                                                            <use xlink:href="#a" y="1260"></use>
                                                        </g>
                                                        <use xlink:href="#a" y="1680"></use>
                                                    </g>
                                                    <use xlink:href="#b" x="247" y="210"></use>
                                                </g>
                                                <use xlink:href="#c" x="494"></use>
                                            </g>
                                            <use xlink:href="#d" x="988"></use>
                                            <use xlink:href="#c" x="1976"></use>
                                            <use xlink:href="#e" x="2470"></use>
                                        </g>
                                    </svg>
                                    English (US)
                                    </MenuItem>

                                    <MenuItem>
                                    <svg class="mr-2 w-5 h-5 rounded-full" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        viewBox="0 0 3900 3900">
                                        <path fill="#b22234" d="M0 0h7410v3900H0z"></path>
                                        <path d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0"
                                            stroke="#fff" stroke-width="300">
                                        </path>
                                        <path fill="#3c3b6e" d="M0 0h2964v2100H0z"></path>
                                        <g fill="#fff">
                                            <g id="d">
                                                <g id="c">
                                                    <g id="e">
                                                        <g id="b">
                                                            <path id="a"
                                                                d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z">
                                                            </path>
                                                            <use xlink:href="#a" y="420"></use>
                                                            <use xlink:href="#a" y="840"></use>
                                                            <use xlink:href="#a" y="1260"></use>
                                                        </g>
                                                        <use xlink:href="#a" y="1680"></use>
                                                    </g>
                                                    <use xlink:href="#b" x="247" y="210"></use>
                                                </g>
                                                <use xlink:href="#c" x="494"></use>
                                            </g>
                                            <use xlink:href="#d" x="988"></use>
                                            <use xlink:href="#c" x="1976"></use>
                                            <use xlink:href="#e" x="2470"></use>
                                        </g>
                                    </svg>
                                    English (US)
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
</script>