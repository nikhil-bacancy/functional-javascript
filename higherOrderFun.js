function repeat(callback,numTimes){

    // solution using recursion
   
	if (numTimes > 0 ) {
		console.log('Fun Called No : '+ numTimes);
		callback();
		return repeat(callback,--numTimes);
	}

    // iterative solution

	/*for(var i = 1; i <= numTimes ; i++) {
		callback();
	}*/
}

module.exports = repeat;