import React from "react"
import styles from '../styles/Footer.module.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.container}>
        <div className={styles.infoContainer}>
          <div>
            <h3 className={styles.title}>리액트 쇼핑몰</h3>
            <p>React로 만든 예제 쇼핑몰입니다.</p>
          </div>

          <div>
            <h3 className={styles.title}>카테고리</h3>
            <ul>
              <li>의류</li>
              <li>전자기기</li>
              <li>엑세서리</li>
            </ul>
          </div>

          <div>
            <h3 className={styles.title}>고객센터</h3>
            <p>이메일: w2319@e-mirim.hs.kr</p>
            <p>전화: 010-8807-3637</p>
          </div>
        </div>

        <div>
          <p>&copy; {currentYear} 리액트 쇼핑몰. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer