class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SLL {
    constructor(){
        this.head = null
    }
    add(value){
        if(this.head == null) {
            this.head = new ListNode(value);
            return this
        } else {
            let list = this.head;
            this.head = new ListNode(value);
            this.head.next = list;
            return this
        }
    }

    display(x){
        let node = this.head;
        let str = "";
            while (node) {
                str += " " + node.val;
                node = node.next;
            }
            return str
    }
}



let sll = new SLL();
sll.add("John");
sll.add("Sam");
sll.add("Jane");
sll.add("Linda");
sll.add(1);
console.log(sll.display());