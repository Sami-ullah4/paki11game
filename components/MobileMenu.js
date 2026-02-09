import Link from "next/link";

export default function MobileMenu({ isOpen, onClose, navLinks }) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 z-40 md:hidden"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu Card */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
        className="fixed top-20 left-4 right-4 z-50 md:hidden bg-black/95 border border-amber-500/30 rounded-2xl p-6 shadow-2xl"
      >
        {/* Navigation Links */}
        <nav>
          <ul className={` space-y-4`}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="block py-3 px-4 text-lg text-gray-200 hover:text-amber-500 hover:bg-amber-500/10 rounded-xl transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Divider */}
        <div className="my-5 border-t border-amber-500/20" />

        {/* CTA Button */}
        <Link
          href="/download"
          onClick={onClose}
          className={` block w-full py-3 text-center rounded-xl bg-amber-600 text-black font-semibold hover:bg-amber-500 transition-colors`}
        >
          Download App
        </Link>
      </div>
    </>
  );
}
