class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}


class Queue {
    constructor() {
        this.length = 0;
        this.back = null;
        this.front = null;
    }


    enqueue(element) {
        let node = new Node(element)
        if (!this.back) {
            this.back = node;
        } else {
            node.next = this.back
            this.back = node;
            let currentNode = this.back
            while (currentNode.next) {
                currentNode = currentNode.next
            }
            this.front = currentNode
        }
        this.length++;
        return this;
    }

    dequeue() {
        if (!this.back) return false;
        let currentNode = this.back
        let previousNode;
        while (currentNode.next) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        currentNode = previousNode;
        this.front = previousNode;
        this.front.next = null;
        this.length--;
        return this
    }

    allQueue() {
        let currentNode = this.back
        let allToString = ""
        while (currentNode) {
            allToString += currentNode.element + ","
            currentNode = currentNode.next
        }
        return allToString;
    }
}

let kamur = new Queue()

kamur.enqueue("sezer")
kamur.enqueue("sezen")
kamur.enqueue("cüneyt")
kamur.enqueue("selcan")

console.log(kamur.allQueue())