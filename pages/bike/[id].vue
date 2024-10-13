<template>
  <main class="max-w-[1500px] mx-auto p-3 sm:p-10 sm:pb-0">
    <div v-if="bike">
      <div class="flex flex-col sm:flex-row gap-x-20">
        <div class="flex-1 min-w-96 reveal reveal-left-400">
          <swiper-container :navigation="true">
            <swiper-slide v-for="image in bike.images" :key="image">
              <nuxt-picture :src="image.url" :alt="image.description" class="w-full h-full"
                            :img-attrs="{class : 'w-full h-full object-cover'}"></nuxt-picture>
            </swiper-slide>
          </swiper-container>
        </div>
        <div class="flex-1 space-y-4 mt-3 sm:mt-0 reveal reveal-right-400">
          <h1 class="text-h3">{{ bike.brandName }}</h1>
          <p class="text-h4">{{ bike.model }}</p>
          <p class="text-h5">€ {{ bike.sales_price }}</p>
          <p class="max-w-xl">{{ bike.description }}</p>
          <p class="text-h6">Tailles disponibles en stock&nbsp;:</p>
          <div class="flex items-center gap-x-3">
            <div class="border border-black" v-for="bike in bikeByModel">
              <p class=" px-1 sm:py-1 sm:px-2 flex justify-center items-center">{{ bike.size }}</p>
            </div>
          </div>
          <button @click="addItems" class="btn-black flex items-center text-nowrap">Ajouter au panier <i
              class="icon icon-bucket ml-2"></i></button>
        </div>
      </div>
      <div class="mt-20 sm:mt-10">
        <div class="reveal reveal-right-400">
          <h2 class="text-h2 my-10">Spécifications</h2>
          <div class="space-y-3">
            <p><span class="font-semibold">Catégories :</span>
              {{ bike.category.name.charAt(0).toUpperCase() + bike.category.name.slice(1) }}</p>
            <p><span class="font-semibold">Cadre :</span> {{ bike.frame.charAt(0).toUpperCase() + bike.frame.slice(1) }}
            </p>
            <p><span class="font-semibold">Transmission :</span> {{ bike.transmission }}</p>
            <p><span class="font-semibold">Électrique :</span> {{ bike.electric ? "Oui" : "Non" }}</p>
          </div>
        </div>
        <div class="reveal reveal-right-400">
          <h2 class="text-h2 my-10">Géométrie</h2>
          <div class="max-w-5xl px-5 mx-auto">
            <nuxt-picture :src="bike.geometry_img_url" alt="Géométrie du vélo" class="max-w-52"></nuxt-picture>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import {register} from "swiper/element/bundle";

const {$toast} = useNuxtApp();
register();
useRevealTransitionItems();


const route = useRoute()
const idBike = route.params.id;
const {data: bike} = await useFetch(`http://localhost:9000/bike/${idBike}`)
const {data: bikeByModel} = await useFetch(`http://localhost:9000/bike/getBikeSizeByModel/${idBike}`)
const addItems = () => {
  addItemToLocalStorage(bike.value)
  $toast.success("L'article à bien été ajouté au panier !");
}
</script>

<style scoped>

</style>