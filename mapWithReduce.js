 module.exports = function arrayMap(arr, fn) {
      return arr.reduce(function(acc,curVal,curIndex) {
      		acc[curIndex] = fn.call(arr,curVal)
      		return acc;
      },[])
    }
    
