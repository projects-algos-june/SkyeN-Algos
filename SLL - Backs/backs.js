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
    remove(){
        let node = this.head;
        let back;
            while (node) {
                if (node.next.next == null){
                    node.next = null;
                }
                node = node.next;
            }
    }

    back(point){
        let node = this.head;
        let back;
            while (node) {
                if (node.next == null){
                    back = node;
                }
                node = node.next;
            }
            return back.value
    }

    front(){
        return this.head.value
    }
}

let sll = new SLL();
sll.add("cat");
sll.add("meow");
sll.add("tail");
sll.add("paws");
console.log(sll.front());
console.log(sll.back());
sll.remove();
console.log(sll.front());
console.log(sll.back());