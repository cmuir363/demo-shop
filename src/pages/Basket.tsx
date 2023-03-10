import { useContext } from 'react';

import { StateContext } from 'App';
import { Typography } from '@mui/material';

import Basket from 'Components/Basket';

interface BasketPageProps {}

const BasketPage = (props: BasketPageProps) => {

    const { basket } = useContext(StateContext)
    
    return (
        <>  
             <Basket />
        </>
    )
}

export default BasketPage