import Link from "next/link";
// import MobileMenuButton from "./MobileMenuButton";

import dynamic from "next/dynamic";

const MobileMenuButton = dynamic(() => import("./MobileMenuButton"));
// Navigation links data
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/download", label: "Download" },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#1e683f] backdrop-blur-md border-b border-blue-500/20">
      <nav className="px-4 sm:px-6 lg:px-24 h-16 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className={`font- text-xl font-bold text-white`}>
          {" "}
        </Link>
        <div className=" flex gap-4">
          {/* DESKTOP MENU */}
          <ul
            className={`
             hidden md:flex items-center gap-8 text-white text-xl font-semibold`}
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-amber-500 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* DESKTOP CTA */}
        </div>

        {/* MOBILE MENU BUTTON */}
        <MobileMenuButton navLinks={navLinks} />
      </nav>
    </header>
  );
};

export default Header;
