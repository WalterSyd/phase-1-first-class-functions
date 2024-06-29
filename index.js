function receivesAFunction(z){
    return z()
}

function returnsANamedFunction(){
    return function namedFunction(){}

}

function returnsAnAnonymousFunction(){
    return function(){}
}