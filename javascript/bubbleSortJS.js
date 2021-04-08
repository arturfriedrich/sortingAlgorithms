function bubbleSort(a) {
    for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < (a.length - i - 1); j++) {
            if (a[j] > a[j + 1]) {
                [a[j], a[j + 1]] = [a[j + 1], a[j]]
            }
        }
    }
    return a
}

var a = [2, 9, 3, 5, 1, 7, 4]

console.log("Original array: " + a)
console.log("Sorted array: " + bubbleSort(a))