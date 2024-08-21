import { Node } from "./node.mjs"

export class Linkedlist{
    constructor(){
        this.head = new Node();
    }

    gethead(){
        return this.head;
    }

    tail(){
        let curr = this.head;
        while (curr.next !=null){
            curr = curr.next;
        }
        return curr
    }

    length(){
        return 0
    }
        
    }

