/* eslint-disable react/prop-types */
import { useState } from "react"

export const SearchBar = ({onSearch}) => {

    const [query, setQuery] = useState('');

    return <>
        <form className="search-form" onSubmit={(e) => onSearch(e, query.toLowerCase())}>
            <input value={query} onChange={(e) => setQuery(e.target.value) }/>
            <button>Search</button>
        </form>
    </>
}