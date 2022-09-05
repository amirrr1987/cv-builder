<template>
    <Form layout="vertical" class="overflow-y-scroll" :class="[`${prefixCls}`]">
        <Collapse v-model:activeKey="activeKey" accordion>
            <CollapsePanel key="1" :class="[`${prefixCls}__fullname`]">
                <template #header>
                    <span class="header__title">{{ $t('yourName') }}:</span>
                </template>
                <FormItem>
                    <template #label>
                        {{ $t('firstName') }}
                    </template>
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
                <FormItem>
                    <template #label>
                        {{ $t('lastName') }}
                    </template>
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
            <CollapsePanel key="2" :class="[`${prefixCls}__title`]">
                <template #header>
                    <span class="header__title">{{ $t('title') }}:</span>
                </template>
                <FormItem>
                    <template #label>
                        <span class="header__title">
                            {{ $t('title') }}
                        </span>
                    </template>
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
                <FormItem>
                    <template #label>
                        {{ $t('subTitle') }}
                    </template>
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
            <CollapsePanel key="3" :class="[`${prefixCls}__about`]">
                <template #header>
                    <span class="header__title">
                        {{ $t('aboutMe') }}:
                    </span>
                </template>
                <FormItem label="About">
                    <Textarea :rows="5" v-model:value="profile.about" />
                </FormItem>
            </CollapsePanel>
            <CollapsePanel key="4" :class="[`${prefixCls}__contacts`]">
                <template #header>
                    <span class="header__title">{{ $t('contactMe') }}:</span>
                </template>
                <FormItem>
                    <div class="grid grid-cols-[1fr,max-content] gap-1">
                        <draggable tag="div" :list="profile.contacts" class="list-group" handle=".handle"
                            item-key="index" @change="dargHandler">
                            <template #item="{ element, index }">
                                <div class="grid grid-cols-[max-content,1fr] gap-1 mb-3">
                                    <Button type="default" size="small"
                                        class="handle !border-0 !flex justify-center items-center !w-11 !h-10">
                                        <template #icon>
                                            <Icon icon="icon-park-outline:drag" />
                                        </template>
                                    </Button>
                                    <Input v-model:value="element.label" type="text">
                                    <template #prefix>
                                        <Select v-model:value="element.icon" class="">
                                            <template v-for="item in contactIcons">
                                                <SelectOption :value="item.icon"
                                                    class="flex items-center justify-center">
                                                    <Icon :icon="item.icon" />
                                                </SelectOption>
                                            </template>
                                        </Select>
                                    </template>
                                    <template #suffix>
                                        <Button type="text" danger shape="circle"
                                            class="!flex justify-center items-center"
                                            @click.prevent="profileStore.removeContacts(index)">
                                            <template #icon>
                                                <Icon icon="icon-park-outline:minus" />
                                            </template>
                                        </Button>
                                    </template>
                                    </Input>
                                </div>
                            </template>
                        </draggable>
                        <Button type="dashed" block class="col-span-2 !flex justify-center items-center"
                            @click.prevent="profileStore.addContacts">
                            <template #icon>
                                <Icon icon="icon-park-outline:plus" />
                            </template>
                        </Button>
                    </div>
                </FormItem>
            </CollapsePanel>
            <CollapsePanel key="5" :class="[`${prefixCls}__skills-summary`]">
                <template #header>
                    <span class="header__title">{{ $t('skillsSummary') }}:</span>
                </template>
                <FormItem label="Skills Summary">
                    <div class="grid grid-cols-[1fr,max-content] gap-1">
                        <draggable tag="div" :list="profile.skillsSummary" class="list-group" handle=".handle"
                            item-key="index" @change="dargHandler">
                            <template #item="{ element, index }">
                                <div class="grid grid-cols-[max-content,1fr] gap-1 mb-3">
                                    <Button type="default" size="small"
                                        class="handle !border-0 !flex justify-center items-center !w-11 !h-10">
                                        <template #icon>
                                            <Icon icon="icon-park-outline:drag" />
                                        </template>
                                    </Button>
                                    <Input class="" v-model:value="element.label" type="text">
                                    <template #suffix>
                                        <Button type="text" danger shape="circle"
                                            class="!flex justify-center items-center"
                                            @click.prevent="profileStore.removeSkillSummary(index)">
                                            <template #icon>
                                                <Icon icon="icon-park-outline:minus" />
                                            </template>
                                        </Button>
                                    </template>
                                    </Input>
                                </div>
                            </template>
                        </draggable>
                        <Button type="dashed" block class="col-span-2 !flex justify-center items-center"
                            @click.prevent="profileStore.addSkillSummary">
                            <template #icon>
                                <Icon icon="icon-park-outline:plus" />
                            </template>
                        </Button>
                    </div>
                </FormItem>
            </CollapsePanel>
            <CollapsePanel key="6" :class="[`${prefixCls}__educations`]">
                <template #header>
                    <span class="header__title">{{ $t('educations') }}:</span>
                </template>
                <FormItem label="Educations">
                    <div class="grid grid-cols-[1fr,max-content] gap-1">
                        <draggable tag="div" :list="profile.educations" class="list-group" handle=".handle"
                            item-key="index" @change="dargHandler">
                            <template #item="{ element, index }">
                                <div class="grid grid-cols-[max-content,1fr] gap-1 mb-3">
                                    <Button type="default" size="small"
                                        class="handle !border-0 !flex justify-center items-center !w-11 !h-10">
                                        <template #icon>
                                            <Icon icon="icon-park-outline:drag" />
                                        </template>
                                    </Button>
                                    <Input class="" v-model:value="element.label" type="text">
                                    <template #suffix>
                                        <Button type="text" danger shape="circle"
                                            class="!flex justify-center items-center"
                                            @click.prevent="profileStore.removeEducations(index)">
                                            <template #icon>
                                                <Icon icon="icon-park-outline:minus" />
                                            </template>
                                        </Button>
                                    </template>
                                    </Input>
                                </div>
                            </template>
                        </draggable>
                        <Button type="dashed" block class="col-span-2 !flex justify-center items-center"
                            @click.prevent="profileStore.addEducations">
                            <template #icon>
                                <Icon icon="icon-park-outline:plus" />
                            </template>
                        </Button>
                    </div>
                </FormItem>
            </CollapsePanel>
            <CollapsePanel key="7" :class="[`${prefixCls}__tech-experiences`]">
                <template #header>
                    <span class="header__title">{{ $t('teachExperiences') }}:</span>
                </template>
                <FormItem label="Teach Experiences">
                    <div class="grid grid-cols-[1fr,max-content] gap-1">
                        <draggable tag="div" :list="profile.techExperiences" class="list-group" handle=".handle"
                            item-key="index" @change="dargHandler">
                            <template #item="{ element, index }">
                                <div class="grid grid-cols-[max-content,1fr] gap-1 mb-3">
                                    <Button type="default" size="small"
                                        class="handle !border-0 !flex justify-center items-center !w-11 !h-10">
                                        <template #icon>
                                            <Icon icon="icon-park-outline:drag" />
                                        </template>
                                    </Button>
                                    <Input class="" v-model:value="element.label" type="text">
                                    <template #suffix>
                                        <Button type="text" danger shape="circle"
                                            class="!flex justify-center items-center"
                                            @click.prevent="profileStore.removeTechExperiences(index)">
                                            <template #icon>
                                                <Icon icon="icon-park-outline:minus" />
                                            </template>
                                        </Button>
                                    </template>
                                    </Input>
                                </div>
                            </template>
                        </draggable>
                        <Button type="dashed" block class="col-span-2 !flex justify-center items-center"
                            @click.prevent="profileStore.addTechExperiences">
                            <template #icon>
                                <Icon icon="icon-park-outline:plus" />
                            </template>
                        </Button>
                    </div>
                </FormItem>
            </CollapsePanel>
            <CollapsePanel key="8" :class="[`${prefixCls}__socials`]">
                <template #header>
                    <span class="header__title">{{ $t('Social') }}:</span>
                </template>
                <FormItem label="Social">
                    <draggable tag="div" :list="profile.socials" class="list-group" handle=".handle" item-key="index"
                        @change="dargHandler">
                        <template #item="{ element, index }">
                            <div class="grid grid-cols-[max-content,1fr] gap-1 mb-3">
                                <Button type="default" size="small"
                                    class="handle !border-0 !flex justify-center items-center !w-11 !h-10">
                                    <template #icon>
                                        <Icon icon="icon-park-outline:drag" />
                                    </template>
                                </Button>
                                <Input class="mb-1" v-model:value="element.label" type="text">
                                <template #prefix>
                                    <Select v-model:value="element.icon" class="">
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
                            </div>
                        </template>
                    </draggable>
                    <Button type="dashed" block class="col-span-2 !flex justify-center items-center"
                        @click.prevent="profileStore.addSocials">
                        <template #icon>
                            <Icon icon="icon-park-outline:plus" />
                        </template>
                    </Button>
                </FormItem>
            </CollapsePanel>
            <CollapsePanel key="9" :class="[`${prefixCls}__software-knowledges`]">
                <template #header>
                    <span class="header__title">{{ $t('softwareKnowledge') }}:</span>
                </template>
                <div class="grid grid-cols-[max-content,1fr]">
                    <draggable tag="div" :list="profile.softwareKnowledges" class="list-group" handle=".handle"
                        item-key="index" @change="dargHandler">
                        <template #item="{ element, index }">
                            <Button type="ghost" size="small"
                                class="handle !border-0 !flex justify-center items-center !w-11 !h-10">
                                <template #icon>
                                    <Icon icon="icon-park-outline:drag" />
                                </template>
                            </Button>
                        </template>
                    </draggable>
                    <Collapse>
                        <template v-for="(item, index) in profile.softwareKnowledges" :key="index">
                            <CollapsePanel>
                                <template #header>
                                    <span class="header__title">{{ item.label }}</span>
                                </template>
                                <FormItem label="Software Knowledge Title">
                                    <Input v-model:value="item.label" type="text" class="mb-4">
                                    <template #suffix>
                                        <Button type="text" danger shape="circle"
                                            class="!flex justify-center items-center"
                                            @click.prevent="profileStore.removeSoftwareKnowledges">
                                            <template #icon>
                                                <Icon icon="icon-park-outline:minus" />
                                            </template>
                                        </Button>
                                    </template>
                                    {{ item.label }}
                                    </Input>
                                    <div class="grid grid-cols-3 gap-4">
                                        <template v-for="(single, skillIndex) in item.skills" :key="skillIndex">
                                            <Input v-model:value="single.label" type="text">
                                            <template #suffix>
                                                <Button type="text" danger shape="circle"
                                                    class="!flex justify-center items-center"
                                                    @click.prevent="profileStore.removeSoftwareKnowledgesItem(index, skillIndex)">
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
                </div>
                <Button type="dashed" block class="!flex justify-center items-center !h-12"
                    @click.prevent="profileStore.addSoftwareKnowledges">
                    <template #icon>
                        <Icon icon="icon-park-outline:plus" />
                    </template>
                </Button>
            </CollapsePanel>
            <CollapsePanel key="10" :class="[`${prefixCls}__experiences`]">
                <template #header>
                    <span class="header__title">{{ $t('experiences') }}::</span>
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
            <CollapsePanel key="11" :class="[`${prefixCls}__theme`]">
                <template #header>
                    <span class="header__title">{{ $t('theme') }}:</span>
                </template>
                <FormItem>
                    <template #label>
                        {{ $t('color') }}
                    </template>
                    <RadioGroup v-model:value="profile.theme.color" class="space-3">
                        <!-- <div class="grid grid-cols-5 gap-3"> -->
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
                        <!-- </div> -->
                    </RadioGroup>
                </FormItem>
                <FormItem>
                    <template #label>
                        {{ $t('font') }}
                    </template>
                    <Select v-model:value="profile.theme.font" :class="`font-${profile.theme.font}`">
                        <SelectOption value="sofia" class="font-sofia">Sofia</SelectOption>
                        <SelectOption value="roboto" class="font-roboto">Roboto</SelectOption>
                        <SelectOption value="spaceMono" class="font-spaceMono">Space Mono</SelectOption>
                        <SelectOption value="calibri" class="font-calibri">Calibri</SelectOption>
                        <SelectOption value="helvetica" class="font-helvetica">Helvetica</SelectOption>
                        <SelectOption value="georgia" class="font-georgia">Georgia</SelectOption>
                        <SelectOption value="vazir" class="font-vazir">Vazir</SelectOption>
                    </Select>
                </FormItem>
            </CollapsePanel>
        </Collapse>
    </Form>
</template>
<script setup lang="ts">
import stores from '@/stores'
import { computed, reactive } from 'vue';
import { Icon } from '@iconify/vue';
import { Input, FormItem, Form, DatePicker, Select, SelectOption, Textarea, Button, Collapse, CollapsePanel, message, Dropdown, Menu, RadioGroup, RadioButton } from 'ant-design-vue';
import { PlusOutlined, LoadingOutlined } from '@ant-design/icons-vue';
import { ref } from 'vue';
import type { UploadChangeParam, UploadProps } from 'ant-design-vue';
import draggable from 'vuedraggable'
import { useDesign } from "@/utils";
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
const dargHandler = (id: any) => {
    console.log(id);
    profile.value.contacts.forEach((item, index) => {
        index = index + 1
    })
}
const { prefixCls } = useDesign('the-side')
</script>
<style lang="less">
@prefix: ~'amirmaghami-the-side';
.@{prefix} {
    &__fullname {
        .ant-collapse-header {
            justify-content: space-between;
            align-items: center !important;
            &>div {
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .header__title {
                order: -1;
            }
        }
    }
    &__title {
        .ant-collapse-header {
            justify-content: space-between;
            align-items: center !important;
            &>div {
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .header__title {
                order: -1;
            }
        }
    }
    &__about {
        .ant-collapse-header {
            justify-content: space-between;
            align-items: center !important;
            &>div {
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .header__title {
                order: -1;
            }
        }
    }
    &__contacts {
        .ant-collapse-header {
            justify-content: space-between;
            align-items: center !important;
            &>div {
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .header__title {
                order: -1;
            }
        }
        .ant-select-selection-item {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .ant-input-prefix {
            width: 4rem;
            transform: translateX(-10px);
        }
        .ant-select-selector {
            border: 0 !important;
        }
    }
    &__skills-summary {
        .ant-collapse-header {
            justify-content: space-between;
            align-items: center !important;
            &>div {
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .header__title {
                order: -1;
            }
        }
    }
    &__educations {
        .ant-collapse-header {
            justify-content: space-between;
            align-items: center !important;
            &>div {
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .header__title {
                order: -1;
            }
        }
    }
    &__tech-experiences {
        .ant-collapse-header {
            justify-content: space-between;
            align-items: center !important;
            &>div {
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .header__title {
                order: -1;
            }
        }
    }
    &__socials {
        .ant-collapse-header {
            justify-content: space-between;
            align-items: center !important;
            &>div {
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .header__title {
                order: -1;
            }
        }
        .ant-select-selection-item {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .ant-input-prefix {
            width: 4rem;
            transform: translateX(-10px);
        }
        .ant-select-selector {
            border: 0 !important;
        }
    }
    &__software-knowledges {
        .ant-collapse-header {
            justify-content: space-between;
            // align-items: center !important;
            &>div {
                //     display: flex;
                //     justify-content: center;
                //     align-items: center;
            }
            .header__title {
                order: -1;
            }
        }
        .amirmaghami-the-side__software-knowledges-item {
            .ant-collapse-header {
                // justify-content: space-between;
                // align-items: center !important;
                &>div {
                    // display: flex;
                    // justify-content: center;
                    // align-items: center;
                }
                .header__title {
                    // order: -1;
                }
            }
        }
    }
    &__experiences {
        .ant-collapse-header {
            justify-content: space-between;
            align-items: center !important;
            &>div {
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .header__title {
                order: -1;
            }
        }
    }
    &__theme {
        .ant-collapse-header {
            justify-content: space-between;
            align-items: center !important;
            &>div {
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .header__title {
                order: -1;
            }
        }
        .ant-radio-group>label {
            margin: 0.2rem;
        }
    }
}

</style>