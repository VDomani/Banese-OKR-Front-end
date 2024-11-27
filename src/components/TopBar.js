// src/components/TopBar.js

import React, { useState } from 'react';
import './TopBar.css';
import logo from '../assets/images/logo.png';
import { FaSearch } from 'react-icons/fa';

function TopBar({ onSearch }) {
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchIconClick = () => {
    setShowSearchInput(!showSearchInput);
    if (showSearchInput) {
      // Se o campo de busca estava aberto, limpar a busca
      setSearchQuery('');
      onSearch('');
    }
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <div className="top-bar">
      <img src={logo} alt="Logo Banese" className="logo" />
      <div className="search-container">
        {showSearchInput && (
          <input
            type="text"
            className="search-input"
            placeholder="Pesquisar..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        )}
        <FaSearch className="search-icon" onClick={handleSearchIconClick} />
      </div>
    </div>
  );
}

export default TopBar;
