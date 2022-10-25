<template>
    <div class="container mx-auto grid grid-cols-4 gap-4 p-4 ">
        <template v-for="(cv,index) in cvStore.state.cvs" :key="index">
            <div class="border p-4 rounded relative overflow-hidden card grid grid-rows-[max-content,1fr,max-content] min-h-96"
                :class="`bg-${cv.theme.color}-50`">
                <div class="flex justify-between">
                    <div class="">{{cv.title}}</div>
                    <Button type="text" shape="circle" danger @click="openDeleteModal"
                        class="!flex justify-center items-center">
                        <template #icon>
                            <Icon icon="icon-park-outline:close" />
                        </template>
                    </Button>
                </div>
                <div class="">{{cv.about}}</div>
                <Button type="primary" @click="getId(cv._id)" block>
                    View CV
                </Button>
            </div>
        </template>
        <Button type="dashed" class="add-btn !text-6xl !flex justify-center items-center"
            @click="cvStore.createCv(userId)">
            <Icon icon="icon-park-outline:plus" />
        </Button>
        <Modal>

        </Modal>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useCvStore } from '@/stores/CvStore'
import { Button, Modal } from 'ant-design-vue';
import { Icon } from '@iconify/vue';
const route = useRoute()
const cvStore = useCvStore()
const router = useRouter()
const userId = String(route.params.userId)
onMounted(async () => {
    try {
        await cvStore.getAllCv(userId)
    } catch (error) {
        console.log(error);
    }
})


const getId = (cvId: string) => {
    router.push({ name: 'TheSingle', params: { id: userId, cvId: cvId } })
}
const openDeleteModal = () => {

    cvStore.deleteCv(userId, cv._id)
}
</script>
<style>
.add-btn {
    width: 100%;
    height: 100% !important;
    aspect-ratio: 1/1;
}
</style>