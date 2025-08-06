// src/app/services/page.tsx

import Image from "next/image";

export default function ServicesPage() {
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
            Services
            </h1>
        </div>
        </section>

    <main className="flex flex-col md:flex-row justify-between gap-8 px-6 py-12 max-w-7xl mx-auto bg-white text-slate-900">
      {/* Text Section */}
      <div className="flex-1">
        <h1 className="text-3xl font-bold text-cyan-500 mb-4">
          Mara Place Residence
        </h1>
        <p className="mb-4 ">
          Our vision is to provide the residents of Mara Place with cost-effective care,
          personalized attention and value-added services in a home-like setting where
          residents can maintain their dignity and independence. Our goal is to be the
          leader in providing these services to the members of our community.
        </p>

        <p className="mb-6 ">
          Our Philosophy is to ensure the health, safety and well-being of our residents
          through personalized care and attention provided by dedicated and compassionate staff.
        </p>

        {/* Services List */}
        <ul className="list-disc pl-5 space-y-3 ">
          <li>On-site Care-giver 24 hours a day / 7 days a week.</li>
          <li>Medical Monitoring of blood sugar and blood pressure.</li>
          <li>Arrangements* of Full Service Beauty Salon / Barber shop and nails.</li>
          <li>Prescription services delivered 24 hours a day / 7 days a week.</li>
          <li>Supplying personal hygiene items*.</li>
          <li>Transportation to medical appointments such as to doctors and labs*.</li>
          <li>Assistance with daily tasks such as visiting the washroom and bathing.</li>
          <li>Healthy delicious meals and snacks.</li>
          <li>
            Special meal plans* for individuals with medical conditions such as
            diabetes as well as vegetarian and cultural or religious accommodation.
          </li>
          <li>Laundry (wash, dry and fold)</li>
          <li>Long-distance and local calling.</li>
          <li>High-speed Wi-Fi</li>
          <li>Cable TV</li>
          <li>
            Social outings to specialized day programs where residents interact and
            have fun at residences of other Homes for Special Care.
          </li>
          <li>Summer camping.</li>
          <li>
            We believe that living independently is key to health and happiness.
          </li>
          <li>
            At Mara Residence we offer our residents an extension of their home by
            providing support with the activities of daily living or a helping hand when
            needed, which allows our residents to maintain a sense of independence in
            a safe and secure environment.
          </li>
        </ul>

        <p className="mt-4 text-sm text-black-500 italic">
          * Please check with the management about pricing
        </p>
      </div>

     {/* Image Strip Section with Background */}
     <div
        className="w-full md:w-1/3 relative bg-cover bg-center p-4 rounded-md"
        style={{
            backgroundImage: "url('/bg2.jpg')",
        }}
        >
        {/* White overlay with 40% opacity */}
        <div className="absolute inset-0 bg-white/40 rounded-md" />

        {/* Images on top of overlay */}
            <div className="relative flex flex-col gap-6">
                <Image
                src="/services1.jpg"
                alt="Lounge Room"
                width={600}
                height={400}
                className="rounded-md object-cover"
                />
                <Image
                src="/services2.jpg"
                alt="Living Area"
                width={600}
                height={400}
                className="rounded-md object-cover"
                />
                <Image
                src="/services3.jpg"
                alt="Bedroom"
                width={600}
                height={400}
                className="rounded-md object-cover"
                />
            </div>
        </div>


    </main>
    </div>
  );
}
