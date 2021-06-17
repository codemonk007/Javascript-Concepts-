function add(x){
    let sum = x;
    function resultFn(y){
        sum += y;
        return resultFn;
    }
    resultFn.valueOf = function(){
            return sum;
        };
    return resultFn;
}

console.log(add(3)(5)(6).valueOf());