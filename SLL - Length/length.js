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

    length(point){
        let node = this.head;
        let count = 0;
            while (node) {
                count++;
                node = node.next;
            }
            return count
    }
}



let sll = new SLL();
var i;
for (i = 0; i < 5000; i++) {
  sll.add(i);
}

console.log(sll.length());
