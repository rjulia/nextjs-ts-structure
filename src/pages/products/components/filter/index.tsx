// react component in typescript without props and state

import React from 'react'
import { useProducts, ActionProducts } from '../../products-context'

const InputFilter: React.FC = () => {
  const { state, dispatch } = useProducts();
  return (
    <input
      type="text"
      placeholder="Filter"
      className='h-8 w-full border-2 border-gray-300 rounded-md'
      value={state.filter}
      onChange={(evt) =>
        dispatch({
          type: ActionProducts.SET_FILTER,
          payload: evt.target.value,
        })
      }
    />
  )
}

export default InputFilter



