"use client";

import { useEffect, useState } from "react";
import {
  Globe,
  Smartphone,
  Settings,
  Lightbulb,
  ArrowRight,
  CheckCircle,
  Monitor,
  Code2,
  MessageCircle,
  Laptop,
  GraduationCap,
  Plane,
  BarChart3,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const whatsappLink =
  "https://wa.me/2348131859297?text=Hello%20Ideas%20Overload%2C%20I%27m%20interested%20in%20your%20services.";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Professional, responsive websites that build trust and help your business reach more customers.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    number: "01",
  },
  {
    icon: Smartphone,
    title: "Android App Development",
    description: "Useful mobile applications designed around your customers and the way your business works.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80",
    number: "02",
  },
  {
    icon: Settings,
    title: "Business Management Systems",
    description: "Manage customers, sales, expenses and daily operations with less stress and better visibility.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    number: "03",
  },
  {
    icon: Lightbulb,
    title: "Innovative ICT Solutions",
    description: "Practical technology support and creative digital solutions for everyday business challenges.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80",
    number: "04",
  },
];

const projects = [
  {
    title: "Business Management System",
    category: "WEB APPLICATION · CONCEPT",
    description: "A dashboard concept for tracking sales, expenses, customers and business performance.",
    icon: BarChart3,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=85",
    tone: "from-cyan-500/30",
  },
  {
    title: "Bright Future International School",
    category: "SCHOOL WEBSITE · DEMO",
    description: "A welcoming school website concept for sharing information, programmes and admissions details.",
    icon: GraduationCap,
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=85",
    tone: "from-emerald-500/30",
  },
  {
    title: "Android App Concept",
    category: "MOBILE APPLICATION · CONCEPT",
    description: "A mobile-first interface concept built around simple navigation and useful everyday features.",
    icon: Smartphone,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1000&q=85",
    tone: "from-violet-500/30",
  },
  {
    title: "Travel Agency Website",
    category: "TRAVEL WEBSITE · CONCEPT",
    description: "A clean travel website concept for presenting packages and guiding customers to make enquiries.",
    icon: Plane,
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1000&q=85",
    tone: "from-amber-500/30",
  },
];


const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=85",
    title: "Websites that make an impression",
    subtitle: "Build a stronger digital presence.",
    label: "WEBSITE DEVELOPMENT",
  },
  {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=85",
    title: "Business systems that simplify work",
    subtitle: "Keep your operations organised.",
    label: "BUSINESS MANAGEMENT SYSTEMS",
  },
  {
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1400&q=85",
    title: "Mobile experiences built for people",
    subtitle: "Useful apps, designed around you.",
    label: "ANDROID APP DEVELOPMENT",
  },
];

function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[active];
  const move = (direction) =>
    setActive((current) => (current + direction + heroSlides.length) % heroSlides.length);

  return (
    <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-700/80 bg-slate-900 shadow-2xl shadow-cyan-950/40">
      <div className="relative h-[360px] sm:h-[440px]">
        {heroSlides.map((item, index) => (
          <img
            key={item.label}
            src={item.image}
            alt={item.title}
            fetchPriority={index === 0 ? "high" : "auto"}
            className={"absolute inset-0 h-full w-full object-cover transition-opacity duration-700 " + (active === index ? "opacity-100" : "opacity-0")}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-slate-950/5" />
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
          <p className="inline-flex rounded-full border border-cyan-300/30 bg-slate-950/60 px-3 py-1.5 text-[10px] font-bold tracking-[0.16em] text-cyan-200 backdrop-blur sm:text-xs">{slide.label}</p>
          <h2 className="mt-4 max-w-md text-2xl font-black leading-tight sm:text-3xl">{slide.title}</h2>
          <p className="mt-2 text-sm text-slate-200 sm:text-base">{slide.subtitle}</p>
          <a href="#portfolio" className="mt-5 inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300">Explore our work <ArrowRight size={16} /></a>
        </div>
        <button type="button" onClick={() => move(-1)} aria-label="Previous slide" className="absolute left-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-slate-950/60 text-white backdrop-blur transition hover:bg-cyan-400 hover:text-slate-950"><ChevronLeft size={21} /></button>
        <button type="button" onClick={() => move(1)} aria-label="Next slide" className="absolute right-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-slate-950/60 text-white backdrop-blur transition hover:bg-cyan-400 hover:text-slate-950"><ChevronRight size={21} /></button>
        <div className="absolute right-5 top-5 flex gap-2">
          {heroSlides.map((item, index) => (
            <button key={item.label} type="button" onClick={() => setActive(index)} aria-label={"Show slide " + (index + 1)} aria-current={active === index ? "true" : undefined} className={"h-2.5 rounded-full transition-all " + (active === index ? "w-7 bg-cyan-300" : "w-2.5 bg-white/70")} />
          ))}
        </div>
      </div>
    </div>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-400">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 leading-7 text-slate-300">{description}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
        <a href="#" className="block w-44 shrink-0 sm:w-52" aria-label="Ideas Overload home">
          <img src="/ideas-overload-logo.svg" alt="Ideas Overload — Bigger Thinking. Brighter Possibilities." className="h-auto w-full" />
        </a>
        <nav className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
          <a className="transition hover:text-cyan-300" href="#services">Services</a>
          <a className="transition hover:text-cyan-300" href="#portfolio">Portfolio</a>
          <a className="transition hover:text-cyan-300" href="#about">About</a>
        </nav>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-cyan-400/50 px-4 py-2.5 text-sm font-semibold transition hover:bg-cyan-400 hover:text-slate-950 sm:px-5">
          <MessageCircle size={16} /> Let&apos;s Talk
        </a>
      </header>

      <section className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 sm:py-20 md:grid-cols-2 md:py-24">
        <div className="relative z-10">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-cyan-300">
            <span className="h-2 w-2 rounded-full bg-cyan-400" /> Digital solutions for growing businesses
          </p>
          <h1 className="max-w-2xl text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Smart Digital Solutions for a <span className="text-cyan-400">Better Tomorrow.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
            We turn practical ideas into powerful websites, mobile apps and business systems that help you work smarter and grow with confidence.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#portfolio" className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3.5 font-bold text-slate-950 transition hover:bg-cyan-300">
              Explore Our Work <ArrowRight size={18} />
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-6 py-3.5 font-semibold transition hover:border-cyan-400">
              Start a Conversation
            </a>
          </div>
          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
            {["Mobile-friendly design", "Solutions built for you", "Direct WhatsApp support"].map((item) => (
              <span key={item} className="inline-flex items-center gap-2"><CheckCircle size={16} className="text-cyan-400" />{item}</span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <HeroSlider />
        </div>
      </section>

      <section id="services" className="border-y border-slate-800/70 bg-slate-900/50 px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="What we do" title="Technology That Works For You" description="From a first website to a custom digital system, we help turn business challenges into practical solutions." />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(({ icon: Icon, title, description, image, number }) => (
              <article key={title} className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/80 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50">
                <div className="relative h-36 overflow-hidden bg-slate-800">
                  <img src={image} alt={title + " visual"} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />
                  <span className="absolute right-4 top-4 rounded-full border border-white/20 bg-slate-950/70 px-3 py-1 text-xs font-bold text-white backdrop-blur">{number}</span>
                </div>
                <div className="p-5">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300 transition group-hover:bg-cyan-400 group-hover:text-slate-950"><Icon size={23} /></span>
                  <h3 className="mt-4 text-lg font-bold">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <SectionHeading eyebrow="Selected work" title="Ideas Taking Shape" description="A look at the kinds of digital experiences we can create. Concept and demonstration projects are labelled clearly." />
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-cyan-300 hover:text-cyan-200">Discuss your project <ArrowRight size={17} /></a>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {projects.map(({ title, category, description, icon: Icon, image, tone }) => (
              <article key={title} className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 transition hover:border-cyan-400/40">
                <div className="relative h-52 overflow-hidden bg-slate-800 sm:h-60">
                  <img src={image} alt={title + " visual preview"} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className={"absolute inset-0 bg-gradient-to-t " + tone + " via-slate-950/10 to-slate-950/60"} />
                  <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-lg border border-white/15 bg-slate-950/75 px-3 py-2 text-xs font-bold text-white backdrop-blur"><Icon size={15} className="text-cyan-300" /> {category}</div>
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-xl font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-400">{description}</p>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-cyan-300 hover:text-cyan-200">Enquire about a similar project <ArrowRight size={16} /></a>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-5 text-xs leading-6 text-slate-500">Portfolio note: Items marked concept or demo illustrate project types and are not presented as completed client commissions.</p>
        </div>
      </section>

      <section id="about" className="bg-gradient-to-r from-cyan-950/50 via-slate-900 to-slate-900 px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_.8fr] md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Why Ideas Overload</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-black sm:text-4xl">Good technology should make life easier.</h2>
            <p className="mt-4 max-w-2xl leading-7 text-slate-300">We focus on practical, accessible digital solutions shaped around your goals—not technology for its own sake. Tell us the challenge; together, we can plan the next step.</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              ["Responsive", "Designed for phones and computers"],
              ["Practical", "Built around real needs"],
              ["Collaborative", "Your goals guide the work"],
              ["Connected", "Easy contact and follow-up"],
            ].map(([title, detail]) => <div key={title} className="rounded-xl border border-slate-700/80 bg-slate-950/60 p-4"><CheckCircle size={19} className="text-cyan-300" /><p className="mt-3 font-bold">{title}</p><p className="mt-1 text-xs leading-5 text-slate-400">{detail}</p></div>)}
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 py-20 text-center sm:px-8 sm:py-24">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Let&apos;s build something</p>
        <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black tracking-tight sm:text-5xl">Have an Idea? Let&apos;s Turn It Into Reality.</h2>
        <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-300">Tell us what your business needs. Start a conversation and let&apos;s explore the right digital solution together.</p>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-cyan-400 px-7 py-3.5 font-bold text-slate-950 transition hover:bg-cyan-300"><MessageCircle size={18} /> Chat With Us on WhatsApp</a>
      </section>

      <footer className="border-t border-slate-800 px-5 py-7 text-center sm:px-8">
        <a href="#" className="mx-auto block w-40" aria-label="Ideas Overload home"><img src="/ideas-overload-logo.svg" alt="Ideas Overload" className="h-auto w-full" /></a>
        <p className="mt-2 text-sm text-slate-500">Bigger Thinking. Brighter Possibilities.</p>
        <p className="mt-4 text-xs text-slate-600">© {new Date().getFullYear()} Ideas Overload. All rights reserved.</p>
      </footer>
    </main>
  );
}
