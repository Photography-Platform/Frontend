import React from 'react'
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import "./SearchBar.css"
export const SearchBar = ({ setResults}) => {
    
    const[input, setInput,] = useState("")

    const fetchData = (value)=>{
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response)=>response.json())
            .then((json)=>{
                const results=json.filter((user)=>{
                return ( 
                    value && 
                    user &&
                    user.name &&
                    user.name.toLowerCase().includes(value)
                    
                )
            })
            setResults(results)
            console.log(results)
        })
    }
    const handleChange = (value)=>{
        setInput(value)
        fetchData(value)
    }
    return(
        <div   
         
        className='input-wrapper'>
            
            <input 
                className='input' 
                type='text' 
                placeholder="搜尋..." 
                name='s'
                value={input}
                onChange={(e)=>handleChange(e.target.value)}

                
                />
            <button>
                <BiSearch size={10} className="search-icon"></BiSearch>
            </button>
            
        </div>
    )
}
