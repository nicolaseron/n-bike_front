export const getNumbersOfBikeFromLocalStorage = () => {
    if (import.meta.client) {
        const items = localStorage.getItem("cartItems")
        if (items) {
            JSON.parse(items)
        }
        return 0;

    }
}