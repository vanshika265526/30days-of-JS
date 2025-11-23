`
  Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

The function composition of an empty list of functions is the identity function f(x) = x.
    `

var compose = function(functions) {
    if (functions.length === 0) {
        return function(x) { return x; };  // identity
    }

    return function(x) {
        let result = x;
        // Apply functions from last to first
        for (let i = functions.length - 1; i >= 0; i--) {
            result = functions[i](result);
        }
        return result;
    };
};
