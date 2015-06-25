function arrayToList(array) {
  var list = null;
  for (var i = array.length - 1; i >= 0; i--)
    list = {value: array[i], rest: list};
  return list;
}

var prepend = function(value, list){
	return {
		value: value,
		rest: list
		}
}

var listToArray = function(list){
	var array=[];
	for (var node=list; node; node = node.rest){
		array.push(node.value)
	}
return array
}

function nth(list, n) {
  if (!list)
    return undefined;
  else if (n == 0)
    return list.value;
  else
    return nth(list.rest, n - 1);
}
