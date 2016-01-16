var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  _.extend(newTree, treeMethods);
  
  newTree.children = [];  // fix me

  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  var newChild = Tree(value);
  this.children.push(newChild);
};

treeMethods.contains = function(target){
  var result = false;
  var checkTree = function(tree){
    for(var i = 0; i < tree.children.length; i++){
      if(tree.children[i].value === target){
        result = true;
      }
      
      if(tree.children[i].children){
        checkTree(tree.children[i])
      }
    }
  };
  checkTree(this);
  
  // for(var i = 0; i < this.children.length; i++) {
  //   var curTree = this.children[i]

  //   if(curTree.value === target) {
  //     result = true;
  //   } 
  //   if(curTree.children) {
  //     curTree.children.contains(target);
  //   }
  // }
  
  return result;
};


/*
 * Complexity: What is the time complexity of the above functions?
  addChild = 0(1)
  contains = 0(n)
 */
