const _ = require('lodash');
const Queue = require('../../src/util/queue');
const config = require('../dummy/config');

const queue = new Queue();


function sampleConsumerFunction(data) {

}

queue.consumer = sampleConsumerFunction;

describe('testing queue operations', () => {
  const mockedlog = () => {};
  it('enqueing operation', () => {
    expect(queue.Enqueue({ api_key: 'apiKey', access_token: 'access_token' })).toBeUndefined();
  });

  it('dequeue operations', () => {
    expect(queue.Dequeue()).toBeUndefined();
  });
});
