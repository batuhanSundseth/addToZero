let array = [0, 1, 2, 3, 4, 5]
let addToZero = arr => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] == 0)
        return true
    }
  }
  return false
}
console.log(addToZero(array))