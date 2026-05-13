// //Q8. Async Higher-Order Function (HOF)
// Scenario: You want to wrap any asynchronous function with a standard error logger.
// Task: Write a generic function safeExecute<T> that takes an async function as an argument. It should return a new function that, when called, executes the original function inside a try/catch block and returns null if it fails.


function safeExecute<T>(asyncFunction: () => Promise<T>) {
  return async function (): Promise<T | null> {
    try {
      const result = await asyncFunction();
      return result;
    } catch (error) {
      console.error("Error:", error);

      return null;
    }
  };
}


async function fetchUser(): Promise<string> {
  return "Ray";
}

const safeFetchUser = safeExecute(fetchUser);

safeFetchUser().then((data) => {
  console.log(data);
});
