// let user={
//     name:"Alex",
//     Age:12
// }

// let user2=new Object();
// user2.name="Alex2"
// user2.age=12
class Address{
    constructor(city,state){
        this.city=city
        this.state=state
    }
}

class User{
    constructor(name,age,city,state){
        this.name=name
        this.age=age
        this.address=new Address(city,state)
    }
}

let newuser=new User("Alex",12,"abc","def")

let {address:{city,state},...remaining}=newuser;
console.log(remaining)

// let newuser=new user3("Alex3",12)
// console.log(user[name])
// console.log(user2.name)
// console.log(newuser["name"])

// let newuser = new User("Ali",13)
// let newuser2 = new User("Ali",13)

// Object.freeze(newuser);
// Object.seal(newuser2);

// newuser.name="Alex"
// newuser2.name="Alex"
// newuser2.city="abc"

// console.log(newuser);
// console.log(newuser2);

// let {name:full_name,age}=newuser;


// console.log(full_name)
// console.log(age)