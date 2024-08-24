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

    describe("findthehead()", function () {
      it("look in a linked list and find the first node also know as the head", function () {
    // given: a new empty linked list
    const new_linkedlist = new Linkedlist();

    // Add a node to the list
    new_linkedlist.add("first node data");

    // when: calling gethead() it should find the head node
    const head_node = new_linkedlist.gethead();
    
    // then: assert the head node is not null
    assert.notStrictEqual(head_node, null);

    // Since there is only one node, the head and the tail should be the same
    const tail_node = new_linkedlist.gettail();
    assert.strictEqual(head_node, tail_node, "Head and tail should be the same when there's only one node");

    // Add another node to test for head and tail distinction
    new_linkedlist.add("second node data");

    // Now the head and tail should be different
    assert.notStrictEqual(new_linkedlist.gethead(), new_linkedlist.gettail(), "Head and tail should be different when there are multiple nodes");
        
      });

    });

    // describe("findthetail()", function () {
    //   it("look in a linked list and find the first node also know as the head", function () {
    //     // given: a new empty linkelist
    //     const new_linkedlist = new Linkedlist();
    //     // when calling gethead() it will find the head node
    //     const head_node = new_linkedlist.gethead();
    //     // the head node cant be the tail test for this 
    //     assert.notStrictEqual(head_node,null)
        
    //   });

    // });
    // describe("Actualnumber()", function () {
    //     it("should return # if linked list is not empty", function () {
    //       // given: a new linkelist
    //       const num_linkedlist = new Linkedlist();
    //       // when: Actualnumber() is run
    //       const count = num_linkedlist.length();
    //       // then:alert to give total number in linkedlist which should be 0
    //       //   assert.equal([1, 2, 3].indexOf(4), -1);
    //       assert.notStrictEqual(count,0);
    //     });
    // });
    });
});
