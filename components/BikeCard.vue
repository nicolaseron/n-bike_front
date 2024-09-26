<template>
  <div class="w-40 sm:w-80 md:w-96">
    <nuxt-link to="#" class="bike-card">
      <div class="bg-lightGray p-2 sm:p-4 rounded-2xl shadow-lg shadow-gray-200">
        <div class="flex justify-between items-center pb-2">
          <p class="font-semibold text-sm sm:text-xl uppercase">{{ brand }}</p>
          <div class="border border-black ">
            <p class=" px-1 sm:py-1 sm:px-2 flex justify-center items-center">{{ size }}</p>
          </div>
        </div>
        <nuxt-picture :src="imgUrl" lazy="true" class=""
                      :img-attrs="{class : 'mx-auto max-h-20  sm:max-h-40 w-full  object-cover'}"></nuxt-picture>
        <div class="flex items-center gap-x-2">
          <p class="font-semibold py-2 inline-block overflow-hidden relative bike-model text-nowrap">{{ model }}</p>
          <i v-if="isElectric" class="icon icon-bolt bg-yellow"></i>
        </div>
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <p>€ {{ price }}</p>
          <p class="text-nowrap">{{ stock }} en stock</p>
        </div>
      </div>
    </nuxt-link>
    <p class="px-3 pt-3 overflow-hidden text-ellipsis description-text">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  brand: String,
  imgUrl: String,
  model: String,
  price: Number,
  description: String,
  stock: Number,
  size: String,
  isElectric: Boolean,
})
</script>


<style scoped>
.bike-model::after {
  content: "";
  position: absolute;
  bottom: 5px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: red;
  transform: translateX(-100%);
  transition: transform .3s ease-in;
}

.bike-card:hover .bike-model::after {
  transform: translateX(0);
}

.description-text {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

</style>