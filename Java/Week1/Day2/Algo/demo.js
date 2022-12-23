// Singly Linked Lists

var x = 10;
var y = x; // 10

x += 30; // 40
y += 10; // 20

// console.log(x); //? 40
// console.log(y); //? 20

// primitives are passed by value


var a = [1, 3, 7, 9];
var b = a; // b points at the same memory address a
a.push(10);
b.push(50);

// console.log(a); // [1,3,7,9,10, 50]
// console.log(b); // [1,3,7,9,10,50]

// complex data types (arrays) are passed by reference

// ---- OBjects ----

var person = { // object literal
    name: "joe",
    age: 33,
    favFood: "Pizza"
}

// var p = new person()

var n1 = {
    value: 11,
    next: null
}
var n2 = {
    value: 22,
    next: null
}

var n3 = {
    value: 33,
    next: null
}

// console.log(n1.value);

// Object Literal
var person = {
    name: "Bob",
    favFood: "🍕",
    age: 28
}

// var somePerson = new Person( )

var n1 = {
    value: 11,
    next: null
}

var n2 = {
    value: 22,
    next: null
}

var n3 = {
    value: 33,
    next: null
}


n1.next = n2;
// n2.next = n3
n1.next.next = n3;
// console.log(n1);


// Classes (Car)? blueprints
// create new Objects // DRY
// reuse

// -> constructor
// (java: member variables)
// what a class HAS
// - creates defaults
// define the object
// attributes
// doors


// -> methods - (class functions)
// what a class can DO - actions
// drive()
// honk()
// seeMilage()


var n4 = {
    value: 45,
    next: null
}

// class for the Node
class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

var n5 = new Node(99);
// console.log(n5);

var n6 = new Node(100);
// console.log(n6);

n5.next = n6;
console.log(n5);
console.log(n6);

// class for the SLL
// what will hold all the nodes
class SLL {
    constructor() {
        this.head = null;
    }

    // -- methods --
    isEmpty() {
        if (this.head) {
            return false;
        } else {
            return true;
        }
    }

    addToFront(node) {
        node.next = this.head;
        this.head = node;

    }
    addDataTofront(data){
        var newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        return this;
    }

    read(){
        var i = this.head;
        while(i != null ){
            console.log(i.value);
            // console.log(i.next);
            i = i.next;

        }
        
    }
    contains(val){
        var i = this.head;
        while(i != null ){
            if(i.value === val){
                return true;
            }
            i = i.next;
        }
            return false;
        
        
    }
    removeFromFront(){
        if (this.isEmpty()) return null;
        var temp = this.head;
        this.head = temp.next;
        temp.next = null;
        console.log(temp);
        return(temp);
        
    }
    delete(data){
    var runner = this.head;
    if(!runner){
        return;
    }
    if (runner.value == data) {
        this.removeFromFront(data);
        return;
    }
        else{
        while(runner.next ){
            if(runner.next.value === data){
                runner.next = runner.next.next;
                return;
            }
            runner = runner.next
        }
    }}
    
    size(){
        var runner = this.head;
        var j =0;
        while(runner != null ){
            j++
            runner = runner.next
            console.log(j);
    }
    return j;

}

addToBack(data){
    if (this.isEmpty()){
        var newNode = new Node(data);
        this.head = newNode;
    }
    else{
    var runner = this.head;
    while(runner.next !== null){
        runner = runner.next;
        }
            runner.next = new Node(data);
            
        }
        return this;
    }

    reverse(){
        
        var prev = this.head;
        var current = this.head.next;
        var next = this.head;
        
        while(current){
            
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
    }
    this.head = prev;

}
}

        
    


var myCoolSLL = new SLL();
// console.log(myCoolSLL);

// console.log(myCoolSLL.isEmpty());

myCoolSLL.addToFront(new Node(66));
// myCoolSLL.addToFront(n5);
myCoolSLL.addDataTofront(50);
myCoolSLL.addDataTofront(5);
myCoolSLL.addDataTofront(120);

// console.log(myCoolSLL);

// console.log(myCoolSLL.isEmpty());
// myCoolSLL.read();

// console.log(myCoolSLL.contains(50));
// myCoolSLL.removeFromFront();
// console.log(myCoolSLL.contains(50));
// myCoolSLL.delete(99);
// console.log(myCoolSLL);
// console.log(myCoolSLL.size()); 
// console.log(myCoolSLL.addToBack(8));
// myCoolSLL.delete(5);
// 


myCoolSLL.delete(66);
myCoolSLL.size();
console.log(myCoolSLL);
myCoolSLL.reverse();
console.log(myCoolSLL);



