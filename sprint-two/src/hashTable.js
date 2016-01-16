var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  
  // this._storage.set(i, v);
  
  
  
  //if something is already at index i
  if(this._storage.get(i)) {
    
    //create a new array at i
    var tuple = [];
    //insert existing value and the new value
    tuple.push(this._storage.get(i));
    tuple.push(v);
    this._storage.set(i, tuple);
  }else{
  //if i is unoccupied
    this._storage.set(i, v);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  
  if(Array.isArray(this._storage.get(i))) {
    for(var j = 0; j < this._storage.get(i).length; j++) {
      if(this._storage.get(i)[j] === k) { //works well if the key and value are the same thing
        return this._storage.get(i)[j];
      }
    }
  } else {
    return this._storage.get(i);  
  }
};

HashTable.prototype.remove = function(k){
  var indexOfKey = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(indexOfKey, null);
};



/*
 * Complexity: What is the time complexity of the above functions?
 
 
 
 
 newHash =  {
  limit : 8
  storage : {
    get:
    set:
    each:
  }
 }
 */
