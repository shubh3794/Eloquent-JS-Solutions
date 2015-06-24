var reverseArray = function(array){
	
	var reverse = []

	for (var i = 0; i<array.length; i++){
		var foo = array[i];
		reverse.unshift(foo);
	} 

	return reverse;
}

var reverseArrayInPlace = function(array){
	
	for(var i=0; i<= math.floor(array.length/2); i++){

		var store = array[i];
		array[i] = array[array.length-1-i];
		array[array.length-1-i] = store;
	}

	return array;
}