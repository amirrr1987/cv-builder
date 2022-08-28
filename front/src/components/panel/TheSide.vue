<template>
    <Card class="col-span-2 h-screen overflow-y-scroll">
        <Form layout="vertical">
            <FormItem label="Image">
                <Input v-model:value="profile.image" />
            </FormItem>
            <Divider />
            <FormItem label="First">
                <Input v-model:value="profile.fullName.first" />
            </FormItem>
            <FormItem label="Last">
                <Input v-model:value="profile.fullName.last" />
            </FormItem>
            <Divider />
            <FormItem label="Title">
                <Input v-model:value="profile.title" />
            </FormItem>
            <FormItem label="SubTitle">
                <Input v-model:value="profile.subTitle" />
            </FormItem>
            <FormItem label="About">
                <Textarea v-model:value="profile.about" />
            </FormItem>
            <Divider />
            <FormItem>
                <template #label>
                    <div class="flex justify-between w-full">
                        <span>Contacts</span>
                        <Button type="primary" @click.prevent="profileStore.addContacts">
                            <Icon icon="icon-park-outline:plus" />
                        </Button>
                    </div>
                </template>
                <div class="grid grid-cols-[max-content,1fr,max-content] gap-1">
                    <template v-for="(item, index) in profile.contacts" :key="index">
                        <Select v-model="item.icon">
                            <template v-for="item in contactIcons">
                                <SelectOption :value="item.icon" class="flex items-center justify-center">
                                    <Icon :icon="item.icon" />
                                </SelectOption>
                            </template>
                        </Select>
                        <Input v-model:value="item.label" type="text" />
                        <Button type="primary" @click.prevent="profileStore.removeContacts(index)">
                            <Icon icon="icon-park-outline:minus" />
                        </Button>
                    </template>
                </div>
            </FormItem>
            <Divider />
            <FormItem>
                <template #label>
                    <div class="flex justify-between w-full">
                        <span>Skills Summary</span>
                        <Button type="primary" @click.prevent="profileStore.addSkillSummary">
                            <Icon icon="icon-park-outline:plus" />
                        </Button>
                    </div>
                </template>
                <div class="grid grid-cols-[1fr,max-content] gap-1">
                    <template v-for="(item, index) in profile.skillsSummary" :key="index">
                        <Input v-model:value="item.label" type="text" />
                        <Button type="primary" @click.prevent="profileStore.removeContacts(index)">
                            <Icon icon="icon-park-outline:minus" />
                        </Button>
                    </template>
                </div>
            </FormItem>
            <Divider />
            <FormItem>
                <template #label>
                    <div class="flex justify-between w-full">
                        <span>Educations</span>
                        <Button type="primary" @click.prevent="profileStore.addEducations">
                            <Icon icon="icon-park-outline:plus" />
                        </Button>
                    </div>
                </template>
                <div class="grid grid-cols-[1fr,max-content] gap-1">
                    <template v-for="(item, index) in profile.educations" :key="index">
                        <Input v-model:value="item.label" type="text" />
                        <Button type="primary" @click.prevent="profileStore.removeEducations(index)">
                            <Icon icon="icon-park-outline:minus" />
                        </Button>
                    </template>
                </div>
            </FormItem>
            <Divider />
            <FormItem>
                <template #label>
                    <div class="flex justify-between w-full">
                        <span>Teach Experiences</span>
                        <Button type="primary" @click.prevent="profileStore.addTechExperiences">
                            <Icon icon="icon-park-outline:plus" />
                        </Button>
                    </div>
                </template>
                <div class="grid grid-cols-[1fr,max-content] gap-1">
                    <template v-for="(item, index) in profile.techExperiences" :key="index">
                        <Input v-model:value="item.label" type="text" />
                        <Button type="primary" @click.prevent="profileStore.removeTechExperiences(index)">
                            <Icon icon="icon-park-outline:minus" />
                        </Button>
                    </template>
                </div>
            </FormItem>
            <Divider />
            <FormItem>
                <template #label>
                    <div class="flex justify-between w-full">
                        <span>Socials</span>
                        <Button type="primary" @click.prevent="profileStore.addSocials">
                            <Icon icon="icon-park-outline:plus" />
                        </Button>
                    </div>
                </template>
                <template v-for="(item, index) in profile.socials" :key="index">
                    <div class="grid grid-cols-[1fr,max-content] gap-1">
                        <div class=" grid grid-cols-2 gap-1 relative py-5">
                            <Input v-model:value="item.label" type="text" placeholder="label" />
                            <Select v-model="item.icon">
                                <template v-for="item in contactIcons">
                                    <SelectOption :value="item.icon" class="flex items-center justify-center">
                                        <Icon :icon="item.icon" />
                                    </SelectOption>
                                </template>
                            </Select>
                            <Input class="col-span-2" v-model:value="item.link" type="text" placeholder="link" />
                        </div>
                        <Button type="primary" @click.prevent="profileStore.removeSocials(index)">
                            <Icon icon="icon-park-outline:minus" />
                        </Button>
                    </div>
                </template>
            </FormItem>
            <Divider />
            <FormItem>
                <template #label>
                    <div class="flex justify-between w-full">
                        <span>Experiences</span>
                        <Button type="primary" @click.prevent="profileStore.addExperiences">
                            <Icon icon="icon-park-outline:plus" />
                        </Button>
                    </div>
                </template>
                <template v-for="(item, index) in profile.experiences" :key="index">
                    <Card class="bg-gray-300">
                        <FormItem label="title">
                            <Input v-model:value="item.title" type="text" placeholder="label" />
                        </FormItem>
                        <FormItem label="company name">
                            <Input v-model:value="item.company.name" type="text" placeholder="label" />
                        </FormItem>
                        <FormItem label="company url">
                            <Input v-model:value="item.company.url" type="text" placeholder="label" />
                        </FormItem>
                        <FormItem label="description">
                            <Textarea :rows="5" v-model:value="item.description" type="text" placeholder="label" />
                        </FormItem>
                        <FormItem label="Skills">
                            <div class="grid grid-cols-2 gap-2">
                                <template v-for="single in item.skills" :key="index">
                                    <Input class="mb-1" v-model:value="single.label" type="text" placeholder="label" />
                                </template>
                                <Button type="button" @click.prevent="profileStore.addExperiencesSkills(index)">
                                    <Icon icon="icon-park-outline:plus" />
                                </Button>
                            </div>
                        </FormItem>
                        <FormItem label="beginDate">
                            <DatePicker v-model:value="item.beginDate" placeholder="beginDate" />
                        </FormItem>
                        <FormItem label="endDate">
                            <DatePicker v-model:value="item.endDate" placeholder="label" />
                        </FormItem>
                    </Card>
                </template>
            </FormItem>

            <FormItem>
                <Button type="primary" @click="updatePrsonal">
                    update
                </Button>
            </FormItem>
        </Form>
    </Card>
</template>
<script setup lang="ts">
import stores from '@/stores'
import { computed, reactive } from 'vue';
import { Icon } from '@iconify/vue';
import { Input, FormItem, Form, DatePicker, Card, Divider, Select, SelectOption, Textarea, Button } from 'ant-design-vue';
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
        icon: "ci:phone"
    },
    {
        label: "mail",
        icon: "codicon:mail"
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
