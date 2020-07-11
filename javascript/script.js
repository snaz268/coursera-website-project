function makeFunction (multiplier) {
    var makeMultiplier = function (x){
        return multiplier * x;
    }
    return makeMultiplier;
}

makeFunction.version = "v.0"; //Since Functions are objects

// console.log(makeFunction.version);

var multiplyBy5 = makeFunction(5)
// console.log(multiplyBy5(3));

function doOperation(num ,operation){
    return operation(num);
}

console.log(doOperation(4, multiplyBy5))