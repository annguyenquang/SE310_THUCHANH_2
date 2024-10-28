import { create } from "zustand";
import { Product } from "../model/Product";

type ProductStoreState = {
    products: Product[]
}
type ProductStoreAction = {
    loadProduct: () => Promise<void>
}

export const useProductStore = create<ProductStoreState & ProductStoreAction>((set) => (
    {
        products: [],
        loadProduct: async () => {
            const res = await ProductService.getProducts();
            set({ products: res })
        }
    }
))
type ProductService = {
    getProducts: () => Promise<Product[]>
}
export const ProductService: ProductService = {
    getProducts: async () => {
        const url = 'https://localhost:7265/api/Shoe/GetAllShoe';
        const res = await fetch(url);
        const json = await res.json();
        return json;
    }
}