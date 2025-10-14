import { createContext, useState, useCallback, useMemo } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = useCallback((product, cantidad = 1) => {
    setCartItems(prevItems => {
      const existing = prevItems.find(item => item.id === product.id);
      if (existing) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, cantidad: item.cantidad + cantidad }
            : item
        );
      } else {
        return [...prevItems, { ...product, cantidad }];
      }
    });
  }, []);

  const removeFromCart = useCallback((productId) => {
    setCartItems(prevItems =>
      prevItems
        .map(item =>
          item.id === productId ? { ...item, cantidad: item.cantidad - 1 } : item
        )
        .filter(item => item.cantidad > 0)
    );
  }, []);

  const cartCount = cartItems.reduce((total, item) => total + item.cantidad, 0);

  const value = useMemo(() => ({ cartItems, cartCount, addToCart, removeFromCart }), [cartItems, cartCount, addToCart, removeFromCart]);

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}
