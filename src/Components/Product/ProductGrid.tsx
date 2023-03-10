import { useContext } from 'react';
import Grid from '@mui/material/Grid';
import { StateContext } from 'App';
import ProductCard from './ProductCard';
import { BasketItem } from 'types';

const ProductGrid = () => {

    const { products, basket } = useContext(StateContext)
    const productList = products?.getProductList()
    

    let productsToDisplay = null
    if (productList) {
        productsToDisplay = (
            <>
                {productList.map((product, index) => {
                    const quantityInBasket = basket?.getQuantityofItemsInBasket(product)
                return <Grid item xs="auto" key={index}>
                    <ProductCard item={product} quantity={quantityInBasket as number} />
                </Grid>
                })}
            </>
            
        )
    }

    return (
        <Grid container spacing={4} paddingTop={3}>
            {productsToDisplay}
        </Grid>
    )

}

export default ProductGrid