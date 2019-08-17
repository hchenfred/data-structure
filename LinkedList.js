// piece of data - val
//reference to next node - next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }

    // only one node
    if (this.head === this.tail) {
      const val = this.head.val;
      this.head = this.tail = null;
      this.length = 0;
      return val;
    }

    let curr = this.head;
    while (curr.next !== this.tail) {
      curr = curr.next;
    }
    const val = this.tail.val;
    curr.next = null;
    this.tail = curr;
    this.length--;
    return val;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }

    const val = this.head.val;
    this.head = this.head.next;
    this.length--;
    return val;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this.head;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let count = 0;
    let curr = this.head;
    while (curr !== null) {
      if (count === index) {
        return curr;
      }
      count++;
      curr = curr.next;
    }

    return null;
  }

  set(index, value) {
    if (this.get(index)) {
      this.get(index).val = value;
      return true;
    }

    return false;
  }

  insert(index, value) {
    const newNode = new Node(value);
    if (index < 0 || index > this.length) {
      return false;
    }

    if (index === 0) {
      return this.unshift(value);
    }

    if (index === this.length) {
      return this.push(value);
    }

    const prevNode = this.get(index - 1);
    const nextNode = prevNode.next;
    prevNode.next = newNode;
    newNode.next = nextNode;
    this.length++;
    return true;
  }


}

// var first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")

var list = new SinglyLinkedList()

list.unshift('huan')
list.unshift('le');
list.push('123');
list.set(0, 'wwwwwww')

list.insert(1, 'lalala')
console.log(list);



