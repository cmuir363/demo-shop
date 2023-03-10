import { createContext } from "react"
import { Item } from "types"

import { items as defaultItems } from "resources/items"


class Products {

    productList: Item[] = []

    constructor(items?: Item[]){
        if (items) {
            this.productList.push(...items)
        } else {
            // if constructor called without passing anything
            this.productList.push(...defaultItems)
        }
    }


    addToProductList = (items: Item[]) => {
        this.productList.push(...items)
    }

    removeFromProductList = (items: Item[]) => {

    }

    clearProductList = () => {
        this.productList = []
    }

    getProductList = (): Item[] => {
        return this.productList
    } 

    findItemById = (id: number): Item | null => {
        let item: Item | null = null
        this.productList.forEach(product => {
            if(product.id === id) {
                item = product
            }
        })
        return item
    }

}

export default Products

// basket context
export type ProductsContextType = {
    products: Products | null;
    setProducts: (products: Products | null) => void
}

export const BasketContext = createContext<ProductsContextType>({products: null, setProducts: () => {}})