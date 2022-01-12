function bubbleSort(a) {
  return a.sort((a, b) => a - b);
}

var a = [8, 9, 3, 5, 1];
console.log("Sorted array: " + bubbleSort(a));
