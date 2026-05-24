"use client";

import { FormEvent, useState } from "react";

const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSe5D_q0q93R90qQ3SzjcuNFUSN_kNUpArF4xlgxpeN0B0w7gg/formResponse";
const GOOGLE_FORM_VIEW =
  "https://docs.google.com/forms/d/e/1FAIpQLSe5D_q0q93R90qQ3SzjcuNFUSN_kNUpArF4xlgxpeN0B0w7gg/viewform";

const fieldIds = {
  name: "entry.1433925287",
  contact: "entry.1044565258",
  product: "entry.479794888",
  dateYear: "entry.659072211_year",
  dateMonth: "entry.659072211_month",
  dateDay: "entry.659072211_day",
  quantity: "entry.184059191",
  fulfilment: "entry.850727684",
  postcode: "entry.418932876",
  flavour: "entry.1625144849",
  requirements: "entry.1897657282",
  occasion: "entry.653518423",
  tasting: "entry.1130460441",
  design: "entry.867067960",
  notes: "entry.24663670",
};

export function OrderEnquiryForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">(
    "idle",
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const data = new FormData(form);
    const orderDate = String(data.get("orderDate") || "");
    const [year, month, day] = orderDate.split("-");

    const googleData = new FormData();
    googleData.set(fieldIds.name, String(data.get("name") || ""));
    googleData.set(fieldIds.contact, String(data.get("contact") || ""));
    googleData.set(fieldIds.product, String(data.get("product") || ""));
    googleData.set(fieldIds.dateYear, year || "");
    googleData.set(fieldIds.dateMonth, month || "");
    googleData.set(fieldIds.dateDay, day || "");
    googleData.set(fieldIds.quantity, String(data.get("quantity") || ""));
    googleData.set(fieldIds.fulfilment, String(data.get("fulfilment") || ""));
    googleData.set(fieldIds.postcode, String(data.get("postcode") || ""));
    googleData.set(fieldIds.flavour, String(data.get("flavour") || ""));
    googleData.set(fieldIds.requirements, String(data.get("requirements") || ""));
    googleData.set(fieldIds.occasion, String(data.get("occasion") || ""));
    googleData.set(fieldIds.tasting, String(data.get("tasting") || "No"));
    googleData.set(fieldIds.design, String(data.get("design") || ""));
    googleData.set(fieldIds.notes, String(data.get("notes") || ""));

    try {
      await fetch(GOOGLE_FORM_ACTION, {
        method: "POST",
        mode: "no-cors",
        body: googleData,
      });
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="enquiry-form" onSubmit={handleSubmit}>
      <div className="grid gap-4 md:grid-cols-2">
        <label>
          <span>Name *</span>
          <input name="name" required type="text" autoComplete="name" />
        </label>
        <label>
          <span>Phone number or Instagram @ *</span>
          <input name="contact" required type="text" autoComplete="tel" />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-[1.25fr_0.75fr]">
        <label>
          <span>What would you like to order? *</span>
          <input
            name="product"
            placeholder="Cake, cupcakes, bento box, sheet cake..."
            required
            type="text"
          />
        </label>
        <label>
          <span>Date needed *</span>
          <input name="orderDate" required type="date" />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label>
          <span>Quantity or servings needed</span>
          <input name="quantity" type="text" />
        </label>
        <fieldset>
          <legend>Collection or delivery? *</legend>
          <div className="enquiry-options">
            <label>
              <input name="fulfilment" required type="radio" value="Collection" />
              <span>Collection</span>
            </label>
            <label>
              <input name="fulfilment" required type="radio" value="Delivery" />
              <span>Delivery</span>
            </label>
          </div>
        </fieldset>
      </div>

      <label>
        <span>Delivery postcode, if delivery is requested</span>
        <input name="postcode" type="text" autoComplete="postal-code" />
      </label>

      <div className="grid gap-4 md:grid-cols-2">
        <label>
          <span>Occasion *</span>
          <input
            name="occasion"
            placeholder="Birthday, wedding, baby shower..."
            required
            type="text"
          />
        </label>
        <fieldset>
          <legend>Wedding cake tasting session? *</legend>
          <div className="enquiry-options">
            <label>
              <input name="tasting" required type="radio" value="Yes" />
              <span>Yes</span>
            </label>
            <label>
              <input name="tasting" required type="radio" value="No" />
              <span>No</span>
            </label>
          </div>
        </fieldset>
      </div>

      <label>
        <span>Flavour details *</span>
        <textarea
          name="flavour"
          placeholder="For cakes, include cake, filling and buttercream choices if known."
          required
          rows={3}
        />
      </label>

      <label>
        <span>Allergies or dietary requirements *</span>
        <input
          name="requirements"
          placeholder="Share requirements, or write none."
          required
          type="text"
        />
      </label>

      <label>
        <span>Decoration, theme, colours or freestyle design? *</span>
        <textarea name="design" required rows={4} />
      </label>

      <label>
        <span>Anything else to add?</span>
        <textarea name="notes" rows={3} />
      </label>

      <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
        <button className="btn-primary border-0" disabled={status === "submitting"} type="submit">
          {status === "submitting" ? "Sending..." : "Send order enquiry"}
        </button>
        <a className="btn-secondary" href={GOOGLE_FORM_VIEW} rel="noreferrer" target="_blank">
          Open Google Form
        </a>
      </div>

      {status === "sent" ? (
        <p className="text-sm font-semibold text-ganache">
          Thank you. Your enquiry has been sent to Treats By Tayjah.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm font-semibold text-raspberry">
          Something blocked the website form. Please use the Google Form link.
        </p>
      ) : null}
    </form>
  );
}
