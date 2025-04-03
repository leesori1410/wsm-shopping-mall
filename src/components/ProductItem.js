import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import styles from '../styles/ProductItem.module.css'

function ProductItem({product, addToCart}) {
    const navigate = useNavigate()
    const {id, name, price, imageUrl, category} = product;

    // 현재 상품(product)을 장바구니에 추가
    const handleAddToCart = () => {
        addToCart(product)
    }

    const formatPrice = (price) => {
        // 3자리마다 쉼표를 삽입하고 마지막에 "원"을 붙임(사용자 친화적)
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ", ") + "원"
    }

    const handleClick = (id) => {
        navigate(`/product/${id}`)
    }

    return(
        <div className={styles.productItemContainer} onClick={() => handleClick(id)}>
            <div>
                {/* 템플릿 리터럴 / a태그와 달리 화면의 UI를 새로고침하기 때문에 더 빠름 */}
                <Link to={`/product/${id}`}>
                    <img src={imageUrl} alt={name} className={styles.productImg} />
                </Link>
            </div>

            <div className="product-info">
                <span>{category}</span>
                <h3>
                    <Link to={`/product/${id}`}>{name}</Link>
                </h3>
                <p>{formatPrice(price)}</p>
            </div>

            <div className={styles.productActions}>
                <button
                    onClick={handleAddToCart}
                    className={styles.cartBtn}
                >
                    장바구니 추가
                </button>
            </div>
        </div>
    )
}

export default ProductItem