var obj={
here:{is:'an'},
object:2
};
console.log(obj.here);
function deepEqual(x,y)
{
	if(((typeof y == "object" ) || y != null)&&((typeof x == "object" ) || x != null))
	{
		var con=true;
		for(key in y)
		{
			for(kay in x)
			{
				if(key===kay&&y.key===x.kay)
				{
					
					if(typeof key === typeof kay)
					{
						con = true;
					}

				}
				else
						con = false;
			}
		}

		return con;
	}
	else return x===y;

}
//call the function as per your will for any test case