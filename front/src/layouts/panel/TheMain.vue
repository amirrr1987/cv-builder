<template>
    <template v-for="(cv, index) in cvStore.state.cv">
        <div class="container mx-auto">
            <div class="bg-red-500 w-40" @click="getId(cv._id)">
                {{index}}
            </div>
        </div>
    </template>

</template>
<script setup lang="ts">
import { useCvStore } from '@/stores/CvStore';
import { useRouter } from 'vue-router';
const cvStore = useCvStore()
const router = useRouter()
const getId = (id: string) => {
    router.push({ name: 'TheSingle', params: { cvId: id } })
}
</script>