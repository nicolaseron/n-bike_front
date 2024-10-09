<template>
  <footer class="bg-gray-100 text-center">
    <hr>
    <nuxt-link to="/" class="w-3/6 xs:w-2/6 max-w-52">
      <NuxtImg src="/logo/n-bike-logo.png" alt="logo" class="mx-auto py-10"/>
    </nuxt-link>
    <div class="flex justify-center flex-col sm:flex-row gap-x-16 gap-y-10 px-5 text-nowrap">
      <div class="flex flex-col items-start">
        <h3 class="text-h6 uppercase">Categories</h3>
        <span>-</span>
        <nuxt-link to="/categories/chrono" class="hover:underline">Chrono</nuxt-link>
        <nuxt-link to="/categories/vtt" class="hover:underline">VTT</nuxt-link>
        <nuxt-link to="/categories/road" class="hover:underline">Route</nuxt-link>
        <nuxt-link to="/categories/gravel" class="hover:underline">Gravel</nuxt-link>
        <nuxt-link to="/categories/child" class="hover:underline">Vélos pour enfants</nuxt-link>
        <nuxt-link to="/categories/equipments" class="hover:underline">Équipements et accessoires</nuxt-link>
      </div>
      <div class="flex flex-col items-start">
        <h3 class="text-h6 uppercase">Service Client</h3>
        <span>-</span>
        <nuxt-link to="/" class="hover:underline">Aide</nuxt-link>
        <nuxt-link to="/" class="hover:underline">Contact</nuxt-link>
        <nuxt-link to="/" class="hover:underline">Newsletter</nuxt-link>
        <nuxt-link to="/" class="hover:underline">Gestion des cookies</nuxt-link>
        <nuxt-link to="/" class="hover:underline">Conditions générales</nuxt-link>
      </div>
      <div class="flex flex-col items-start">
        <h3 class="text-h6 uppercase">À propose de nous</h3>
        <span>-</span>
        <nuxt-link to="/" class="hover:underline">Histoire</nuxt-link>
        <nuxt-link to="/" class="hover:underline">Carrières</nuxt-link>
        <nuxt-link to="/" class="hover:underline">Mentions légales</nuxt-link>
        <nuxt-link to="/" class="hover:underline">Politique de confidentialité</nuxt-link>
      </div>
    </div>
    <h4 class="text-h4 mt-5 mb-2">Suivez nous</h4>
    <div class="flex justify-center items-center gap-x-2 pb-5">
      <nuxt-link to="/">
        <i class="icon icon-facebook text-4xl hover:bg-blue transition-colors duration-500"></i>
      </nuxt-link>
      <nuxt-link to="/">
        <i class="icon icon-twitter text-4xl hover:bg-gray-500 transition-colors duration-500"></i>
      </nuxt-link>
      <nuxt-link to="/">
        <i class="icon icon-instagram text-4xl hover:bg-pink transition-colors duration-500"></i>
      </nuxt-link>
      <nuxt-link to="/">
        <i class="icon icon-youtube text-4xl hover:bg-red transition-colors duration-500"></i>
      </nuxt-link>
    </div>
  </footer>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>