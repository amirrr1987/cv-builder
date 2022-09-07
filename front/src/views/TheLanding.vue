<template>
    <Header />
    <main>
        <section class="py-20 bg-[#eff2f9]">
            <div class="container mx-auto px-3">
                <div class="flex flex-col items-center gap-5">
                    <h3
                        class="text-3xl font-extrabold tracking-tight leading-tight text-gray-900 lg:text-center dark:text-white md:text-4xl">
                        ResumeIT in technologies
                    </h3>
                    <p class="text-lg font-normal text-gray-500 dark:text-gray-400 lg:text-center lg:text-xl lg:px-64">
                        You can now also get started with open-source component libraries built for frameworks such as
                        React, Vue.js, Svelte and Angular.
                    </p>
                    <RouterLink to="/auth/register"
                        class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                        Get
                        started</RouterLink>
                </div>
            </div>
        </section>
        <section class="py-20">
            <div class="container mx-auto px-3">
                <h2
                    class="mb-6 text-3xl font-extrabold tracking-tight leading-tight text-gray-900 lg:text-center dark:text-white md:text-4xl">
                    ResumeIT in other technologies</h2>
                <p
                    class="mb-10 text-lg font-normal text-gray-500 dark:text-gray-400 lg:text-center lg:text-xl lg:px-64 lg:mb-16">
                    You can now also get started with open-source component libraries built for frameworks such as
                    React, Vue.js, Svelte and Angular.</p>
                <div class="grid grid-cols-6">
                    <div class="col-start-1 col-end-7 grid grid-cols-3 gap-5">
                        <div>
                            <Icon icon="icon-park-outline:code" class="text-6xl mx-auto mb-5 text-[#3b5998]" />
                            <p class="text-center text-gray-600">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, inventore.
                            </p>
                        </div>
                        <div>
                            <Icon icon="icon-park-outline:code" class="text-6xl mx-auto mb-5 text-[#3b5998]" />
                            <p class="text-center text-gray-600">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, inventore.
                            </p>
                        </div>
                        <div>
                            <Icon icon="icon-park-outline:code" class="text-6xl mx-auto mb-5 text-[#3b5998]" />
                            <p class="text-center text-gray-600">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, inventore.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="py-20">
            <div class="px-3 mx-auto container">
                <div class="gap-16 items-center lg:grid lg:grid-cols-2">
                    <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">We didn't
                            reinvent the wheel</h2>
                        <p class="mb-4">We are strategists, designers and developers. Innovators and problem solvers.
                            Small
                            enough to be simple and quick, but big enough to deliver the scope you want at the pace you
                            need. Small enough to be simple and quick, but big enough to deliver the scope you want at
                            the
                            pace you need.</p>
                        <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to
                            be
                            simple and quick.</p>
                    </div>
                    <div class="grid grid-cols-2 gap-4 mt-8">
                        <img class="w-full rounded-lg"
                            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
                            alt="office content 1">
                        <img class="mt-4 w-full lg:mt-10 rounded-lg"
                            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
                            alt="office content 2">
                    </div>
                </div>
            </div>
        </section>
        <section class="py-20">
            <div class="px-3 mx-auto container">
                <div class="gap-16 items-center lg:grid lg:grid-cols-2">
                    <div class="grid grid-cols-2 gap-4 mt-8">
                        <img class="w-full rounded-lg"
                            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
                            alt="office content 1">
                        <img class="mt-4 w-full lg:mt-10 rounded-lg"
                            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
                            alt="office content 2">
                    </div>
                    <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">We didn't
                            reinvent the wheel</h2>
                        <p class="mb-4">We are strategists, designers and developers. Innovators and problem solvers.
                            Small
                            enough to be simple and quick, but big enough to deliver the scope you want at the pace you
                            need. Small enough to be simple and quick, but big enough to deliver the scope you want at
                            the
                            pace you need.</p>
                        <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to
                            be
                            simple and quick.</p>
                    </div>
                </div>
            </div>
        </section>

        <Services/>
        <Counter/>
        <OurTeam />
        <Company />
        <ContactUs />
    </main>
    <Footer />
</template>
<script setup lang="ts">
import { Icon } from '@iconify/vue';
// import {  } from "ant-design-vue";
import Header from '../components/landing/Header.vue';
import Footer from '../components/landing/Footer.vue';
import OurTeam from '../components/landing/OurTeam.vue';
import Company from '../components/landing/Company.vue';
import ContactUs from '../components/landing/ContactUs.vue';
import Counter from '../components/landing/Counter.vue';
import Services from '../components/landing/Services.vue';
</script>