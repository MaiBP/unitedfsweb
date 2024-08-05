import React from "react";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import { contactFormFields } from "@/app/data";
import ContactInfo from "@/components/ContactInfo";

const ContactPage: React.FC = () => {
  const imageSrc = contactFormFields.find((field) => field.image)?.image || "";

  return (
    <>
      <div className="min-h-screen flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="relative w-full h-64 md:h-full">
            <Image
              src={imageSrc}
              layout="fill"
              objectFit="cover"
              alt="Contact Us"
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center p-4">
          <div className="max-w-md w-full space-y-8">
            <h1 className="flex items-center text-5xl font-extrabold dark:text-white">
              Contact us 📫
            </h1>
            <ContactInfo />
            {/* <ContactForm /> */}
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default ContactPage;
