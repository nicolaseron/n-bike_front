<template>
  <header class="bg-gray-100">
    <div class="border-b border-gray-200 py-5 px-10">
      <div class="flex items-center justify-between max-w-7xl mx-auto">
        <nuxt-link to="#">
          <NuxtImg src="/logo/n-bike-logo.png" class="w-64" alt="logo"/>
        </nuxt-link>
        <div class="space-x-5">
          <nuxt-link to="#"><i class="icon icon-user text-2xl"></i></nuxt-link>
          <nuxt-link to="#"><i class="icon icon-bag-shopping text-2xl"></i></nuxt-link>
        </div>
      </div>
    </div>
    <div>
      <nav class="flex items-center justify-between max-w-2xl mx-auto px-16 py-3 font-semibold">
        <nuxt-link to="#">VTT</nuxt-link>
        <nuxt-link to="#">Route</nuxt-link>
        <nuxt-link to="#">VAE</nuxt-link>
        <nuxt-link to="#">Gravel</nuxt-link>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>