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

BinarySearchTree.prototype.closestValue = function(value) {
  //do work son
  var closestSoFar = {'difference': null, 'closest' : null}
  this.depthFirstLog(function(currentValue){
  
    var diff;
    
    if(value > currentValue){
      diff = value - currentValue;
    }else{
      diff = currentValue - value;    
    }
    if(closestSoFar.difference === null){
      closestSoFar.difference = diff;
      closestSoFar.closes = currentValue;
    }else if(diff < closestSoFar.difference){
      closestSoFar.difference = diff;
      closestSoFar.closest = currentValue;
    }
  });
  
  return closestSoFar.closest;
  
};

/*
 * Complexity: What is the time complexity of the above functions?
 insert = O(n)
 contains = O(n)
 depthFirstLog = O(n) 
 */
