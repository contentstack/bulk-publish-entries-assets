const { EventEmitter } = require('events');

class Queue extends EventEmitter {
  constructor() {
    super();
    this.consumer = null;
    this.count = 0;
    this.store = [];
    this.config = {};
    this.on('dequeue', this.check);
  }

  check() {
    if (this.store.length > 0) {
      this.Dequeue();
    }
  }

  Enqueue(obj) {
    // console.log(this.emitter)
    this.store.push(obj);
    this.Dequeue();
  }

  Dequeue() {
    const deq = this.store.shift();
    this.emit('dequeue');
    if (deq) {
      this.consumer(deq, this.config);
    }
  }
}

module.exports = Queue;
