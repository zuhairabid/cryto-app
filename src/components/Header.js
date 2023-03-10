import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SideBar from "./SideBar";

function Header() {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(true);
  return (
    <header className="flex items-center px-10 py-3 font-bold">
      <h1
        className="text-yellow-400 flex-grow text-3xl cursor-pointer"
        onClick={() => {
          navigate("/");
        }}
      >
        CRYPTOHUNT
      </h1>
      <nav className="hidden sm:block">
        <ul className="text-white flex items-center space-x-5">
          <li>COINS</li>
          <li>EXCHANGES</li>
          <li>NEWS</li>
        </ul>
      </nav>
      <div
        className="text-white cursor-pointer ml-5 text-red-600"
        onClick={() => setCollapsed(!collapsed)}
      >
        CLICK
      </div>
      <SideBar collapsed={collapsed} setCollapsed={setCollapsed} />
    </header>
  );
}

export default Header;
