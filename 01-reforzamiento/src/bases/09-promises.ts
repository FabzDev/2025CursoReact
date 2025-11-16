
const myPromise = new Promise<number>( (resolve, reject) => {
    setTimeout(() => {
        resolve(110);
        reject(100);
    }, 3000);
} );

myPromise.then( (res) => {
    console.log("Te pagaron $" + res);
}).catch(rej => {
    console.log("Te robaron $" + rej);
}).finally( () => console.log("Sigue con tu vida"))
