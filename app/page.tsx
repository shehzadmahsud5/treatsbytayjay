import { HeroCupcakeScroll } from "./components/hero-cupcake-scroll";

const navItems = [
  { label: "Gallery", href: "#gallery" },
  { label: "How to order", href: "#how-to-order" },
];

// TODO: Replace Linktree with the direct Treats By Tayjah enquiry form URL when the client provides it.
const ENQUIRY_URL = "https://linktr.ee/treatsbytayjah";

const galleryItems = [
  {
    label: "Splatter cupcakes",
    src: "/assets/gallery/splatter-cupcakes.png",
    alt: "Black and gold birthday cupcakes in a presentation box",
  },
  {
    label: "Floral 25 bento cake",
    src: "/assets/gallery/floral-25-bento-cake.png",
    alt: "Cream bento cake with pink and ivory floral detail and number 25",
  },
  {
    label: "Bento boxes",
    src: "/assets/gallery/birthday-bento-box.png",
    alt: "Black and grey birthday bento cake box with matching cupcakes",
  },
  {
    label: "Sheet cakes",
    src: "/assets/gallery/blue-congratulations-sheet-cake.png",
    alt: "Blue and cream congratulations sheet cake with decorative border",
  },
  {
    label: "Cupcake bouquet",
    src: "/assets/gallery/cupcake-bouquet.png",
    alt: "Yellow and white floral cupcake bouquet wrapped with ribbon",
  },
  {
    label: "Cakesicles",
    src: "/assets/gallery/pink-cakesicles.png",
    alt: "Pink and gold cakesicles tied with ribbon in a gift box",
  },
  {
    label: "Anniversary bento cake",
    src: "/assets/gallery/anniversary-bento-cake.png",
    alt: "Anniversary bento cake with matching mum and dad cupcakes",
  },
  {
    label: "Bento cake",
    src: "/assets/gallery/twenty-three-bento-cake.png",
    alt: "Pink bento cake with matching cupcakes and butterfly decorations",
  },
  {
    label: "Princess cake",
    src: "/assets/gallery/princess-cake.png",
    alt: "Pink princess celebration cake with gold castle topper",
  },
];

const orderSteps = [
  {
    title: "Share your idea",
    text: "Send your date, occasion, product type, quantity, colours, theme and any inspiration.",
  },
  {
    title: "Confirm the details",
    text: "Availability, flavour options, sizing and collection or delivery details are discussed during enquiry.",
  },
  {
    title: "Secure your date",
    text: "Orders are confirmed once details are agreed and the required deposit has been received.",
  },
  {
    title: "Collect or arrange handover",
    text: "Final collection or delivery details are confirmed directly with you before your celebration.",
  },
];

const faqs = [
  {
    question: "How is pricing confirmed?",
    answer:
      "Pricing is confirmed after your design, size, quantity and date have been discussed.",
  },
  {
    question: "Can I ask about collection or delivery?",
    answer: "Collection or delivery details are confirmed during enquiry.",
  },
  {
    question: "What if I have dietary or allergen requirements?",
    answer:
      "Please share any dietary or allergen requirements when enquiring so the business can advise before confirming your order.",
  },
  {
    question: "Can you copy an inspiration image exactly?",
    answer:
      "Use inspiration images to show the style, colours and feeling you like. Final details are confirmed directly before booking.",
  },
];

export default function Home() {
  return (
    <main>
      <Header />
      <HeroCupcakeScroll />
      <GalleryPreview />
      <HowToOrder />
      <TrustLocation />
      <FaqPolicies />
      <FinalEnquiry />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-ganache/10 bg-buttercream/88 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a
          href="#top"
          className="font-serif text-xl font-semibold tracking-normal text-ganache focus-ring"
          aria-label="Treats By Tayjah home"
        >
          Treats By Tayjah
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              className="text-sm font-medium text-ganache/75 transition hover:text-ganache focus-ring"
              href={item.href}
              key={item.label}
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          className="btn-primary hidden md:inline-flex"
          href={ENQUIRY_URL}
          rel="noreferrer"
          target="_blank"
        >
          Start an enquiry
        </a>
        <a
          className="btn-primary px-4 py-3 text-sm md:hidden"
          href={ENQUIRY_URL}
          rel="noreferrer"
          target="_blank"
        >
          Enquire
        </a>
      </nav>
    </header>
  );
}

function SectionHeader({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-raspberry">
        {eyebrow}
      </p>
      <h2 className="font-serif text-3xl leading-tight text-ganache md:text-5xl">
        {title}
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-ganache/70 md:text-lg">
        {text}
      </p>
    </div>
  );
}

function GalleryPreview() {
  return (
    <section id="gallery" className="section bg-porcelain">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          eyebrow="Recent bakes"
          title="Real bakes from Treats By Tayjah"
          text="A look at custom cakes, cupcakes, bento boxes, sheet cakes and gift-ready treats already created for celebrations."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <figure
              className="gallery-tile group"
              key={item.label}
            >
              <img
                alt={item.alt}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.035]"
                loading="lazy"
                src={item.src}
              />
              <figcaption>{item.label}</figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-9 text-center">
          <a
            className="btn-secondary"
            href={ENQUIRY_URL}
            rel="noreferrer"
            target="_blank"
          >
            Ask about a custom order
          </a>
        </div>
      </div>
    </section>
  );
}

function HowToOrder() {
  return (
    <section id="how-to-order" className="section bg-buttercream">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          eyebrow="How to order"
          title="How your order comes together"
          text="A calm enquiry process for custom work, with availability and details confirmed directly before booking."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {orderSteps.map((step, index) => (
            <div
              className="rounded-card border border-ganache/10 bg-porcelain p-6 shadow-soft"
              key={step.title}
            >
              <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-full bg-raspberry text-sm font-semibold text-porcelain">
                {index + 1}
              </div>
              <h3 className="font-serif text-2xl text-ganache">{step.title}</h3>
              <p className="mt-4 text-sm leading-7 text-ganache/67">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustLocation() {
  return (
    <section className="bg-porcelain py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-[1.15fr_0.85fr] md:px-8">
        <div className="rounded-card bg-ganache p-8 text-porcelain md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-toasted">
            Local and enquiry-led
          </p>
          <h2 className="mt-4 font-serif text-3xl leading-tight md:text-5xl">
            Based in Manchester M14, made for celebrations with a personal touch.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-porcelain/78">
            The website keeps ordering clear without publishing a private address
            or making unconfirmed promises. Availability, collection and delivery
            details are confirmed during enquiry.
          </p>
        </div>
        <div className="rounded-card border border-ganache/10 bg-buttercream p-8 md:p-10">
          <h3 className="font-serif text-3xl text-ganache">Good to know</h3>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-ganache/72">
            <li>Pricing is confirmed after your design, size, quantity and date have been discussed.</li>
            <li>Collection or delivery details are confirmed during enquiry.</li>
            <li>Please share any dietary or allergen requirements when enquiring so the business can advise before confirming your order.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function FaqPolicies() {
  return (
    <section className="section bg-buttercream">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <SectionHeader
          eyebrow="FAQs and policies"
          title="Clear answers without overpromising"
          text="These notes keep the first version useful while leaving operational details for direct confirmation."
        />
        <div className="space-y-4">
          {faqs.map((item) => (
            <details
              className="rounded-card border border-ganache/10 bg-porcelain p-5 open:border-toasted/70"
              key={item.question}
            >
              <summary className="cursor-pointer font-serif text-xl text-ganache focus-ring">
                {item.question}
              </summary>
              <p className="mt-4 text-sm leading-7 text-ganache/70">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalEnquiry() {
  return (
    <section id="enquiry" className="bg-porcelain py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-raspberry">
          Start your enquiry
        </p>
        <h2 className="mt-4 font-serif text-4xl leading-tight text-ganache md:text-6xl">
          Ready to plan your treats?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-ganache/70 md:text-lg">
          Send your date, occasion and inspiration, and Treats By Tayjah will come
          back to you with availability and next steps.
        </p>
        <div className="mx-auto mt-8 grid max-w-2xl gap-3 rounded-card border border-ganache/10 bg-buttercream p-5 text-left text-sm leading-7 text-ganache/72 md:p-7">
          <p className="font-semibold text-ganache">Helpful details to include:</p>
          <p>Date, occasion, product type, quantity, colours, theme, flavour preferences and any inspiration images.</p>
        </div>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            className="btn-primary"
            href={ENQUIRY_URL}
            rel="noreferrer"
            target="_blank"
          >
            Open enquiry links
          </a>
          <a className="btn-secondary" href="#gallery">
            View recent bakes
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ganache px-5 py-10 text-porcelain md:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="font-serif text-3xl">Treats By Tayjah</p>
          <p className="mt-3 max-w-xl text-sm leading-7 text-porcelain/70">
            Treats That Taste As Good As They Look. Based in Manchester M14.
            Availability, collection and delivery details are confirmed during enquiry.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 text-sm">
          <a className="footer-link" href="https://www.instagram.com/treatsbytayjah/" rel="noreferrer" target="_blank">
            Instagram
          </a>
          <a className="footer-link" href="https://www.tiktok.com/@treatsbytayjah" rel="noreferrer" target="_blank">
            TikTok
          </a>
          <a className="footer-link" href="https://linktr.ee/treatsbytayjah" rel="noreferrer" target="_blank">
            Linktree
          </a>
        </div>
      </div>
    </footer>
  );
}
