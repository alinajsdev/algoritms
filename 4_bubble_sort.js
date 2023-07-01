const arr = [0,3,5,9,2,1,6,-2,-1,-6,-4,9,8, 66, -99,9, -8]

let count = 0

function BubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j+1] < array[i] ){
                let tmp = array[j] 
                array[j] = array[j + 1]
                array[j + 1] = tmp          
            }
            count += 1
        }
        
    }
    return array
}

// O(n * n) менее эффективный


