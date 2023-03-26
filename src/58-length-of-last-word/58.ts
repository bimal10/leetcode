// 58. Length of Last Word
// https://leetcode.com/problems/length-of-last-word

/**
 * Solve
 */
// 🟡 Add the function or class skeleton from LeetCode here.
function lengthOfLastWord(s: string): number {

    if(s === ' ')
        return 0;
    if(s.length < 2)
        return 1;
    const str = s.trim();
    return str.length - str.lastIndexOf(' ') -1;
};
/**
 * Test
 */
describe("58. Length of Last Word", () => {
    it("example 1", () => {
        // 🟡 Add test case here.
        const input = lengthOfLastWord('   fly me   to   the moon  ');
        expect(input).toBe(4);
    });
});

// Make this file a module to avoid global scoping
export { }
