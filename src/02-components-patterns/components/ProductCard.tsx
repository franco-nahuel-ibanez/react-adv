import { useProduct } from '../hooks/useProduct'

import styles from '../styles/styles.module.css';

import { createContext, useContext } from 'react';
import { ProductCardProps, ProductContextProps } from '../interfaces/products.interfaces';



export const ProductContext = createContext({} as ProductContextProps);
const {Provider} = ProductContext


export const ProductCard = ({product, children}: ProductCardProps) => {

  const { counter, increaseBy } = useProduct()

  return (
    <Provider value={{
      counter,
      increaseBy,
      product
    }}>
      <div className={ styles.productCard }>
        {children}
      </div>
    </Provider>
  )
}





