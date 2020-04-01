const nock = require('nock');
const req = require('../../src/util/request');

describe('testing request module', () => {
  beforeEach(() => {
 	nock('https://api.localhost.io')
 	.get('/test/')
 	.reply(200, { message: 'successful' });
  });

  it('testing request function', async () => {
 	const config = {
 		uri: 'https://api.localhost.io/test/',
 		method: 'GET',
 	};
 	const response = await req(config);
    expect(response).toBeDefined();
  });
});
