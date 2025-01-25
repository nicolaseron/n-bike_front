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
      <button
          @click="toggleModal"
          class="btn-blue my-5 ml-auto flex justify-start items-center text-nowrap font-semibold mr-8 text-h6"
      >
        Acheter <i class="icon icon-credit-card ml-2 "></i>
      </button>
    </div>
    <div v-else>
      <p class="text-center text-h6 mb-5">Votre panier est vide !</p>
    </div>

    <div v-if="isModalOpen" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
         @click="closeModalOnOutsideClick">
      <div class="bg-white p-8 rounded-lg w-full max-w-3xl sm:w-4/6" @click.stop>
        <h2 class="text-xl font-bold mb-4">Ajouter vos informations</h2>

        <form @submit.prevent="confirmOrder" class="grid grid-cols-1 gap-4">
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label for="firstName" class="block text-sm font-semibold">Prénom</label>
              <input v-model="form.firstName" type="text" id="firstName" class="w-full p-2 mt-1 border rounded"
                     required/>
            </div>
            <div>
              <label for="lastName" class="block text-sm font-semibold">Nom</label>
              <input v-model="form.lastName" type="text" id="lastName" class="w-full p-2 mt-1 border rounded" required/>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label for="phone" class="block text-sm font-semibold">Numéro de téléphone</label>
              <input v-model="form.phone" type="tel" id="phone" class="w-full p-2 mt-1 border rounded" required/>
            </div>
            <div>
              <label for="email" class="block text-sm font-semibold">Email</label>
              <input v-model="form.email" type="email" id="email" class="w-full p-2 mt-1 border rounded" required/>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label for="streetNumber" class="block text-sm font-semibold">Numéro de rue</label>
              <input v-model="form.streetNumber" type="number" id="streetNumber" class="w-full p-2 mt-1 border rounded"
                     required/>
            </div>
            <div>
              <label for="streetName" class="block text-sm font-semibold">Nom de rue</label>
              <input v-model="form.streetName" type="text" id="streetName" class="w-full p-2 mt-1 border rounded"
                     required/>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label for="postalCode" class="block text-sm font-semibold">Code postal</label>
              <input v-model="form.postalCode" type="text" id="postalCode" class="w-full p-2 mt-1 border rounded"
                     required/>
            </div>
            <div>
              <label for="city" class="block text-sm font-semibold">Ville</label>
              <input v-model="form.city" type="text" id="city" class="w-full p-2 mt-1 border rounded" required/>
            </div>
          </div>

          <div>
            <label for="deliveryInfo" class="block text-sm font-semibold">Informations complémentaires de
              livraison</label>
            <textarea v-model="form.deliveryInfo" id="deliveryInfo" class="w-full p-2 mt-1 border rounded"
                      rows="4"></textarea>
          </div>

          <div class="flex justify-between">
            <button @click="toggleModal" type="button" class="btn-gray">Annuler</button>
            <button type="submit" class="btn-blue">Confirmer la commande</button>
          </div>
        </form>
      </div>
    </div>

    <div v-if="orderConfirmed" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div class="bg-white p-8 rounded-lg w-full sm:w-96 lg:w-1/3 xl:w-1/4 text-center">
        <h2 class="text-xl font-bold mb-4 text-green-500">Merci pour votre commande !</h2>
        <p class="mb-4 text-lg font-semibold">Votre commande (N° {{ orderNumber }}) a été confirmée avec succès. Nous
          préparons votre livraison !</p>
        <p class="mb-6 text-sm text-gray-600">Détails de votre commande :</p>
        <div class="text-left text-sm mb-6">
          <p><strong>Prénom :</strong> {{ form.firstName }}</p>
          <p><strong>Nom :</strong> {{ form.lastName }}</p>
          <p><strong>Téléphone :</strong> {{ form.phone }}</p>
          <p><strong>Email :</strong> {{ form.email }}</p>
          <p><strong>Adresse :</strong> {{ form.streetNumber }} {{ form.streetName }}, {{ form.postalCode }}
            {{ form.city }}</p>
          <p><strong>Informations de livraison :</strong> {{ form.deliveryInfo }}</p>
        </div>
        <p class="font-bold text-lg">Total : {{ totalPrice }} €</p>
        <button @click="redirectToHome" class="btn-blue mt-6">Retour à la page d'accueil</button>
      </div>
    </div>

  </main>
</template>

<script setup lang="ts">
import {getItemFromLocalStorage} from "~/utils/getItemFromLocalStorage";
import {deleteItemFromLocalStorage} from "~/utils/deleteItemFromLocalStorage";
import type {CartItem} from "~/interfaces/CartItem";

const items = ref<CartItem[]>([]);

const totalPrice = computed(() => {
  const total = items.value.reduce(
      (total, item) => total + item.bike.sales_price * item.quantity,
      0
  );
  return (Math.round(total * 100) / 100).toFixed(2);
});

const isModalOpen = ref(false);
const orderConfirmed = ref(false);
const orderNumber = ref<string>('');

interface OrderItem {
  bikeId: number;
  quantity: number;
}

const form = ref({
  firstName: '',
  lastName: '',
  streetNumber: '',
  streetName: '',
  postalCode: '',
  city: '',
  phone: '',
  email: '',
  deliveryInfo: '',
  orderNumber: '',
  items: [] as OrderItem[]
});

onMounted(() => {
  const storedItems = getItemFromLocalStorage();
  if (storedItems) {
    items.value = storedItems;
  }
});

function deleteItem(item: CartItem) {
  deleteItemFromLocalStorage(item);
  items.value = getItemFromLocalStorage();
}

function toggleModal() {
  isModalOpen.value = !isModalOpen.value;
}

function closeModalOnOutsideClick(event: MouseEvent) {
  const modalContent = event.target as HTMLElement;
  if (modalContent.classList.contains('bg-black')) {
    toggleModal();
  }
}

function confirmOrder() {
  form.value.orderNumber = 'CMD-' + new Date().getTime().toString().slice(-6);
  try {
    items.value.forEach(item => {
      form.value.items.push({
        bikeId: item.bike.id,
        quantity: item.quantity
      });
    })
    $fetch('http://localhost:9000/createSalesOrder', {
      method: "POST",
      body: JSON.stringify(form.value),
    })
  } catch (e) {
    console.log("Erreur ! ", e)
  }
  orderConfirmed.value = true;
  // toggleModal();
  // localStorage.clear();
}

function redirectToHome() {
  // window.location.href = '/';
}
</script>