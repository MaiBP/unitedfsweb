"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { contactFormFields } from "@/app/data";

type FormData = {
  [key: string]: string;
};

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {contactFormFields
        .filter((field) => !field.image)
        .map((field) => (
          <div key={field.id}>
            <label className="block text-sm font-medium text-gray-700">
              {field.label}
            </label>
            {field.type === "textarea" ? (
              <textarea
                {...register(field.name!, { required: field.required })}
                rows={field.rows}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            ) : (
              <input
                type={field.type}
                {...register(field.name!, { required: field.required })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            )}
            {field.name && errors[field.name] && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>
        ))}
      <button
        type="submit"
        className="mt-4 w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
