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
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="상품 검색!"
                    value={searchTerm}
                    onChange={handleChange} 
                />
                <button type="submit">
                    <span>검색</span>
                </button>
            </form>
        </div>
    )
}

export default SearchBar