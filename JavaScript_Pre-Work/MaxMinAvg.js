  /*
  Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])   */

  function getMaxMinAvg(arr){
    var temp = [];
    var Max = arr[0];
    var Min = arr[0];
    var Sum = arr[0];
    var Avg = arr[0];
    for (var i=1; i<arr.length;i++) {

      if(arr[i]>Max) {
        Max = arr[i];
      }

      if (arr[i]< Min) {
        Min = arr[i];
      }
      Sum += arr[i];
    }
    //Avg = Sum / arr.length;
    temp[0] = Max;
    temp [1] = Min;
    temp[2] = Sum/arr.length;
    return temp;
  }

  console.log(getMaxMinAvg([1,5,10,-2])); //should return [10,-2,3.5]