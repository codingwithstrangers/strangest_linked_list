// main.mjs
import { Linkedlist } from "./linkedlist.mjs";

const list = new Linkedlist();

list.add("dog");
list.add("cat");
list.add("parrot");
list.add("hamster");
list.add("snake");
list.add("turtle");

console.log(list.toString());
