class Node {
    constructor(element) {
        this.element = element,
            this.next = null,
            this.prev = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    add(element) {
        let node = new Node(element)
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.prev = this.tail
            this.tail.next = node;
            this.tail = node
        }

        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return false;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev
            this.tail.next = null;
        }
        this.length--;
        return this
    }

    unshift() {
        if (!this.head) return false;
        if (this.length === 1) {
            this.head = null;
            this.tail = null
        } else {
            this.head = this.head.next
            this.head.prev = null
        }

        this.length--;
        return this;
    }

    shift(element) {
        let node = new Node(element)
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head
            this.head.prev = node;
            this.head = node;
        }

        this.length++;
        return this;
    }

    remove(element) {
        if (!this.head) return false;
        if (this.head.element === element) {
            this.head = this.head.next
            this.head.prev = null;
        } else {
            let currentNode = this.head
            let previousNode;
            while (currentNode.element !== element) {
                previousNode = currentNode
                currentNode = currentNode.next
            }

            previousNode.next = currentNode.next
            currentNode.next.prev = currentNode.prev
        }
        this.length--;
        return this;
    }

    indexOf(element) {
        if (!this.head) return false;
        let index = -1;
        if (this.head.element === element) {
            index++;
        } else {
            let currentNode = this.head
            while (currentNode.element !== element) {
                currentNode = currentNode.next
                index++;
            }
        }
        return index;
    }

    elementAt(index) {
        if (!this.head || index > this.length) return false;
        let currentNode = this.head
        if (index === 1) {
            return this.head
        } else {
            let count = 1;
            while (count < index) {
                currentNode = currentNode.next
                count++;
            }
        }

        return currentNode;
    }

    addAt(element,index){
        if(!this.head) return false;
        let node = new Node(element)

        if(index === 1){
            node.next = this.head
            this.head.prev = node;
            this.head = node;
        } else {
            let count = 1;
            let currentNode = this.head
            let previousNode;
            while(count < index){
                previousNode = currentNode
                currentNode = currentNode.next
                count++;
            }
            node.prev = previousNode;
            node.next = currentNode;
            previousNode.next = node;
            currentNode.prev = node;
        }
        this.length++;
        return this;
    }

    removeAt(index){
        if(!this.head) return false
        if(index === 1){
            this.head = this.head.next
            this.head.prev = null
        }else {
            let currentNode = this.head
            let previousNode;
            let count = 1;
            while(count < index){
                previousNode = currentNode;
                currentNode = currentNode.next;
                count++;
            }
            previousNode.next = currentNode.next;
            currentNode.next.prev = currentNode.prev 
        }

        this.length--;
        return this;
    }

    allElements(){
        if(!this.head) return false;
        if(this.length === 1) return this.head;
        let count = 0;
        let currentNode = this.head
        let elements = "";
        while(count < this.length){
            elements += JSON.stringify(currentNode.element)
            currentNode = currentNode.next
            count++;
        }
        return elements;
    }

}