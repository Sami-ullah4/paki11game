import Link from "next/link";

export default function MobileMenu({ isOpen, onClose }) {
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
        className="fixed top-20 left-4 right-4 z-50 md:hidden bg-black/95 border rounded-2xl p-6 shadow-2xl"
      >
        <nav>
          <ul className="flex flex-col gap-6 text-white text-xl font-semibold">
            <li>
              <Link
                href="/"
                onClick={onClose}
                className="flex items-center gap-2 hover:text-amber-500 transition-colors"
              >
                {/* SVG stays same */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                  aria-hidden="true"
                >
                  <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                  <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                </svg>
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/download"
                onClick={onClose}
                className="flex items-center gap-2 hover:text-amber-500 transition-colors"
              >
                {/* SVG stays same */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z"
                    clipRule="evenodd"
                  />
                </svg>
                Download
              </Link>
            </li>
          </ul>
        </nav>

        <Link
          href="/download"
          onClick={onClose}
          className="my-4 block w-full py-3 text-center rounded-xl bg-gradient-to-r from-[#24b75f] to-[#0B6C39] text-white font-semibold transition-colors"
        >
          Download App
        </Link>
      </div>
    </>
  );
}