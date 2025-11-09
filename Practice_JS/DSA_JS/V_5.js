//* Create a new node..
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
//* Create Linked List..
class linkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(value) {
    const newNode = new Node(value);

    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size++;
    return this;
  }

  prepend() {}

  insert() {}

  remove() {}

  print() {
    // let currentList = this;
    // console.log(currentList);
    // console.log(currentNode)
    // console.log(currentNode.value)
    // console.log(currentNode.next)
    let currentNode = this.head;
    const arr = [];

    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }

    console.log(arr.join(" --> "), " --> null");
  }
}

const list = new linkedList();

list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);

list.print();
