<template>
  <div class="h-full w-full max-w-[500px] mx-auto bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 px-6">
    <div class="">
      <img class="mx-auto h-10 w-auto" src="https://www.svgrepo.com/show/301692/login.svg" alt="Workflow">
      <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
        Connectez-vous à votre compte
      </h2>
      <p class="mt-2 text-center text-sm leading-5 text-blue-500 max-w">
        Ou
        <nuxt-link to="#" title="Créer un compte"
           class="font-medium text-blue underline hover:text-black transition ease-in-out duration-150">
          créer un compte
        </nuxt-link>
      </p>
    </div>


    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form @submit.prevent="login">
          <div>
            <label for="email" class="block text-sm font-medium leading-5  text-gray-700">Email</label>
            <div class="mt-1 relative rounded-md shadow-sm">
              <input id="email" name="email" placeholder="user@example.com" type="email" required value=""
                     class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
              <div class="hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <svg class="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clip-rule="evenodd"></path>
                </svg>
              </div>
            </div>
          </div>

          <div class="mt-6">
            <label for="password" class="block text-sm font-medium leading-5 text-gray-700">Mot de passe</label>
            <div class="mt-1 rounded-md shadow-sm">
              <input id="password" name="password" type="password" required
                     class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
            </div>
          </div>

<!--          <div class="mt-6 flex items-center justify-between">-->

<!--            <div class="text-sm leading-5">-->
<!--              <a href="#"-->
<!--                 class="font-medium text-blue-500 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150">-->
<!--                Mot de passe oublié ?-->
<!--              </a>-->
<!--            </div>-->
<!--          </div>-->

          <div class="mt-6 flex justify-center">
            <button type="submit"
                    class="btn-blue">
              Connexion
            </button>
          </div>
        </form>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const login = async () => {
  await useAuth().login('nicolaseron87', 'nico');
}

</script>

<style scoped>

</style>