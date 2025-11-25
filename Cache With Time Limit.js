/*
Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.

The class has three public methods:

set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible. The method should return true if the same un-expired key already exists and false otherwise. Both the value and duration should be overwritten if the key already exists.

get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.

count(): returns the count of un-expired keys.
*/

class TimeLimitedCache {
    constructor() {
        this.cache = new Map();  // key → { value, expiresAt }
    }

    set(key, value, duration) {
        const now = Date.now();
        const expiresAt = now + duration;

        const existing = this.cache.get(key);
        const isUnexpired = existing && existing.expiresAt > now;

        // Overwrite with new value and new expiry
        this.cache.set(key, { value, expiresAt });

        return !!isUnexpired;
    }

    get(key) {
        const now = Date.now();
        const data = this.cache.get(key);

        if (!data) return -1;
        if (data.expiresAt <= now) {
            this.cache.delete(key);
            return -1;
        }

        return data.value;
    }

    count() {
        const now = Date.now();
        let count = 0;

        for (const [key, data] of this.cache.entries()) {
            if (data.expiresAt > now) count++;
            else this.cache.delete(key);
        }

        return count;
    }
}
