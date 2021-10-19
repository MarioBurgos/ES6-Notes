// A promise represents an asynchronous operation to be completed in the future.

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const sum = 1 + 1;
        if (isNaN(sum)) {
            reject('Error while calculating sum.');
        } else {
            resolve(sum);
        }
    }, 3000); // in 3 seconds the resolution of the sum will be done
});

promise.then((result) => {
        console.log("First .then handler");
        return result + 2; // this passes the value to the next handler.
    })
    .then((result) => {
        console.log("Second .then handler");
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

/** HOW TO DELAY A PROMISE EXECUTION */
function createPromise(a, b) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            const sum = a + b;
            if (isNaN(sum)) {
                reject('Error while calculating sum.');
            } else {
                resolve(sum);
            }
        }, 4000);
    });
}

createPromise(1, 8)
    .then(function(output) {
        console.log(output); // 9
    });

// OR

createPromise(10, 24)
    .then(function(output) {
        console.log(output); // 34
    });