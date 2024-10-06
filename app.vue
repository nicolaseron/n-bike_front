<template>
  <div>
    <nuxt-layout>
      <nuxt-page/>
    </nuxt-layout>
  </div>
</template>
<script setup lang="ts">
import {useRouter} from 'vue-router';

const router = useRouter();

router.afterEach((to, from) => {
  if (to.path !== from.path) {
    window.scrollTo(0, 0);
  }
});
</script>
