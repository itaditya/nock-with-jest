const request = require('superagent');

const sendRequest = async () => {
  const res = await request.get('http://localhost:3000')
  return res.text
}

module.exports = sendRequest;
