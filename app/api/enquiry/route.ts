import { redirect } from "next/navigation";

const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSe5D_q0q93R90qQ3SzjcuNFUSN_kNUpArF4xlgxpeN0B0w7gg/formResponse";

export async function POST(request: Request) {
  const formData = await request.formData();

  await fetch(GOOGLE_FORM_ACTION, {
    method: "POST",
    body: formData,
  });

  redirect("/?enquiry=sent#enquiry");
}
