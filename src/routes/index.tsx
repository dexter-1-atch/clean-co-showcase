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

import heroImg from "@/assets/hero.jpg";
import beforeImg from "@/assets/before.jpg";
import afterImg from "@/assets/after.jpg";
import detailImg from "@/assets/detail.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Clean & Co — Premium Home & Office Cleaning" },
      {
        name: "description",
        content:
          "Clean & Co delivers premium residential and commercial cleaning in Portland. Eco-safe products, vetted pros, and a spotless guarantee.",
      },
      { property: "og:title", content: "Clean & Co — Premium Home & Office Cleaning" },
      {
        property: "og:description",
        content:
          "Rooms that feel fresh the moment you walk in. Premium home and office cleaning with a spotless guarantee.",
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

const testimonials = [
  {
    quote:
      "It felt like a different apartment. I keep turning on the lights just to watch the place gleam.",
    name: "Maya Reynolds",
    role: "Weekly home client, 3 years",
  },
  {
    quote:
      "Our studio finally looks like the team we want to hire. Calm, bright, and completely clean.",
    name: "Dana Reyes",
    role: "Office client, biweekly",
  },
  {
    quote:
      "They got our full deposit back after a move-out clean. Worth every penny, twice over.",
    name: "Tom & Priya Shah",
    role: "Move-out clean, Laurelhurst",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background font-body text-foreground antialiased">
      {/* ── Nav ── */}
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#top" className="font-display text-xl font-semibold tracking-tight">
            Clean <span className="text-spruce">&amp;</span> Co
          </a>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#services" className="transition-colors hover:text-foreground">Services</a>
            <a href="#results" className="transition-colors hover:text-foreground">Results</a>
            <a href="#voices" className="transition-colors hover:text-foreground">Reviews</a>
            <a href="#visit" className="transition-colors hover:text-foreground">Contact</a>
          </nav>
          <a
            href="#visit"
            className="rounded-full bg-spruce px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-spruce-deep"
          >
            Book a clean
          </a>
        </div>
      </header>

      {/* ── Hero ── */}
      <section id="top" className="mx-auto max-w-6xl px-6 pb-20 pt-12 md:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="animate-rise inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-spruce">
              <Leaf className="size-3.5" />
              Residential &amp; commercial cleaning
            </p>
            <h1 className="animate-rise mt-6 font-display text-5xl font-medium leading-[1.02] tracking-tight md:text-6xl lg:text-7xl">
              Rooms that feel{" "}
              <em className="text-spruce">fresh</em> the moment you walk in.
            </h1>
            <p className="animate-rise-slow mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
              Calm, spotless spaces for the people who live and work in them. We
              show up quietly, use eco-safe products, and leave everything gleaming.
            </p>
            <div className="animate-rise-slow mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#visit"
                className="inline-flex items-center gap-2 rounded-full bg-spruce px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-spruce-deep"
              >
                Book your first clean
                <ArrowRight className="size-4" />
              </a>
              <a
                href="#services"
                className="rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                See services
              </a>
            </div>
            <div className="animate-rise-slow mt-12 flex items-center gap-8">
              <div>
                <div className="flex items-center gap-1.5 font-display text-3xl font-medium">
                  4.9 <Star className="size-5 fill-honey text-honey" />
                </div>
                <div className="mt-1 text-sm text-muted-foreground">1,200+ verified reviews</div>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <div className="font-display text-3xl font-medium">18k+</div>
                <div className="mt-1 text-sm text-muted-foreground">cleans completed</div>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <div className="font-display text-3xl font-medium">12 yrs</div>
                <div className="mt-1 text-sm text-muted-foreground">in the neighborhood</div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="relative">
              <img
                src={heroImg}
                alt="Sunlit, freshly cleaned living room with gleaming oak floors"
                width={1024}
                height={1280}
                className="aspect-[4/5] w-full rounded-2xl object-cover shadow-2xl ring-1 ring-border"
              />
              <div className="absolute -bottom-6 -left-4 rounded-xl bg-card/90 p-5 shadow-xl ring-1 ring-border backdrop-blur-md sm:-left-8">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-spruce">
                  <BadgeCheck className="size-4" /> Spotless guarantee
                </div>
                <p className="mt-1.5 max-w-52 text-sm text-muted-foreground">
                  Not gleaming? We come back within 24 hours — free.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="border-t border-border bg-secondary/50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-spruce">( 01 ) — Services</p>
              <h2 className="mt-5 font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
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
                    className="group flex items-center justify-between gap-6 py-6 transition-colors"
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
            <figure className="relative overflow-hidden rounded-xl ring-1 ring-border">
              <img
                src={beforeImg}
                alt="Kitchen before a professional clean"
                width={1024}
                height={1280}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
              <figcaption className="absolute left-3 top-3 rounded-full bg-foreground/85 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-background">
                Before
              </figcaption>
            </figure>
            <figure className="relative overflow-hidden rounded-xl ring-1 ring-border">
              <img
                src={afterImg}
                alt="The same style of kitchen gleaming after a Clean & Co deep clean"
                width={1024}
                height={1280}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
              <figcaption className="absolute left-3 top-3 rounded-full bg-honey px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-accent-foreground">
                After
              </figcaption>
            </figure>
          </div>
          <div className="order-1 lg:order-2 lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-spruce">( 02 ) — Before &amp; after</p>
            <h2 className="mt-5 font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
              The gleam is the point.
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Every job ends with a walk-through and a final polish pass. If the
              light doesn't catch it, we come back — that's the guarantee in
              writing.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8">
              <div>
                <p className="font-display text-3xl font-medium">6,200+</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">spaces cleaned</p>
              </div>
              <div>
                <p className="font-display text-3xl font-medium">98%</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">clients return</p>
              </div>
              <div>
                <p className="font-display text-3xl font-medium">24 hr</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">re-clean promise</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why us strip ── */}
      <section className="border-y border-border bg-spruce-deep text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-3">
          <div className="flex gap-4">
            <Leaf className="mt-1 size-6 shrink-0 text-honey" />
            <div>
              <h3 className="font-display text-xl font-medium">Eco-safe, always</h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">
                Plant-based products that are safe for kids, pets, and the planet. No harsh fumes, ever.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <ShieldCheck className="mt-1 size-6 shrink-0 text-honey" />
            <div>
              <h3 className="font-display text-xl font-medium">Vetted &amp; insured</h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">
                Every pro is background-checked, bonded, and covered up to $2M. Your keys are safe with us.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <Wind className="mt-1 size-6 shrink-0 text-honey" />
            <div>
              <h3 className="font-display text-xl font-medium">Quiet &amp; on time</h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">
                We arrive in the window we promise, work quietly, and text you when we're done.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section id="voices" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-spruce">( 03 ) — Reviews</p>
        <h2 className="mt-5 max-w-xl font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
          Neighbors who stopped noticing the mess.
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="flex flex-col justify-between rounded-2xl bg-card p-8 shadow-sm ring-1 ring-border"
            >
              <div>
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-honey text-honey" />
                  ))}
                </div>
                <p className="mt-5 font-display text-xl italic leading-snug">“{t.quote}”</p>
              </div>
              <footer className="mt-8 border-t border-border pt-5">
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{t.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* ── Detail image + contact ── */}
      <section id="visit" className="border-t border-border bg-secondary/50">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:py-28 lg:grid-cols-2">
          <div className="relative">
            <img
              src={detailImg}
              alt="A Clean & Co professional hand-polishing a wooden surface"
              width={1024}
              height={1024}
              loading="lazy"
              className="aspect-square w-full rounded-2xl object-cover shadow-xl ring-1 ring-border"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-spruce">( 04 ) — Visit</p>
            <h2 className="mt-5 font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
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
                  <p className="mt-1 font-display text-2xl font-medium">(503) 555-0148</p>
                  <p className="text-sm text-muted-foreground">hello@cleanandco.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-spruce/10 text-spruce">
                  <MapPin className="size-4.5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Studio</p>
                  <p className="mt-1 text-sm leading-relaxed">418 Alder Lane, Suite 3<br />Portland, OR 97214</p>
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
            <a
              href="tel:+15035550148"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-honey px-8 py-4 text-sm font-semibold text-accent-foreground transition-colors hover:bg-honey-deep hover:text-primary-foreground"
            >
              Request a booking
              <ArrowRight className="size-4" />
            </a>
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
            © 2026 Clean &amp; Co · Licensed &amp; insured · OR #CCL-00412
          </p>
        </div>
      </footer>
    </div>
  );
}
