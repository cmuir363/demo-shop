import { BasketItem, Item } from "../types";
import { createContext } from "react"

export class Basket {

    items: BasketItem[] = []

    constructor(items?: BasketItem[]) {
        if (items){this.items = items}
    }

    addItemToBasket = (item: Item, quantity: number) => {
        const basketItem = this.createBasketItem(item, quantity)
        const existingIndex = this.findBasketItemIndex(basketItem)
        if (existingIndex >= 0) {
            this.items[existingIndex].quantity += quantity
        } else {
            this.items.push(this.createBasketItem(item, quantity))
        }
    }

    createBasketItem = (item: Item, quantity: number): BasketItem => {
        return {item, quantity}
    }

    removeItemFromBasket = (item: Item) => {
        const basketItem = this.createBasketItem(item, 1)
        const basketItemIndex = this.findBasketItemIndex(basketItem)
        if (basketItemIndex >= 0) {
            // remove item if quantity will be 0, otherwise minus 1
            if (this.items[basketItemIndex].quantity > 1) {
                this.items[basketItemIndex].quantity -= 1
                
            } else {
                this.items.splice(basketItemIndex, 1)
            }
        } else {
            console.log("Item not in basket")
        }
    }

    removeEntireItemFromBasket = (item: Item) => {
        const basketItem = this.createBasketItem(item, 1)
        const basketItemIndex = this.findBasketItemIndex(basketItem)
        if (basketItemIndex >= 0) {
            this.items.splice(basketItemIndex, 1)
        } else {
            console.log("Item not found in basket")
        }
    }

    /**
     * 
     * @remarks
     * This method returns -1 if the item is not found in the basket
     */
    findBasketItemIndex = (basketItemToRemove: BasketItem):number => {
        let foundAtIndex = -1; 
        this.items.forEach((basketItem, index) => {
            if (basketItem.item.id === basketItemToRemove.item.id) {
                foundAtIndex = index
            }
        })
        return foundAtIndex
    }

    getQuantityofItemsInBasket = (item: Item): number => {
        const itemIndex = this.findBasketItemIndex(this.createBasketItem(item, 1))
        if (itemIndex >= 0) {
            return this.items[itemIndex].quantity
        } else {
            return 0
        }
    }

    /**
     * @remarks
     * used to show number of items in basket on basket logo
     */
    getTotalItems = (): number => {
        let total = 0;
        this.items.forEach(basketItem => {
            total += basketItem.quantity 
        })
        return total
    }

    getTotalPrice = (): number => {
        let total = 0;
        this.items.forEach(basketItem => {
            total += (basketItem.item.price * basketItem.quantity)
        })
        return total
    }

    static formatPrice = (price: number, countryCode: "de" | "uk"): string => {
        let formattedPrice = "";
        switch(countryCode) {
            case "de":
                formattedPrice = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(price)
                break;
            case "uk":
                formattedPrice = new Intl.NumberFormat('en-UK', { style: 'currency', currency: 'GBP' }).format(price)
                break;
        }
        return formattedPrice
    }

}

// helper functions
export const saveBasket = (basket: Basket) => {
    localStorage.setItem("basket", JSON.stringify(basket))
}

export const getBasket = (): Basket | null => {
    const basket = localStorage.getItem("basket")
    if (basket) {
        return JSON.parse(basket)
    } else {
        return null
    }
}

// basket context
export type BasketContextType = {
    basket: Basket | null;
    setBasket: (basket: Basket | null) => void
}

export const BasketContext = createContext<BasketContextType>({basket: null, setBasket: () => {}})