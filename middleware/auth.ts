import {useUser} from "~/composables/useUser";

export default defineNuxtRouteMiddleware(async (to, from) => {
    const { fetchUser, user } = useUser();
    await fetchUser();
    console.log(user)

    if (!user.value) {
        return navigateTo('/login');
    }
});