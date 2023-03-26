// 28. Find the Index of the First Occurrence in a String
// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string

/**
 * Solve
 */
// 🟡 Add the function or class skeleton from LeetCode here.
function strStr(haystack: string, needle: string): number {

    return haystack.indexOf(needle);
};
/**
 * Test
 */
describe("28. Find the Index of the First Occurrence in a String", () => {
    it("example 1", () => {
        // 🟡 Add test case here.
        const input = strStr('sadbutsad','sad');
        expect(input).toBe(0);
    });
});

// Make this file a module to avoid global scoping
export { }
