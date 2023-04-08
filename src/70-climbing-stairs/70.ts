// 70. Climbing Stairs
// https://leetcode.com/problems/climbing-stairs

/**
 * Solve
 */
// 🟡 Add the function or class skeleton from LeetCode here.
function climbStairs(n: number): number {
    var arr: number[]=[0,1,1];
    

    function steps(n: number, arr: number[]): number {
        if(n<=2)
            return n;
        if(arr.length > n)
            return arr[n];
        arr[n] = steps(n-2, arr) + steps(n-1, arr);
        return arr[n];
    }

    return steps(n,arr);
};

/**
 * Test
 */
describe("70. Climbing Stairs", () => {
    it("example 1", () => {
        // 🟡 Add test case here.
        const input = climbStairs(5);
        expect(input).toBe(8);
    });
});

// Make this file a module to avoid global scoping
export { }
