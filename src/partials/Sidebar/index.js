'use client'
import React from "react";
import "./Sidebar.css";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
      </div>
      <ul className="sidebar-menu">
        <li>
          <Link href="/major" className='active'>
            <i className="fas fa-home"></i> Ngành
          </Link>
        </li>
        <li>
          <Link href="/student">
            <i className="fas fa-user-graduate"></i> Hồ Sơ Thí Sinh
          </Link>
        </li>
        <li>
          <Link href="/result">
            <i className="fas fa-book"></i> Kết Quả Tuyển sinh
          </Link>
        </li>
        <li>
          <Link href="/account">
            <i className="fas fa-book"></i> Tài Khoản
          </Link>
        </li>
        <li>
          <Link href="/announce">
            <i className="fas fa-envelope"></i> Thông Báo
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;