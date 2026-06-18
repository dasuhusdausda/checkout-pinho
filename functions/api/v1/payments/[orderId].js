export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization"
    }
  });
}

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
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization"
    }
  });
}
