const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.queue = [];
  }

  constructList(idx) {
    if (!this.queue[idx]) {
      return new ListNode(null);
    }
    const node = new ListNode(this.queue[idx]);
    if(this.queue[idx + 1]) {
      node.next = this.constructList(idx + 1);
    }
    else {
      node.next = null;
    }
    return node;
  }

  getUnderlyingList() {
    return this.constructList(0);
  }

  enqueue(value) {
    this.queue.push(value);
  }

  dequeue() {
    return this.queue.shift();
  }
}

module.exports = {
  Queue
};
