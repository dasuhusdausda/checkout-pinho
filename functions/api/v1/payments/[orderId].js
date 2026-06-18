export async function onRequestGet({ params, env }) {
  const response = await fetch(
    `https://pagamentosbrasilpay.com/api/v1/payments/${params.orderId}`,
    {
      headers: {
        "Authorization": `Bearer ${env.BRASILPAY_API_KEY}`
      }
    }
  );

  const text = await response.text();

  return new Response(text, {
    status: response.status,
    headers: { "Content-Type": "application/json" }
  });
}
