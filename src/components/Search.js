import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

const Search = () => {
  return (
    <div className="search">
      <div className="searchIconContainer">
        <SearchIcon className="searchIcon"/>
      </div>
      <InputBase
        placeholder="Search…"
        className="searchInput"
        inputProps={{ 'aria-label': 'search' }}
      />
    </div>
  )
}

export default Search;