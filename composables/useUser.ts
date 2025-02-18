export const useUser = () => {
    const user = ref(null);

    const fetchUser = async () => {
        const { data, error } = await useAsyncData('user', async () => {
            const response = await $fetch('/api/auth/me', {
                baseURL: useRuntimeConfig().public.apiBase,
                credentials: 'include',
            });
            console.log(response)
            return response;
        });

        if (!error.value) {
            user.value = data.value;
        } else {
            user.value = null;
        }
    };

    return { user, fetchUser };
};
