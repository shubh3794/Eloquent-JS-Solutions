var arrayToList = function(array){
	var list = null
	for(var i=0; i<array.length; i++){
		
		var store = array.pop();
		list = {
			value: store,
			rest: list
		}


	}
}