// app/not-found.tsx  OR  pages/404.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center space-y-6 bg-black text-gray-300">
      <h1 className="text-7xl font-bold text-amber-500">404</h1>
      <h2 className="text-2xl font-semibold text-white">
        Oops! Page Not Found
      </h2>
      <p className="max-w-md">
        It looks like the page you’re searching for has drifted into another
        dimension — or maybe it never existed at all.  
        Don’t worry, your games are still safe!
      </p>
      <Link
        href="/"
        className="inline-block mt-4 px-6 py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition"
      >
        Go Back Home
      </Link>
    </section>
  );
}