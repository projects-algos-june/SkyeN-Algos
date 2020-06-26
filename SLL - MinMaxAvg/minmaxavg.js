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

    max(x){
        let node = this.head;
        let now = 0;
            while (node) {
                if (node.val > now){
                    now = node.val;
                }
                node = node.next;
            }
            return now
    }
    min(y){
        let node = this.head;
        let now = Number.MAX_VALUE;
            while (node) {
                if (node.val < now){
                    now = node.val;
                }
                node = node.next;
            }
            return now
    }
    avg(z){
        let node = this.head;
        let total = 0;
        let count = 0;
            while (node) {
                total += node.val;
                count++;
                node = node.next;
            }
            return (total/count)
    }
}



let sll = new SLL();
var i;
for (i = 0; i < 5000; i++) {
  sll.add(i);
}
sll.add(-34);
sll.add(56383);
console.log(sll.max());
console.log(sll.min());
console.log(sll.avg());
