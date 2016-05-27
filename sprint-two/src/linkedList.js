var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var nodeToAdd = Node(value);
    if(list.head === null) {
      list.head = nodeToAdd;
    }
    if(list.tail) {
      list.tail.next = nodeToAdd;
    }
    list.tail = nodeToAdd;
  };

  list.removeHead = function(){
    var hold = list.head;
    list.head = hold.next;
    return hold.value;
  };

  list.contains = function(target){
    var currentNode = list.head;
    while(currentNode){
      if(currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
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
