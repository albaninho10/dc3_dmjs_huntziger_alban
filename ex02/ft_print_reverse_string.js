let string = 'hello'

const reverseString = (str) => {
    let strArray = str.split('')
    let reverseStr = strArray.reverse()
    let result = reverseStr.join('')
    return result
}

console.log(reverseString(string))