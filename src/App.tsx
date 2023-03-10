import React, { useEffect, useState, createContext, Context, useMemo } from 'react';

import Layout from './Components/Layout';
import Auth from './utils/Auth'

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import RootPage from './pages/Root';
import AboutPage from './pages/About';
import { User, UserContext, UserContextType } from './utils/User';
import { Basket, BasketContext, BasketContextType, getBasket, saveBasket } from './utils/Basket'
import { Item } from './types';
import BasketPage from 'pages/Basket';
import ProductPage from 'pages/Product';
import Products, { ProductsContextType } from 'utils/Products';

export const StateContext = createContext<UserContextType & BasketContextType & ProductsContextType>({user: null, setUser: () => {}, basket: null, setBasket: () => {}, products: null, setProducts: () => {}})

const App = () => {

  const [user, setUser] = useState<User | null>(null)
  const [basket, setBasket] = useState<Basket | null>(null)
  const [products, setProducts] = useState<Products | null>(null)

  const userProvider: UserContextType = {user, setUser}
  const basketProvider: BasketContextType = {basket, setBasket}
  const productsProvider: ProductsContextType = {products, setProducts}

  const stateProvider: UserContextType & BasketContextType & ProductsContextType = {...userProvider, ...basketProvider, ...productsProvider}
  
  //initialize component
  useEffect(() => {
    const productsToDisplay = new Products()
    setProducts(productsToDisplay)
    
    const existingUser = Auth.checkForValidUser()
    const existingBasket = getBasket()
    if (existingBasket) {
      //basket must be converted to object as localstorage wipes functions
      setBasket(new Basket(existingBasket.items))
    } else {
      setBasket(new Basket())
    }
    if (existingUser) {
      setUser(existingUser)
    }
  }, [])

  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<StateContext.Provider value={stateProvider}><Layout /></StateContext.Provider>} >
              <Route index element={<RootPage />} />
              <Route path='/about' >
                <Route index element={<AboutPage />} />
                <Route path=":number" element={<AboutPage />} />
              </Route>
              <Route path='/products'>
                <Route path=":id" element={<ProductPage />} />
              </Route>
              <Route path='/cart' element={<BasketPage />}/>
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
