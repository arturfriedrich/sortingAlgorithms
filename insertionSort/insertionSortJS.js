function insertionSort(a) {
    for (var i = 1; i < a.length; i++) {
        var key = a[i]
        j = i - 1
        while (j >= 0 && key < a[j]) {
            a[j + 1] = a[j]
            j = j - 1
        }
        a[j + 1] = key
        console.log(`The number ${key} switching with the number on the ${i - 1}. index,
              the variable of the placeholder: ${j}, the array:`, a)
    }
    return a
}

var a = [8, 9, 3, 5, 1]

console.log("Original array: " + a)
console.log("Insertion sorted array: " + insertionSort(a))