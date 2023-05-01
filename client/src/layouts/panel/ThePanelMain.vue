<template>
    <div class="container mx-auto grid grid-cols-4 auto-rows-h-96 gap-4 p-4 overflow-y-scroll">
        <template v-for="(cv, index) in cvStore.state.cvs" :key="index">
            <div class="border p-4 rounded relative overflow-hidden card grid grid-rows-[max-content,1fr,max-content]"
                :class="`bg-${cv.theme.color}-50`">
                <div class="flex justify-between">
                    <div class="">{{ cv.title }}</div>
                    <Button type="text" shape="circle" danger @click="deleteModalHandler(cv._id)"
                        class="!flex justify-center items-center">
                        <template #icon>
                            <Icon icon="icon-park-outline:close" />
                        </template>
                    </Button>
                </div>
                <div>
                    <div class="">{{ cv.about }}</div>
                </div>
                <Button type="primary" @click="getId(cv._id)" block size="large">
                    View CV
                </Button>
            </div>
        </template>
        <Button type="dashed" class="add-btn !text-6xl !flex justify-center items-center "
            @click="cvStore.createCv(userId)">
            <Icon icon="icon-park-outline:plus" />
        </Button>
        <Modal v-model:visible="deleteModalVisibilty">
            <template #title>Warning..</template>
            <p>
                Do you want delete this CV?
            </p>
            <template #footer>
                <Button type="text" @click="deleteModalVisibilty = false">
                    Cancel
                </Button>
                <Button type="primary" @click="deleteCvHandler">
                    Delete
                </Button>
            </template>
        </Modal>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
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
const cvId = ref('')

const deleteModalVisibilty = ref(false)
const deleteModalHandler = (id: string) => {
    cvId.value = id
    deleteModalVisibilty.value = !deleteModalVisibilty.value

}
const deleteCvHandler = () => {
    cvStore.deleteCv(userId, cvId.value)
    deleteModalVisibilty.value = !deleteModalVisibilty.value
}
</script>
<style>
.add-btn {
    width: 100%;
    height: 100% !important;
    aspect-ratio: 1/1;
}

.auto-rows-h-96 {
    grid-auto-rows: 400px;
}
</style>