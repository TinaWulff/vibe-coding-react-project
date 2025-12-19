import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();


function getInitialState() {
  try {
    const stored = localStorage.getItem('cart');
    if (stored) return { items: JSON.parse(stored) };
  } catch {}
  return { items: [] };
}

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const { product, size, quantity } = action;
      const existing = state.items.find(
        (item) => item.id === product.id && item.size === size
      );
      if (existing) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === product.id && item.size === size
              ? { ...item, quantity: item.quantity + quantity }
              : item
          ),
        };
      }
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: product.id,
            title: product.title,
            price: product.price,
            size,
            quantity,
            brand: product.brand,
            image: product.thumbnail || '',
          },
        ],
      };
    }
    case 'REMOVE':
      return {
        ...state,
        items: state.items.filter((item, i) => i !== action.index),
      };
    case 'CLEAR':
      return initialState;
    default:
      return state;
  }
}


import { useEffect } from 'react';

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, undefined, getInitialState);

  // Sync til localStorage
  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(state.items));
    } catch {}
  }, [state.items]);

  const addToCart = (product, size = 'M', quantity = 1) =>
    dispatch({ type: 'ADD', product, size, quantity });
  const removeFromCart = (index) => dispatch({ type: 'REMOVE', index });
  const clearCart = () => dispatch({ type: 'CLEAR' });
  return (
    <CartContext.Provider value={{ cart: state.items, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
