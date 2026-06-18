export async function onRequestPost({ request, env }) {
  const body = await request.text();

  const response = await fetch("https://pagamentosbrasilpay.com/api/v1/payments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${env.BRASILPAY_API_KEY}`
    },
    body
  });

  const text = await response.text();

  return new Response(text, {
    status: response.status,
    headers: { "Content-Type": "application/json" }
  });
}
