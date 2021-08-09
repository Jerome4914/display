class SLLNode { 
    constructor(val) {
        this.value = val; 
        this.next = null; 
    }
}

class SLL { 
    constructor() { 
        this.head = null; 
    }
    addFront(value) {
        var newNode = new SLLNode(value); 
        newNode.next = this.head; 
        this.head = newNode; 
        return this.head; 
    }

    removeFront() {
        if (this.head == null) { 
            return this.head;
        }
        var removeHeadNode = this.head; 
        this.head = removeHeadNode.next; 
        removeHeadNode.next = null;
        return this.head;
    }

    front() {
        if (this.head == null) {
            return null;
        } else { 
            return this.head.value;
        }
    }

    
    display() {
        var listStr = ""; 
        if (this.head == null) {
            return "empty list"; 
        }
        listStr += this.head.value; 
        
        var runner = this.head.next;
        while (runner != null) {
            listStr += ", " + runner.value; 
            runner = runner.next; 
        }
        return listStr;
    }
}

var mySLL = new SLL();
console.log(mySLL.display());
mySLL.addFront(21);
mySLL.addFront(25);
mySLL.addFront(27);
console.log(mySLL.display());