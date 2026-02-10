const Contact = () => {
  return (
    <main className="px-4 md:px-28 py-10">
      {/* Page Heading */}
      <h1 className="text-3xl font-bold text-[#0B6C39] text-center py-9">
        Contact Us
      </h1>

      {/* Intro Section */}
      <section className="max-w-5xl mx-auto space-y-4">
        <p className="text-lg">
          Welcome to our Contact Us page. We are always happy to hear from our
          users and visitors. If you have any questions, suggestions, or issues
          with our website or content, feel free to reach out to us anytime.
        </p>

        <p className="text-lg">
          Our goal is to provide clear, helpful, and up-to-date information about
          online games, APK downloads, bonuses, and guides for users in Pakistan.
          Your feedback helps us improve our services and content quality.
        </p>
      </section>

      {/* Help Section */}
      <section className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-[#0B6C39] text-center py-9">
          How Can We Help You?
        </h2>

        <p className="text-lg mb-4">
          You can contact us for the following reasons:
        </p>

        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="w-3 h-3 bg-[#0B6C39] rounded-full mt-2"></span>
            <span className="text-lg">
              Questions about any game guide or article
            </span>
          </li>

          <li className="flex items-start gap-3">
            <span className="w-3 h-3 bg-[#0B6C39] rounded-full mt-2"></span>
            <span className="text-lg">
              Reporting incorrect or outdated information
            </span>
          </li>

          <li className="flex items-start gap-3">
            <span className="w-3 h-3 bg-[#0B6C39] rounded-full mt-2"></span>
            <span className="text-lg">
              Website suggestions or improvement ideas
            </span>
          </li>

          <li className="flex items-start gap-3">
            <span className="w-3 h-3 bg-[#0B6C39] rounded-full mt-2"></span>
            <span className="text-lg">
              Partnership or collaboration inquiries
            </span>
          </li>

          <li className="flex items-start gap-3">
            <span className="w-3 h-3 bg-[#0B6C39] rounded-full mt-2"></span>
            <span className="text-lg">
              Technical issues related to our website
            </span>
          </li>

          <li className="flex items-start gap-3">
            <span className="w-3 h-3 bg-[#0B6C39] rounded-full mt-2"></span>
            <span className="text-lg">
              General questions or feedback
            </span>
          </li>
        </ul>

        <p className="text-lg mt-6">
          We try our best to respond quickly and provide the right solution.
        </p>
      </section>

      {/* Contact Info */}
      <section className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-[#0B6C39] text-center py-9">
          Get in Touch With Us
        </h2>

        <p className="text-lg mb-4">
          If you want to contact us, please use the email address below. Be sure
          to write your message clearly so we can understand and respond
          appropriately.
        </p>

        <address className="not-italic text-lg">
          <strong>Email:</strong>{" "}
          <a
            href="mailto:Pakmody1@gmail.com"
            className="text-[#0B6C39] font-semibold hover:underline"
          >
            Pakmody1@gmail.com
          </a>
        </address>
      </section>
    </main>
  );
};

export default Contact;
