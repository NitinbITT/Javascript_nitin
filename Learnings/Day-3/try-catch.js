class Validate extends Error{
    constructor(message){
        super(message);
        this.name="ValidationError"
    }
}

function tryingfunction(num){
    if(num<5){
        // throw new Error("Value whould be greater than 5")
        throw new Validate("Number must be greater than 5")

    }
    else{
        console.log(num)
    }
}
try{
    tryingfunction(2);
}
catch(e){
    console.log(e);
}