import React from "react";

export default function PrivacyPolicy() {
  return (
    <main className="text-gray-900 mt-20">
      {/* HERO */}
      <section className="text-black py-20 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm sm:text-base text-gray-700">
          Last updated: June 1, 2025
        </p>
      </section>

      {/* CONTENT */}
      <section className="py-10 px-6">
        <div className="max-w-3xl mx-auto space-y-8 leading-relaxed text-sm sm:text-base">
          <p className="text-gray-900">
            At <strong>Keerai World</strong>, we value your trust and are committed
            to protecting your privacy. This Privacy Policy explains how we
            collect, use, and safeguard your information when you visit our
            website, contact us, or engage with our products and services.
          </p>

          {/* INFORMATION WE COLLECT */}
          <div>
            <h2 className="text-xl font-semibold mb-3">
              Information We Collect
            </h2>

            <h3 className="font-medium mt-4 mb-2">Personal Information</h3>
            <p className="text-gray-900">
              We may collect personal information when you interact with us,
              including:
            </p>
            <ul className="list-disc pl-6 mt-2 text-gray-900 space-y-1">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Business or retail name (if applicable)</li>
              <li>Address (only when required for orders or delivery)</li>
            </ul>

            <h3 className="font-medium mt-6 mb-2">Usage Information</h3>
            <p className="text-gray-900">
              We may collect limited technical information such as browser type,
              device details, IP address, and pages visited. This information
              helps us understand how our website is used and improve the
              overall experience.
            </p>
          </div>

          {/* HOW WE USE */}
          <div>
            <h2 className="text-xl font-semibold mb-3">
              How We Use Your Information
            </h2>
            <p className="text-gray-900">
              The information we collect may be used to:
            </p>
            <ul className="list-disc pl-6 mt-2 text-gray-900 space-y-1">
              <li>Respond to your enquiries and messages</li>
              <li>Provide products, services, and customer support</li>
              <li>Process orders and manage deliveries where applicable</li>
              <li>Improve our website, products, and services</li>
              <li>Share important updates or relevant information</li>
              <li>Maintain website security and prevent misuse</li>
            </ul>
          </div>

          {/* COOKIES */}
          <div>
            <h2 className="text-xl font-semibold mb-3">Cookies</h2>
            <p className="text-gray-900">
              Our website may use cookies to enhance your browsing experience.
              Cookies help us understand website traffic and usage patterns.
              You may choose to disable cookies through your browser settings;
              however, some features of the website may not function as intended.
            </p>
          </div>

          {/* DATA SECURITY */}
          <div>
            <h2 className="text-xl font-semibold mb-3">Data Security</h2>
            <p className="text-gray-900">
              We take reasonable and appropriate measures to protect your
              personal information. While we strive to safeguard your data,
              please note that no method of online transmission or electronic
              storage can be guaranteed to be completely secure.
            </p>
          </div>

          {/* THIRD PARTY */}
          <div>
            <h2 className="text-xl font-semibold mb-3">
              Third-Party Services
            </h2>
            <p className="text-gray-900">
              Keerai World does not sell, trade, or rent your personal information.
              In limited cases, we may share necessary information with trusted
              service providers who assist us in operating our business, under
              strict confidentiality obligations.
            </p>
          </div>

          {/* CHILDREN */}
          <div>
            <h2 className="text-xl font-semibold mb-3">
              Children’s Information
            </h2>
            <p className="text-gray-900">
              Our website and services are intended for general audiences.
              We do not knowingly collect personal information from children
              under the age of 18.
            </p>
          </div>

          {/* CHANGES */}
          <div>
            <h2 className="text-xl font-semibold mb-3">
              Changes to This Policy
            </h2>
            <p className="text-gray-900">
              Keerai World may update this Privacy Policy from time to time.
              Any changes will be reflected on this page along with an updated
              revision date.
            </p>
          </div>

          {/* CONTACT */}
          <div>
            <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
            <p className="text-gray-900">
              If you have any questions or concerns regarding this Privacy
              Policy, please reach out to us via{" "}
              <a
                href="/Contact"
                className="text-black underline font-medium"
              >
                our contact page
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
