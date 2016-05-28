var Graph = function(){
  this.storage = { };
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
  this.storage[node] = this.storage[node] || {edges: { } };
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){
  return (this.storage[node]) ? true : false;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){
  if(this.contains(node)){
    for(var edgeNode in this.storage[node].edges) {
      this.removeEdges(edgeNode, node);
    }
    delete this.storage[node];
  }
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
  return (this.storage[fromNode].edges[toNode]) ? true : false;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){
  this.storage[fromNode].edges[toNode] = true;
  this.storage[toNode].edges[fromNode] = true;
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
  delete this.storage[fromNode].edges[toNode];
  delete this.storage[toNode].edges[fromNode];
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
  for(var node in this.storage) {
    cb(node);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 addNode = O(1)
 contains = 0(1)
 removeNode = 0(1)
 addEdge = 0(1)
 hasEdge = 0(1)
 removeEdge = O(1)
 forEachEdge = O(n)
 */
