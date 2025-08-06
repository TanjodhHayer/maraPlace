"use client";
import { useState } from "react";
import Image from "next/image";

export default function HomePage() {
  // Public image paths
  const houseSrc = "/house.png";

  // Gallery images
  const galleryImages = [
    { src: '/backyard.jpg', name: 'Backyard' },
    { src: '/patio.jpg', name: 'Patio' },
    { src: '/yard.jpg', name: 'Yard' },
    { src: '/sofas.jpg', name: 'Living Room' },
    { src: '/gazebo.jpg', name: 'Gazebo' },
  ];

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{ src: string; name: string } | null>(null);

  const openModal = (img: { src: string; name: string }) => {
    setSelectedImage(img);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <main className="font-sans">

      {/* Section A: Hero */}
      <section className="relative bg-cyan-400 py-12 flex flex-col items-center text-center mt-22">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('/background.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 flex flex-col items-center max-w-4xl px-4 space-y-4">
          <Image
            src={houseSrc}
            alt="House"
            width={600}
            height={400}
            className="rounded-md shadow-md w-full max-w-[600px]"
          />
          <h1 className="text-6xl font-bold text-white mt-4">Mara Place Residence</h1>
          <p className="text-white text-m">
            One of the most accessible homes to those with special needs
          </p>
          <a href="#" className="text-orange-600 underline text-4xl opacity-0 translate-y-4 animate-fadeInUp">we discourage visitors to avoid Coronavirus</a>
        </div>
      </section>

      {/* Section B: Gallery row */}
      <section
        className="w-full relative py-8 mt-4"
        style={{
          backgroundImage: "url('/bg2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Optional overlay over background */}
        <div className="absolute inset-0 bg-white opacity-70 z-0" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 grid grid-cols-4 gap-4">
          {galleryImages.slice(0, 5).map((img, i) => (
            <div
              key={i}
              onClick={() => openModal(img)}
              className="relative group w-full h-36 border-4 border-white rounded overflow-hidden shadow-md cursor-pointer"
            >
              <Image
                src={img.src}
                alt={img.name}
                width={192}
                height={144}
                className="object-cover w-full h-full"
              />
              {/* Dark overlay on hover */}
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition duration-300 pointer-events-none" />
              {/* Text overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white text-lg transform -translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-700">
                  {img.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal for large image */}
      {modalOpen && selectedImage && (
        <div
          onClick={closeModal}
          className="fixed inset-0 flex items-center justify-center z-50 cursor-pointer"
          style={{ backgroundColor: "rgba(0,0,0,0.75)" }}>
          <div
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
            className="relative max-w-4xl max-h-[80vh] rounded shadow-lg"
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.name}
              width={800}
              height={600}
              className="object-contain rounded"
            />
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-3xl font-bold"
              aria-label="Close modal"
            >
              &times;
            </button>
          </div>
        </div>
      )}


      {/* Section C: Description and features */}
      <section className="max-w-5xl mx-auto mt-16 px-4 text-center">
        <h2 className="text-2xl font-semibold mb-6 text-cyan-500">Mara Place Residence</h2>
        <p className="max-w-3xl mx-auto text-gray-700 mb-10">
        We pride ourselves in being one of the most accessible homes to those with special needs. 
        The facility and staff create a supportive environment making Mara Place a comfortable and relaxing living environment. 
        Daily activities include programs that offer residents an outlet for social interaction such as out of town day trips and a variety of in-house activites such as board games, movie nights, arts and crafts and much more. 
        An unassuming group, Mara Place is made up of a diverse group of individuals that make life here a stimulating and fun experience. We have a beautiful, 7 acre property in one fo the most picturesque towns in all of Canada, Beaverton. 
        Residences often enjoy walking our tranquil grounds where you can see a variety of natural spectacles. 
        </p>

        {/* Features list */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-gray-700 text-left">
        {[
          "Highly affordable",
          "15 years of experience",
          "High speed wifi / TV",
          "24/7 Emergency Response",
          "Medical monitoring",
          "Social outings and specialized day programs",
          "All Inclusive",
          "Emergency 'Transportation'",
          "Recreational programs",
        ].map((feature, i) => (
          <div key={i} className="flex items-center space-x-2">
            <img
              src="/check.jpg"
              alt="Checkmark"
              className="w-6 h-6 flex-shrink-0"
            />
            <span>{feature}</span>
          </div>
        ))}
      </div>

      </section>

      {/* Section D: Bottom content with image and text */}
      <section className="w-full bg-gray-100 py-16 mt-12">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="flex-shrink-0 w-full md:w-1/2 rounded overflow-hidden shadow-lg">
            <Image
              src="/sofas.jpg"
              alt="Living room"
              width={600}
              height={400}
              className="object-cover w-full h-full rounded"
            />
          </div>
          <div className="w-full md:w-1/2 text-gray-700">
            <p className="mb-4">
              Our highly affordable, all inclusive services include:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-8 text-sm">
              <li>On-site caregiver 24 hours a day / 7 days a week</li>
              <li>Medical monitoring of blood sugar and blood pressure</li>
              <li>Prescription services delivered 24 hours a day / 7 days a week</li>
            </ul>
            <p className="text-sm italic">
              Our caring staff ensure a safe and nurturing environment for all residents.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
