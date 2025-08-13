import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import { useLocation, useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onCollection = location.pathname.includes('collection');
    const onHome = location.pathname === '/' || location.pathname === '/home';
    setVisible((onCollection || onHome) && showSearch);
  }, [location, showSearch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate('/collection');
    }
  };

  if (!visible) return null;

  return (
    <form
      onSubmit={handleSubmit}
      className="search-bar-container flex items-center border border-gray-300 rounded-full bg-white shadow-md"
      style={{
        padding: '4px 10px',       // small padding inside
        width: '60%',              // reduced width (you can tweak to 50/40)
        maxWidth: '500px',         // prevents too wide on large screens
        margin: '8px auto',        // space above & below, center horizontally
      }}
    >
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input flex-1 outline-none text-gray-700 bg-transparent text-sm"
      />
      <button type="submit" className="search-btn mr-2">
        <img
          src={assets.search_icon}
          alt="Search"
          className="w-4 h-4 opacity-70 hover:opacity-100"
        />
      </button>
      <button
        type="button"
        onClick={() => {
          setShowSearch(false);
          setSearch('');
        }}
        className="close-btn text-gray-500 hover:text-red-500"
        title="Close search"
      >
        ✕
      </button>
    </form>
  );
};

export default SearchBar;
