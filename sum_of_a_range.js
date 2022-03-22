// sum of a range :
// range function take a two arguments , start and end , and return all numbers from start up to end

function range(start, end, step = 1) {
  if (step > 0) return generateARange(start, end, step);
  if (step < 0) return generateARange(end, start, Math.abs(step)).reverse();
}

function generateARange(start, end, step) {
  if (start > end) return [];
  if (start === end) return [start];
  return [start].concat(range(start + step, end, step));
}
