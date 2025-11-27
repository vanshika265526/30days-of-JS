/*
Given a function fn and a time in milliseconds t, return a debounced version of that function.

A debounced function is a function whose execution is delayed by t milliseconds and whose execution is
cancelled if it is called again within that window of time.
The debounced function should also receive the passed parameters.
*/
var debounce = function(fn, t) {
    let timer;

    return function(...args) {
        // Clear previous timer if the function is called again within t ms
        clearTimeout(timer);

        // Set new timer
        timer = setTimeout(() => {
            fn(...args);
        }, t);
    };
};
