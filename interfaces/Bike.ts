export interface Bike {
    id: number;
    brandName: string;
    model: string;
    image_url: string;
    sales_price: number;
    description: string;
    stock: number;
    size: string;
    electric: boolean;
    images: [{ url: string, description: string }];
    geometry_img_url: string;
    transmission: string;
}