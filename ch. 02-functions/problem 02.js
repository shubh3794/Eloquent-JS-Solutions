var isEven = function(foo){
	if (foo === 0){
		return true;
	}else if(foo === 1){
		return false;
	}else if(foo === -1){
		return false
	}else{
		return isEven(foo - 2);
	}
};