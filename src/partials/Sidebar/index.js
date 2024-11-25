'use client'
import React from "react";
import "./Sidebar.css";
import { useParams, useRouter } from 'next/navigation';
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
      </div>
      <ul className="sidebar-menu">
        <li>
          <a href="/major" className='active'>
            <i className="fas fa-home"></i> Ngành
          </a>
        </li>
        <li>
          <a href="/student">
            <i className="fas fa-user-graduate"></i> Hồ Sơ Thí Sinh
          </a>
        </li>
        <li>
          <a href="/result">
            <i className="fas fa-book"></i> Kết Quả Tuyển sinh
          </a>
        </li>
        <li>
          <a href="/announce">
            <i className="fas fa-envelope"></i> Thông Báo
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;