const removeduplicates = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array.indexOf(array[i]) !== array.lastIndexOf(array[i])) {
            array.splice(array.lastIndexOf(array[i]), 1)
        }
      }
      return array
}

let array = [1, 3, 5, 7, 6, 4, 3, 6, 3, 8]

console.log(removeduplicates(array))

