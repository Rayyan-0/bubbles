"use strict";
const array = [8, 4, 2];
const notSorted = false;
const sorted = true;
const bubbleSort = (arr) => {
    let index1 = 0;
    let index2 = 1;
    let placeHolder = 0;
    while (true) {
        if (index1 > index2) {
            for (let i = 0; i < arr.length; i++) {
                if (arr[index1] > arr[index2]) {
                    placeHolder = arr[index1];
                    arr[index1] = arr[index2];
                    arr[index2] = placeHolder;
                    index1 += 1;
                    index2 += 2;
                }
            }
        }
        else if (index2 > arr.length) {
            index1 += 1;
            index2 += 1;
        }
        else {
            break;
        }
    }
    return arr;
};
//# sourceMappingURL=script.js.map