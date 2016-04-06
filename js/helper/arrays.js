module.exports = {

  // this takes in a multidimensional array and returns an array of objects...
  // ...that describe the occurences of the elements within the array grouped into blocks
  // ...this is used by our map to draw collision boundries and trigger other events
  useArrayPattern: function(jaggedArray,fn){
    // We will put all non 0 values into an array of objects with their values and locations
    jaggedArray.forEach(function(innerArray,outerIndex){
      innerArray.reduce((result,num,index,arr)=>{
        var notLast = index !== innerArray.length-1;
        if(result.num === num && notLast) return result;
        else
        {
          if(result.num !== 0) fn({
            row: outerIndex,
            num: result.num,
            start: result.start,
            end: notLast ? index-1 : index
          });
          return{ num: num, start: index };
        }
      },{num: innerArray[0], start: 0 });
    });
  }
}
