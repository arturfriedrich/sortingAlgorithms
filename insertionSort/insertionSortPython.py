def insertion_sort(a):
    for i in range(1, len(a)):
        key = a[i]
        j = i - 1
        while j >= 0 and key < a[j]:
            a[j + 1] = a[j]
            j -= 1
        a[j+1] = key
        print(f"The number {key} switching with the number on the {i-1}. index,"
              f" the variable of the placeholder: {j}, the array:", a)
    return a


a = [8, 7, 4, 2, 5]
print("Original list:", a)
print("Insertion sorted list:", insertion_sort(a))
