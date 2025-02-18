export const useAuth = () => {
    const login = async (username: string, password: string) => {
        const { data, error } = await useAsyncData('login', async () => {
            const response = await $fetch('/api/auth/login', {
                baseURL: useRuntimeConfig().public.apiBase,
                method: 'POST',
                body: { username, password },
                credentials: 'include',
            });
            return response;
        });

        console.log(data.value);

        if (error.value) {
            throw new Error('Échec de la connexion');
        }
        return data;
    };

    const logout = async () => {
        await useAsyncData('logout', async () => {
            await $fetch('/api/auth/logout', {
                baseURL: useRuntimeConfig().public.apiBase,
                method: 'POST',
                credentials: 'include',
            });
        });
    };

    return { login, logout };
};
