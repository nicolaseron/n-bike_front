export const getItemFromLocalStorage = () => {
    const items = localStorage.getItem("cartItems")
    if (items) {
        return JSON.parse(items)
    }
}