const arr = [0,3,5,9,2,1,6,-2,-1,-6,-4,9,8, 66, -99,9, -8]

function selectionSort(arr){
    for (let i = 0; i < arr.length; i++) {
        let indexMin  = 1
        for (let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[indexMin]){
                indexMin = j
            }
        } 
        let tmp = arr[i]
        arr[i] = arr[indexMin]
        arr[indexMin] = tmp
        
    }
    return arr 
}

console.log(selectionSort(arr))


//  O(n*n)
