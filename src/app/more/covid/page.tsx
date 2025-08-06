import Image from "next/image";
import Link from "next/link";

export default function Covid19Page() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16 mt-28">
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        
        {/* Left Column - Logo and Border */}
        <div className="flex flex-col items-center md:flex-row md:items-start">
          {/* Logo */}
          <div className="mb-6 md:mb-0 md:mr-6">
            <Image
              src="/logo.png"
              alt="Mara Place Residence Logo"
              width={256}
              height={256}
              className="object-contain"
              priority
            />
          </div>

          {/* Vertical Border - Only on md+ */}
          <div className="hidden md:block border-r-2 border-gray-300 h-full"></div>
        </div>

        {/* Right Column - Text Content */}
        <div className="flex-1 text-slate-900 text-center md:text-left">
          <h1 className="text-2xl text-red-600 font-bold mb-4 underline underline-offset-4 decoration-blue-500">COVID-19</h1>

          <h2 className="italic font-semibold mb-4">RESPONSIVE MEASURES</h2>

          <p className="mb-4">
            Mara Place Residence team of employees has protective measures in place to prepare for COVID-19.
          </p>

          <p className="mb-4">
            With the health and well-being of our residents and team members as our first priority, we want to keep you updated on our latest measures to keep our residents and family members safe.
          </p>

          <p className="mb-4">
            We are in regular communication with public health authorities and constantly staying updated on the latest information from the World Health Organization (WHO), the Public Health Agency of Canada (PHAC) and local health authorities.
          </p>

          <h3 className="italic font-semibold mb-2">Protective measures</h3>

          <p className="mb-4">
            We have enacted several measures to protect our residents, team members and families including:
          </p>

          <ul className="list-disc list-inside mb-6 space-y-2 text-sm">
            <li>Pandemic planning ongoing for every stage of a potential outbreak</li>
            <li>Enhanced cleaning procedures</li>
            <li>Infection prevention and control measures are implemented including reinforcing hand-washing</li>
            <li>Active screening for everyone who enters the facility</li>
            <li>Essential visitor protocol enforced</li>
            <li>Group outings cancelled</li>
          </ul>

          <h3 className="italic font-semibold mb-2">All-visitor screening</h3>

          <p className="mb-4">
            To best protect our residents, we are limiting essential visitors to family members of residents who are very ill or at end of life.
          </p>

          <p className="mb-4">
            Emergency responders and essential/critical service providers and External Care Providers (ECPs) are also considered essential visitors and are screened upon entry into our building.
          </p>

          <p className="mb-4">
            If you have any questions or concerns,{" "}
            <Link href="/more/contact" className="text-red-500 underline decoration-blue-500">
              please reach out to us.
            </Link>
          </p>

          <p className="mt-6 font-semibold">Mara Place Residence Management</p>
        </div>
      </div>
    </main>
  );
}
