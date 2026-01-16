function square(n){
    return n*n;
}
function memoized(fn){
    let cache={}
    return function(a){
        if(cache[a]){
            console.log("Found in cache already");
            console.log(cache[a]);
        }
        else{
            let num=fn(a);
            cache[a]=num;
            console.log("Created cache")
            console.log(num)
        }
    }
}
let find_square=memoized(square);
find_square(4)
find_square(4)
find_square(1)
find_square(2)
