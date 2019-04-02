
// function takes as parameters a 

function binarySearch (array, target) {
    // initial values for start, middle and end
    let start   = 0
    let stop    = array.length - 1
    let middle  = Math.floor((start + stop) / 2)

    // While the value at middle is not equal to target value and the length of search segment is > 1:
    while (array[middle] !== target && start < stop) {
      if (target < array[middle]) {
        stop = middle - 1
      } else {
        start = middle + 1
      }

      // recalculate the middle position on every iteration
      middle = Math.floor((start + stop) / 2)
    }

    // if the current middle item = the target value, return the index value, else return -1
    return (array[middle] !== target) ? -1 : middle
  }

  const array = [2, 5, 8, 9, 13, 45, 67, 99]
  console.log(binarySearch(array, 99)) // 7 -> returns the index of the item