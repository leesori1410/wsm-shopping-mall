import React, {useState} from "react"
import { useNavigate } from "react-router-dom"
import styles from '../styles/SearchBar.module.css'

function SearchBar({onSearch}) {
    const navigate = useNavigate()
    const [searchTerm, setSearchTerm] = useState("")

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSearch(searchTerm)
        setSearchTerm('')
        navigate("/")
    }

    return (
        <div className={styles.searchBarContainer}>
            <form onSubmit={handleSubmit} className={styles.formContainer}>
                <input
                    type="text"
                    placeholder="상품 검색!"
                    value={searchTerm}
                    onChange={handleChange} 
                    className={styles.inputStyle}
                />
                <button type="submit" className={styles.submitBtn}>
                    <span>검색</span>
                </button>
            </form>
        </div>
    )
}

export default SearchBar