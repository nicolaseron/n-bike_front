import {defineStore} from "pinia";
import {options} from "kolorist";

export const useFilteredStore = defineStore("filterStore", () => {
    const filter = [
        {
            id: 1,
            title: "Taille",
            search_url: "size",
            options: ["3XS", "2XS", "XS", "S", "M", "L", "XL", "2Xl"],
            value: ["3XS", "2XS", "XS", "S", "M", "L", "XL", "2Xl"],
        },
        {
            id: 2,
            title: "Prix",
            search_url: "price",
            options: ["<1000 €", "1000-1999 €", "2000-2999 €", "3000-3999 €", "4000-4999 €", ">5000 €"],
            value: ["0-1000", "1000-1999", "2000-2999", "3000-3999", "4000-4999", "5000-99999"],
        },
        {
            id: 3,
            search_url: "weight",
            title: "Poids",
            options: [ "7-8 kg", "8-9 kg", "9-10kg", "10-11kg" ,"<11kg"],
            value: [ "7-8", "8-9", "9-10", "10-11", "11-99"],
        },
        {
            id: 4,
            title: "Électrique",
            search_url: "is_electric",
            options: ["Oui"],
            value: [true]
        },
        {
            id: 5,
            title: "Transmission",
            search_url: "transmission",
            options: ["Mécanique", "Électronique"],
            value: ["mechanic", "electronic"]
        },
        {
            id: 6,
            title: "Cadre",
            search_url: "frame",
            options: ["Carbone(CFR)", "Carbone(CF)", "Aluminium"],
            value: ["carbonne-cfr", "carbonne-cf", "aluminuim"],
        },
    ];
    return {filter}
})