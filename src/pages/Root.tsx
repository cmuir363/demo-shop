import React, { useContext } from "react"
import Container from "@mui/material/Container";

import ModifyBasketButton from "Components/Basket/ModifyBasketButton";
import { StateContext } from "App";
import { Item } from "types";
import ProductCard from "Components/Product/ProductCard";
import ProductGrid from "Components/Product/ProductGrid";
import BannerAdd from "Components/Adds/BannerAdd";

const RootPage = () => {
    const { user, setUser } = useContext(StateContext)

    let userRender = null
    if (user) {
        userRender = <div>{JSON.stringify(user)}</div>
    }
    const testItem: Item = {
        name: "Jacket", 
        description: "Thick jacket for winter", 
        price: 119.90, 
        imageUrl: "/jacket.jpg", 
        category: "mens",
        id: 2
    }

    return (
        <>
            <BannerAdd />
            {userRender}
            <Container>
                <ProductGrid />
            </Container>
        </>
    )
}

export default RootPage