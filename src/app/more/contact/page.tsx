"use client";

import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("xkoqqknk");

  if (state.succeeded) {
    return (
      <div className="flex flex-col items-center justify-center mt-40">
        <h2 className="text-3xl font-bold text-cyan-500">Message Sent!</h2>
        <p className="mt-4 text-gray-600">
          Thank you for contacting Mara Place. We will get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col mt-32">
      {/* Hero Section */}
      <section
        className="w-full h-34 relative bg-cover bg-center"
        style={{
          backgroundImage: "url('/background.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-white/10" />

        <div className="relative z-10 flex items-center h-full max-w-7xl mx-auto px-6 py-8">
          <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg">
            Contact
          </h1>
        </div>
      </section>

      {/* Google Map */}
      <div className="w-full h-64 md:h-[300px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d357443.76278754807!2d-79.34304590298919!3d44.434522365047265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d5593eb1b3b4bd%3A0x9bb08f7be9aca856!2sMara%20Place%20Residence!5e1!3m2!1sen!2sca!4v1754458083668!5m2!1sen!2sca"
          width="100%"
          height="100%"
          loading="lazy"
          className="border-0"
          allowFullScreen
        />
      </div>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-10">
        
        {/* Contact Form */}
        <div className="md:w-2/3 w-full text-cyan-800">
          <h2 className="text-xl font-bold text-cyan-500 uppercase mb-2">
            Get in Touch with Us!
          </h2>

          <p className="text-sm text-cyan-500 mb-6 uppercase">
            Your email address will not be published.
          </p>

          <form
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            className="max-w-2xl mx-auto mt-10 space-y-6"
          >

            {/* Honeypot Spam Protection */}
            <input
              type="text"
              name="_gotcha"
              style={{ display: "none" }}
            />

            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>

              <input
                type="text"
                name="name"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>

              <input
                id="email"
                type="email"
                name="email"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />

              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone
              </label>

              <input
                type="tel"
                name="phone"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />

              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            {/* File Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Attachment
              </label>

              <input
                type="file"
                name="attachment"
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />

              <p className="text-xs text-gray-500 mt-1">
                Optional: Upload documents or images (max ~10MB)
              </p>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">

              <button
                type="submit"
                disabled={state.submitting}
                className="bg-cyan-500 hover:bg-cyan-900 text-white font-semibold py-2 px-6 rounded shadow transition"
              >
                {state.submitting ? "Sending..." : "Submit"}
              </button>

            </div>

          </form>
        </div>

        {/* Contact Info */}
        <div className="md:w-1/3 w-full text-black">

          <h2 className="text-xl font-bold text-cyan-500 uppercase mb-2">
            Contact Information
          </h2>

          <p className="text-sm text-cyan-500 mb-6 uppercase">
            Call us at any time
          </p>

          <p className="mb-4">
            <strong>Address:</strong><br/>
            B30455 Mara Rd<br/>
            Beaverton RR#23<br/>
            ON, L0K 1A0
          </p>

          <p className="mb-4">
            <strong>Email:</strong> themaraplace@gmail.com
          </p>

          <p className="mb-2">
            <strong>Telephone:</strong><br/>
            (705) 426-1496
          </p>

          <p>
            <strong>Fax:</strong><br/>
            (705) 426-1496
          </p>

        </div>

      </section>
    </div>
  );
}