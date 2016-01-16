var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};



HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var hold = {};
  hold[k] = v;
  
  //if something is already at index i
  if(this._storage.get(i)) {
    if(this._storage.get(i).hasOwnProperty(k)){
      this._storage.get(i)[k] = v;
      // this._storage.set(i)[k] = v;
    }else{
      //create a new array at i
      var tuple = [];
      //insert existing value and the new value
      tuple.push(this._storage.get(i));
      tuple.push(hold);
      this._storage.set(i, tuple);
    }
  }else{
    //if i is unoccupied
    this._storage.set(i, hold);
  }
  
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  
  if(Array.isArray(this._storage.get(i))) {
    for(var j = 0; j < this._storage.get(i).length; j++) {
      if(this._storage.get(i)[j].hasOwnProperty(k)) { 
        return this._storage.get(i)[j][k];
      }
    }
  } 
  return this._storage.get(i)[k];
};

HashTable.prototype.remove = function(k){
  var indexOfKey = getIndexBelowMaxForKey(k, this._limit);
  var currNode = this._storage.get(indexOfKey);
  currNode[k] = null;

};



/*
 * Complexity: What is the time complexity of the above functions?
  insert = 0(1)
  retrieve = 0(n)
  remove = 0(1)
 */
