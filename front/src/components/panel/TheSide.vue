<template>
    <!-- <Card > -->
    <Form layout="vertical" class="overflow-y-scroll !p-5">
        <FormItem label="Image">
            <Upload v-model:value="profile.image" name="avatar" list-type="picture-card" class="avatar-uploader"
                :show-upload-list="false" action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                :before-upload="beforeUpload" @change="handleChange">
                <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
                <div v-else>
                    <loading-outlined v-if="loading"></loading-outlined>
                    <plus-outlined v-else></plus-outlined>
                    <div class="ant-upload-text">Upload</div>
                </div>
            </Upload>
        </FormItem>
        <Divider />
        <div class="grid grid-cols-2 gap-4">
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
        </div>
        <Divider />
        <div class="grid grid-cols-2 gap-4">
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
        </div>


        <FormItem label="About">
            <Textarea :rows="5" v-model:value="profile.about" />
        </FormItem>
        <Divider />
        <FormItem>
            <template #label>
                <span>Contacts</span>
                <Button type="text" shape="circle" class="!flex justify-center items-center"
                    @click.prevent="profileStore.addContacts">
                    <template #icon>
                        <Icon icon="icon-park-outline:plus" />
                    </template>
                </Button>
            </template>
            <div class="grid grid-cols-[1fr,max-content] gap-1">
                <template v-for="(item, index) in profile.contacts" :key="index">
                    <Input class="col-span-2" v-model:value="item.label" type="text">
                    <template #prefix>
                        <Select v-model="item.icon" class="">
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
            </div>
        </FormItem>
        <Divider />
        <FormItem>
            <template #label>
                <span>Skills Summary</span>
                <Button type="text" shape="circle" class="!flex justify-center items-center"
                    @click.prevent="profileStore.addSkillSummary">
                    <template #icon>
                        <Icon icon="icon-park-outline:plus" />
                    </template>
                </Button>
            </template>
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
            </div>
        </FormItem>
        <Divider />
        <FormItem>
            <template #label>
                <span>Educations</span>
                <Button type="text" shape="circle" class="!flex justify-center items-center"
                    @click.prevent="profileStore.addEducations">
                    <template #icon>
                        <Icon icon="icon-park-outline:plus" />
                    </template>
                </Button>
            </template>
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
            </div>
        </FormItem>
        <Divider />
        <FormItem>
            <template #label>
                <span>Teach Experiences</span>
                <Button type="text" shape="circle" class="!flex justify-center items-center"
                    @click.prevent="profileStore.addTechExperiences">
                    <template #icon>
                        <Icon icon="icon-park-outline:plus" />
                    </template>
                </Button>
            </template>
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
            </div>
        </FormItem>
        <Divider />
        <FormItem>
            <template #label>
                <span>Social</span>
                <Button type="text" shape="circle" class="!flex justify-center items-center"
                    @click.prevent="profileStore.addSocials">
                    <template #icon>
                        <Icon icon="icon-park-outline:plus" />
                    </template>
                </Button>
            </template>
            <template v-for="(item, index) in profile.socials" :key="index">

                <Input class=" mb-1" v-model:value="item.label" type="text">

                <template #prefix>
                    <Select v-model="item.icon" class="">
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
        </FormItem>
        <Divider />
        <FormItem>
            <template #label>
                <span>Experiences</span>
                <Button type="text" shape="circle" class="!flex justify-center items-center"
                    @click.prevent="profileStore.addExperiences">
                    <template #icon>
                        <Icon icon="icon-park-outline:plus" />
                    </template>
                </Button>
            </template>
            <template v-for="(item, index) in profile.experiences" :key="index">
                <Card class="!bg-gray-50 relative">
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
                        <Textarea :rows="5" v-model:value="item.description" type="text" placeholder="label" />
                    </FormItem>
                    <FormItem label="Skills">
                        <div class="grid grid-cols-2 gap-2">
                            <template v-for="(single, skillIndex) in item.skills" :key="skillIndex">
           


                                <Input class=" mb-1" v-model:value="single.label" type="text">


                                <template #suffix>
                                    <Button type="text" danger shape="circle" class="!flex justify-center items-center"
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
                    <!-- <div class="flex gap-x-3">
                            <FormItem label="Begin Date">
                                <DatePicker v-model:value="item.beginDate" placeholder="label" />
                            </FormItem>
                            <FormItem label="End Date">
                                <DatePicker v-model:value="item.endDate" placeholder="label" />
                            </FormItem>
                        </div> -->
                </Card>
            </template>
        </FormItem>

        <FormItem>
            <Button type="primary" @click="updatePrsonal">
                update
            </Button>
        </FormItem>
    </Form>
    <!-- </Card> -->
</template>
<script setup lang="ts">
import stores from '@/stores'
import { computed, reactive } from 'vue';
import { Icon } from '@iconify/vue';
import { Input, FormItem, Form, DatePicker, Card, Divider, Select, SelectOption, Textarea, Button, Upload } from 'ant-design-vue';
import { PlusOutlined, LoadingOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';
import { ref } from 'vue';
import type { UploadChangeParam, UploadProps } from 'ant-design-vue';

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

// const beforeUpload = (file: UploadProps['fileList'][number]) => {
//     const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
//     if (!isJpgOrPng) {
//         message.error('You can only upload JPG file!');
//     }
//     const isLt2M = file.size / 1024 / 1024 < 2;
//     if (!isLt2M) {
//         message.error('Image must smaller than 2MB!');
//     }
//     return isJpgOrPng && isLt2M;
// };

</script>
<style >



.ant-col.ant-form-item-label label {
    display: flex;
    justify-content: space-between;
}

.ant-collapse-header {
    display: grid !important;
    grid-template-columns: max-content 1fr max-content;
}

span.ant-select-selection-item {
    display: flex;
    justify-content: center;
    align-items: center;
}
span.ant-input-prefix {
    width: 4rem;
    transform: translateX(-10px);
}
.ant-select-selector{
    border: 0 !important;
}
</style>