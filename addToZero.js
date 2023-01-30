let array = [1, 4, 11, 2, 37, -4]
let addToZero = false
for (let i = 0; i < array.length; i++) {
  for (let j = i; j < array.length; j++) {
    if (array[i] + array[j] == 0) {
      addToZero = true
    }
  }
}
console.log(addToZero)