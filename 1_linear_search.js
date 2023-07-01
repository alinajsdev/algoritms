const array = [1,4,5,8,1,2,7,5,2,11]
let count = 0

function linearSearch(array, item){
    for(let i = 0; i<= array.length; i++){
        count += 1
        if(array[i] === item){
            return i
        }
    }
    return null
}


console.log(linearSearch([1,4,5,8,1,2,7,5,2,11], 8))


// сколько элементов столько и итерации  O(n)
