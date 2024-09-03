import { FaX } from "react-icons/fa6";
import { links } from "../data";
import NavLinks from "./NavLinks";

interface SidebarProps {
  closeSidebar: () => void;
}

export default function Sidebar({ closeSidebar }: Readonly<SidebarProps>) {
  return (
    <aside className="absolute top-0 left-0 w-full h-full bg-gray-900/50 z-50">
      <div className="w-1/2 bg-white h-full px-6">
        <div className="flex justify-between items-center h-28 ">
          <button onClick={closeSidebar}>
            <FaX className="text-gray-900" />
          </button>
        </div>
        <nav className="flex flex-col gap-4">
          {links.map((link) => (
            <NavLinks
              key={link.label}
              href={link.href}
              className="text-gray-900 py-2"
            >
              {link.label}
            </NavLinks>
          ))}
        </nav>
      </div>
    </aside>
  );
}
