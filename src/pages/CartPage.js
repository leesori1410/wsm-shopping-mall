import React from "react"
import Cart from "../components/Cart"
import styles from '../styles/CartPage.module.css'

function CartPage({ cartItems, updateQuantity, removeFromCart, clearCart }){
  return(
    <div className={styles.cartPage}>
      <Cart
        cartItems={cartItems}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
      />
    </div>
  )
}

export default CartPage