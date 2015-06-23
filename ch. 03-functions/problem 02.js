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

console.log(isEven(1000));
// → true
console.log(isEven(76));
// → false
console.log(isEven(-1));
// → false