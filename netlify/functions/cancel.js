const axios = require('axios');
exports.handler = async (event) => {
  const { paymentId } = JSON.parse(event.body);
  const apiKey = process.env.PI_API_KEY;
  try {
    await axios.post(`https://api.minepi.com/v2/payments/${paymentId}/cancel`, {}, { headers: { 'Authorization': `Key ${apiKey}` } });
    return { statusCode: 200, body: JSON.stringify({ message: 'Cancelled' }) };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};
