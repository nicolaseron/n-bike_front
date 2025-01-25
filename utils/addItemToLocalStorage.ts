import type {CartItem} from "~/interfaces/CartItem";
import type {Bike} from "~/interfaces/Bike";

export const addItemToLocalStorage = (bike: Bike) => {
    const items = localStorage.getItem("cartItems");
    let cartItems: CartItem[] = [];
    if (items) {
        cartItems = JSON.parse(items);
    }

    const existingItems = cartItems.find(item => item.bike.id === bike.id);
    if (existingItems) {
        existingItems.quantity++;
    } else {
        cartItems.push({ bike, quantity: 1 });
    }

    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    window.dispatchEvent(new Event("cartUpdated"));
}
