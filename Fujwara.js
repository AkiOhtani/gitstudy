var decide = function(){
	var numY=1993;
	numY=parselnt(numY);
	numYY=Math.floor((numY%100)/4);

	var numD=20;
	numD=parselnt(numD);

	var numM=11;
	numM=parselnt(numM);

	var second = Math.floor((26*(numM+1))/10)

	var numJ = -2*(numY%100)+Math.floor((numY%100)/4);

	var sum=(numD+second+numY%100+numYY+numJ)%7;

	switch(sum){
	case 0;

	 break;
	case 1;

	 break;
	case 2;

	 break;
	case 3;

	 break;
	case 4;

	 break;
	case 5;
	break;
	case 6;

	 break;
	}

};