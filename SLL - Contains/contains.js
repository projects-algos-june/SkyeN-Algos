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
    contains(value){
        var person = this.head;
        while (person){
            if (person.val == value){
                return true
            }
            else{
            person = person.next;
            }
        }
        return false
    }
}



let sll = new SLL();
sll.add("John");
sll.add("Sam");
sll.add("Jane");
sll.add("Linda");
console.log(sll.contains("Tad"));
sll.add("Tad");
console.log(sll.contains("Tad"));