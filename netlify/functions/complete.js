const axios = require('axios');
exports.handler = async (event) => {
  const { paymentId, txid } = JSON.parse(event.body);
  const apiKey = process.env.PI_API_KEY;
  try {
    await axios.post(`https://api.minepi.com/v2/payments/${paymentId}/complete`, { txid: txid }, { headers: { 'Authorization': `Key ${apiKey}` } });
    return { statusCode: 200, body: JSON.stringify({ message: 'Completed' }) };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};
