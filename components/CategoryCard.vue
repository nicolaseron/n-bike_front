<template>
  <div class="w-72 text-center card">
    <div class="text-center w-72 h-80 overflow-hidden card">
      <nuxt-picture :src="src" class="w-full h-full categoryImg" loading="lazy"
                    :img-attrs="{ class: `object-cover w-full h-full rounded-md` , style : `object-position : ${objectPosition}`}"></nuxt-picture>
      <div class="bg-gray-200 bg-opacity-80 description p-3">
        <p>{{ description }}</p>
        <nuxt-link :to="link" class="btn inline-block mt-5 mb-2">Explorez</nuxt-link>
      </div>
    </div>
    <p class="text-h5 mt-3">{{ title }}</p>
  </div>
</template>

<script setup lang="ts">

defineProps({
  title: String,
  src: String,
  description: String,
  link: String,
  objectPosition: String,
})

</script>

<style scoped>
.categoryImg {
  transition: all 0.5s ease-out;
}

.description {
  position: relative;
  bottom: 0;
  transform: translateY(0%);
  transition: all 0.5s ease-out;
}

.card:hover .description {
  transform: translateY(-100%);
}

.card:hover .categoryImg {
  filter: blur(4px);
}
</style>