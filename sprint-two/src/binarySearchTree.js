//Prototypal Class
var BinarySearchTree = function(value){
  var obj = Object.create(BinarySearchTree.prototype);
  obj.left = undefined;
  obj.right = undefined;
  obj.value = value;
  return obj;
};

BinarySearchTree.prototype.insert = function(value) {
  
  if(value < this.value) {
    if(this.left){
      this.left.insert(value);
    }else{
      this.left = BinarySearchTree(value);
    }
  } else {
    if(this.right){
      this.right.insert(value);
    }else{
      this.right = BinarySearchTree(value)
    }
  }
  
  //console.log(this.value);
};

BinarySearchTree.prototype.contains = function(value) {
  
  
  if(value < this.value){
    if(this.left){
      return this.left.contains(value);
    }
  }
  
  if(value > this.value){
    if(this.right){
      return this.right.contains(value);
    }
  }
  
  if(this.value === value){
    return true;
  }
  
  // if(this.value === value) {
  //   return true;
  // } else {
  //   if(value < this.value) {
  //     this.left.contains(value);
  //   } else {
  //     this.right.contains(value);
  //   }
  // }
  
  
  
  return false;
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  
};


var createChild = function(value) {
  var child = {};
  child.value = value;
  child.left = null;
  child.right = null;

  return child;
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
