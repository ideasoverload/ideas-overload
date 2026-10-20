import {
  Globe,
  Smartphone,
  Settings,
  Lightbulb,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Modern, responsive websites that help businesses build credibility and reach more customers.",
  },
  {
    icon: Smartphone,
    title: "Android App Development",
    description:
      "Practical mobile applications designed around your business and your customers.",
  },
  {
    icon: Settings,
    title: "Business Management Systems",
    description:
      "Digital systems that simplify operations, organize information, and improve productivity.",
  },
  {
    icon: Lightbulb,
    title: "Innovative ICT Solutions",
    description:
      "Smart technology solutions that solve real problems and help businesses grow.",
  },
];

const whatsappLink = "https://wa.me/2348131859297?text=Hello%20Ideas%20Overload%2C%20I%27m%20interested%20in%20your%20services.";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <a href="#" className="text-2xl font-black tracking-tight">
          IDEAS<span className="text-cyan-400">OVERLOAD</span>
        </a>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-slate-700 px-5 py-2 text-sm hover:border-cyan-400"
        >
          Let's Talk
        </a>
      </header>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <div>
          <p className="mb-5 font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Technology. Creativity. Solutions.
          </p>

          <h1 className="text-4xl font-black leading-tight sm:text-6xl">
            Turning Ideas Into{" "}
            <span className="text-cyan-400">Digital Solutions.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            We help businesses move forward with powerful websites, mobile
            applications, management systems, and innovative ICT solutions.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-bold text-slate-950 hover:bg-cyan-300"
            >
              Explore Our Services <ArrowRight size={18} />
            </a>

            <a
              href="#contact"
              className="rounded-full border border-slate-600 px-6 py-3 font-semibold hover:border-cyan-400"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-800 p-8 sm:p-12">
          <div className="mb-8 inline-flex rounded-2xl bg-cyan-400/10 p-4 text-cyan-400">
            <Lightbulb size={42} />
          </div>

          <h2 className="text-3xl font-bold">
            Your Vision. Our Technology.
          </h2>

          <p className="mt-4 leading-7 text-slate-300">
            From your first business website to a complete digital management
            system, we turn practical ideas into useful technology.
          </p>

          <div className="mt-8 space-y-4">
            {[
              "Solutions built around your needs",
              "Modern and mobile-friendly design",
              "Technology focused on real results",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle className="shrink-0 text-cyan-400" size={20} />
                <span className="text-slate-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="bg-slate-900/70 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="font-semibold uppercase tracking-[0.2em] text-cyan-400">
            What We Do
          </p>

          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            Technology That Works For You
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-slate-300">
            Practical digital services designed to help businesses work
            smarter, serve customers better, and grow with confidence.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="rounded-2xl border border-slate-800 bg-slate-950 p-6 transition hover:-translate-y-1 hover:border-cyan-400/60"
              >
                <Icon className="mb-5 text-cyan-400" size={32} />
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-3 leading-7 text-slate-400">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-20 text-center">
        <p className="font-semibold uppercase tracking-[0.2em] text-cyan-400">
          Let's Build Something
        </p>

        <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black sm:text-5xl">
          Have an Idea? Let's Turn It Into Reality.
        </h2>

        <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-300">
          Tell us what your business needs. Let's explore the right digital
          solution together.
        </p>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-cyan-400 px-7 py-3 font-bold text-slate-950 hover:bg-cyan-300"
        >
          Start a Conversation <ArrowRight size={18} />
        </a>
      </section>

      <footer className="border-t border-slate-800 px-6 py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Ideas Overload. All rights reserved.
      </footer>
    </main>
  );
}
