import {useToast} from 'vue-toast-notification';

const toast = useToast({duration: 5000});
export default defineNuxtPlugin(() => {
    return {
        provide: {
            toast,
        }
    }
});