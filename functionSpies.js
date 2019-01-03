function Spy(target, method) {
      // SOLUTION GOES HERE
	var tempFun = target[method] ;

	var spy = { count : 0}

		target[method] = function(){
			spy.count++;
			return tempFun.apply(this,arguments);
		}
    
	return spy;    
}
    

module.exports = Spy