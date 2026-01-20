function* generator(){
    let sum=0
    console.log(sum);
    yield 1;
    sum+=1
    console.log(sum);
    yield "Hello";
    sum+=1
    console.log(sum);
    yield sum;
    sum+=1
    console.log(sum);
}

const gen=generator();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());