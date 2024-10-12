<template>
  <header class="bg-gray-100 w-full top-0 z-10" :class="{'header-up': scrollToDown}">
    <div class="border-b border-gray-200 py-4 px-2 xs:px-10">
      <div class="flex items-center justify-between max-w-7xl mx-auto">
        <nuxt-link to="/" class="w-3/6 xs:w-2/6 max-w-80">
          <NuxtImg src="/logo/n-bike-logo.png" alt="logo"/>
        </nuxt-link>
        <div class="space-x-5">
          <nuxt-link to="#"><i class="icon icon-user text-2xl"></i></nuxt-link>
          <nuxt-link to="/Cart"><i class="icon icon-bag-shopping text-2xl"></i></nuxt-link>
        </div>
      </div>
    </div>
    <div>
      <nav
          class="hidden max-w-4xl mx-auto px-5 s:px-16 py-3 font-semibold sm:flex items-center justify-between gap-x-6">
        <nuxt-link to="/categories/chrono">Chrono</nuxt-link>
        <nuxt-link to="/categories/vtt">VTT</nuxt-link>
        <nuxt-link to="/categories/road">Route</nuxt-link>
        <nuxt-link to="/categories/gravel">Gravel</nuxt-link>
        <nuxt-link to="/categories/child" class="text-nowrap">Vélos pour enfants</nuxt-link>
        <nuxt-link to="/categories/equipments" class="text-nowrap">Équipement et accessoires</nuxt-link>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import {useRoute} from 'vue-router';

const route = useRoute();
let lastScrollTop = ref(0);
const scrollToDown = ref(false);

const handleScroll = () => {
  scrollToDown.value = window.scrollY > lastScrollTop.value;
  lastScrollTop.value = window.scrollY;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});

watch(() => route.fullPath, () => {
  scrollToDown.value = false;
});

</script>

<style scoped>
header {
  transition: transform 0.5s ease;
}

.header-up {
  transform: translateY(-160px);
}

</style>