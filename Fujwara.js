function decide(y, d, m){
	var numY=y;
	numY=parselnt(numY);
	numYY=Math.floor((numY%100)/4);

	var numD=d;
	numD=parselnt(numD);

	var numM=m;
	numM=parselnt(numM);

	var second = Math.floor((26*(numM+1))/10);

	var numJ = -2*(numY%100)+Math.floor((numY%100)/4);

	var sum=(numD+second+numY%100+numYY+numJ)%7;

	switch(sum){
	case 0:
	alert('sat');
	 break;
	case 1:
	alert('sun');
	 break;
	case 2:
	alert('mon');
	 break;
	case 3:
	alert('tue');
	 break;
	case 4:
	alert('wed');
	 break;
	case 5:
	alert('thu');
	break;
	case 6:
	alert('fri');
	 break;
	}

};