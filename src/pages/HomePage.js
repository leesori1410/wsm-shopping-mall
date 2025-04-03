import React, { useEffect, useState } from "react"
import ProductList from "../components/ProductList"
import { useParams } from "react-router-dom"
import styles from '../styles/Home.module.css'

function HomePage({ products, addToCart, searchTerm }) {
  const { categoryName } = useParams()
  const decodedCategoryName = categoryName ? decodeURIComponent(categoryName) : ""
  const [category, setCategory] = useState(decodedCategoryName)

  useEffect(() => {
    if(categoryName){
      setCategory(decodedCategoryName)
    } else {
      setCategory('')
    }
  }, [categoryName])

  return(
    <div className={styles.HomeContainer}>
      <div className={styles.headerContainer}>
        <div className={styles.textContainer}>
          <h1>리액트로 만든 쇼핑몰에 오신 것을 환영합니다.</h1>
          <p>다양한 상품을 둘러보세요.</p>
        </div>
      </div>

      <div>
        <h2 className={styles.searchTermText}>
          {categoryName? `'${categoryName}' 검색 결과` : '모든 상품'}
        </h2>
        <ProductList
          products={products}
          addToCart={addToCart}
          categoryFilter={category}
          searchTerm={searchTerm}
        />
      </div>
    </div>
  )
}

export default HomePage