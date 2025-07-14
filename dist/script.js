"use strict";
const array = [8, 4, 2, 3];
let isSorted = true;
const isComplete = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            return isSorted = false;
        }
    }
    return isSorted = true;
};
const bubbleSort = (arr) => {
    do {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                isComplete(arr);
            }
            else {
                continue;
            }
        }
    } while (isSorted == false);
    return arr;
};
console.log(bubbleSort(array));
//# sourceMappingURL=script.js.map