function cashFunction (fn){
    const cash = {}
    return function(n) {
        if(cash[n]){
            return cash[n]
        }
        let result = fn(n)
        cash[n] = result
        return result
    }
}

function factorial (n){
    let result = 1
    while(n != 1){
        result *= n
        n -= 1

    }
    return result
}

const cachFactorial = cashFunction(factorial)
