import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import { useGlobals } from '../../state/GlobalProvider';

const SearchForm = () => {
    const history = useHistory()
    const [search, setSearch] = useState("")
    const { searchQuery, submitSearchQuery } = useGlobals()

    const handleOnchange = (e) => {
        setSearch(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        submitSearchQuery(search)
        history.push(`/`)
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