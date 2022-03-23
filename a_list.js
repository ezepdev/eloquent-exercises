// implementation using a reduce function
function arrayToList(array) {
  const arrayInReverse = array.reverse();

  return arrayInReverse.reduce(
    (previousNode, currentValue) => ({
      value: currentValue,
      rest: previousNode,
    }),
    null
  );
}

//we have a previousNode which is added as a rest property of the current node
function arrayToList(array) {
  let previousNode = null;
  let currentNode = {};
  for (let i = 0; i < array.length; i++) {
    currentNode.value = array[i];
    currentNode.rest = previousNode;
    previousNode = Object.assign({}, currentNode);
  }
  return currentNode;
}

// we push in a array the value of current node and next mutate the current node
function listToArray(list) {
  const array = [];
  let currentNode = list;

  while (currentNode != null) {
    array.push(currentNode.value);
    currentNode = currentNode.rest;
  }

  return array;
}

function precede(element, list) {
  return {
    value: element,
    rest: list,
  };
}

function position(list, position) {
  return listToArray(list)[position];
}
