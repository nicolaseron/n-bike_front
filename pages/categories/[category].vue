<template>
  <main class="min-h-screen">
    <section id="presentation">
      <h1 class="text-h1 text-gray-500 font-semibold text-center my-8">{{ categoryStore.currentCategory.title }}</h1>
      <p class="text-center text-xl max-w-4xl leading-10 tracking-wider font-semibold mx-auto px-10">
        {{ categoryStore.currentCategory.description }}</p>
      <div class="my-8">
        <nuxt-picture :src=" categoryStore.currentCategory.img_url"
                      :img-attrs="{class : 'w-full'}">
        </nuxt-picture>
      </div>
    </section>
    <div v-if="bikes?.length" class="flex align-center justify-end gap-x-5 mr-16">
      <p class="font-semibold">{{ bikes?.length }} {{ bikes?.length > 1 ? "articles" : "article" }}</p>
      <select class="border border-black shadow-sm p-1" @change="sortBike">
        <option value="" class="mx-auto text-center">--Trier--</option>
        <option value="price_ASC">Prix croissant</option>
        <option value="price_DESC">Prix décroissant</option>
        <option value="availability">Disponibilité</option>
      </select>
    </div>
    <section id="bikes" class="flex mt-10">
      <div class="h-[500px] overflow-y-scroll space-y-3 sticky top-24 sm:top-40 min-w-40 sm:min-w-52 ml-2 sm:ml-10"
           id="custom-scrollbar">
        <filter-options v-for="filter in filteredStore.filter" class="filter-group" :key="filter.id"
                        :id="filter.search_url" :heading-name="filter.title">
          <div v-for="(option, index) in filter.options" class="my-1 cursor-pointer ">
            <input type="checkbox" :name="option" :value="isArray(filter.value) ? filter.value[index] : ''"
                   @change="toggleFilterCheckbox" :id="option" class="cursor-pointer">
            <label :for="option" class="cursor-pointer pl-2">{{ option }}</label>
          </div>
        </filter-options>
      </div>
      <div v-if="bikes?.length" class="flex flex-wrap justify-center items-center gap-x-10 gap-y-16 mx-auto">
        <BikeCard v-for="bike in bikes" :key="bike.id" :brand="bike.brandName" :model="bike.model"
                  :img-url="bike.image_url"
                  :price="bike.sales_price"
                  :description="bike.description"
                  :size="bike.size"
                  :is-electric="bike.electric"
                  :stock="bike.stock"/>
      </div>
      <div v-else class="text-center text-2xl mx-auto my-10">
        <p>Désoler aucun vélo n'a été trouvé.</p>
        <nuxt-link :to="route.path" class="btn-blue mt-5">Réinitialiser les filtres</nuxt-link>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import type {Bike} from '~/interfaces/Bike';

const router = useRouter();
const route = useRoute();
const categoryName = route.params.category;
const bikes = ref<Bike[] | null>(null);
const filteredStore = useFilteredStore()
const categoryStore = useCategoryStore();
categoryStore.setCategory(categoryName);
const originalBikes = ref<Bike[] | null>(null);
import {nextTick} from 'vue';

onMounted(async () => {
  bikes.value = await $fetch(`http://localhost:9000${route.fullPath}`);
  console.log(bikes.value)
  if (bikes.value) originalBikes.value = [...bikes.value];
  await activateCheckbox();
});

const activateCheckbox = async () => {
  await nextTick();

  const currentQuery = {...route.query};

  filteredStore.filter.forEach((filter) => {
    const filterValues = currentQuery[filter.search_url];

    const checkboxes = document.querySelectorAll(`.filter-group#${filter.search_url} input[type="checkbox"]`) as NodeListOf<HTMLInputElement>;

    checkboxes.forEach((checkbox) => {
      if (typeof filterValues === 'string') {
        const selectedValues = filterValues.split(',');
        checkbox.checked = selectedValues.includes(checkbox.value);
      } else {
        checkbox.checked = false;
      }
    });
  });
};


const sortBike = (event: Event) => {
  if (bikes.value) {
    const sortedBikes = [...bikes.value];
    const sorting = event.target as HTMLSelectElement;
    switch (sorting.value) {
      case 'price_ASC':
        bikes.value = sortedBikes.sort((a, b) => a.sales_price - b.sales_price);
        break;
      case 'price_DESC':
        bikes.value = sortedBikes.sort((a, b) => b.sales_price - a.sales_price);
        break;
      case 'availability':
        bikes.value = sortedBikes.sort((a, b) => b.stock - a.stock);
        break;
      default:
        bikes.value = [...originalBikes.value!];
    }
  }
}
const toggleFilterCheckbox = (e: Event) => {
  const checkbox = e.target as HTMLInputElement;
  const filterGroup = checkbox.closest('.filter-group');
  const searchParams = filterGroup?.id;

  if (filterGroup && searchParams) {
    const currentQuery = {...route.query};
    const existingValues = currentQuery[searchParams] as string | undefined;

    if (typeof existingValues === 'string') {
      let selectedValues = existingValues.split(',').filter((value) => value !== '');

      if (!checkbox.checked) {
        selectedValues = selectedValues.filter((value) => value !== checkbox.value);
      } else {
        if (!selectedValues.includes(checkbox.value)) {
          selectedValues.push(checkbox.value);
        }
      }

      if (selectedValues.length > 0) {
        currentQuery[searchParams] = selectedValues.join(',');
      } else {
        delete currentQuery[searchParams];
      }
    } else if (checkbox.checked) {
      currentQuery[searchParams] = checkbox.value;
    }

    router.push({query: currentQuery});
  }
};

const isArray = (value: unknown): value is Array<unknown> => {
  return Array.isArray(value);
};

watch(() => route.fullPath, async () => {
  bikes.value = await $fetch(`http://localhost:9000${route.fullPath}`);
  await activateCheckbox();
});

</script>

<style scoped>
#custom-scrollbar::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #F5F5F5;
}

#custom-scrollbar::-webkit-scrollbar {
  width: 12px;
  background-color: #F5F5F5;
}

#custom-scrollbar::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
  background-color: #555;
}
</style>


