function memoize(fn) {
    const cache = {}; // Using an object instead of Map
    let callCount = 0; // To track the number of unique calls

    return function (...args) {
        if (args[0] === "getCallCount") { // Special case for call count retrieval
            return callCount;
        }

        const key = JSON.stringify(args); // Create a string key for arguments
        if (cache.hasOwnProperty(key)) { // Check if result is cached
            return cache[key];
        }
        callCount++; // Increase count only for unique calls
        const result = fn(...args); // Compute the result
        cache[key] = result; // Store result in cache
        return result;
    };
}

// Functions to be memoized
function sum(a, b) {
    return a + b;
}

function fib(n) {
    if (n <= 1) return 1;
    return fib(n - 1) + fib(n - 2);
}

function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

// Function to execute memoized functions
function execute(fnName, actions, values) {
    let fn;
    if (fnName === "sum") fn = memoize(sum);
    else if (fnName === "fib") fn = memoize(fib);
    else if (fnName === "factorial") fn = memoize(factorial);

    const result = [];

    actions.forEach((action, index) => {
        if (action === "call") {
            result.push(fn(...values[index])); // Call the memoized function
        } else if (action === "getCallCount") {
            result.push(fn("getCallCount")); // Get number of unique function calls
        }
    });

    return result;
}

// Example Test Case
console.log(execute("sum", ["call", "call", "getCallCount", "call", "getCallCount"], [[2, 2], [2, 2], [], [1, 2], []]));
console.log(execute("factorial", ["call", "call", "call", "getCallCount", "call", "getCallCount"], [[2], [3], [2], [], [3], []]));
console.log(execute("fib", ["call", "getCallCount"], [[5], []]));
