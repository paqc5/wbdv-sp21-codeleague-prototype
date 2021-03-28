import React, { useState } from 'react';

const SearchForm = ({

  placeholder,
  onClick

}) => {

  const [cachedItem, setCachedItem] = useState("")

  return (
    <div>
      <div className="paqc-search-form-container paqc-flex">
        <div className="paqc-col">
          <input
            className="form-control"
            type="text"
            placeholder={placeholder}
            onChange={key => setCachedItem(key.target.value)}
            onKeyDown={key => {
              if(key.code === 'Enter') {
                onClick(cachedItem)
              }
            }} />
        </div>
        <button 
          className="paqc-button-icon"
          onClick={() => onClick(cachedItem)}>
          <i className="fas fa-search fa-lg"></i>
        </button>
      </div>
    </div>
  )
}
export default SearchForm