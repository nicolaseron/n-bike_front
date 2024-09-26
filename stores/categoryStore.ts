import type {RouteParamValue} from "#vue-router";

export const useCategoryStore = defineStore("category", () => {
    interface Category {
        title: string;
        description: string;
        img_url: string;
    }

    const categoryData: Record<string, Category> = {
        child: {
            title: "Vélos pour enfants",
            description: "Nos vélos pour enfants sont spécialement conçus pour assurer confort, sécurité et plaisir pour les jeunes cyclistes. Que ce soit pour les premières balades ou des aventures plus audacieuses, nos vélos sont adaptés à chaque âge et niveau.",
            img_url: "/picture/img20.jpg"
        },
        gravel: {
            title: "Vélos Gravel",
            description: "Les vélos Gravel sont parfaits pour les terrains variés. Que vous rouliez sur route ou sur sentier, ces vélos sont conçus pour offrir polyvalence, confort et robustesse.",
            img_url: "/picture/img21.jpg"
        },
        road: {
            title: "Vélos de route",
            description: "Gagnants du Grand Tour et détenteurs de records mondiaux : ces vélos de route établissent une nouvelle norme dans le cyclisme.",
            img_url: "/picture/img17.jpg"
        },
        vtt: {
            title: "Vélos VTT",
            description: "Nos vélos tout-terrain (VTT) sont parfaits pour l’aventure en montagne, offrant robustesse et contrôle même sur les terrains les plus accidentés.",
            img_url: "/picture/img19.jpg"
        },
        chrono: {
            title: "Vélos Chrono",
            description: "Les vélos chrono sont conçus pour la vitesse pure. Parfaits pour le contre-la-montre et le triathlon, ils sont optimisés pour l’aérodynamisme et les performances.",
            img_url: "/picture/img18.jpg"
        }
    };
    const currentCategory = ref({title: '', description: '', img_url: ''});
    const categoryId = ref(0)

    function setCategory(categoryName: string | RouteParamValue[]) {
        const name = Array.isArray(categoryName) ? categoryName[0] : categoryName;
        const category = categoryData[name];
        if (category) {
            currentCategory.value = category;
            categoryId.value = Object.keys(categoryData).indexOf(name) + 1;
        }
    }

    return {categoryData, currentCategory, categoryId, setCategory};
})