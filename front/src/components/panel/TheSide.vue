<template>
    <Form layout="vertical" class="overflow-y-scroll">
        <Collapse v-model:activeKey="activeKey" accordion>
            <CollapsePanel key="1">
                <template #header>
                    <span class="header__title">Your name:</span>
                </template>
                <FormItem label="First">
                    <Input v-model:value="profile.fullName.first">
                    <template #suffix>
                        <Button @click="profile.fullName.first = ''" type="text" danger size="small" shape="circle"
                            class="!flex justify-center items-center">
                            <template #icon>
                                <Icon icon="icon-park-outline:close" />
                            </template>
                        </Button>
                    </template>
                    </Input>
                </FormItem>
                <FormItem label="Last">
                    <Input v-model:value="profile.fullName.last">
                    <template #suffix>
                        <Button @click="profile.fullName.last = ''" type="text" danger size="small" shape="circle"
                            class="!flex justify-center items-center">
                            <template #icon>
                                <Icon icon="icon-park-outline:close" />
                            </template>
                        </Button>
                    </template>
                    </Input>
                </FormItem>
            </CollapsePanel>
            <CollapsePanel key="2">
                <template #header>
                    <span class="header__title">Title:</span>
                </template>
                <FormItem label="Title">
                    <Input v-model:value="profile.title">
                    <template #suffix>
                        <Button @click="profile.title = ''" type="text" danger size="small" shape="circle"
                            class="!flex justify-center items-center">
                            <template #icon>
                                <Icon icon="icon-park-outline:close" />
                            </template>
                        </Button>
                    </template>
                    </Input>
                </FormItem>
                <FormItem label="SubTitle">
                    <Input v-model:value="profile.subTitle">
                    <template #suffix>
                        <Button @click="profile.subTitle = ''" type="text" danger size="small" shape="circle"
                            class="!flex justify-center items-center">
                            <template #icon>
                                <Icon icon="icon-park-outline:close" />
                            </template>
                        </Button>
                    </template>
                    </Input>
                </FormItem>
            </CollapsePanel>
            <CollapsePanel key="3">
                <template #header>
                    <span class="header__title">About:</span>
                </template>
                <FormItem label="About">
                    <Textarea :rows="5" v-model:value="profile.about" />
                </FormItem>
            </CollapsePanel>
            <CollapsePanel key="4">
                <template #header>
                    <span class="header__title">Contacts:</span>
                </template>
                <FormItem label="Contacts">
                    <div class="grid grid-cols-[1fr,max-content] gap-1">
                        <template v-for="(item, index) in profile.contacts" :key="index">
                            <Input class="col-span-2" v-model:value="item.label" type="text">
                            <template #prefix>
                                <Select v-model:value="item.icon" class="">
                                    <template v-for="item in contactIcons">
                                        <SelectOption :value="item.icon" class="flex items-center justify-center">
                                            <Icon :icon="item.icon" />
                                        </SelectOption>
                                    </template>
                                </Select>
                            </template>
                            <template #suffix>
                                <Button type="text" danger shape="circle" class="!flex justify-center items-center"
                                    @click.prevent="profileStore.removeContacts(index)">
                                    <template #icon>
                                        <Icon icon="icon-park-outline:minus" />
                                    </template>
                                </Button>
                            </template>
                            </Input>
                        </template>
                        <Button type="dashed" block class="col-span-2 !flex justify-center items-center"
                            @click.prevent="profileStore.addContacts">
                            <template #icon>
                                <Icon icon="icon-park-outline:plus" />
                            </template>
                        </Button>
                    </div>
                </FormItem>
            </CollapsePanel>
            <CollapsePanel key="5">
                <template #header>
                    <span class="header__title">Skills Summary:</span>
                </template>
                <FormItem label="Skills Summary">
                    <div class="grid grid-cols-[1fr,max-content] gap-1">
                        <template v-for="(item, index) in profile.skillsSummary" :key="index">
                            <Input class="col-span-2" v-model:value="item.label" type="text">
                            <template #suffix>
                                <Button type="text" danger shape="circle" class="!flex justify-center items-center"
                                    @click.prevent="profileStore.removeSkillSummary(index)">
                                    <template #icon>
                                        <Icon icon="icon-park-outline:minus" />
                                    </template>
                                </Button>
                            </template>
                            </Input>
                        </template>
                        <Button type="dashed" block class="col-span-2 !flex justify-center items-center"
                            @click.prevent="profileStore.addSkillSummary">
                            <template #icon>
                                <Icon icon="icon-park-outline:plus" />
                            </template>
                        </Button>
                    </div>
                </FormItem>
            </CollapsePanel>
            <CollapsePanel key="6">
                <template #header>
                    <span class="header__title">Educations:</span>
                </template>
                <FormItem label="Educations">
                    <div class="grid grid-cols-[1fr,max-content] gap-1">
                        <template v-for="(item, index) in profile.educations" :key="index">
                            <Input class="col-span-2" v-model:value="item.label" type="text">
                            <template #suffix>
                                <Button type="text" danger shape="circle" class="!flex justify-center items-center"
                                    @click.prevent="profileStore.removeEducations(index)">
                                    <template #icon>
                                        <Icon icon="icon-park-outline:minus" />
                                    </template>
                                </Button>
                            </template>
                            </Input>
                        </template>
                        <Button type="dashed" block class="col-span-2 !flex justify-center items-center"
                            @click.prevent="profileStore.addEducations">
                            <template #icon>
                                <Icon icon="icon-park-outline:plus" />
                            </template>
                        </Button>
                    </div>
                </FormItem>
            </CollapsePanel>
            <CollapsePanel key="7">
                <template #header>
                    <span class="header__title">Teach Experiences:</span>
                </template>
                <FormItem label="Teach Experiences">
                    <div class="grid grid-cols-[1fr,max-content] gap-1">
                        <template v-for="(item, index) in profile.techExperiences" :key="index">
                            <Input class="col-span-2" v-model:value="item.label" type="text">
                            <template #suffix>
                                <Button type="text" danger shape="circle" class="!flex justify-center items-center"
                                    @click.prevent="profileStore.removeTechExperiences(index)">
                                    <template #icon>
                                        <Icon icon="icon-park-outline:minus" />
                                    </template>
                                </Button>
                            </template>
                            </Input>
                        </template>
                        <Button type="dashed" block class="col-span-2 !flex justify-center items-center"
                            @click.prevent="profileStore.addTechExperiences">
                            <template #icon>
                                <Icon icon="icon-park-outline:plus" />
                            </template>
                        </Button>
                    </div>
                </FormItem>
            </CollapsePanel>
            <CollapsePanel key="8">
                <template #header>
                    <span class="header__title">Social:</span>
                </template>
                <FormItem label="Social">
                    <template v-for="(item, index) in profile.socials" :key="index">
                        <Input class=" mb-1" v-model:value="item.label" type="text">
                        <template #prefix>
                            <Select v-model:value="item.icon" class="">
                                <template v-for="item in contactIcons" :key="index">
                                    <SelectOption :value="item.icon" class="flex items-center justify-center">
                                        <Icon :icon="item.icon" />
                                    </SelectOption>
                                </template>
                            </Select>
                        </template>
                        <template #suffix>
                            <Button type="text" danger shape="circle" class="!flex justify-center items-center"
                                @click.prevent="profileStore.removeSocials(index)">
                                <template #icon>
                                    <Icon icon="icon-park-outline:minus" />
                                </template>
                            </Button>
                        </template>
                        </Input>
                    </template>
                    <Button type="dashed" block class="col-span-2 !flex justify-center items-center"
                        @click.prevent="profileStore.addSocials">
                        <template #icon>
                            <Icon icon="icon-park-outline:plus" />
                        </template>
                    </Button>
                </FormItem>
            </CollapsePanel>
            <CollapsePanel key="9">
                <template #header>
                    <span class="header__title">Software Knowledge:</span>
                </template>
                <Collapse>
                    <template v-for="(item, index) in profile.softwareKnowledges" :key="index">
                        <CollapsePanel>
                <template #header>
                    <span class="header__title">{{item.label}}</span>
                </template>
                            <FormItem label="Software Knowledge">
                                <Input v-model:value="item.label" type="text" class="mb-4">
                                <template #suffix>
                                    <Button type="text" danger shape="circle" class="!flex justify-center items-center"
                                        @click.prevent="profileStore.removeSoftwareKnowledges">
                                        <template #icon>
                                            <Icon icon="icon-park-outline:minus" />
                                        </template>
                                    </Button>
                                </template>
                                {{ item.label }}
                                </Input>
                                <div class="grid grid-cols-3 gap-4">
                                    <template v-for="(single,skillIndex) in item.skills" :key="skillIndex">
                                        <Input v-model:value="single.label" type="text">
                                        <template #suffix>
                                            <Button type="text" danger shape="circle"
                                                class="!flex justify-center items-center"
                                                @click.prevent="profileStore.removeSoftwareKnowledgesItem(index,skillIndex)">
                                                <template #icon>
                                                    <Icon icon="icon-park-outline:minus" />
                                                </template>
                                            </Button>
                                        </template>
                                        {{ item.label }}
                                        </Input>
                                    </template>
                                        <Button type="dashed" block class="!flex justify-center items-center"
                                            @click.prevent="profileStore.addSoftwareKnowledgesItem(index)">
                                            <template #icon>
                                                <Icon icon="icon-park-outline:plus" />
                                            </template>
                                        </Button>
                                </div>
                            </FormItem>
                        </CollapsePanel>
                    </template>
                </Collapse>
            </CollapsePanel>
            <CollapsePanel key="10">
                <template #header>
                    <span class="header__title">Experiences:</span>
                </template>
                <FormItem>
                    <template #label>
                        <span>Experiences</span>
                    </template>
                    <Collapse>
                        <template v-for="(item, index) in profile.experiences" :key="index">
                            <CollapsePanel>
                                <template #header>
                                    <span class="header__title">
                                        {{ item.title }} at
                                        {{ item.company.name }}
                                    </span>
                                </template>
                                <Button type="text" danger shape="circle"
                                    class="!absolute right-0 top-0 !flex justify-center items-center"
                                    @click.prevent="profileStore.removeExperiences(index)">
                                    <template #icon>
                                        <Icon icon="icon-park-outline:close" />
                                    </template>
                                </Button>
                                <FormItem label="Title">
                                    <Input v-model:value="item.title" type="text" placeholder="label" />
                                </FormItem>
                                <FormItem label="Company name">
                                    <Input v-model:value="item.company.name" type="text" placeholder="label" />
                                </FormItem>
                                <FormItem label="Company url">
                                    <Input v-model:value="item.company.url" type="text" placeholder="label" />
                                </FormItem>
                                <FormItem label="Description">
                                    <Textarea :rows="5" v-model:value="item.description" type="text"
                                        placeholder="label" />
                                </FormItem>
                                <FormItem label="Skills">
                                    <div class="grid grid-cols-2 gap-2">
                                        <template v-for="(single, skillIndex) in item.skills" :key="skillIndex">
                                            <Input class=" mb-1" v-model:value="single.label" type="text">
                                            <template #suffix>
                                                <Button type="text" danger shape="circle"
                                                    class="!flex justify-center items-center"
                                                    @click.prevent="profileStore.removeExperiencesSkill(item.company.name, skillIndex)">
                                                    <template #icon>
                                                        <Icon icon="icon-park-outline:minus" />
                                                    </template>
                                                </Button>
                                            </template>
                                            </Input>
                                        </template>
                                        <Button type="dashed" block class="!flex justify-center items-center"
                                            @click.prevent="profileStore.addExperiencesSkills(index)">
                                            <template #icon>
                                                <Icon icon="icon-park-outline:plus" />
                                            </template>
                                        </Button>
                                    </div>
                                </FormItem>

                                      
                                <div class="flex gap-x-3">
                                    <FormItem label="Begin Date">
                                    <DatePicker v-model:value="item.beginDate" placeholder="label" />
                                    </FormItem>
                                    <FormItem label="End Date">
                                    <DatePicker v-model:value="item.endDate" placeholder="label" />
                                    </FormItem>
                                </div>
                              
                       
                            </CollapsePanel>
                        </template>
                    </Collapse>
                    <Button type="dashed" block class="!flex justify-center items-center"
                        @click.prevent="profileStore.addExperiences">
                        <template #icon>
                            <Icon icon="icon-park-outline:plus" />
                        </template>
                    </Button>
                </FormItem>
            </CollapsePanel>
        </Collapse>
    </Form>
</template>
<script setup lang="ts">
import stores from '@/stores'
import { computed, reactive } from 'vue';
import { Icon } from '@iconify/vue';
import { Input, FormItem, Form, DatePicker, Card, Divider, Select, SelectOption, Textarea, Button, Upload, Collapse, CollapsePanel, message } from 'ant-design-vue';
import { PlusOutlined, LoadingOutlined } from '@ant-design/icons-vue';
import { ref } from 'vue';
import type { UploadChangeParam, UploadProps } from 'ant-design-vue';
const profileStore = stores.useProfileStore()
const profile = computed(() => {
    return profileStore.$state.profile
})
const activeKey = ref([]);
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
function getBase64(img: Blob, callback: (base64Url: string) => void) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result as string));
    reader.readAsDataURL(img);
}
// const fileList = ref([]);
const loading = ref<boolean>(false);
const imageUrl = ref<string>('');
const handleChange = (info: UploadChangeParam) => {
    if (info.file.status === 'uploading') {
        loading.value = true;
        return;
    }
    if (info.file.status === 'done') {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, (base64Url: string) => {
            imageUrl.value = base64Url;
            loading.value = false;
        });
    }
    if (info.file.status === 'error') {
        loading.value = false;
        message.error('upload error');
    }
};
</script>
<style lang="less">
.ant-collapse {
    background-color: #F1F1F1 !important;
    border-radius: 0 !important;
}
.ant-collapse-header {
    justify-content: space-between;
    align-items: center;
    div {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .header__title {
        order: -1;
    }
}
.ant-col.ant-form-item-label label {
    display: flex;
    justify-content: space-between;
}
// .ant-collapse-header {
//     display: grid !important;
//     grid-template-columns: max-content 1fr max-content;
// }
span.ant-select-selection-item {
    display: flex;
    justify-content: center;
    align-items: center;
}
span.ant-input-prefix {
    width: 4rem;
    transform: translateX(-10px);
}
.ant-select-selector {
    border: 0 !important;
}
</style>