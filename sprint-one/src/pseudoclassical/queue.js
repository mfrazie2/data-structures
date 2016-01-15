var Queue = function() {
  this.count = 0; 
  this.nextUp = 0; 
  this.storage = {};  
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

Queue.prototype.dequeue = function() {
  var hold = this.storage[this.nextUp];
  if(this.nextUp < this.count) {
    this.nextUp++;
  }
  return hold;
};

Queue.prototype.size = function() {
  var amount = this.count - this.nextUp;
  return amount;
};
