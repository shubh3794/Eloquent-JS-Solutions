var min = function(foo, bar){
  if(foo < bar){
  return foo
  }else{
  	return bar
  }
};

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10