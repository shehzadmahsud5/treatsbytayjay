const GOOGLE_FORM_VIEW =
  "https://docs.google.com/forms/d/e/1FAIpQLSe5D_q0q93R90qQ3SzjcuNFUSN_kNUpArF4xlgxpeN0B0w7gg/viewform";

export function OrderEnquiryForm({ sent = false }: { sent?: boolean }) {
  return (
    <>
      <form
        action="/api/enquiry"
        className="enquiry-form"
        method="POST"
      >
        {sent ? (
          <div
            aria-live="polite"
            className="rounded-card border border-pistachio/40 bg-pistachio/20 p-4 text-sm font-semibold leading-7 text-ganache"
            role="status"
          >
            Thank you. Your enquiry has been sent to Treats By Tayjah.
          </div>
        ) : null}

        <div className="grid gap-4 md:grid-cols-2">
          <label>
            <span>Name *</span>
            <input name="entry.1433925287" required type="text" autoComplete="name" />
          </label>
          <label>
            <span>Phone number or Instagram @ *</span>
            <input name="entry.1044565258" required type="text" autoComplete="tel" />
          </label>
        </div>

        <div className="grid gap-4 md:grid-cols-[1.25fr_0.75fr]">
          <label>
            <span>What would you like to order? *</span>
            <input
              name="entry.479794888"
              placeholder="Cake, cupcakes, bento box, sheet cake..."
              required
              type="text"
            />
          </label>
          <fieldset>
            <legend>Date needed *</legend>
            <div className="grid grid-cols-3 gap-2">
              <input
                aria-label="Day"
                inputMode="numeric"
                name="entry.659072211_day"
                placeholder="DD"
                required
                type="text"
              />
              <input
                aria-label="Month"
                inputMode="numeric"
                name="entry.659072211_month"
                placeholder="MM"
                required
                type="text"
              />
              <input
                aria-label="Year"
                inputMode="numeric"
                name="entry.659072211_year"
                placeholder="YYYY"
                required
                type="text"
              />
            </div>
          </fieldset>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <label>
            <span>Quantity or servings needed</span>
            <input name="entry.184059191" type="text" />
          </label>
          <fieldset>
            <legend>Collection or delivery? *</legend>
            <div className="enquiry-options">
              <label>
                <input name="entry.850727684" required type="radio" value="Collection" />
                <span>Collection</span>
              </label>
              <label>
                <input name="entry.850727684" required type="radio" value="Delivery" />
                <span>Delivery</span>
              </label>
            </div>
          </fieldset>
        </div>

        <label>
          <span>Delivery postcode, if delivery is requested</span>
          <input name="entry.418932876" type="text" autoComplete="postal-code" />
        </label>

        <div className="grid gap-4 md:grid-cols-2">
          <label>
            <span>Occasion *</span>
            <input
              name="entry.653518423"
              placeholder="Birthday, wedding, baby shower..."
              required
              type="text"
            />
          </label>
          <fieldset>
            <legend>Wedding cake tasting session? *</legend>
            <div className="enquiry-options">
              <label>
                <input name="entry.1130460441" required type="radio" value="Yes" />
                <span>Yes</span>
              </label>
              <label>
                <input name="entry.1130460441" required type="radio" value="No" />
                <span>No</span>
              </label>
            </div>
          </fieldset>
        </div>

        <label>
          <span>Flavour details *</span>
          <textarea
            name="entry.1625144849"
            placeholder="For cakes, include cake, filling and buttercream choices if known."
            required
            rows={3}
          />
        </label>

        <label>
          <span>Allergies or dietary requirements *</span>
          <input
            name="entry.1897657282"
            placeholder="Share requirements, or write none."
            required
            type="text"
          />
        </label>

        <label>
          <span>Decoration, theme, colours or freestyle design? *</span>
          <textarea name="entry.867067960" required rows={4} />
        </label>

        <label>
          <span>Anything else to add?</span>
          <textarea name="entry.24663670" rows={3} />
        </label>

        <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
          <button className="btn-primary border-0" type="submit">
            Send order enquiry
          </button>
          <a className="btn-secondary" href={GOOGLE_FORM_VIEW} rel="noreferrer" target="_blank">
            Open Google Form
          </a>
        </div>

        <p className="text-sm leading-7 text-ganache/65">
          After submitting, Treats By Tayjah will review your enquiry and confirm
          availability, pricing, collection or delivery details directly.
        </p>
      </form>
    </>
  );
}
