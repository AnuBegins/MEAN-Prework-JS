function Sort_Bubble(arr){
    var len = arr.length;

    for (var i=0; i<len; i++) {

      for(var j=0; j<len-i; j++) {

        if(arr[j] > arr[j+1]) {
          var temp  = arr[j];
          arr[j]    = arr[j+1];
          arr[j+1]  = temp;
        }

      }
    }
    return arr;
  }

  var a = Sort_Bubble([1,4,3,2]);
  console.log(a);

  var b = Sort_Bubble([-5, -11, 3, 33]);
  console.log(b);

  var c = Sort_Bubble([20,19,18,0]);
  console.log(c);

Sort_Bubble([7,5,2,4,3,9]); //[2, 3, 4, 5, 7, 9]
Sort_Bubble([9,7,5,4,3,1]); //[1, 3, 4, 5, 7, 9]
Sort_Bubble([1,2,3,4,5,6]); //[1, 2, 3, 4, 5, 6]

