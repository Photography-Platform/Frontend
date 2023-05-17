import "./navbar.css"
import "./SearchBar"


import { SearchBar } from "./SearchBar"
import { useState } from "react"
import { SearchResultsList } from "./SearchResultsList"
const Container = () => {
    
    const[results,setResults]=useState([])

    return(
    <form action="/" method="get">
        <div className="navbar">
            <label htmlFor="hearder-search">
                <span className="homelogo">攝影平台</span>
            </label>
            <div className="search-bar-container">
                <SearchBar setResults={setResults}/>
                <SearchResultsList results={results}/>
            </div>
        </div>
        
    </form>
    )
    
}
export default Container