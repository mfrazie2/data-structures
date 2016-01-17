//Prototypal Class Instantiation 
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
  return false;
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
 
  cb(this.value);
  if(this.left) {
    this.left.depthFirstLog(cb);
  }
  if(this.right){
    this.right.depthFirstLog(cb);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
