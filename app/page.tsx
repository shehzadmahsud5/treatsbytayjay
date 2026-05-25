import { HeroCupcakeScroll } from "./components/hero-cupcake-scroll";
import { OrderEnquiryForm } from "./components/order-enquiry-form";

const navItems = [
  { label: "Gallery", href: "#gallery" },
  { label: "How to order", href: "#how-to-order" },
];

const ENQUIRY_URL = "#enquiry";

const galleryItems = [
  {
    label: "Splatter cupcakes",
    src: "/assets/gallery/splatter-cupcakes.png",
    alt: "Black and gold birthday cupcakes in a presentation box",
    href: "https://www.instagram.com/p/DWymlUSCFvC/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    label: "Floral 25 bento cake",
    src: "/assets/gallery/floral-25-bento-cake.png",
    alt: "Cream bento cake with pink and ivory floral detail and number 25",
    href: "https://www.instagram.com/p/DXGlk75iEP4/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    label: "Bento boxes",
    src: "/assets/gallery/birthday-bento-box.png",
    alt: "Black and grey birthday bento cake box with matching cupcakes",
    href: "https://www.instagram.com/p/DXL_S02CCUj/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    label: "Sheet cakes",
    src: "/assets/gallery/blue-congratulations-sheet-cake.png",
    alt: "Blue and cream congratulations sheet cake with decorative border",
    href: "https://www.instagram.com/p/DXY16JLCA_Y/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    label: "Cupcake bouquet",
    src: "/assets/gallery/cupcake-bouquet.png",
    alt: "Yellow and white floral cupcake bouquet wrapped with ribbon",
    href: "https://www.instagram.com/p/DXd1NI-iBHF/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    label: "Cakesicles",
    src: "/assets/gallery/pink-cakesicles.png",
    alt: "Pink and gold cakesicles tied with ribbon in a gift box",
    href: "https://www.instagram.com/p/DXv0hDiCPar/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    label: "Anniversary bento cake",
    src: "/assets/gallery/anniversary-bento-cake.png",
    alt: "Anniversary bento cake with matching mum and dad cupcakes",
    href: "https://www.instagram.com/p/DX8uOeFiNVU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    label: "Bento cake",
    src: "/assets/gallery/twenty-three-bento-cake.png",
    alt: "Pink bento cake with matching cupcakes and butterfly decorations",
    href: "https://www.instagram.com/p/DYB4qfECNZJ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    label: "Princess cake",
    src: "/assets/gallery/princess-cake.png",
    alt: "Pink princess celebration cake with gold castle topper",
    href: "https://www.instagram.com/p/DYMO9-tCBkT/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
];

const orderSteps = [
  {
    title: "Fill in the enquiry form",
    text: "Start with your name, phone number or Instagram, what you would like to order and the date you need it for.",
  },
  {
    title: "Add your order details",
    text: "Share quantity or servings, occasion, flavour ideas, decoration, colours, theme and any extra notes.",
  },
  {
    title: "Share practical needs",
    text: "Choose collection or delivery, add a delivery postcode if needed, and include any dietary or allergen requirements.",
  },
  {
    title: "Wait for confirmation",
    text: "Treats By Tayjah reviews the enquiry, then confirms availability, pricing and collection or delivery details directly.",
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

type HomeProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  const enquirySent = params?.enquiry === "sent";

  return (
    <>
      <Header />
      <main id="main-content">
        <HeroCupcakeScroll />
        <GalleryPreview />
        <HowToOrder />
        <TrustLocation />
        <FaqPolicies />
        <FinalEnquiry sent={enquirySent} />
      </main>
      <Footer />
    </>
  );
}

function Header() {
  const mobileMenuScript = `
(() => {
  const menu = document.querySelector(".mobile-menu");
  if (!menu || menu.dataset.ready === "true") return;
  menu.dataset.ready = "true";
  const summary = menu.querySelector("summary");
  const syncState = () => {
    if (summary) summary.setAttribute("aria-expanded", menu.hasAttribute("open") ? "true" : "false");
  };
  syncState();
  menu.addEventListener("toggle", syncState);
  menu.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menu.hasAttribute("open")) {
      menu.removeAttribute("open");
      syncState();
      if (summary) summary.focus();
    }
  });
  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.removeAttribute("open");
      syncState();
    });
  });
})();
`;

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-ganache/10 bg-buttercream/90 backdrop-blur-xl">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 md:px-8">
        <a
          href="#top"
          className="font-serif text-[1.35rem] font-semibold tracking-normal text-ganache focus-ring"
          aria-label="Treats By Tayjah home"
        >
          Treats By Tayjah
        </a>
        <div className="hidden items-center rounded-full border border-ganache/10 bg-porcelain/62 px-2 py-1 shadow-[0_12px_35px_rgb(43_31_26_/_0.06)] md:flex">
          {[...navItems, { label: "Enquire", href: ENQUIRY_URL }].map((item) => (
            <a
              className="rounded-full px-4 py-2 text-sm font-semibold text-ganache/72 transition hover:bg-buttercream hover:text-ganache focus-ring"
              href={item.href}
              key={item.label}
            >
              {item.label}
            </a>
          ))}
        </div>
        <details className="mobile-menu relative md:hidden">
          <summary
            aria-expanded="false"
            className="focus-ring flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-ganache/12 bg-porcelain/80 text-ganache shadow-[0_12px_30px_rgb(43_31_26_/_0.08)]"
          >
            <span className="sr-only">Open menu</span>
            <span aria-hidden="true" className="mobile-menu-icon" />
          </summary>
          <div className="mobile-menu-panel">
            <a href="#gallery">Gallery</a>
            <a href="#how-to-order">How to order</a>
            <a href="#enquiry">Start an enquiry</a>
            <a href="https://www.instagram.com/treatsbytayjah/" rel="noreferrer" target="_blank">
              Instagram
            </a>
          </div>
        </details>
      </nav>
      <script dangerouslySetInnerHTML={{ __html: mobileMenuScript }} />
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
            <a
              aria-label={`View ${item.label} on Instagram`}
              className="gallery-tile group focus-ring"
              href={item.href}
              key={item.label}
              rel="noreferrer"
              target="_blank"
            >
              <img
                alt={item.alt}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.035]"
                loading="lazy"
                src={item.src}
              />
              <span>{item.label}</span>
            </a>
          ))}
        </div>
        <div className="mt-9 text-center">
          <a
            className="btn-secondary"
            href={ENQUIRY_URL}
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
          title="Start with the enquiry form"
          text="The form gathers the details needed to check availability and shape your custom order before anything is confirmed."
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
            Based in Manchester, made for celebrations with a personal touch.
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

function FinalEnquiry({ sent }: { sent: boolean }) {
  return (
    <section id="enquiry" className="bg-porcelain py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-raspberry">
            Start your enquiry
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-ganache md:text-6xl">
            Ready to plan your treats?
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-ganache/70 md:text-lg">
            Send your date, occasion and inspiration, and Treats By Tayjah will
            come back to you with availability and next steps.
          </p>
          <div className="mt-8 grid gap-3 rounded-card border border-ganache/10 bg-buttercream p-5 text-sm leading-7 text-ganache/72 md:p-7">
            <p className="font-semibold text-ganache">Helpful details to include:</p>
            <p>Date, occasion, product type, quantity, colours, theme, flavour preferences and any inspiration images.</p>
            <p>Please share any dietary or allergen requirements when enquiring so the business can advise before confirming your order.</p>
          </div>
        </div>
        <OrderEnquiryForm sent={sent} />
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
            Treats That Taste As Good As They Look. Based in Manchester.
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
