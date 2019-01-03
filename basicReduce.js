  function countWords(inputWords) {

       return inputWords.reduce(function(accumulator, currentValue) {

	 		// using simple if-else       			
       			if (accumulator[currentValue]){
       				++accumulator[currentValue];
       			}
       			else{
         				accumulator[currentValue] = 1 ;
       			}
         			return accumulator;

  //     			// alternate solution using ternory operator
  //     			accumulator[currentValue] = ++accumulator[currentValue] : 1 ;
  //     			return accumulator;

	 },{});
}
    
  //   module.exports = countWords

  // function countWords(arr) {
  //     return arr.reduce(function(count, word) {
  //       count[word] = ++count[word] || 1 // increment or initialize to 1
  //       return count
  //     }, {}) // second argument to reduce initialises countMap to {}
  //   }
    
  //   module.exports = countWords
