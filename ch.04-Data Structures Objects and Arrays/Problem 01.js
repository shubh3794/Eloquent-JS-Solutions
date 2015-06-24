var range = function(start, end, step){
	
	var store = []

	if(step == null){
		step=1
	}

	if(step > 0){
		for(var i = start; i<=end; i+=step){
		store.push(i);
		}
	}else{
		for(var i = start; i>=end; i+=step){
		store.push(i);
		}
	}

	

	return store;
}

var sum = function(array){
	
	var total=0

	for(var i=0; i<array.length; i++){
		total = total+array[i];
	}
	return total
}