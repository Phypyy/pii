<template>
  <div class="flex flex-col min-h-screen font-Roboto bg-ui-background">
    <Buttons />
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import Buttons from'./components/Buttons.vue';
import SiteNavigation from "./components/SiteNavigation.vue";
</script>

<style lang="scss" scoped></style>