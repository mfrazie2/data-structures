var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  _.extend(newTree, treeMethods);
  
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var newChild = Tree(value);
  this.children.push(newChild);
};

treeMethods.contains = function(target){
  if(this.value === target) {
    return true;
  }
  if(this.children.length > 0) {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)) {
        return true;
      }
    }
  }
  return false;
  
  // Using subroutine for recursive call
  // var result = false;
  // var checkTree = function(tree){
  //   for(var i = 0; i < tree.children.length; i++){
  //     if(tree.children[i].value === target){
  //       result = true;
  //     }
      
  //     if(tree.children[i].children){
  //       checkTree(tree.children[i])
  //     }
  //   }
  // };
  // checkTree(this);
  // return result;
};


/*
 * Complexity: What is the time complexity of the above functions?
  addChild = 0(1)
  contains = 0(n)
 */
