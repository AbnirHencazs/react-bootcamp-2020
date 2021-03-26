import React from 'react';

const SearchForm = () => {
    return(
        <form action="">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              type="text"
              placeholder="Search"
            />
        </form>
    );
}

export default SearchForm;