function deepComparing(valueA, valueB) {
  if (valueA === valueB) return true;
  if (typeof Array.isArray(valueA) && Array.isArray(valueB)) {
    return compareValues(valueA, valueB);
  }
  if (typeof valueA === "object" && typeof valueB === "object") {
    const objectA = ordered(valueA);
    const objectB = ordered(valueB);
    return (
      compareValues(Object.keys(objectA), Object.keys(objectB)) &&
      deepComparing(Object.values(objectA), Object.values(objectB))
    );
  }
  return false;
}

function compareValues(valuesA, valuesB) {
  let result = false;
  if (Object.keys(valuesA).length !== Object.keys(valuesB).length) return false;
  if (Object.keys(valuesA).length === 0 || Object.keys(valuesB).length === 0)
    return true;
  for (let i = 0; i < valuesA.length; i++) {
    const elementA = valuesA[i];
    const elementB = valuesB[i];
    result = deepComparing(elementA, elementB);
    if (!result) return false;
  }
  return result;
}

const ordered = (objectUnordered) =>
  Object.keys(objectUnordered)
    .sort()
    .reduce((obj, key) => {
      obj[key] = objectUnordered[key];
      return obj;
    }, {});

const value1 = { a: ["2", { a: "5", b: "5" }, "4"], b: { x: "3" } };
const value2 = { b: { x: "3" }, a: ["2", { a: "5", b: "5" }, "4"] };

deepComparing(value1, value2);
