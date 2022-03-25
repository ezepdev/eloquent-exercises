function every(array, condition) {
    let [el, ...rest] = array
  return condition(el) && every(rest,condition)
}

function every2(array,condition) {
    return !array.some((value) => !condition(value))
}

