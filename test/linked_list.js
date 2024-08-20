/*
We want to make alinked list that is more dynamic for fun
-every new node will point it to the front of the tail
-every removed node will move the head to the tail
-once 5 nodes are in the list we will reverse the linked list (for ever noded added after as well)
*/
import { Linkedlist } from "../linkedlist.mjs";

// var assert = require('assert');
import assert from "assert";
describe("Linkedlist", function () {
  describe("Returnlinkedlistnumber()", function () {
    it("should return 0 if linked list is empty", function () {
      // given: a new empty linkelist
      const new_linkedlist = new Linkedlist();
      // when: Returnlinkedlistnumber() is run
      const count = new_linkedlist.length();
      // then:alert to give total number in linkedlist which should be 0
      //   assert.equal([1, 2, 3].indexOf(4), -1);
      assert.strictEqual(count, 0);
    });
    describe("Actualnumber()", function () {
        it("should return # if linked list is not empty", function () {
          // given: a new linkelist
          const num_linkedlist = new Linkedlist();
          // when: Actualnumber() is run
          const count = num_linkedlist.length();
          // then:alert to give total number in linkedlist which should be 0
          //   assert.equal([1, 2, 3].indexOf(4), -1);
          assert.notStrictEqual(count,0);
        });
    });
    });
});
