function isEven(nro) {
  return nro % 2 === 0;
}

function buildRowEven(size) {
  return buildRow(" ", "#", size);
}

function buildRow(evenPosition, oddPosition, size) {
  let row = "";
  for (let nroCeld = 0; nroCeld < size; nroCeld++) {
    row += isEven(nroCeld) ? evenPosition : oddPosition;
  }
  return row;
}

function buildRowOdd(size) {
  return buildRow("#", " ", size);
}

function insertNewline(string) {
  return (string += "\n");
}

function buildChessboard(size) {
  let chessboard = "\n";
  for (let column = 0; column < size; column++) {
    chessboard += isEven(column) ? buildRowEven(size) : buildRowOdd(size);
    chessboard = insertNewline(chessboard);
  }
  return chessboard;
}

buildChessboard(8);
