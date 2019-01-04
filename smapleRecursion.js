function reduce(arr, fn, accumulator) {
      // SOLUTION GOES HERE
      
      	var currentValue = arr[0];

      	if(accumulator[currentValue]){
       		++accumulator[currentValue];
        }
        else{
         	accumulator[currentValue] = 1 ;
       	}
        if(arr.length >= 2){
        	reduce(arr.slice(1),fn,accumulator);
		}
		console.log(accumulator);
        return accumulator;
    }
    
    module.exports = reduce
