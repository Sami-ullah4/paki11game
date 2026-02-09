import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="bg-[#153468] text-white border-t border-amber-500/20 px-3 md:px-20 py-3"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="flex flex-col md:flex-row justify-between gap-10">
        {/* BRAND */}
        <div className="space-y-4 md:w-1/3">
          <h3 className=" text-2xl font-bold text-white">
            ZS777
          </h3>
          <p className="  text-sm leading-relaxed">
            DK999 is a modern gaming platform providing secure access to premium
            experiences. Download and play responsibly.
          </p>
        </div>

        {/* LINKS */}
        <nav className="md:w-1/3" aria-label="Footer navigation">
          <h4 className=" text-lg text-white mb-4">
            Quick Links
          </h4>
          <ul className=" grid grid-cols-2 md:grid-cols-3 list-disc px-3">
            <li>
              <Link
                href="/"
                className="text-nowrap hover:text-amber-400 transition focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-black rounded"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                prefetch={false}
                className="text-nowrap hover:text-amber-400 transition focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-black rounded"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/privacy-policy"
                prefetch={false}
                className="text-nowrap hover:text-amber-400 transition focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-black rounded"
              >
                Privacy Policy
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                prefetch={false}
                className="text-nowrap hover:text-amber-400 transition focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-black rounded"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/disclaimer"
                prefetch={false}
                className="text-nowrap hover:text-amber-400 transition focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-black rounded"
              >
                Disclaimer
              </Link>
            </li>
            <li>
              <Link
                href="/terms-and-conditions"
                prefetch={false}
                className="text-nowrap hover:text-amber-400 transition focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-black rounded"
              >
                Terms and Conditions
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* BOTTOM BAR */}
      <div className="  pt-6 border-t border-amber-500/10  text-center text-sm">
        © {new Date().getFullYear()} DK999. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
