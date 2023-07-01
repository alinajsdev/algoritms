const array = [1,4,5,8,1,2,7,5,2,11,12,13]
let count = 0

function linearSearch(array, item){
    let start = 0
    let end = array.length;
    let middle;
    let found = false;
    let position = -1;
    while(found === false && start <= end){
        middle = Math.floor((start + end) / 2);
        if(array[middle] === item){
            found === true
            position = middle
            return position
        }

        if(item < array[middle]){
            end = middle -1 
        }else{
            start = middle + 1
        }
        return position
    }
}


// console.log(linearSearch(array, 8))


// бинарный поиск 2 раза быстрее O(log 2)





function RecursionBinarySearch(array, item, start, end) {
   let  middle = Math.floor((start + end) / 2);
   if(item === array[middle]){
    return middle
   }
   if ( item < array[middle]){
        return RecursionBinarySearch(array, item , 0 , middle - 1)
   }else{
        return RecursionBinarySearch(array , item , middle + 1, end)
   }
}

console.log(RecursionBinarySearch(array, 12, 0 , array.length));
