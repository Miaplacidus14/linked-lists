class Node {
    constructor(value) {
        this.value = value;
        this.nextNode = null;
    }
}

class LinkedList {
    constructor() {
        this.listHead = null;
    }

    prepend(value) {
        let tmp = null;
        if (this.listHead != null) tmp = this.listHead;
        this.listHead = new Node(value);
        this.listHead.nextNode = tmp;
    }

    append(value) {
        if (this.listHead == null) {
            this.prepend(value);
        } else {
            let tmp = this.listHead;
            while (tmp.nextNode != null) {
                tmp = tmp.nextNode;
            }
            tmp.nextNode = new Node(value);
        }
    }

    size () {
        let tmp = this.listHead;
        let counter = 1
        while (tmp.nextNode != null) {
            tmp = tmp.nextNode;
            counter++
        }
        return counter;
    }

    head () {
        return this.listHead;
    }

    tail () {
        let tmp = this.listHead;
        while (tmp.nextNode != null) {
            tmp = tmp.nextNode;

        }
        return tmp;
    }

    at(index) {
        let tmp = this.listHead;
        for (let i = 0; i < index; i++) {
            tmp = tmp.nextNode;
            if (tmp == null) return "Il n'y a pas de noeud à l'index demandé";
        }
        return tmp
    }

    pop () {
        let tmp = this.listHead;
        let prev = null;
        while (tmp.nextNode != null) {
            prev = tmp;
            tmp = tmp.nextNode;
        }
        prev.nextNode = null;
    }

    contains(value) {
        let tmp = this.listHead;
        while (tmp.nextNode != null) {
            if (tmp.value === value) {
                return true;
            }
            tmp = tmp.nextNode
        }
        return false;
    }

    find(value) {
        let tmp = this.listHead;
        let counter = 0
        while (tmp.nextNode != null) {
            if (tmp.value === value) {
                return counter;
            }
            tmp = tmp.nextNode
            counter++
        }
        return counter;
    }

    toString () {
        let tmp = this.listHead;
        let response = '';
        while (tmp.nextNode != null) {
            response += `( ${tmp.value} ) -> `;
            tmp = tmp.nextNode;
        }
        response += `( ${tmp.value} ) -> `;
        return (response += 'null');
    }
}

const linkedList = new LinkedList();

linkedList.prepend("test1");
linkedList.append("test2");
linkedList.append("test3");
console.log(linkedList.toString()); // (test1) -> (test2) -> (test3) -> null
console.log(linkedList.size()); // 3
console.log(linkedList.head()); // return head Node
console.log(linkedList.tail()); // Node { value: 'test3', nextNode: null }
console.log(linkedList.at(2)); // Node { value: 'test3', nextNode: null }
console.log(linkedList.at(4)); // There is no item for this index
linkedList.pop();
console.log(linkedList.toString()); // (test1) -> (test2) -> null
console.log(linkedList.contains("test1")); // true
console.log(linkedList.find("test2")); // 1
linkedList.prepend("test3");
console.log(linkedList.toString()); // (test3) -> (test1) -> (test2) -> null