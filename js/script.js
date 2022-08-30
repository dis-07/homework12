'use strict';


const promise = new Promise(function(resolve, reject){
    // setTimeout(() => resolve('done'), 5000);
    setTimeout(() => reject('!!!error!!!'), 5000);
})

// console.log(promise);

// promise
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.error(error);
//     })
//     .finally(() => {
//         console.log('Promise was finished!')
//     })

async function getPromise () {
    try{
        const result = await promise;
        console.log(result);
    }   catch (error) {
        console.error(error);
    }   finally {
        console.log('Promise was finished');
    }
}

getPromise();