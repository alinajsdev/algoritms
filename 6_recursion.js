// factorial 

function factorial(n) {
    if(n === 1) {
        return 1
    }
    return n * factorial(n - 1)
}


// число Фибоначчи 1,1,2,3,5,6,11,2,13

const fibonachi = (n) => {
    if(n === 1 || n == 2) {
        return 1
    }
    return fibonachi(n - 1) - fibonachi( n - 2)
}
