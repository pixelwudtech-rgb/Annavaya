import React from "react";

export default function CookiesPolicy() {
  return (
    <main className="text-gray-900 mt-10">
      {/* HERO */}
      <section className="py-20 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900">
          Cookies Policy
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-gray-700">
          This Cookies Policy explains how Keerai World uses cookies to improve
          your browsing experience.
        </p>
      </section>

      {/* CONTENT */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-8 leading-relaxed text-sm sm:text-base">

          {/* 1. INTRODUCTION */}
          <div>
            <h2 className="text-xl font-semibold mb-3">
              1. What Are Cookies?
            </h2>
            <p className="text-gray-900">
              Cookies are small text files stored on your device when you visit
              a website. They help the website function properly, remember your
              preferences, and improve overall user experience.
            </p>
          </div>

          {/* 2. HOW WE USE COOKIES */}
          <div>
            <h2 className="text-xl font-semibold mb-3">
              2. How We Use Cookies
            </h2>
            <p className="text-gray-900">
              Keerai World uses cookies to:
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-2 text-gray-900">
              <li>Ensure the website functions smoothly</li>
              <li>Understand how visitors interact with our website</li>
              <li>Improve performance, design, and content</li>
              <li>Maintain basic security and reliability</li>
            </ul>
          </div>

          {/* 3. TYPES OF COOKIES */}
          <div>
            <h2 className="text-xl font-semibold mb-3">
              3. Types of Cookies We Use
            </h2>
            <p className="text-gray-900">
              We may use the following types of cookies:
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-2 text-gray-900">
              <li>
                <strong>Essential Cookies:</strong> Required for core website
                functionality.
              </li>
              <li>
                <strong>Performance Cookies:</strong> Help us understand how the
                website is used so we can improve it.
              </li>
              <li>
                <strong>Functional Cookies:</strong> Remember your preferences
                and settings.
              </li>
            </ul>
          </div>

          {/* 4. THIRD-PARTY COOKIES */}
          <div>
            <h2 className="text-xl font-semibold mb-3">
              4. Third-Party Cookies
            </h2>
            <p className="text-gray-900">
              In some cases, we may use trusted third-party services (such as
              analytics tools) that place cookies to help us analyze website
              usage. These cookies are governed by the respective third-party
              privacy policies.
            </p>
          </div>

          {/* 5. MANAGING COOKIES */}
          <div>
            <h2 className="text-xl font-semibold mb-3">
              5. Managing Your Cookies
            </h2>
            <p className="text-gray-900">
              You can control or disable cookies through your browser settings.
              Please note that disabling cookies may affect certain features or
              functionality of the website.
            </p>
          </div>

          {/* 6. CHANGES */}
          <div>
            <h2 className="text-xl font-semibold mb-3">
              6. Changes to This Cookies Policy
            </h2>
            <p className="text-gray-900">
              We may update this Cookies Policy from time to time. Any changes
              will be reflected on this page, and continued use of our website
              indicates acceptance of the updated policy.
            </p>
          </div>

          {/* 7. CONTACT */}
          <div>
            <h2 className="text-xl font-semibold mb-3">
              7. Contact Us
            </h2>
            <p className="text-gray-900">
              If you have any questions about our use of cookies, please reach
              out via{" "}
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
