/*
Given an object or array obj, return a compact object.

A compact object is the same as the original object, except with keys containing falsy values removed. This operation applies to the object and any nested objects. Arrays are considered objects where the indices are keys. A value is considered falsy when Boolean(value) returns false.

You may assume the obj is the output of JSON.parse. In other words, it is valid JSON.
*/
var compactObject = function(obj) {
    if (Array.isArray(obj)) {
        const result = [];
        for (const item of obj) {
            if (Boolean(item)) {
                if (typeof item === "object" && item !== null) {
                    result.push(compactObject(item)); 
                } else {
                    result.push(item);
                }
            }
        }
        return result;
    }

    if (obj !== null && typeof obj === "object") {
        const result = {};
        for (const key in obj) {
            const val = obj[key];
            if (Boolean(val)) {
                if (typeof val === "object") {
                    result[key] = compactObject(val);
                } else {
                    result[key] = val;
                }
            }
        }
        return result;
    }

    return obj;
};
