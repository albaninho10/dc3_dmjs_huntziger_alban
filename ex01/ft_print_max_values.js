let array = [3, 6, 2, 56, 32, 5, 543, 32]

const findLargest = (array) => {

    var largest = array[0];

    for (var i = 0; i < array.length; i++) {
        if (largest < array[i] ) {
            largest = array[i];
        }
    }
    return largest
    
}

console.log(findLargest(array))