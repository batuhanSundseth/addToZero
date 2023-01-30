let array = [0, 1, 2, 3, 4, 5]
let addToZero = false
for (let i = 0; i < array.length; i++) {
  for (let j = i; j < array.length; j++) {
    if (array[i] + array[j + 1] == 0) {
      addToZero = true
    }
  }
}
console.log(addToZero)