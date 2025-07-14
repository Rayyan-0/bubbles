const array: number[] = [8,4,2];
const notSorted: boolean = false;
const sorted: boolean = true;

const bubbleSort = (arr: number[]) => {
        let index1: number = 0;
        let index2: number = 1;
        let placeHolder: number = 0;
        while (true) {    
            if (index1 > index2) {

                for (let i: number = 0; i < arr.length; i++) {
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
                break
            }
        }
        return arr;
}