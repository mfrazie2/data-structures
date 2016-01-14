var Queue = function(){
  var someInstance = {};
  var count = 0;
  var nextUp = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[count] = value;
    count++;
  };

  someInstance.dequeue = function(){
    var hold = storage[nextUp];
    delete storage[nextUp];
    if(nextUp < count){
      nextUp++
    }
    return hold;
  };

  someInstance.size = function(){
    var total = count - nextUp
    return total;
  };

  return someInstance;
};
