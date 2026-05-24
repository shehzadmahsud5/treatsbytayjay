# Treats By Tayjah UX/UI Implementation Plan

Planning date: 24 May 2026  
Source documents: `docs/client-research.md`, `docs/brand-system.md`  
Project mode: Planning only. No code yet.

## Guardrails

- Keep the website enquiry-led, not ecommerce.
- Do not add dark mode, system theme mode, or a theme toggle.
- Keep the visual direction light, cream, blush, warm and premium.
- Do not invent prices, reviews, exact address, opening hours, delivery fees, dietary claims, allergen claims or policies.
- Use safe placeholder wording where details are unknown.
- Use real product imagery once client permission is confirmed.

## UX Architecture

### Website Information Architecture

Recommended first version:

1. Home
2. Custom Cakes
3. Cupcakes
4. Cookies
5. Gallery
6. How To Order
7. Enquire

Optional later pages, only if content is confirmed:

- Treat Boxes and Extras
- Events and Occasions
- FAQs
- About

The homepage should carry most of the conversion work. Product pages should stay concise and visual, guiding users back to enquiry rather than trying to sell fixed items.

### Navigation Structure

Desktop navigation:

- Left: Treats By Tayjah wordmark.
- Centre or right: Cakes, Cupcakes, Cookies, Gallery, How To Order.
- Far right: primary CTA button, "Start an enquiry".

Mobile navigation:

- Top bar with wordmark and menu button.
- Drawer or full-screen menu with large tap targets.
- Primary CTA fixed inside the menu and repeated after the hero.
- No theme controls.

Footer navigation:

- Repeat key page links.
- Include social links.
- Include safe local signal: "Based in Manchester M14."
- Include enquiry CTA.
- Do not show an exact private address.

### Homepage Section Order

1. Header and navigation
2. Scroll-controlled cupcake hero
3. Product pathways: Custom Cakes, Cupcakes, Cookies, Treat Boxes and Extras if confirmed
4. Recent bakes gallery preview
5. How your order comes together
6. Celebration occasions strip
7. Trust and local signal
8. Enquiry prompt
9. Footer

The homepage should feel like a premium product experience from the first viewport. Avoid a generic marketing landing page or a long text intro before showing treats.

### Landing To Enquiry User Journey

1. User lands from Instagram, TikTok, Google Maps, local search or referral.
2. Hero confirms the offer: custom cakes, cupcakes and cookies for Manchester celebrations.
3. User sees the visual style through the cupcake hero and gallery preview.
4. User chooses a product pathway or keeps scrolling.
5. "How To Order" explains the enquiry process without overpromising logistics.
6. User clicks "Start an enquiry" or "Send an enquiry".
7. Enquiry page or form link asks for date, occasion, product type, quantity, theme, colours, flavour preferences and inspiration images.
8. Confirmation copy tells the user the business will respond with availability and next steps.

Primary user question to answer quickly:

"Can this business make the kind of treat I want, and how do I ask?"

### CTA Placement

Use one primary CTA label throughout:

"Start an enquiry"

Secondary CTA:

"View recent bakes"

Placement:

- Header desktop, always visible.
- Hero, above the fold.
- After product pathway cards.
- After gallery preview.
- After How To Order.
- Footer.
- Mobile sticky bottom CTA may be used after the user scrolls past the hero, but it must not cover content.

Avoid:

- Buy now
- Add to basket
- Book instantly
- Order today
- Get delivery

### Mobile-First Layout Strategy

Base design begins at 320px.

Mobile priorities:

- Brand name, offer and CTA must be visible without visual clutter.
- Hero animation should simplify quickly.
- Product categories stack vertically.
- Gallery uses a single-column or two-column rhythm depending on image density.
- Forms use single-column fields with labels above inputs.
- Sticky CTA can appear after the hero, with enough bottom padding to avoid covering content.

Desktop enhancements:

- Wider hero composition with text and cupcake animation in a balanced editorial layout.
- Product pathways become a 3-column grid.
- Gallery becomes a masonry-inspired grid with controlled image aspect ratios.
- How To Order steps can sit in a horizontal or staggered sequence.

### Responsive Breakpoints

- `320px-479px`: small mobile baseline. Single-column layout, compact hero, reduced animation.
- `480px-639px`: large mobile. Larger image cards, improved button grouping.
- `640px-767px`: small tablet. Two-column gallery where appropriate.
- `768px-1023px`: tablet. Header can show simplified nav, product cards can shift to two columns.
- `1024px-1279px`: desktop. Full nav, full hero behaviour, 3-column product grid.
- `1280px+`: large desktop. Wider image-led layouts with max-width constraints.

Recommended container widths:

- Mobile: full width with 20px side padding.
- Tablet: max-width 720px with 24px side padding.
- Desktop: max-width 1120px with 32px side padding.
- Large desktop: max-width 1240px with 40px side padding.

### Component Structure

Core layout components:

- `SiteHeader`
- `MobileMenu`
- `HeroCupcakeScroll`
- `SectionHeader`
- `ProductPathwayGrid`
- `ProductPathwayCard`
- `GalleryPreview`
- `GalleryFilterBar`
- `HowToOrderSteps`
- `OccasionStrip`
- `TrustPanel`
- `EnquiryCTA`
- `SiteFooter`

Content components:

- `ProductImage`
- `ProductBadge`
- `LocalSignal`
- `SafePlaceholderNote`
- `SocialLinkList`
- `FoodHygieneEmbed`, only if approved

Form components, if building an on-site enquiry form:

- `EnquiryForm`
- `TextField`
- `Textarea`
- `SelectField`
- `FileUploadHint`
- `ConsentNote`
- `SubmitButton`
- `FormStatusMessage`

The form must not force ecommerce-style checkout behaviour. It should submit an enquiry or send the user to the existing enquiry form.

### Scroll-Controlled Cupcake Hero Behaviour

Desktop and large tablet behaviour:

- The hero begins with a clean cupcake base or close-up product image beside the headline.
- As the user scrolls, the cupcake gently finishes itself: wrapper settles, frosting swirl reveals, small details appear, highlight lands.
- Motion should feel smooth, creamy and hand-finished.
- The CTA remains readable and accessible throughout.
- The animation should resolve before the product pathways section starts.

Recommended scroll stages:

1. Stage 1: Product base visible, headline and CTA in place.
2. Stage 2: Frosting swirl or top detail eases into view.
3. Stage 3: Small decorative details settle with restraint.
4. Stage 4: Final composition holds while "View recent bakes" or product pathways appear.

Interaction rules:

- No fast spinning.
- No loud confetti effect.
- No text over moving frosting.
- No animation that blocks the primary CTA.
- No essential information hidden inside animation states.

### Mobile Fallback For Hero Animation

Mobile should prioritise speed, clarity and stable layout.

Fallback options:

- Use a static hero image with a subtle fade-in.
- Use a short one-step frosting reveal that completes automatically.
- Use a lightweight image sequence only if performance remains strong.

Mobile should not use long pinned scroll behaviour. The user should reach product cards quickly.

Reduced-motion users:

- Show the final static cupcake or product image.
- Disable scroll-linked movement.
- Keep all content and CTAs available.

### Accessibility Requirements

- Meet WCAG 2.1 AA as the minimum.
- Maintain 4.5:1 contrast for normal text.
- Use Ganache `#2B1F1A` for primary text on Buttercream `#FFF7ED` or Porcelain `#FFFFFF`.
- Avoid pale pink text on cream backgrounds.
- All buttons and links need visible focus states.
- Tap targets should be at least 44px by 44px.
- Navigation must work by keyboard.
- Mobile menu must trap focus while open and return focus when closed.
- Images need useful alt text, focused on product type and visual style.
- Decorative motion assets should be hidden from screen readers.
- The enquiry form needs explicit labels, not placeholder-only labels.
- Errors must be described in text, not colour alone.
- Respect `prefers-reduced-motion`.
- Animation must not create flashing, sudden zooming or motion sickness risk.

### Performance Requirements

- Keep the first viewport fast and image-optimised.
- Use modern compressed image formats where possible.
- Lazy-load gallery images below the hero.
- Reserve image dimensions to avoid layout shift.
- Avoid heavy animation libraries unless needed.
- Prefer CSS transforms and opacity for motion.
- Keep scroll animation lightweight and test on mobile hardware.
- Target strong Core Web Vitals: stable layout, quick first interaction, responsive scrolling.
- Defer non-critical embeds such as social feeds or Food Hygiene Rating until below primary content.
- Do not load Instagram or TikTok embeds in the first viewport.

## UI Design Direction

### Visual Hierarchy

Priority order:

1. Real treats and product imagery.
2. Brand name and clear custom treats offer.
3. Primary CTA.
4. Product categories.
5. Gallery proof.
6. Ordering steps.
7. Local and trust signals.

The homepage should feel image-led, not text-heavy. Use short section intros and confident spacing.

### Colour Use

Use the existing brand colours:

- Buttercream `#FFF7ED`: main page background.
- Ganache `#2B1F1A`: primary text, footer, high-contrast details.
- Raspberry Glaze `#C94F6D`: primary CTA and selected accents.
- Pistachio Silk `#A7BFA3`: secondary badges, soft dividers, calm accent areas.
- Toasted Sugar `#D8A45F`: premium highlights, lines, small details.
- Porcelain `#FFFFFF`: clean image surfaces and content panels.

The site should never shift into dark mode. Use Ganache only as a contrast block for footer or small premium sections, not as a full dark theme.

### Typography Scale

Suggested type direction:

- Display/H1: elegant serif, 40-56px desktop, 34-42px tablet, 30-36px mobile.
- H2: elegant serif, 32-42px desktop, 28-34px tablet, 24-30px mobile.
- H3: serif or strong sans, 22-28px desktop, 20-24px mobile.
- Body: clean sans, 16-18px.
- Small text: clean sans, 13-14px.
- Buttons: clean sans, 15-16px, medium weight.

Line-height:

- Display: 1.05-1.15.
- Headings: 1.15-1.25.
- Body: 1.55-1.7.
- Buttons and labels: 1.1-1.25.

Do not scale text directly with viewport width. Use breakpoint-specific sizes.

### Spacing System

Base unit: 4px.

Recommended scale:

- 4px: fine detail gaps.
- 8px: tight inline spacing.
- 12px: small component gaps.
- 16px: base component padding.
- 20px: mobile side padding.
- 24px: card padding and mobile section gaps.
- 32px: section inner rhythm.
- 48px: medium section spacing.
- 64px: desktop section spacing.
- 96px: large desktop hero/section breathing room.

Keep spacing generous but not sparse. This is a custom bakery website, so the interface should feel composed and tactile.

### Component Style Direction

Overall style:

- Light, warm, premium.
- Rounded corners no more than 8px for cards and panels.
- No nested cards.
- No decorative gradient blobs or abstract background orbs.
- Use product imagery, soft lines, borders and warm surfaces for richness.

Borders:

- Thin, warm borders using softened Ganache or Toasted Sugar at low opacity.
- Avoid cold grey UI borders.

Shadows:

- Very soft shadows only where helpful.
- Prefer subtle depth from image overlap and colour contrast.

### Button Styles

Primary button:

- Background: Raspberry Glaze `#C94F6D`.
- Text: Porcelain `#FFFFFF`, contrast checked.
- Shape: 999px pill or refined 8px radius. Choose one and use consistently.
- Padding: 14-18px vertical, 20-28px horizontal.
- Hover: slightly deeper raspberry, minimal lift.
- Focus: visible Ganache or Toasted Sugar outline with offset.

Secondary button:

- Background: transparent or Porcelain.
- Text: Ganache.
- Border: Ganache at low-to-medium opacity.
- Hover: Buttercream or Rose Cream tint if available from brand system.

Text link:

- Ganache text with Raspberry underline or small arrow.
- Use for lower-priority actions like "See how ordering works".

Button rules:

- Never use "Buy now" or basket language.
- Keep CTA wording enquiry-led.
- Button text must not wrap awkwardly on mobile.

### Card Styles

Use cards only for repeated items:

- Product pathway cards.
- Gallery items.
- How To Order steps.
- FAQ items if later added.

Product pathway cards:

- Fixed image aspect ratio.
- Short label and one-line supporting copy.
- Optional small badge for "Custom", "Cupcakes", "Cookies".
- Entire card may be clickable, with visible focus state.

How To Order step cards:

- Use numbered markers or small decorative dots.
- Keep copy concise.
- Avoid policy claims beyond approved wording.

Do not put cards inside larger cards. Page sections should be unframed bands or clean constrained layouts.

### Gallery Layout

Mobile:

- Single column for large, high-impact images.
- Optional two-column grid for square thumbnails after initial proof images.
- Keep captions short.

Tablet:

- Two-column grid with mixed image heights only if layout remains stable.

Desktop:

- Masonry-inspired editorial grid.
- Use fixed aspect-ratio containers to prevent layout shift.
- First few images should include the strongest visual proof: cakes, cupcakes, cookies.

Filtering:

- Use simple segmented controls or pill filters.
- Suggested filters: All, Cakes, Cupcakes, Cookies, Occasions.
- Only include filters supported by actual image content.

Gallery should not use fake testimonials or star ratings.

### Premium Bakery UI Details

Use restrained details that feel edible and handcrafted:

- Thin Toasted Sugar divider lines.
- Small piped-dot separators.
- Soft Pistachio Silk labels.
- Buttercream and Porcelain surfaces.
- Close-up image crops that show texture.
- Subtle ribbon-like horizontal rules.
- Warm hover states that feel gentle, not flashy.

Avoid:

- Cartoon cupcake icons as primary imagery.
- Heavy gradients.
- Dark luxury styling.
- Overly playful sprinkles everywhere.
- Stock imagery that does not represent the actual products.

### Animation Feel

Animation language:

- Smooth
- Creamy
- Gentle
- Tactile
- Product-led

Use motion for:

- Hero cupcake reveal.
- Button hover lift.
- Gallery image reveal on scroll.
- Step-by-step ordering sequence.

Avoid:

- Bouncy easing.
- Fast parallax.
- Spinning products.
- Large confetti bursts.
- Continuous motion near reading text.

Timing:

- Micro-interactions: 150-250ms.
- Section reveal: 350-600ms.
- Hero scroll sequence: controlled by scroll, with stable end states.

### Mobile Polish Rules

- No horizontal scrolling.
- No overlapping text and images.
- Hero must not trap users in a long animation.
- Keep the primary CTA visible early.
- Buttons stack vertically if side-by-side labels feel tight.
- Gallery images need stable aspect ratios.
- Product cards should not resize on hover.
- Mobile menu links should be large and calm.
- Sticky CTA must leave enough safe-area padding.
- Text should remain readable at browser zoom and system font scaling.
- The footer should be short and scannable.

## Implementation Priority

1. Build the light-only design token system.
2. Set up mobile-first layout, containers and breakpoints.
3. Build header, navigation and CTA patterns.
4. Build static hero content before adding animation.
5. Add cupcake scroll behaviour with reduced-motion fallback.
6. Build product pathways and gallery preview.
7. Build How To Order and enquiry CTA sections.
8. Add trust/local signals with safe wording.
9. Optimise images, accessibility and performance.

## Copy Safety Checklist

Before implementation or launch, check every page for these risks:

- No exact address.
- No invented prices.
- No invented reviews.
- No invented opening hours.
- No invented delivery fees or service radius.
- No dietary or allergen claims.
- No ecommerce checkout language.
- No unconfirmed product categories.
- No guarantee that inspiration images can be copied exactly.

## Handoff Summary

This website should feel like a premium cream-and-blush dessert studio with a clear route from visual inspiration to enquiry. The interface should showcase real treats first, explain the ordering process simply, and keep every claim careful until the client confirms operational details.
