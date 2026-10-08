import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Pause, Play, Menu, X, Check, Mail } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Sparkles,
  Home,
  Building2,
  KeyRound,
  Wind,
  Phone,
  MapPin,
  Clock,
  Star,
  ArrowRight,
  Leaf,
  ShieldCheck,
  BadgeCheck,
} from "lucide-react";

import videoAsset from "@/assets/hero-cleaning.mp4.asset.json";
import posterAsset from "@/assets/cleaning-poster.jpg.asset.json";
import cleanerAsset from "@/assets/cleaner.jpg.asset.json";
import kitchenAsset from "@/assets/kitchen.jpg.asset.json";
import suppliesAsset from "@/assets/supplies.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Clean & Co — Premium Home & Office Cleaning" },
      {
        name: "description",
        content:
          "Clean & Co delivers premium residential and commercial cleaning in Portland. One-time and recurring cleaning for homes, offices and studios.",
      },
      { property: "og:title", content: "Clean & Co — Premium Home & Office Cleaning" },
      {
        property: "og:description",
        content:
          "Rooms that feel fresh the moment you walk in. Thoughtful home and office cleaning in Portland.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  {
    icon: Home,
    num: "01",
    title: "Everyday Home",
    desc: "A recurring rhythm that keeps the whole house light — kitchens, baths, floors, and every corner in between.",
    price: "From $140 / visit",
  },
  {
    icon: Building2,
    num: "02",
    title: "Offices & Studios",
    desc: "Calm, presentable workspaces your team walks into smiling. Desks, glass, kitchens, and common areas.",
    price: "From $320 / visit",
  },
  {
    icon: Sparkles,
    num: "03",
    title: "Deep Clean Reset",
    desc: "A top-to-bottom restoration for spaces that need it — baseboards, grout, ovens, and the places nobody looks.",
    price: "From $460 / visit",
  },
  {
    icon: KeyRound,
    num: "04",
    title: "Move In / Move Out",
    desc: "Handover-ready and deposit-protected. We make empty rooms gleam for the next chapter.",
    price: "From $390 / visit",
  },
];

function Index() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      const video = videoRef.current;
      if (!video) return;
      if (media.matches) video.pause();
      else video.play().catch(() => setPlaying(false));
    };
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  const toggleVideo = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) video.play().catch(() => setPlaying(false));
    else video.pause();
  };
  return (
    <div className="min-h-screen bg-background font-body text-foreground antialiased">
      {/* ── Nav ── */}
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#top" className="font-display text-xl font-semibold tracking-normal">
            Clean <span className="text-spruce">&amp;</span> Co
          </a>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#services" className="transition-colors hover:text-foreground">Services</a>
            <a href="#results" className="transition-colors hover:text-foreground">Results</a>
            <a href="#voices" className="transition-colors hover:text-foreground">Our approach</a>
            <a href="#visit" className="transition-colors hover:text-foreground">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild className="rounded-full px-5"><a href="#visit">Book a clean <ArrowRight /></a></Button>
            <Button variant="ghost" size="icon" className="md:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
          </div>
        </div>
        {menuOpen && <nav className="flex flex-col gap-4 border-t border-border px-6 py-5 text-sm md:hidden" aria-label="Mobile navigation">
          {[['services','Services'],['results','Our standard'],['voices','Our approach'],['visit','Contact']].map(([id,label]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
        </nav>}
      </header>

      <section id="top" className="relative isolate overflow-hidden text-primary-foreground">
        <video ref={videoRef} src={videoAsset.url} poster={posterAsset.url} muted loop playsInline preload="metadata" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} className="absolute inset-0 -z-20 h-full w-full object-cover" aria-label="Real footage of a table being carefully cleaned" />
        <div className="hero-shade absolute inset-0 -z-10" />
        <div className="mx-auto flex min-h-[560px] max-w-6xl items-center px-6 py-20 md:min-h-[620px]">
          <div className="max-w-2xl">
            <p className="animate-rise flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em]"><Leaf className="size-4 text-honey" /> Portland homes. Fresh starts.</p>
            <h1 className="animate-rise mt-6 font-display text-6xl font-medium leading-[1.05] md:text-7xl">Clean &amp; Co</h1>
            <p className="animate-rise mt-4 font-display text-3xl leading-tight md:text-4xl">A little care. A whole lot of clean.</p>
            <p className="animate-rise-slow mt-6 max-w-md text-base leading-relaxed text-primary-foreground/85">Thoughtful cleaning for the spaces you live and work in. From the everyday tidy to a fresh-start deep clean, we take care of the details.</p>
            <div className="animate-rise-slow mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="h-12 rounded-full bg-honey text-accent-foreground hover:bg-honey-deep"><a href="#visit">Request a clean <ArrowRight /></a></Button>
              <Button asChild variant="outline" size="lg" className="h-12 rounded-full border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"><a href="#services">Explore services</a></Button>
            </div>
            <p className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-xs text-primary-foreground/80"><span className="flex items-center gap-2"><Check className="size-4 text-honey" /> Supplies included</span><span className="flex items-center gap-2"><Check className="size-4 text-honey" /> One-time &amp; recurring</span><span className="flex items-center gap-2"><Check className="size-4 text-honey" /> Portland &amp; nearby</span></p>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="absolute bottom-5 right-6 rounded-full border border-primary-foreground/30 bg-foreground/30 text-primary-foreground hover:bg-foreground/50 hover:text-primary-foreground" onClick={toggleVideo} aria-label={playing ? "Pause background video" : "Play background video"} title={playing ? "Pause background video" : "Play background video"}>{playing ? <Pause /> : <Play />}</Button>
      </section>

      {/* ── Services ── */}
      <section id="services" className="border-t border-border bg-secondary/50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-spruce">( 01 ) — Services</p>
              <h2 className="mt-5 font-display text-4xl font-medium leading-tight tracking-normal md:text-5xl">
                Four ways we make a place shine.
              </h2>
              <p className="mt-5 max-w-xs text-muted-foreground">
                Every visit follows our 50-point checklist, tailored to your space
                and your schedule.
              </p>
            </div>
            <div className="md:col-span-8">
              <div className="divide-y divide-border">
                {services.map((s) => (
                  <a
                    key={s.num}
                    href="#visit"
                    className="group flex flex-col items-start justify-between gap-4 py-6 transition-colors sm:flex-row sm:items-center"
                  >
                    <div className="flex items-start gap-5">
                      <span className="mt-1 grid size-10 shrink-0 place-items-center rounded-full bg-spruce/10 text-spruce">
                        <s.icon className="size-4.5" />
                      </span>
                      <div>
                        <p className="font-display text-2xl font-medium transition-colors group-hover:text-spruce">
                          {s.title}
                        </p>
                        <p className="mt-1 max-w-lg text-sm text-muted-foreground">{s.desc}</p>
                      </div>
                    </div>
                    <span className="shrink-0 text-xs font-semibold uppercase tracking-wider text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-foreground">
                      {s.price}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Before / After ── */}
      <section id="results" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="order-2 grid grid-cols-2 gap-4 lg:order-1 lg:col-span-7">
            <figure className="relative overflow-hidden rounded-lg ring-1 ring-border">
              <img
                src={cleanerAsset.url}
                alt="A cleaner wiping a kitchen countertop"
                width={1024}
                height={1280}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
              <figcaption className="absolute left-3 top-3 rounded-full bg-foreground/85 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-background">
                The details
              </figcaption>
            </figure>
            <figure className="relative overflow-hidden rounded-lg ring-1 ring-border">
              <img
                src={kitchenAsset.url}
                alt="A bright, tidy kitchen with white cabinetry"
                width={1024}
                height={1280}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
              <figcaption className="absolute left-3 top-3 rounded-full bg-honey px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-accent-foreground">
                The feeling
              </figcaption>
            </figure>
          </div>
          <div className="order-1 lg:order-2 lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-spruce">( 02 ) — Our standard</p>
            <h2 className="mt-5 font-display text-4xl font-medium leading-tight tracking-normal md:text-5xl">
              The gleam is the point.
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Every job ends with a walk-through and a final polish pass. If the
              light doesn't catch it, we come back — that's the guarantee in
              writing.
            </p>
            <ul className="mt-8 space-y-4 border-t border-border pt-6 text-sm">
              {['Kitchen and bathroom surfaces','Floors, fixtures and finishing touches','A checklist tailored to your space'].map(item => <li className="flex items-center gap-3" key={item}><Check className="size-4 text-spruce" />{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Why us strip ── */}
      <section className="border-y border-border bg-spruce-deep text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-3">
          <div className="flex gap-4">
            <Leaf className="mt-1 size-6 shrink-0 text-honey" />
            <div>
              <h3 className="font-display text-xl font-medium">Products chosen with care</h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">
                Tell us about your household, pets, and product preferences. We plan the clean around your space.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <ShieldCheck className="mt-1 size-6 shrink-0 text-honey" />
            <div>
              <h3 className="font-display text-xl font-medium">Care for your home</h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">
                From your first enquiry to the final check, clear communication and care for your belongings come first.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <Wind className="mt-1 size-6 shrink-0 text-honey" />
            <div>
              <h3 className="font-display text-xl font-medium">On your schedule</h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">
                One-off visits, weekly upkeep or a fortnightly refresh. Find the rhythm that works for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="voices" className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-spruce">( 03 ) — A simpler routine</p>
        <div className="mt-5 grid gap-10 md:grid-cols-2">
          <h2 className="max-w-lg font-display text-4xl font-medium leading-tight md:text-5xl">A clean home.<br />One less thing on your mind.</h2>
          <div className="divide-y divide-border">
            {[['01','Tell us about your space','Share your location, the type of clean and a date that suits you.'],['02','We agree on the details','Your priorities, the scope and the price — all clear before the visit.'],['03','Come back to fresh','We take care of the clean. You get your time back.']].map(([num,title,desc]) => <div key={num} className="flex gap-5 py-5 first:pt-0"><span className="pt-1 text-xs text-spruce">{num}</span><div><h3 className="font-display text-2xl">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p></div></div>)}
          </div>
        </div>
      </section>

      {/* ── Detail image + contact ── */}
      <section id="visit" className="border-t border-border bg-secondary/50">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:py-28 lg:grid-cols-2">
          <div className="relative">
            <img
              src={suppliesAsset.url}
              alt="A selection of cleaning bottles, cloths and household supplies"
              width={1024}
              height={1024}
              loading="lazy"
              className="aspect-square w-full rounded-lg object-cover shadow-xl ring-1 ring-border"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-spruce">( 04 ) — Let’s talk</p>
            <h2 className="mt-5 font-display text-4xl font-medium leading-tight tracking-normal md:text-5xl">
              Book your first clean.
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">
              Tell us the space and the date. We confirm within the hour and
              arrive on time, every time.
            </p>
            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-spruce/10 text-spruce">
                  <Phone className="size-4.5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Call or text</p>
                  <a href="tel:+15035550148" className="mt-1 block font-display text-2xl font-medium hover:text-spruce">(503) 555-0148</a>
                  <a href="mailto:hello@cleanandco.com" className="text-sm text-muted-foreground hover:text-spruce">hello@cleanandco.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-spruce/10 text-spruce">
                  <MapPin className="size-4.5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Service area</p>
                  <p className="mt-1 text-sm leading-relaxed">Portland, Oregon<br />Pearl District · Northeast · Southeast</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-spruce/10 text-spruce">
                  <Clock className="size-4.5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Hours</p>
                  <p className="mt-1 text-sm leading-relaxed">Mon–Fri · 8am–6pm<br />Sat · 9am–2pm</p>
                </div>
              </div>
            </div>
            <Button asChild size="lg" className="mt-10 h-12 rounded-full bg-honey text-accent-foreground hover:bg-honey-deep"><a href="mailto:hello@cleanandco.com?subject=Cleaning%20enquiry">Enquire about a clean <Mail /></a></Button>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-spruce-deep text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-12 sm:flex-row sm:items-center">
          <p className="font-display text-2xl font-medium">
            Clean <span className="text-honey">&amp;</span> Co
          </p>
          <p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/50">
            © 2026 Clean &amp; Co · Portland, Oregon
          </p>
        </div>
      </footer>
    </div>
  );
}
