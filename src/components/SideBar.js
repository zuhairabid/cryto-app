import React from "react";
import { useNavigate } from "react-router-dom";

function SideBar(props) {
  const navigate = useNavigate();
  const sidebarClass =
    "flex flex-col items-center justify-center lg:hidden overflow-x-hidden z-[10000] transition-all duration-[500ms] bg-neutral-900 bg-opacity-95  border-b border-yellow-400 absolute w-full top-0 right-0 h-full mt-[60px] ";
  return (
    <div className={!props.collapsed ? sidebarClass : sidebarClass + "w-0"}>
      <ul
        onClick={() => {
          props.setCollapsed(true);
        }}
        className="[&>li]:cursor-pointer mt[-200px] font-mons text-lg flex flex-col space-y-3 items-center font-bold py-5 text-white"
      >
        <li onClick={() => navigate("/")}>Coins</li>
        <li onClick={() => navigate("/exchanges")}>Exchanges</li>
        <li onClick={() => navigate("/news")}>News</li>
      </ul>
    </div>
  );
}

export default SideBar;
