<template>
  <nav class="py-3 border-b relative z-50">
    <div class="mx-auto px-3">
      <div class="flex justify-between items-center">
        logo

        <div class="flex gap-x-4">
          <Button type="primary" v-print="'#printMe'"> Print CV </Button>
          <Button type="primary" @click="UpdateCV" > Update CV </Button>
          <Dropdown>
            <Button
              type="ghost"
              class="!flex items-center justify-center"
            >
              <template #icon>
                <Icon icon="iconoir:settings" />
              </template>
            </Button>
            <template #overlay>
              <Menu>
                <MenuItem>
                  <div class="flex gap-x-3 items-center"></div>
                </MenuItem>
                <MenuItem>
                  <div class="flex gap-x-3 items-center">Persian</div>
                </MenuItem>
              </Menu>
            </template>
          </Dropdown>
        </div>
      </div>
    </div>
  </nav>
</template>
<script setup lang="ts">
import { Dropdown, Menu, MenuItem, Button } from "ant-design-vue";
import { Icon } from "@iconify/vue";
import { useCvStore } from "@/stores/CvStore";
import { useRoute } from "vue-router";

const route = useRoute();
const userId = String(route.params.userId);
const cvId = String(route.params.cvId);
const cvStore = useCvStore();
const UpdateCV = () => {
  cvStore.updateCv(userId, cvId);
};
</script>
