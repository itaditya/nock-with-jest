const nock = require('nock');

const sendRequest = require('../index');

describe('GET request with nock', () => {
  beforeEach(() => {
    nock('http://localhost:3000')
      .get('/')
      .reply(200, 'data');
  })
  afterEach(() => {
    nock.restore();
  })
  test('returns a mock message', async() => {
    const data = await sendRequest();
    expect(data).toBe('data')
  });
});
