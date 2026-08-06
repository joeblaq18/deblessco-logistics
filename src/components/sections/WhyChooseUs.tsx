import Image from "next/image";
import {
  ShieldCheck,
  Clock3,
  Globe2,
  BadgeDollarSign,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Trusted & Reliable",
    text: "We work with verified suppliers and manufacturers to guarantee quality and reliability.",
  },
  {
    icon: Clock3,
    title: "Fast Delivery",
    text: "Efficient shipping and customs processes ensure your goods arrive on time.",
  },
  {
    icon: Globe2,
    title: "Global Network",
    text: "Strong sourcing partnerships across China with reliable freight solutions to Ghana.",
  },
  {
    icon: BadgeDollarSign,
    title: "Competitive Pricing",
    text: "We negotiate directly with suppliers to save you money on every shipment.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="about"
      className="bg-slate-50 py-24"
    >
      <div className="container mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-yellow-500 font-semibold uppercase tracking-widest">
            Why Choose Us
          </p>

          <h2 className="text-4xl font-bold mt-3 text-slate-900">
            Your Trusted Partner in Global Logistics
          </h2>

          <p className="text-slate-600 mt-5 max-w-3xl mx-auto">
            Deblessco Logistics simplifies international sourcing,
            freight forwarding, customs clearance, and last-mile delivery,
            making global trade easy, transparent, and affordable.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Image */}

          <div className="relative">

            <Image
              src="/images/logistics/why-choose-us.jpg"
              alt="Container Port"
              width={700}
              height={700}
              className="rounded-3xl object-cover shadow-2xl"
            />

            <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-xl p-6">

              <h3 className="text-4xl font-bold text-[#0F2D5C]">
                8+
              </h3>

              <p className="text-gray-600">
                Logistics Services
              </p>

            </div>

          </div>

          {/* Features */}

          <div className="grid gap-7">

            {features.map((feature, index) => {

              const Icon = feature.icon;

              return (

                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition flex gap-5"
                >

                  <div className="bg-blue-100 h-16 w-16 rounded-2xl flex items-center justify-center">

                    <Icon className="text-[#0F2D5C]" size={30} />

                  </div>

                  <div>

                    <h3 className="text-2xl font-bold mb-2">

                      {feature.title}

                    </h3>

                    <p className="text-gray-600 leading-8">

                      {feature.text}

                    </p>

                  </div>

                </div>

              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}