<template>
  <section id="introduction" class="w-full h-screen overflow-hidden relative">
    <nuxt-picture
        src="/picture/img4.jpg"
        loading="lazy"
        :img-attrs="{ class: 'w-full h-full object-cover object-[center_25%]'}"
        class="hidden sm:block h-full"
    ></nuxt-picture>
    <nuxt-picture
        src="/picture/img5.jpg"
        loading="lazy"
        :img-attrs="{ class: 'w-full h-full object-cover'}"
        class="sm:hidden h-full"
    >
    </nuxt-picture>
    <nuxt-link to="#presentation" class="w-fit inline-block circle bounce border border-black rounded-full">
      <i class="icon icon-arrow arrow text-black text-2xl"></i>
    </nuxt-link>
  </section>

  <section id="presentation" class="p-10 max-w-5xl text-center mx-auto">
    <h1 class="text-h3 text-gray-500 font-semibold mb-5">CHOISISSEZ VOTRE TYPE DE VÉLO</h1>
    <p>Chez N-Bike, la pratique du vélo, quelles que soient les formes, est notre passion et c’est la raison pour
      laquelle nous mettons autant d’énergie et d’efforts pour concevoir certains des meilleurs vélos au monde. VTT,
      vélos de route, vélos électriques, vélos gravel et de cyclocross et même des vélos de ville ou de trekking. Et
      comme nous souhaitons voir tout le monde heureux, nos gammes contiennent des vélos pour homme et femme, mais aussi
      pour adolescents et enfants. Choisissez simplement votre discipline et trouvez le vélo parfait.</p>
  </section>


  <section id="categories" class="max-w-[2000px] mx-auto">
    <swiper-container
        :breakpoints="{
                        320: {
                          slidesPerView: 1,
                        },
                        650: {
                          slidesPerView: 2,
                        },
                        900: {
                          slidesPerView: 3,
                        },
                        1200:{
                          slidesPerView: 4,
                        },
                        1500:{
                          slidesPerView: 5,
                        },
                        1800: {
                          slidesPerView: 6,
                        }
                      }"
        :pagination="{
                        clickable: true,
                      }"
    >
      <swiper-slide lazy="true" v-for="category in categoryData" :key="category.id">
        <div class="flex justify-center">
          <category-card
              :title="category.title"
              :src="category.img"
              :link="category.link"
              :description="category.description"
              :objectPosition="category.objectPosition"
          />
        </div>
      </swiper-slide>
    </swiper-container>
  </section>

  <section id="guide" class="mt-10 mb-20">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-h1 sm:text-8xl font-bold pl-16 sm:translate-y-3">Le guide <br>VTTAE</h2>
      <div class="flex flex-col sm:flex-row max-w-6xl mx-auto">
        <nuxt-picture src="/picture/img16.jpg" class="sm:order-2"
                      :img-attrs="{class: 'w-full h-full object-cover'}"></nuxt-picture>
        <div class="bg-black flex items-center justify-center px-12 py-24">
          <div class="space-y-16">
            <p class="text-white mr-auto text-h3 sm:text-h2 font-light">Tout ce que vous devez savoir sur les VTT
              électriques.</p>
            <nuxt-link href="#"
                       class="btn-white mr-auto">
              Voir le guide
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="bike-finder">
    <div class="flex relative">
      <nuxt-picture src="/picture/img1.jpg" class="w-full h-full"
                    :img-attrs="{class: 'w-full h-full object-contain'}"></nuxt-picture>
      <nuxt-picture src="/picture/img3.jpg" class="w-full h-full hidden sm:block"
                    :img-attrs="{class: 'w-full h-full object-contain'}"></nuxt-picture>
      <div class="absolute space-y-3 sm:space-y-5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <h3 class="text-h3 sm:text-4xl m:text-7xl text-white font-bold">Trouvez votre <strong>vélo</strong></h3>
        <p class="sm:text-xl font-bold max-w-80 mx-auto text-white">Utilisez votre Bike Finder pour choisir le vélo
          parfait
          pour
          vous.</p>
        <nuxt-link href="#" class="btn-white">Commencer</nuxt-link>
      </div>

    </div>

  </section>

</template>

<script setup lang="ts">
import {definePageMeta} from "#imports"
import {register} from 'swiper/element/bundle';

definePageMeta({
  layout: "home"
})

register();


const categoryData = [
  {
    id: 1,
    img: "/picture/img8.jpg",
    title: "Chrono",
    description: "Nos vélos de chrono allient aérodynamisme ultime et précision, conçus pour maximiser chaque watt. Idéals pour triathlons ou contre-la-montre, ils vous aideront à gagner en vitesse et en efficacité.",
    link: "chrono",
    objectPosition: "50% 70%"
  },
  {
    id: 2,
    img: "/picture/img2.jpg",
    title: "VTT",
    description: "Les VTT sont la clé du paradis pour tout passionné de montagne. Des montées aux descentes, en course ou non, ces engins sauront affronter tous les aléas de la montagne.",
    link: "vtt",
    objectPosition: "80% 50%"
  },
  {
    id: 3,
    img: "/picture/img7.jpg",
    title: "Route",
    description: "Notre gamme compte des poids plume pour grimper, des bijoux d'aérodynamisme ultrarapides et des modèles confortables pour le plat. Où que vous traciez votre route, nous avons un vélo pour vous.",
    link: "road",
    objectPosition: "50% 100%"
  },
  {
    id: 4,
    img: "/picture/img13.jpg",
    title: "Gravel",
    description: "Nos vélos gravel sont conçus pour l'aventure, alliant robustesse et polyvalence. Que vous rouliez sur route, sentiers ou graviers, ils offrent stabilité et confort pour explorer sans limites.",
    link: "gravel",
    objectPosition: "50% 50%"
  },
  {
    id: 5,
    img: "/picture/img14.jpg",
    title: "Vélos pour enfants",
    description: "Nos vélos pour enfants sont spécialement conçus pour la sécurité, la légèreté et le plaisir. Parfaits pour apprendre et s'amuser, ils offrent une maniabilité facile et un confort adapté aux jeunes cyclistes.",
    link: "child",
    objectPosition: "50% 50%"
  },
  {
    id: 6,
    img: "/picture/img15.jpg",
    title: "Équipements et accessoires",
    description: "Notre gamme de vêtements et accessoires allie style, confort et performance. Conçus pour s'adapter à toutes vos sorties, ils offrent protection, respirabilité et liberté de mouvement, pour que rien ne vous arrête sur la route.",
    link: "equipment",
    objectPosition: "50% 50%"
  },
]

</script>

<style scoped>

.circle {
  position: absolute;
  left: 50%;
  bottom: 5%;
  width: 50px;
  height: 50px;
  transform: translateX(-50%) rotate(90deg);
}

.arrow {
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}


.bounce {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0) translateX(-50%) rotate(90deg);
  }
  40% {
    transform: translateY(-30px) translateX(-50%) rotate(90deg);
  }
  60% {
    transform: translateY(-15px) translateX(-50%) rotate(90deg);
  }
}

</style>