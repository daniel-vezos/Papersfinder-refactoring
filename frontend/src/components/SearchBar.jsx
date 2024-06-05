import React from 'react';

const SearchBar = () => {
  return (
    <div>
      <form className="max-w-lg mx-auto flex flex-col items-center">
        <label htmlFor="voice-search" className="sr-only">Buscar</label>
        <div className="relative w-full bg-white rounded-lg shadow-md">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">

          </div>
        <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search branch name..." required />
        </div>
        <div className="pt-5">
          <button className="bg-transparent hover:bg-gray-500 text-gray-500 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded">
            Buscar
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
