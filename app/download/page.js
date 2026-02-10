import React from "react";
import { siteMetadata } from "../metadata";
import Breadcrumbs from "@/lib/Breadcrumbs";
export const metadata = {
  title: siteMetadata.downloadTitle,
  description:
    "Read the download of Paki11 Game. Learn about the limitations of liability and responsibilities when using our services.",

  alternates: {
    canonical: "/download",
  },
};

const Download = () => {
  const breadcrumbs = [
    { label: "Home", link: "/" },
    { label: "Download" }, // No link = current page
  ];

  return (
    <section className="px-4 md:px-10 pt-8 pb-12">
      <div className="max-w-3xl mx-auto space-y-10">
        {/* Header */}
        <Breadcrumbs items={breadcrumbs} />

        <header className="text-center space-y-3">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0974C2]">
            Paki11 Game APK Download
          </h1>
          <p className="text-lg text-gray-700">
            Follow the steps below to safely download and install the Paki11
            Game on your Android device.
          </p>
        </header>

        <main className="space-y-10 text-lg leading-relaxed text-gray-800">
          {/* Quick Notes */}
          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-[#0974C2]">
              Before You Start
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Supported devices: Android phones and tablets</li>
              <li>Recommended Android version: 5.0 (Lollipop) or higher</li>
              <li>Free storage required: At least 100 MB</li>
              <li>Stable internet connection for download and login</li>
            </ul>
          </section>

          {/* How to Download */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#0974C2]">
              How to Download Paki11 Game APK
            </h2>

            <article className="space-y-2">
              <h3 className="text-xl font-semibold text-[#065a94]">
                Step 1: Start the Download
              </h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Scroll to the top of this page.</li>
                <li>Tap the “Download Now” button.</li>
                <li>
                  Confirm the download if your browser asks for permission.
                </li>
              </ul>
            </article>

            <article className="space-y-2">
              <h3 className="text-xl font-semibold text-[#065a94]">
                Step 2: Allow Installation from Unknown Sources
              </h3>
              <p>
                Because Paki11 is installed via APK, you may need to allow
                installations from unknown sources:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Open your phone&apos;s <strong>Settings</strong>.
                </li>
                <li>
                  Go to <strong>Security</strong> or <strong>Privacy</strong>.
                </li>
                <li>
                  Find and enable{" "}
                  <strong>&quot;Install from Unknown Sources&quot;</strong> or{" "}
                  <strong>&quot;Allow from this source&quot;</strong> for your
                  browser or file manager.
                </li>
              </ul>
            </article>

            <article className="space-y-2">
              <h3 className="text-xl font-semibold text-[#065a94]">
                Step 3: Install the Paki11 Game
              </h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Open your <strong>Downloads</strong> folder or Files app.
                </li>
                <li>
                  Locate the downloaded <strong>Paki11.apk</strong> file.
                </li>
                <li>
                  Tap the file and select <strong>Install</strong>.
                </li>
                <li>Wait a few seconds until the installation is complete.</li>
              </ul>
            </article>

            <article className="space-y-2">
              <h3 className="text-xl font-semibold text-[#065a94]">
                Step 4: Open the App &amp; Register
              </h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Find the <strong>Paki11</strong> icon on your home screen.
                </li>
                <li>
                  Open the app and choose <strong>Register</strong> or{" "}
                  <strong>Sign Up</strong>.
                </li>
                <li>
                  Enter your phone number/username and create a secure password.
                </li>
                <li>Complete the captcha or verification if prompted.</li>
                <li>Log in and start using the app.</li>
              </ul>
            </article>
          </section>

          {/* Related Information */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#0974C2]">
              Important Download &amp; Safety Information
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Only download the APK using the official download button on this
                website.
              </li>
              <li>
                After installation, you can disable{" "}
                <strong>Unknown Sources</strong> again in your phone settings
                for better security.
              </li>
              <li>
                If you see a warning from your browser or Play Protect, choose{" "}
                &quot;Install anyway&quot; only if you trust this source.
              </li>
              <li>
                If the APK does not install, make sure:
                <ul className="list-disc pl-6 mt-1 space-y-1">
                  <li>Your storage is not full.</li>
                  <li>You are using the latest downloaded APK file.</li>
                  <li>
                    Your Android version meets the minimum requirement (5.0+).
                  </li>
                </ul>
              </li>
              <li>
                For best performance, keep your device updated and maintain a
                stable internet connection.
              </li>
            </ul>
          </section>

          {/* Short FAQ-style note */}
          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-[#0974C2]">
              Quick Questions
            </h2>
            <div>
              <h3 className="text-lg font-semibold text-[#065a94]">
                Is Paki11 available on iOS?
              </h3>
              <p>Currently, Paki11 is available for Android devices only.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#065a94]">
                Is the APK free to download?
              </h3>
              <p>
                Yes, downloading and installing the Paki11 APK is completely
                free.
              </p>
            </div>
          </section>
        </main>
      </div>
    </section>
  );
};

export default Download;
