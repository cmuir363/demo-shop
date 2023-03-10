import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import ProductPageLayout from "Components/Product/ProductPageLayout";


interface ProductProps {}

const ProductPage = (props: ProductProps) => {

    const { id } = useParams();
    
    return (
        <ProductPageLayout />
    )
}

export default ProductPage