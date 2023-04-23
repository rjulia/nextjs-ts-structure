import React from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { stateProductsReducer } from './products-reducer'
import { ProductsContext } from './products-context'
import { InputFilter, ProductsList } from './components'
import { initialCounterState, ActionProducts } from './products-reducer'

const inter = Inter({ subsets: ['latin'] })

const Products: React.FC = () => {

  const [state, dispatch] = React.useReducer(stateProductsReducer, initialCounterState);

  React.useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((resp) => resp.json())
      .then((payload) =>
        dispatch({
          type: ActionProducts.SET_PRODUCTS,
          payload,
        })
      );
  }, []);

  if (!state?.products.length) {
    return <div>Loading data</div>;
  }
  console.log(state?.products)
  return (
    <ProductsContext.Provider value={{ state, dispatch }}>
      <main
        className={`flex  p-24 ${inter.className}`}
      >
        <div className='container flex flex-col mx-auto'>
          <div className="relative flex justify-center mb-10">
            <Image
              className="relative "
              src="/next.svg"
              alt="Next.js Logo"
              width={180}
              height={37}
              priority
            />
          </div>
          <InputFilter />
          <ProductsList />



        </div>

      </main>
    </ProductsContext.Provider>
  )
}

export default Products
