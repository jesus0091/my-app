import React, {useContext, useState, createContext} from 'react'
export const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);


export const CartProvider = ({ children }) => {
    
    const [cart, setCart] = useState([]);
    const [login, setLogin] = useState({})

    const isInCart = (id) => cart.some((item) => item.id === id);

    const addToCart = (item, quantity) => {
        if(isInCart(item.id)) {
            const newCart = cart.map((cartElement) => {
                if (cartElement.id === item.id) {
                    return { 
                        ...cartElement, quantity: cartElement.quantity + quantity
                    }
                } else return cartElement;
            });
            setCart( newCart );
        } else {
            setCart((prev) => [...prev, {...item, quantity }]);
        }
        console.log('cart: ', cart)
    };

    const removeItem = (itemId) => {
        setCart( cart.filter((e) => e.id !== itemId));
    };
    
    const clear = () => setCart([]);

    const cartPrice = () => {
        return cart.reduce((accumulator, dato) => 
        { return Number(accumulator + dato.quantity * dato.price)}, 0);
    }

    const format = (num) => {
        const n = String(num),
        p = n.indexOf('.')
        return n.replace(
            /\d(?=(?:\d{3})+(?:\.|$))/g,
            (m, i) => p < 0 || i < p ? `${m}.` : m
            )
        }
    
    return(
        <CartContext.Provider value={{ cart, addToCart, removeItem, clear, login, setLogin, cartPrice, format }}>
            {children}
        </CartContext.Provider>
        
    )
}