import type {Ref} from "vue";

export const useRevealTransitionItems = () => {
    const observer: Ref<IntersectionObserver | null> = ref(null)

    // When the component is mounted, start observing
    onMounted(() => {
        document.documentElement.classList.add('reveal-loaded');

        // @ts-ignore
        observer.value = useIntersectionObserver('.reveal', (target) => {
            target.classList.remove('reveal');
        }, undefined, true, {
            rootMargin: '0px 0px -250px 0px',
            threshold: 0
        });
    });

    // When the component is removed, disconnect the observer (clean-up step)
    onUnmounted(() => {
        observer.value?.disconnect();
    });
}