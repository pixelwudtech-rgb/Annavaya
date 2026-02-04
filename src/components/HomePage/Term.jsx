import React from "react";

export default function TermsAndConditions() {
  return (
    <main className="text-gray-900 mt-10">
      {/* HERO */}
      <section className=" text-white py-20 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900">
          Terms & Conditions
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-gray-700">
          Please review these terms carefully before using our website or
          engaging with our products and services.
        </p>
      </section>

      {/* CONTENT */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-8 leading-relaxed text-sm sm:text-base">
          
          {/* 1. INTRODUCTION */}
          <div>
            <h2 className="text-xl font-semibold mb-3">1. Introduction</h2>
            <p className="text-gray-900">
              Welcome to <strong>Keerai World</strong>. These Terms & Conditions
              govern your access to and use of our website, products, and
              services. By visiting our website or purchasing our products, you
              agree to comply with these Terms.
            </p>
          </div>

          {/* 2. DEFINITIONS */}
          <div>
            <h2 className="text-xl font-semibold mb-3">2. Definitions</h2>
            <p className="text-gray-900">
              <strong>"Company"</strong> refers to Keerai World. <br />
              <strong>"Products"</strong> refer to snack items and related
              offerings produced or supplied by Keerai World. <br />
              <strong>"Services"</strong> include customer support, information,
              and interactions provided through our website. <br />
              <strong>"User"</strong> refers to any individual, retailer, or
              business accessing or using our website or products.
            </p>
          </div>

          {/* 3. USE OF WEBSITE */}
          <div>
            <h2 className="text-xl font-semibold mb-3">
              3. Use of Our Website
            </h2>
            <p className="text-gray-900">
              You agree to use our website only for lawful purposes. You must not
              misuse the website, attempt unauthorized access, disrupt site
              functionality, or engage in activities that could harm the
              Company, its users, or its systems.
            </p>
          </div>

          {/* 4. PRODUCT INFORMATION */}
          <div>
            <h2 className="text-xl font-semibold mb-3">
              4. Product Information
            </h2>
            <p className="text-gray-900">
              We make every effort to provide accurate and up-to-date
              information about our products, including ingredients,
              packaging, and availability. However, Keerai World does not warrant
              that all product descriptions, pricing, or availability details
              are always complete or error-free.
            </p>
          </div>

          {/* 5. INTELLECTUAL PROPERTY */}
          <div>
            <h2 className="text-xl font-semibold mb-3">
              5. Intellectual Property
            </h2>
            <p className="text-gray-900">
              All content on this website, including text, images, graphics,
              logos, branding, and design elements, is the property of Keerai World
              and is protected under applicable intellectual property laws.
              Unauthorized use, reproduction, or distribution is prohibited.
            </p>
          </div>

          {/* 6. PRIVACY */}
          <div>
            <h2 className="text-xl font-semibold mb-3">6. Privacy</h2>
            <p className="text-gray-900">
              Your use of our website is also governed by our Privacy Policy.
              Please review the Privacy Policy to understand how we collect,
              use, and protect your personal information.
            </p>
          </div>

          {/* 7. LIMITATION OF LIABILITY */}
          <div>
            <h2 className="text-xl font-semibold mb-3">
              7. Limitation of Liability
            </h2>
            <p className="text-gray-900">
              To the extent permitted by law, Keerai World shall not be liable for
              any indirect, incidental, special, or consequential damages
              arising from your use of our website or products, including but
              not limited to loss of data, business interruption, or loss of
              profits.
            </p>
          </div>

          {/* 8. CHANGES */}
          <div>
            <h2 className="text-xl font-semibold mb-3">
              8. Changes to These Terms
            </h2>
            <p className="text-gray-900">
              We reserve the right to update or modify these Terms & Conditions
              at any time. Any changes will be posted on this page, and continued
              use of the website or products indicates acceptance of the revised
              terms.
            </p>
          </div>

          {/* 9. GOVERNING LAW */}
          <div>
            <h2 className="text-xl font-semibold mb-3">9. Governing Law</h2>
            <p className="text-gray-900">
              These Terms & Conditions shall be governed by and interpreted in
              accordance with the laws of India, without regard to conflict of
              law principles.
            </p>
          </div>

          {/* 10. CONTACT */}
          <div>
            <h2 className="text-xl font-semibold mb-3">10. Contact Us</h2>
            <p className="text-gray-900">
              If you have any questions regarding these Terms & Conditions,
              please contact us via{" "}
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
