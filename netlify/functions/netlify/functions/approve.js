exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { paymentId } = JSON.parse(event.body);
  const PI_API_KEY = process.env.PI_API_KEY;
  
  const response = await fetch(`https://api.minepi.com/v2/payments/${paymentId}/approve`, {
    method: 'POST',
    headers: {
      'Authorization': `Key ${PI_API_KEY}`,
      'Content-Type': 'application/json'
    }
  });

  const data = await response.json();
  return {
    statusCode: 200,
    body: JSON.stringify(data)
  };
};
