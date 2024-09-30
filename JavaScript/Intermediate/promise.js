

const timeOut = (ms)=>{
    const timeout = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("All done!");
        }, ms);
    });
    return timeout;
}