import NavItem from "./NavItem";
import { HomeIcon, BookMarkIcon, BellIcon, UserIcon } from "@/assets/icons";
import MyInfoButton from "../MyInfoButton";
import { cn } from "@/utils/cn";

const Navbar = () => {
  return (
    <nav
      className={cn(
        "px-10",
        "py-2",
        "w-full",
        "z-10",
        "bg-white",
        "shadow-nav"
      )}
    >
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
        <MyInfoButton />
      </ul>
    </nav>
  );
};

export default Navbar;
