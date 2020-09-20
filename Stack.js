class Node {
    constructor(element){
        this.element = element;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.length = 0;
        this.head = null;
    }

    add(element){
        let node = new Node(element)
        if(!this.head) {
            this.head = node;
        } else {
            let currentNode = this.head;
            let previousNode;
            while(currentNode){
                previousNode = currentNode
                currentNode = currentNode.next
            }
            currentNode = node;
            previousNode.next = currentNode;
        }
        
        this.length++;
        return this;
    }

    remove(){
        if(!this.head) return false
        let currentNode = this.head
        let previousNode;
        while(currentNode.next){
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        previousNode.next = null;
        currentNode = null;
        this.length--;
        return this;
    }

    allElements(){
        let currentNode = this.head
        let toString = ""
        while(currentNode){
            toString += currentNode.element + ","
            currentNode = currentNode.next
        }
        return toString
    }
}