import type {Bike} from "~/interfaces/Bike";
import type {CartItem} from "~/interfaces/CartItem";

export const addItemToLocalStorage = (bike: Bike) => {
    const items = localStorage.getItem("cartItems");
    let cartItems: CartItem[] = [];
    if (items) {
        cartItems = JSON.parse(items)
    }
    const existingItems = cartItems.find(items => items.bike.id === bike.id)
    existingItems ? existingItems.quantity++ : cartItems.push({bike, quantity: 1});
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
}