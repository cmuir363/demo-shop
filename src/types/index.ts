export type Item = {
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    category: string;
    id: number
}

export type BasketItem = {
    item: Item,
    quantity: number
}