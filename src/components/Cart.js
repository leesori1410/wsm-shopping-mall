import React from 'react'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'
import styles from '../styles/Cart.module.css'

function Cart({ cartItems, updateQuantity, removeFromCart, clearCart }) {
  const calculateTotal = () => {
    return cartItems.redude((total, item) => {
      return total+(item.product.price * item.quantity)
    }, 0)
  }

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ", ") + "원"
  }

  const handleCheckout = () => {
    alert('no code')
  }
  
  return (
    <div className={styles.cartContainer}>
      <h2 className={styles.text}>cart</h2>
      {cartItems.length===0?(
        <div>
          <p>no item</p>
          <Link to='/'>go shopping</Link>
        </div>
      ) : (
        <>
        <div className={styles.productContainer}>
          <span className={styles.title}>상품</span>
          {
            cartItems.map((cartItem) => (
              <CartItem item={cartItem} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />
            ))
          }
          <div>
            <span className={styles.title}>개수 : </span>
            <span>{cartItems.reduce((total, item) => total + item.quantity, 0)}</span>
          </div>
          <div>
            <span className={styles.title}>합계 : </span> 
            <span>{formatPrice(cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0))}</span>
          </div>
          <span></span>
        </div>
        </>
      )}
    </div>
  )
}

export default Cart