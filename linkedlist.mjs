import { Node } from "./node.mjs";  // Make sure this path is correct based on your file structure



export class Linkedlist {
  constructor() {
    this.head = null; // Initially, head is null
    this.tail = null; // Initially, tail is null
    this.size = 0;    // Initially, size is 0
  }

  // Method to get the head node
  gethead() {
    return this.head;
  }

  // Method to get the tail node
  gettail() {
    return this.tail;
  }

  // Method to return the current length of the linked list
  length() {
    return this.size;
  }

  // A method to add a node to the linked list
  add(data) {
    const newNode = new Node(data); // Create a new node with the given data
    if (this.head === null) {
      this.head = newNode; // The first node is the head
      this.tail = newNode; // Initially, head and tail are the same
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.size++;

    console.log(node_count)
  }
}
