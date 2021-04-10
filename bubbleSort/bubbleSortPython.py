def bubble_sort(list):
    for i in range(0, len(a) - 1):
        for j in range(len(a) - 1):
            if a[j] > a[j + 1]:
                a[j], a[j + 1] = a[j + 1], a[j]
    return list


a = [8, 9, 3, 5, 1]
print("Original list:", a)
print("Bubble sorted list:", bubble_sort(a))
