// 9. Palindrome Number
// https://leetcode.com/problems/palindrome-number

/**
 * Solve
 */
// 🟡 Add the function or class skeleton from LeetCode here.
function isPalindrome(x: number): boolean {
    let n=x;
    let newnum=0;
    while (n>0){
        var rem = n%10;
        n=Math.floor(n/10);
        newnum = (newnum*10) + rem;
    }
    return newnum === x;
    };
 
/**
 * Test
 */
describe("9. Palindrome Number", () => {
    it("example 1", () => {
        // 🟡 Add test case here.
        const input = isPalindrome(121);
        expect(input).toBe(true);
    });
});

// Make this file a module to avoid global scoping
export { }
