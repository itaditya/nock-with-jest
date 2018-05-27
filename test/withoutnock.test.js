const sendRequest = require('../index');

describe('GET request', () => {
  test('returns a message', async() => {
    const data = await sendRequest();
    expect(data).toBe('data')
  });
});
