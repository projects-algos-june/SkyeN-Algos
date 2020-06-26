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
        if (this.head == null){
            this.head = new Node(value);
        } else {
            let now = this.head;
            while(now){
                if(now.next == null){
                    now.next = new Node(value);
                    return this
                }
                now = now.next;
            }
            return this
        }
    }
    second2last(point){
        let node = this.head;
        let back;
            while (node) {
                if (node.next.next == null){
                    back = node;
                }
                node = node.next;
            }
            return back.value
    }

    filter(headNode,lowVal,highVal){
        let node = this.head;
            while (node) {
                if (lowVal < node.val < highVal){
                    node = null;
                }
                node = node.next;
            }
            return headNode
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

    copy(){
        let copy = new sll();
        let node = this.head;
        while (node) {
            node = node.next;
            var list = copy.head;
            copy.head = node;
            copy.head.next = list;
        }
        return copy
    }
}