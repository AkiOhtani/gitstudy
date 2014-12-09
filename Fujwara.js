var decide = function(){
	var numY=1993;
	numY=parselnt(numY);
	numYY=Math.floor((numY%100)/4);

	var numD=20;
	numD=parselnt(numD);

	var numM=11;
	numM=parselnt(numM);
	numMM=numM+1;

	var second = Math.floor((26*(numM+1))/10)
	

	var numJ=7;


	var sum=numD+second+numY%100+numYY+J;


	$().val(sum%7);

};