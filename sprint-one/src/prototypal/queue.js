var Queue = function() {
  var obj = Object.create(queueMethods);
  obj.count = 0;
  obj.nextUp = 0;
  obj.storage = {};
  return obj;
};

var queueMethods = {
  enqueue : function(value){
    this.storage[this.count] = value;
    this.count++;
  },
  
  dequeue : function(){
    var hold = this.storage[this.nextUp];
    if(this.nextUp < this.count){
      this.nextUp++
    }
    return hold;
  },
  
  size : function(){
    var amount = this.count - this.nextUp
    return amount;
  }
};


