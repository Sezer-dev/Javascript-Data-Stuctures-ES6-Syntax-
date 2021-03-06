class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class Linkedlist {
    constructor() {
        this.length = 0;
        this.head = null;
    }

    add(element) {
        let node = new Node(element)

        if (this.head === null) {
            this.head = node
        } else {
            let currentNode = this.head;

            while (currentNode.next) {
                currentNode = currentNode.next
            }

            currentNode.next = node;
        }
        this.length++;
    }

    remove(element) {
        if (this.head.element === element) {
            return this.head.next
        } else {
            let currentNode = this.head
            let previousNode;

            while (currentNode.element !== element) {
                previousNode = this.head;
                currentNode = currentNode.next;
            }

            return previousNode.next = currentNode.next
        }
    };

    isEmpty() {
        return this.length === 0;
    }

    indexOf(element) {
        let index = -1;
        let currentNode = this.head
        while (true) {
            index++;
            if (currentNode.element === element) {
                return index;
            }
            currentNode = currentNode.next
        }
    }

    elementAt(index) {
        let count = 0;
        let currentNode = this.head
        while (count < index) {
            count++
            currentNode = currentNode.next
        }
        return currentNode.element
    }

    addAt(index, element) {
        let node = new Node(element)

        let currentNode = this.head;
        let previousNode;
        let currentIndex = 0
        if (index > this.length) {
            return false;
        }

        if (index === 0) {
            node.next = currentNode
            return this.head = node
        } else {
            while (currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next
            }
            node.next = currentNode;
            previousNode.next = node;
        }
        this.length++;
    }

    removeAt(index) {
        if (index > this.length) return false;

        let currentNode = this.head;
        let previousNode;
        let currentIndex = 0;

        if(index < 0 || index >= this.length){
            return null;
        }

        if (index === 0) {
            head = currentNode.next;
        } else {
            while (currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            return previousNode.next = currentNode.next
        }

        this.length--;
        return currentNode.element;
    }

}