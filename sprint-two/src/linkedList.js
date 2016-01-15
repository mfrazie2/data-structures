var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var nodeToAdd = Node(value);
    if(list.head === null) {
      list.head = nodeToAdd;
      list.tail = nodeToAdd;
    }
    list.tail.next = nodeToAdd;
    list.tail = nodeToAdd;
  };

  list.removeHead = function(){
    var hold = list.head;
    list.head = hold.next;
    return hold.value;
  };

  list.contains = function(target){ //target is the value property of the nodes
    //iterate the list
    var result = false;
    var currentNode = list.head;
    while(currentNode.next){
      if(currentNode.value === target) {
        result = true;
      }
      currentNode = currentNode.next;
    }
    if(currentNode.value === target) {
      result = true;
    }
    return result;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 .addToTail = O(1)
 .removeHead = O(1)
 .contains = O(n)
 */
