var Stack = function() {
  var obj = Object.create(stackMethods);
  obj.count = 0;
  obj.storage = {};
  return obj;
};

var stackMethods = {
  push : function(value){
    this.storage[this.count] = value;
    this.count++;
  },
  
  pop : function(){
    if(this.count > 0){
      this.count--;
    }
    return this.storage[this.count];
  },
  
  size : function(){
    return this.count  
  }
  
};





