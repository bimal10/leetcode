// 509. Fibonacci Number
// https://leetcode.com/problems/fibonacci-number

/**
 * Solve
 */
// 🟡 Add the function or class skeleton from LeetCode here.
function fib(n: number): number {
    var arr: number[] = [0,1,1]
    

    function fibo(n: number, arr: number[]): number{
        
        if(arr.length > n)
            return arr[n];
        arr[n] = fibo(n-1, arr) + fibo(n-2, arr);
        return arr[n];
    }
    return fibo(n, arr);
};
/**
 * Test
 */
describe("509. Fibonacci Number", () => {
    it("example 1", () => {
        // 🟡 Add test case here.
        const input = fib(6);
        expect(input).toBe(8);
    });
});

// Make this file a module to avoid global scoping
export { }
