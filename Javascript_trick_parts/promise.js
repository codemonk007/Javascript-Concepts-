var t =(a) => Promise((res,rej)=> res(5))
t(10).then(res => {
    console.log(res);
    
}).catch(r=> console.log(""))
