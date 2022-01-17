<template>
<div class="hidden">{{store}}</div>
  <router-view />
</template>
<script lang="ts" setup>
import store from './store';
</script>
<style>
#app{
  height: 100vh;
}
</style>