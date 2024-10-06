<template>
  <pre>{{ bike }}</pre>
</template>

<script setup>
const route = useRoute()
const bike = ref(null)
onMounted(async () => {
  bike.value = await $fetch(`http://localhost:9000/bike/${route.params.id}`)
  console.log(bike.value)
})
console.log("test")
</script>

<style scoped>

</style>