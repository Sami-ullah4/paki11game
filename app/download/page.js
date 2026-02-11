import React from "react";
import Image from "next/image";
import { siteMetadata } from "../metadata";
import DownloadImage from "@/public/images/downloadImage.webp";
import Link from "next/link";

export const metadata = {
  title: siteMetadata.downloadTitle,
  description:
    "Read the download of Paki11 Game. Learn about the limitations of liability and responsibilities when using our services.",
  alternates: {
    canonical: "/download",
  },
};

const Download = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[410px] flex items-center justify-center text-center overflow-hidden">
        {/* Background Image */}
        <Image
          src={DownloadImage}
          alt="Paki11 Game Download"
          fill
          priority
          className="object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Hero Content */}
        <header className="relative z-10 px-6 max-w-3xl space-y-3">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            How to Download Paki11 Game APK on Android?
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Downloading the Paki11 Game to your Android device is a smooth and
            safe process when done correctly. Follow the steps below to install
            the app without difficulty.
          </p>
          <Link
              href="/download"
              className="border-2 border-amber-400 text-center px-10 bg-gradient-to-r from-[#24b75f] to-[#0B6C39] text-white font-bold text-lg py-2 rounded-lg w-full"
            >
              Download PAKi11
            </Link>
        </header>
      </section>

      {/* Main Content */}
      <article className="px-4 md:px-10 pt-8 pb-12">
        <div className="max-w-2xl mx-auto space-y-10">
          <div className="space-y-10 text-lg leading-relaxed text-gray-800">
            {/* Step-by-Step Guide */}
            <section className="space-y-3">
              <h2 className="text-3xl font-semibold text-[#0B6C39] py-4">
                Step-by-Step Download Guide
              </h2>
              <ol className="list-disc pl-6 space-y-5">
                <li>
                  <strong>1. Open an Internet Browser</strong> Start by opening
                  a browser on your mobile phone, such as Google Chrome.
                </li>
                <li>
                  <strong>2. Search for the App</strong>Type Paki11 Game APKinto
                  the search bar and press search.
                </li>
                <li>
                  <strong>3. Visit the Official Website</strong>Open the
                  official Paki11 Game website to ensure you are downloading the
                  original and secure version.
                </li>
                <li>
                  <strong>4. Tap the Download Button</strong>On the homepage,
                  locate and click the Download Paki11 Game button.
                </li>
                <li>
                  <strong>5. Wait for the APK File</strong> The APK file will
                  begin downloading automatically. Please wait until the
                  download is complete.
                </li>
                <li>
                  <strong>6. Allow Installation Permission</strong> If your
                  phone shows a security warning, go to: Settings → Security →
                  Install Unknown Apps → Allow Permission
                </li>
                <li>
                  <strong>7. Install the Application</strong>Open your Downloads
                  folder, tap the Paki11 APK file, then press Install.
                </li>
                <li>
                  <strong>8. Launch the Game App</strong>Once installation is
                  complete, open the app from your mobile screen.
                </li>
                <li>
                  <strong>9. Create an Account or Log In</strong>9. Create an
                  Account or Log In
                </li>
              </ol>
            </section>

            {/* Helpful Tips */}
            <section>
              <h2 className="text-2xl font-semibold text-[#0B6C39] py-4">
                Helpful Download Tips
              </h2>
              <ul className="list-disc pl-6 space-y-5">
                <li>Always download the app from the official source.</li>
                <li>Maintain a stable internet connection.</li>
                <li>Ensure your device has sufficient storage space.</li>
                <li>Enable required permissions for smooth performance.</li>
              </ul>
            </section>
          </div>
        </div>
      </article>
    </main>
  );
};

export default Download;
