/*
Given an array of asynchronous functions functions, return a new promise promise. 
Each function in the array accepts no arguments and returns a promise. All the promises should be executed in parallel.
*/
var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        const results = [];
        let completed = 0;
        const total = functions.length;

        if (total === 0) {
            resolve([]);
            return;
        }

        functions.forEach((fn, index) => {
            // Execute each async function immediately
            fn()
                .then((value) => {
                    results[index] = value; // preserve order
                    completed++;

                    if (completed === total) {
                        resolve(results);
                    }
                })
                .catch((err) => {
                    reject(err); // reject on first failure
                });
        });
    });
};
