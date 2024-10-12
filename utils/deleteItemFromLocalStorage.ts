import type {CartItem} from "~/interfaces/CartItem";

export const deleteItemFromLocalStorage = (item: CartItem) => {
    const items: CartItem[] = getItemFromLocalStorage();
    const newListItems = items.filter(i => {
        return i.bike.id !== item.bike.id
    });
    localStorage.setItem("cartItems", JSON.stringify(newListItems));
}