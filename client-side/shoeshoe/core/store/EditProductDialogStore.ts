import { create } from "zustand";
import { Product } from "../model/Product";
import { ProductService } from "./ProductStore";

type EditProductDialogStoreState = {
    id: string | null,
    open: boolean,
    product: Product | null
}
type EditProductDialogStoreAction = {
    loadProduct: (id: string) => Promise<void>
    updateProduct: (product: Product) => Promise<string>,
    deleteProduct: (id: string) => Promise<string>
    setDialogState: (isOpen: boolean) => void;
}

export const useEditProductDialogStore = create<EditProductDialogStoreState & EditProductDialogStoreAction>((set) => (
    {
        id: null,
        open: false,
        product: null,
        loadProduct: async (id: string) => {
            if (id == null) return;
            const loadedProduct = await ProductService.getProductById(id);
            set({ product: loadedProduct })
        },
        updateProduct: async (product: Product) => {
            return 'Not implemented'
        },
        deleteProduct: async (id: string) => {
            return 'Not implemented'
        },
        setDialogState(isOpen) {
            set({ open: isOpen })
        },
    }
))

