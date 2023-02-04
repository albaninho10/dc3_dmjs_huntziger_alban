const findDuplicates = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array.indexOf(array[i]) !== array.lastIndexOf(array[i])) {
          return true
        }
      }
      return false
}

let array = [1, 3, 5, 7, 6, 4, 3]

console.log(findDuplicates(array))

