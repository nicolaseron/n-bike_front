<template>
  <main class="max-w-7xl mx-auto">
    <h1 class="text-h5 uppercase text-center my-5">Panier</h1>
    <div v-if="items.length > 0" class="mx-5">
      <p>Les articles dans le panier ne sont pas réservés.</p>
      <table class="border-collapse w-full text-center mt-10 mb-4">
        <thead class="bg-gray-100">
        <tr>
          <th class="p-2">Articles</th>
          <th>Taille</th>
          <th>Quantité</th>
          <th>Prix</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in items" :key="item.bike.id" class="border border-gray-200">
          <td>
            <div class="flex items-center gap-x-2 w-min">
              <nuxt-picture :src="item.bike.images[0].url"
                            class="w-10 h-10 xs:w-32 xs:h-32 content-center"></nuxt-picture>
              <div class="text-nowrap text-left">
                <p class="font-bold">{{ item.bike.brandName }}</p>
                <p>{{ item.bike.model }}</p>
                <button @click="deleteItem(item)" class="text-blue hover:text-black">Retirer</button>
              </div>
            </div>
          </td>
          <td>{{ item.bike.size }}</td>
          <td>{{ item.quantity }}</td>
          <td>{{ item.bike.sales_price }} €</td>
        </tr>
        </tbody>
      </table>
      <div class="bg-gray-100 py-5 px-16">
        <div class="ml-auto max-w-52 font-semibold flex justify-between">
          <p>Total : </p>
          <p>{{ totalPrice }} €</p>
        </div>
      </div>
      <button class="btn-blue my-5 ml-auto flex justify-start items-center text-nowrap font-semibold mr-8 text-h6">
        Acheter <i
          class="icon icon-credit-card ml-2 "></i>
      </button>
    </div>
    <div v-else>
      <p class="text-center text-h6 mb-5">Votre panier est vide !</p>
    </div>
  </main>
</template>

<script setup lang="ts">
import {getItemFromLocalStorage} from "~/utils/getItemFromLocalStorage";
import {deleteItemFromLocalStorage} from "~/utils/deleteItemFromLocalStorage";
import type {CartItem} from "~/interfaces/CartItem";

const items = ref<CartItem[]>([]);
const totalPrice = computed(() => {
  const total = items.value.reduce((total, item) =>
      total + item.bike.sales_price * item.quantity, 0
  );
  return (Math.round(total * 100) / 100).toFixed(2);
});

onMounted(() => {
      const storedItems = getItemFromLocalStorage()
      if (storedItems) {
        items.value = storedItems;
      }
    }
)

function deleteItem(item: CartItem) {
  deleteItemFromLocalStorage(item)
  items.value = getItemFromLocalStorage();
}
</script>