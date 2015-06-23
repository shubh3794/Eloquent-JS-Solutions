var countBs = function(foo){
	var count = 0;

	for (var i = 0; i<foo.length; i++){
		if(foo.charAt(i) === "B"){
			count ++
		}
	}

	return count;

}

var countChar = function(foo, bar){
	var count = 0;

	for(var i=0; i<foo.length; i++){
		if(fo0.charAt(i)===bar){
			count++
		}
	}

	return count;
}

console.log(countBs("BBBBBBB"));
// → 7
console.log(countChar("kkkkkkk", "k"));
// → 7