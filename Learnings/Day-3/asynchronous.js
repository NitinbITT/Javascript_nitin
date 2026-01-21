// function call1(callback) {
//   console.log("call1");
//   callback();
// }

// function call2(callback) {
//   console.log("call2");
//   callback();
// }

// function call3(callback) {
//   console.log("call3");
//   callback();
// }

// call1(() => {
//   call2(() => {
//     call3(() => {
//       console.log("callbacking");
//     });
//   });
// });


function payment_processing(){
    return new Promise((res,rej)=>{
        console.log("Payment Processeing")
        res("Success");
    });
}

function bank_response(){
    return new Promise((res,rej)=>{
        console.log("Bank responsing")
        res("Bank response OK!")
    })
}

function app_response(){
    return new Promise((res,rej)=>{
        console.log("App responsing")
        res("App response OK!");
    })
}

function response(){
    return new Promise((res,rej)=>{
        console.log("Payment process successfull");
        res("Payment OK!");
    })
}

// payment_processing()
// .then((message)=>{console.log(message);return bank_response();})
// .then((message)=>{console.log(message);return app_response();})
// .then((message)=>{console.log(message);return response();})
// .catch(()=>{console.log("Something went wrong")})

async function func1(){
    try{
        let payment=await payment_processing();
        let bank=await bank_response(payment);
        let app=await app_response(bank);
        let res=await response(app);
        console.log(res)
    }
    catch(e){
        console.log("Something went wrong")
    }
} 

func1();