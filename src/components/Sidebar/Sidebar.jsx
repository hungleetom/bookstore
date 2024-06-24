import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-content">
        <button className="close-btn" onClick={toggleSidebar}>
          <FaTimes />
        </button>
        <ul>
          <li><a href="/#">나의 프로필</a></li>
          <li><a href="/#services">개인 정보</a></li>
          <li><a href="/#">유행하는 책들</a></li>
          <li><a href="/#">좋은 책들</a></li>
          <li><a href="/#">작가들</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
