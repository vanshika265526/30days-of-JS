/*
Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".
*/
function expect(val) {
    return {
        toBe: function(otherVal) {
            if (val === otherVal) {
                return true;
            } else {
                throw "Not Equal";
            }
        },
        notToBe: function(otherVal) {
            if (val !== otherVal) {
                return true;
            } else {
                throw "Equal"; 
            }
        }
    };
}

// Examples:
const func1 = () => expect(5).toBe(5);
const func2 = () => expect(5).toBe(null);
const func3 = () => expect(5).notToBe(null);

console.log(func1()); // true

try { func2(); } catch(e) { console.log(e); } // "Not Equal"
console.log(func3()); // true
