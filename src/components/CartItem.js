import React from 'react'
import styles from '../styles/CartItem.module.css'

function CartItem({ item, updateQuantity, removeFromCart }){
  const {product, quantity} = item

  const handleIncrease = () => {
    updateQuantity(product.id, quantity+1)
  }

  const handleDecrease = () => {
    if(quantity > 1){
      updateQuantity(product.id, quantity-1)
    }
  }

  const handleRemove = () => {
    removeFromCart(product.id);
  }

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ", ") + "원"
  }

  return (
    <div className={styles.itemContainer}>
      <div>
        <img src={product.imageUrl} alt={product.name} className={styles.itemImg}/>
      </div>

      <div>
        <h3>{product.name}</h3>
        <p>{formatPrice(product.price)}</p>
      </div>

      <div>
        {/* disabled 버튼 비활성화 */}
        <button onClick={handleDecrease} disabled={quantity <= 1}>-</button>
          <span>{quantity}</span>
        <button onClick={handleIncrease}>+</button>
      </div>

      <div>
        <p>{formatPrice(product.price * quantity)}</p>
      </div>

      <button onClick={handleRemove}>
        <span>X</span>
      </button>
    </div>
  )
}

export default CartItem