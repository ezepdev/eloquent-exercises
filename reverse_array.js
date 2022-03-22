//reversing array - reversing array to place

// pure implementation
function reverseArray(array) {
  const newArray = [];
  for (let element of array) {
    newArray.unshift(element);
  }
  return newArray;
}

// no pure implementation
function reverseArrayInPlace(array) {
  let newArray = reverseArray(array);
  array.unshift(...newArray);
  array.splice(newArray.length);
}
