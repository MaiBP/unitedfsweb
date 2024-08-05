"use client";

import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="flex flex-col items-center py-8 px-4">
      <div className="max-w-3xl w-full">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p>
          Welcome to www.unitedfootballscouting.com (the "Website"). United
          Football Scouting ("we," "us," "our") is committed to protecting your
          privacy and ensuring that your personal information is handled in a
          safe and responsible manner. This Privacy Policy outlines the types of
          personal information we collect, how we use and protect that
          information, and your rights regarding your personal data.
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-2">Information We Collect</h2>
        <h3 className="text-xl font-bold mt-4 mb-2">Personal Information</h3>
        <p>
          We may collect the following types of personal information when you
          interact with our Website:
        </p>
        <ul className="list-disc list-inside ml-4">
          <li>
            Contact Information: Name, email address, phone number, and mailing
            address.
          </li>
          <li>Demographic Information: Age, gender, and nationality.</li>
          <li>
            Player Information: Football-related skills, experience, and
            preferences.
          </li>
          <li>
            Technical Information: IP address, browser type, operating system,
            and browsing behavior.
          </li>
        </ul>

        <h3 className="text-xl font-bold mt-4 mb-2">
          Non-Personal Information
        </h3>
        <p>
          We may also collect non-personal information that does not identify
          you personally, including but not limited to:
        </p>
        <ul className="list-disc list-inside ml-4">
          <li>Website usage data</li>
          <li>Aggregated demographic data</li>
        </ul>

        <h2 className="text-2xl font-bold mt-6 mb-2">
          How We Use Your Information
        </h2>
        <p>
          We use the personal information we collect for the following purposes:
        </p>
        <ul className="list-disc list-inside ml-4">
          <li>
            To Provide Services: To facilitate your participation in our
            football clinics and training sessions, and to communicate with you
            about our services.
          </li>
          <li>
            To Improve Our Website: To understand how users interact with our
            Website and to enhance user experience.
          </li>
          <li>
            Marketing and Communication: To send you updates, newsletters,
            promotional materials, and other information related to our
            services.
          </li>
          <li>
            Legal Compliance: To comply with legal obligations and protect our
            legal rights.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-6 mb-2">
          How We Protect Your Information
        </h2>
        <p>
          We implement appropriate technical and organizational measures to
          protect your personal information from unauthorized access,
          disclosure, alteration, and destruction. These measures include:
        </p>
        <ul className="list-disc list-inside ml-4">
          <li>Secure server and encryption technologies</li>
          <li>Access controls and authentication procedures</li>
          <li>Regular security audits and updates</li>
        </ul>

        <h2 className="text-2xl font-bold mt-6 mb-2">
          Sharing Your Information
        </h2>
        <p>
          We do not sell, trade, or otherwise transfer your personal information
          to third parties without your consent, except in the following
          circumstances:
        </p>
        <ul className="list-disc list-inside ml-4">
          <li>
            Service Providers: We may share your information with third-party
            service providers who assist us in operating our Website and
            providing our services.
          </li>
          <li>
            Legal Requirements: We may disclose your information if required to
            do so by law or in response to valid requests by public authorities.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-6 mb-2">Your Rights</h2>
        <p>
          You have the following rights regarding your personal information:
        </p>
        <ul className="list-disc list-inside ml-4">
          <li>
            Access: You have the right to request access to the personal
            information we hold about you.
          </li>
          <li>
            Correction: You have the right to request correction of any
            inaccurate or incomplete information.
          </li>
          <li>
            Deletion: You have the right to request deletion of your personal
            information, subject to certain legal obligations.
          </li>
          <li>
            Objection: You have the right to object to the processing of your
            personal information for certain purposes.
          </li>
          <li>
            Restriction: You have the right to request restriction of processing
            under certain circumstances.
          </li>
          <li>
            Portability: You have the right to request the transfer of your
            personal information to another party.
          </li>
        </ul>
        <p>
          To exercise these rights, please contact us at{" "}
          <a
            href="mailto:yourcontactemail@example.com"
            className="text-blue-500"
          >
            info@unitedfs.com
          </a>
          .
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-2">
          Changes to This Privacy Policy
        </h2>
        <p>
          We may update this Privacy Policy from time to time to reflect changes
          in our practices or legal requirements. Any updates will be posted on
          this page, and we will notify you of any significant changes.
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-2">Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy or our
          data practices, please contact us at:
        </p>
        <address className="not-italic">
          <strong>United Football Scouting</strong>
          <br />
          Email:{" "}
          <a
            href="mailto:yourcontactemail@example.com"
            className="text-blue-500"
          >
            info@unitedfs.com
          </a>
        </address>

        <h2 className="text-2xl font-bold mt-6 mb-2">Conclusion</h2>
        <p>
          At United Football Scouting, we are dedicated to protecting your
          privacy and ensuring the security of your personal information. We
          appreciate your trust and are committed to safeguarding the data you
          share with us as we unite football players from around the world and
          help elevate their game to new heights. Thank you for being a part of
          our global community.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
