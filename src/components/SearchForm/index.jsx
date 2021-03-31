import React, {useState} from 'react';

const SearchForm = ({callBack}) => {

    const [search, setSearch] = useState("")

    const handleOnchange = (e) => {
        setSearch(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        callBack(search)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              type="text"
              placeholder="Search"
              onChange={handleOnchange}
              value={search}
            />
        </form>
    );
}

export default SearchForm;