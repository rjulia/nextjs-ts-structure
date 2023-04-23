import React from 'react'
import Image from 'next/image'
import { useProducts } from '../../products-context'

const ProductList: React.FC = () => {
  const { state } = useProducts()
  return (
    <div className='grid grid-cols-3 gap-20 mt-12'>
      {state?.products
        .filter(({ title }) =>
          title.toLocaleLowerCase().includes(state.filter.toLocaleLowerCase())
        )
        .map((product) => (
          <div key={product.id} className='flex flex-col gap-10 '>
            <h1 className='text-orange-600 text-2xl'>{product.title}</h1>
            <div className="relative w-full h-[300px] max-w-[300px] mx-auto">
              <Image
                fill
                sizes="100vw"
                style={{
                  objectFit: 'contain',
                }}
                src={product.image} alt={product.title} />

            </div>
            <p className='text-neutral-500'>{product.description}</p>
            <p className='text-yellow-500 font-bold text-xl'>{product.price}</p>
          </div>
        ))}
    </div>
  )
}

export default ProductList
