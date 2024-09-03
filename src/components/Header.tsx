import { FaBars } from "react-icons/fa";
import { links } from "../data";
import CartDropdown from "./CartDropdown";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

interface HeaderProps {
  openSidebar: () => void;
}

export default function Header({ openSidebar }: HeaderProps) {
  return (
    <header
      className="flex justify-between items-center h-28 border-b border-gray-300"
      role="banner"
    >
      <div className="flex gap-14 items-center h-full">
        <div className="inline-flex items-center gap-4">
          <button
            onClick={openSidebar}
            aria-label="Open sidebar"
            className="text-gray-900 md:hidden"
          >
            <FaBars />
          </button>
          <Logo />
        </div>
        <nav
          className=" gap-8 h-full hidden md:flex"
          aria-label="Main Navigation"
        >
          {links.map((link) => (
            <NavLinks key={link.label} href={link.href}>
              {link.label}
            </NavLinks>
          ))}
        </nav>
      </div>
      <div className="relative h-full inline-flex items-center">
        <CartDropdown />
      </div>
    </header>
  );
}
