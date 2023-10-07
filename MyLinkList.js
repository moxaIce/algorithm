/**
 * @description 链表的实现；
 */

class Node {
    constructor (data) {
        this.val = data;
    }
}

class MyLinkList {
    constructor() {
        this.head = new Node(null);
        this.tail = new Node(null);

        this.head.next = this.tail;
        this.tail.prev = this.head;

        this.size = 0;
    }

    addFirst(e) {

    }

    addLast(e) {

    }

    add(index, element) {

    }

    removeFirst() {

    }

    removeLast() {

    }


    getFirst(){

    }

    getLast() {

    }

    get(index) {

    }

    set(index, element) {

    }

    //
    getNode(index) {

    }


}

console.log(new MyLinkList())