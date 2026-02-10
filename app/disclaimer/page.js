import Breadcrumbs from "@/lib/Breadcrumbs";

export const metadata = {
  title: "Disclaimer",
  description:
    "Read the Disclaimer of Paki11 Game. Learn about the limitations of liability and responsibilities when using our services.",

  alternates: {
    canonical: "/disclaimer",
  },

  authors: [{ name: "Paki11 Game Team" }],

  publisher: "Paki11 Game",
};

const Disclaimer = () => {
 
  return (
    <section className="px-4 md:px-10 pt-8 pb-12">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}

        <div className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0B6C39]">
            Disclaimer
          </h1>
        </div>

        {/* Body */}
        <div className="space-y-8 text-lg leading-relaxed text-gray-800">
          {/* Interpretation & Definitions */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#0B6C39]">
              Interpretation and Definitions
            </h2>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-[#0B6C39]">
                Interpretation
              </h3>
              <p>
                The words whose initial letters are capitalized have meanings
                defined under the following conditions. The following
                definitions shall have the same meaning regardless of whether
                they appear in singular or in plural.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-[#0B6C39]">
                Definitions
              </h3>
              <p>For the purposes of this Disclaimer:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <p>
                    <strong>Company</strong> (referred to as either &quot;the
                    Company&quot;, &quot;We&quot;, &quot;Us&quot; or
                    &quot;Our&quot; in this Disclaimer) refers to PAKi11.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Service</strong> refers to the Website.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>You</strong> means the individual accessing the
                    Service, or the company, or other legal entity on behalf of
                    which such individual is accessing or using the Service, as
                    applicable.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Website</strong> refers to PAKi11, accessible from{" "}
                    <a
                      href="https://paki11game.com.pk"
                      rel="external nofollow noopener"
                      target="_blank"
                      className="text-[#0B6C39] hover:text-[#0B6C39] underline"
                    >
                      paki11game.com.pk
                    </a>
                    .
                  </p>
                </li>
              </ul>
            </div>
          </section>

          {/* General Disclaimer */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#0B6C39]">
              Disclaimer
            </h2>
            <p>
              The information contained on the Service is for general
              information purposes only.
            </p>
            <p>
              The Company assumes no responsibility for errors or omissions in
              the contents of the Service.
            </p>
            <p>
              In no event shall the Company be liable for any special, direct,
              indirect, consequential, or incidental damages or any damages
              whatsoever, whether in an action of contract, negligence or other
              tort, arising out of or in connection with the use of the Service
              or the contents of the Service. The Company reserves the right to
              make additions, deletions, or modifications to the contents on the
              Service at any time without prior notice.
            </p>
            <p>
              The Company does not warrant that the Service is free of viruses
              or other harmful components.
            </p>
          </section>

          {/* External Links Disclaimer */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#0B6C39]">
              External Links Disclaimer
            </h2>
            <p>
              The Service may contain links to external websites that are not
              provided or maintained by or in any way affiliated with the
              Company.
            </p>
            <p>
              Please note that the Company does not guarantee the accuracy,
              relevance, timeliness, or completeness of any information on these
              external websites.
            </p>
          </section>

          {/* Errors and Omissions Disclaimer */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#0B6C39]">
              Errors and Omissions Disclaimer
            </h2>
            <p>
              The information given by the Service is for general guidance on
              matters of interest only. Even if the Company takes every
              precaution to ensure that the content of the Service is both
              current and accurate, errors can occur. Plus, given the changing
              nature of laws, rules and regulations, there may be delays,
              omissions or inaccuracies in the information contained on the
              Service.
            </p>
            <p>
              The Company is not responsible for any errors or omissions, or for
              the results obtained from the use of this information.
            </p>
          </section>

          {/* Fair Use Disclaimer */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#0B6C39]">
              Fair Use Disclaimer
            </h2>
            <p>
              The Company may use copyrighted material which has not always been
              specifically authorized by the copyright owner. The Company is
              making such material available for criticism, comment, news
              reporting, teaching, scholarship, or research.
            </p>
            <p>
              The Company believes this constitutes a &quot;fair use&quot; of
              any such copyrighted material as provided for in section 107 of
              the United States Copyright law (or equivalent provisions under
              applicable law).
            </p>
            <p>
              If You wish to use copyrighted material from the Service for your
              own purposes that go beyond fair use, You must obtain permission
              from the copyright owner.
            </p>
          </section>

          {/* Views Expressed Disclaimer */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#0B6C39]">
              Views Expressed Disclaimer
            </h2>
            <p>
              The Service may contain views and opinions which are those of the
              authors and do not necessarily reflect the official policy or
              position of any other author, agency, organization, employer or
              company, including the Company.
            </p>
            <p>
              If the Service allows users to post content (including comments),
              such content is the sole responsibility of the user who posted it.
              The Company is not liable for user-generated content and reserves
              the right to remove it for any reason.
            </p>
          </section>

          {/* No Responsibility Disclaimer */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#0B6C39]">
              No Responsibility Disclaimer
            </h2>
            <p>
              The information on the Service is provided with the understanding
              that the Company is not herein engaged in rendering legal,
              accounting, tax, or other professional advice and services. As
              such, it should not be used as a substitute for consultation with
              professional accounting, tax, legal or other competent advisers.
            </p>
            <p>
              In no event shall the Company or its suppliers be liable for any
              special, incidental, indirect, or consequential damages whatsoever
              arising out of or in connection with your access or use or
              inability to access or use the Service.
            </p>
          </section>

          {/* Use at Your Own Risk Disclaimer */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#0B6C39]">
              &quot;Use at Your Own Risk&quot; Disclaimer
            </h2>
            <p>
              All information in the Service is provided &quot;as is&quot;, with
              no guarantee of completeness, accuracy, timeliness or of the
              results obtained from the use of this information, and without
              warranty of any kind, express or implied, including, but not
              limited to warranties of performance, merchantability and fitness
              for a particular purpose.
            </p>
            <p>
              The Company will not be liable to You or anyone else for any
              decision made or action taken in reliance on the information given
              by the Service or for any consequential, special or similar
              damages, even if advised of the possibility of such damages.
            </p>
          </section>

          {/* Contact */}
          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-[#0B6C39]">
              Contact Us
            </h2>
            <p>
              If you have any questions about this Disclaimer, You can contact
              Us:
            </p>
            <ul className="list-disc pl-6">
              <li>
                By email:{" "}
                <a
                  href="mailto:pakmody1@gmail.com"
                  className="text-[#0974C2] hover:text-[#0B6C39] underline"
                >
                  pakmody1@gmail.com{" "}
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Disclaimer;
