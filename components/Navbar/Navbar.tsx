import React from "react";
import NavItem from "./NavItem";
import { HomeIcon, BookMarkIcon, BellIcon, UserIcon } from "@/assets/icons";

const Navbar = () => {
  return (
    <nav className="px-10 py-2 fixed bottom-0 w-full z-10 bg-white">
      <ul className="flex justify-between">
        <NavItem href="/map">
          <HomeIcon aria-hidden="true" focusable="false" /> <span>지도</span>
        </NavItem>
        <NavItem href="/location-management">
          <BookMarkIcon aria-hidden="true" focusable="false" />{" "}
          <span>저장</span>
        </NavItem>
        <NavItem href="/alim">
          <BellIcon aria-hidden="true" focusable="false" /> <span>알림</span>
        </NavItem>
        <NavItem href="/my">
          <UserIcon aria-hidden="true" focusable="false" /> <span>마이</span>
        </NavItem>
      </ul>
    </nav>
  );
};

export default Navbar;
