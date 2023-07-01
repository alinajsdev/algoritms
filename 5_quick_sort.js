const arr = [0,3,5,9,2,1,6,-2,-1,-6,-4,9,8, 66, -99,9, -8]

let count = 0

function quickSort(array) {
    if(array.length <= 1) {
        return array
    }
    let pivotIndex = Match.floor(array.length / 2)
    let pivot = array[pivotIndex]
    let less = []
    let greater = []
    for (let i = 0; i < array.length; i++) {
        if(i === pivotIndex)
            continue
        if(array[i] < pivot ){
            less.push(array[i])
        }else{
            greater.push(array[i])
        }
        
    }
    return [...quickSort(less), pivot, ...quickSort(greater)]
}

// O(log 2n * n)

// разделяй и властвуй

// лучший алгоритм 

// меньше итерации чем bubble и бинарный
