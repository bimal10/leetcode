// 125. Valid Palindrome
// https://leetcode.com/problems/valid-palindrome

/**
 * Solve
 */
// 🟡 Add the function or class skeleton from LeetCode here.
function isPalindrome(s: string): boolean {
    if(s.trim.length <2)
        return true;

    return false;
};

/**
 * Test
 */
describe("125. Valid Palindrome", () => {
    it("example 1", () => {
        // 🟡 Add test case here.
        const input = isPalindrome(" ");
        expect(input).toBe(true);
    });
});

// Make this file a module to avoid global scoping
export { }
