'use client'
import React from "react";
import "./Sidebar.css";
import Link from "next/link";
import { usePathname } from 'next/navigation'

const Sidebar = () => {
  const pathname = usePathname()
  console.log(pathname)
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
      </div>
      <ul className="sidebar-menu">
        <li>
          <Link href="/major" className={pathname.includes('major')?'active':''}>
            <i className="fas fa-home"></i> Ngành
          </Link>
        </li>
        <li>
          <Link href="/student" className={pathname.includes('student')?'active':''}>
            <i className="fas fa-user-graduate"></i> Hồ Sơ Thí Sinh
          </Link>
        </li>
        <li>
          <Link href="/result " className={pathname.includes('result')?'active':''}>
            <i className="fas fa-book"></i> Kết Quả Tuyển sinh
          </Link>
        </li>
        <li>
          <Link href="/account" className={pathname.includes('account')?'active':''}>
            <i className="fas fa-book"></i> Tài Khoản
          </Link>
        </li>
        <li>
          <Link href="/announce" className={pathname.includes('announce')?'active':''}>
            <i className="fas fa-envelope"></i> Thông Báo
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;