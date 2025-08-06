"use client";
import { useState } from "react";
import Image from "next/image";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } else {
      setStatus("Failed to send message.");
    }
  };

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
          <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg">Contact</h1>
        </div>
      </section>

      {/* Google Map Embed */}
      <div className="w-full h-64 md:h-[300px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d357443.76278754807!2d-79.34304590298919!3d44.434522365047265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d5593eb1b3b4bd%3A0x9bb08f7be9aca856!2sMara%20Place%20Residence!5e1!3m2!1sen!2sca!4v1754458083668!5m2!1sen!2sca"
          width="100%"
          height="100%"
          loading="lazy"
          className="border-0"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Contact Form and Info Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-10">
        {/* Contact Form */}
        <div className="md:w-2/3 w-full text-cyan-800">
          <h2 className="text-xl font-bold text-cyan-500 uppercase mb-2">Get in Touch with Us!</h2>
          <p className="text-sm text-cyan-500 mb-6 uppercase">Your email address will not be published.</p>

          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mt-10 space-y-6">
            {/* Form Fields */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                required
              ></textarea>
            </div>

            {/* Captcha Centered */}
            <div className="flex justify-center">
              <div className="g-recaptcha" data-sitekey="YOUR_SITE_KEY_HERE"></div>
            </div>

            {/* Submit Button Centered */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-cyan-500 hover:bg-cyan-900 text-white font-semibold py-2 px-6 rounded shadow transition"
              >
                Submit
              </button>
            </div>

            {/* Status Message */}
            {status && <p className="text-center mt-4">{status}</p>}
          </form>
        </div>

        {/* Contact Information */}
        <div className="md:w-1/3 w-full text-black">
          <h2 className="text-xl font-bold text-cyan-500 uppercase mb-2">Contact Information</h2>
          <p className="text-sm text-cyan-500 mb-6 uppercase">Call us at any time</p>

          <p className="mb-4">
            <strong>Address:</strong>
            <br />
            B30455 Mara Rd
            <br />
            Beaverton RR#23
            <br />
            ON, L0K 1A0
          </p>

          <p className="mb-4">
            <strong>Email :</strong> themaraplace@gmail.com
          </p>

          <p className="mb-2">
            <strong>Telephone:</strong>
            <br />
            (705) 426-1496
          </p>

          <p>
            <strong>Fax:</strong>
            <br />
            (705) 426-1496
          </p>
        </div>
      </section>
    </div>
  );
}
