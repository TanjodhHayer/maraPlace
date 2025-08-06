// src/app/about us/page.tsx

import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col mt-32">
      {/* Hero Section */}
      <section
        className="w-full h-34 relative bg-cover bg-center"
        style={{
            backgroundImage: "url('/background.jpg')",
        }}
        >
        {/* Optional: light dark overlay */}
        <div className="absolute inset-0 bg-white/10" />

        {/* Aligns text with rest of page */}
        <div className="relative z-10 flex items-center h-full max-w-7xl mx-auto px-6">
            <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg">
            About
            </h1>
        </div>
        </section>

      {/* Main Content Section */}
      <section className="flex flex-col md:flex-row justify-between gap-12 px-6 py-16 max-w-7xl mx-auto text-slate-900 bg-white">
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-700 mb-6">
            Mara Place Residence
          </h2>
          <p className="text-lg leading-relaxed">
            We pride ourselves in being one of the most accessible homes to those with special needs. The facility and staff create a supportive environment making Mara Place a comfortable and relaxing living environment.
            <br />
            <br />
            Daily activities include programs that offer residents an outlet for social interaction such as out-of-town day trips and a variety of in-house activities like board games, movie nights, arts and crafts, and more.
            <br />
            <br />
            Mara Place is made up of a diverse group of individuals that make life here a stimulating and fun experience. We’re situated on a beautiful 6.92-acre property in one of the most picturesque towns in Canada—Beaverton. Residents often enjoy walking our tranquil grounds where you can experience a variety of natural spectacles.
          </p>
        </div>

        {/* Image Section with Background */}
        <div
          className="w-full md:w-1/3 relative bg-cover bg-center p-4 rounded-md"
          style={{
            backgroundImage: "url('/bg2.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-white/40 rounded-md" />
          <div className="relative flex flex-col gap-6">
            <Image
              src="/b.jpg"
              alt="Backyard"
              width={800}
              height={300}
              className="rounded-md object-cover w-[100%]"
            />
            <Image
              src="/grass.jpg"
              alt="Backyard"
              width={800}
              height={300}
              className="rounded-md object-cover w-[100%]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
