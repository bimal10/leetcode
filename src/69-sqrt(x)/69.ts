// 69. Sqrt(x)
// https://leetcode.com/problems/sqrt(x)

/**
 * Solve
 */
// 🟡 Add the function or class skeleton from LeetCode here.
function mySqrt(x: number): number {

    let low=0,high= x, mid= Math.floor((low+high)/2)
    if(x===0)
        return 0;
    if(x===1)
        return 1;
    while(low<high){
        mid= Math.floor((low+high)/2)
        let lowsq = mid * mid;
        let highsq = (mid+1) * (mid+1);
        if(lowsq === x) {
            return mid;
        }
        if(x > lowsq && x < highsq) {
            return mid
        }
        else if (x < lowsq) {
            high=mid;
        }
        else {
            low = mid;
        }
    }
    return mid;
    };

/**
 * Test
 */
describe("69. Sqrt(x)", () => {
    it("example 1", () => {
        // 🟡 Add test case here.
        const input = mySqrt(6);
        expect(input).toBe(2);
    });
});

// Make this file a module to avoid global scoping
export { }
