// 66. Plus One
// https://leetcode.com/problems/plus-one

/**
 * Solve
 */
// 🟡 Add the function or class skeleton from LeetCode here.
function plusOne(digits: number[]): number[] {
    var carry=1;
    var out: number[]=[1];
    for(var i=digits.length-1;i>=0;i--){
        var sum = digits[i]+carry;
        
        digits[i] = sum %10;
        
        carry = Math.floor(sum /10);
        out[digits.length-i] = digits[i];
        
    }
    if(carry > 0){
        return out;
    }
    else 
        return digits;
    };
/**
 * Test
 */
describe("66. Plus One", () => {
    it("example 1", () => {
        // 🟡 Add test case here.
        const input = plusOne([9,9]);
        expect(input).toStrictEqual([1, 0,0]);
    });
});

// Make this file a module to avoid global scoping
export { }
