import React, { useState } from "react";
import Logo from "./Logo";
import {
  LayoutDashboard,
  Compass,
  Ticket,
  Heart,
  Wallet,
  Settings,
  LogOut,
} from "lucide-react";
import NavItem from "./NavItem";
import LogoutButton from "./LogoutButton";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Sidebar() {
  const [navOpen, setNavOpen] = useState(false);

  const handleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div>
      {/* Hamburger Button */}
      <div className="md:hidden p-4" onClick={handleNav}>
        {navOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      {/* Sidebar */}
      <div
        className={`${
          navOpen ? "block" : "hidden"
        } md:flex flex-col w-48 h-full p-5 bg-white fixed md:relative z-10`}
      >
        <Logo />
        <nav className="flex flex-col space-y-4 flex-grow mt-10">
          <NavItem label="Dashboard" Icon={LayoutDashboard} isActive />
          <NavItem label="Discover" Icon={Compass} />
          <NavItem label="Tickets" Icon={Ticket} />
          <NavItem label="Favorite" Icon={Heart} />
          <NavItem label="Transaction" Icon={Wallet} />
          <NavItem label="Settings" Icon={Settings} />
        </nav>
        <LogoutButton label="Log Out" Icon={LogOut} />
      </div>
    </div>
  );
}
