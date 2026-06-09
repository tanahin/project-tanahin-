exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method Not Allowed' }) }
  }
  
  const { paymentId } = JSON.parse(event.body)
  
  // Panggil Pi API buat approve
  const res = await fetch(`https://api.minepi.com/v2/payments/${paymentId}/approve`, {
    method: 'POST',
    headers: {
      'Authorization': `Key ${process.env.PI_API_KEY}`,
      'Content-Type': 'application/json'
    }
  })
  
  const data = await res.json()
  
  return {
    statusCode: 200,
    body: JSON.stringify(data)
  }
}
