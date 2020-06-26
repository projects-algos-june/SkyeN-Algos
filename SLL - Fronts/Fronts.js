class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SLL {
    constructor(){
        this.head = null
    }
    add(value){
        if(this.head == null) {
            this.head = new Node(value);
            return this
        } else {
            var list = this.head;
            this.head = new Node(value);
            this.head.next = list;
            return this
        }
    }
    remove(){
        this.head = this.head.next;
        return this
    }
    front(){
        return this.head.value
    }
}