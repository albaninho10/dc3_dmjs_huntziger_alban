const uniqueOccurence = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array.indexOf(array[i]) !== array.lastIndexOf(array[i])) {
          return false
        }
      }
      return true
}

let array = [1, 3, 5, 7, 6, 4, 3]

console.log(uniqueOccurence(array))

