var Stack = function() {
  var obj = {
    count : 0,
    storage : {}
  };
  _.extend(obj, stackMethods);

  return obj;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.count] = value;
    this.count++;
  } ,
  pop: function() {
    if(this.count > 0){
      this.count--;  
    }
    return this.storage[this.count];
  },
  size: function() {
    return this.count;
  }
};


