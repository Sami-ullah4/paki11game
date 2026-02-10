const About = () => {
  return (
    <main className="px-4 md:px-28 py-10">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-[#0B6C39] text-center py-9">
        About Us
      </h1>

      {/* Overview Section */}
      <section className="max-w-5xl mx-auto space-y-4">
        <p className="text-lg">
          Welcome to our platform, a dedicated space created to provide clear,
          reliable, and up-to-date information about online games, APK downloads,
          bonuses, and helpful gaming guides. Our website is designed for users
          who want honest insights and easy-to-understand content without
          confusion or misleading claims.
        </p>

        <p className="text-lg">
          Whether you are new to online gaming or already experienced, our goal
          is to help you make informed decisions and enjoy a safer, more
          enjoyable gaming experience.
        </p>
      </section>

      {/* Who We Are */}
      <section className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-[#0B6C39] text-center py-9">
          Who We Are
        </h2>

        <p className="text-lg">
          We are a content-focused platform built with the intention of serving
          users in Pakistan who are looking for trustworthy gaming information.
          As online games and APK-based platforms continue to grow, we noticed a
          lack of clear, accurate, and user-friendly resources. This website was
          created to bridge that gap.
        </p>
      </section>

      {/* Our Mission */}
      <section className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-[#0B6C39] text-center py-9">
          Our Mission
        </h2>

        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="w-3 h-3 bg-[#0B6C39] rounded-full mt-2"></span>
            <span className="text-lg">
              Provide accurate and up-to-date information about online games and
              APK downloads
            </span>
          </li>

          <li className="flex items-start gap-3">
            <span className="w-3 h-3 bg-[#0B6C39] rounded-full mt-2"></span>
            <span className="text-lg">
              Help users understand games before playing or downloading
            </span>
          </li>

          <li className="flex items-start gap-3">
            <span className="w-3 h-3 bg-[#0B6C39] rounded-full mt-2"></span>
            <span className="text-lg">
              Promote safe and responsible online gaming
            </span>
          </li>

          <li className="flex items-start gap-3">
            <span className="w-3 h-3 bg-[#0B6C39] rounded-full mt-2"></span>
            <span className="text-lg">
              Deliver content that is clear, honest, and user-focused
            </span>
          </li>
        </ul>
      </section>

      {/* What Makes Us Different */}
      <section className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-[#0B6C39] text-center py-9">
          What Sets Us Apart
        </h2>

        <p className="text-lg">
          Unlike many platforms that focus on promotion over value, we prioritize
          user trust and content quality. Our guides are written in simple
          language, tailored for local users, and regularly reviewed to ensure
          accuracy and relevance.
        </p>
      </section>

      {/* Commitment */}
      <section className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-[#0B6C39] text-center py-9">
          Our Commitment
        </h2>

        <p className="text-lg">
          We are committed to continuously improving our platform by updating
          content, listening to user feedback, and maintaining transparency.
          Our aim is to become a reliable resource that users can trust and
          return to with confidence.
        </p>
      </section>
    </main>
  );
};

export default About;
