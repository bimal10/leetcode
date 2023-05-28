// 242. Valid Anagram
// https://leetcode.com/problems/valid-anagram

/**
 * Solve
 */
// 🟡 Add the function or class skeleton from LeetCode here.
function isAnagram(s: string, t: string): boolean {
    if(s.length !== t.length)
        return false;
    for(var i=0;i<s.length;i++){
        const index = t.indexOf(s.charAt(i));
        if( index < 0)
            return false;
        t = t.slice(0,index) + t.slice(index+1, t.length)
    }
    return true;
};
/**
 * Test
 */
describe("242. Valid Anagram", () => {
    it("example 1", () => {
        // 🟡 Add test case here.
        const input = isAnagram('aacc','aaac');
        expect(input).toBe(false);
    });
});

// Make this file a module to avoid global scoping
export { }
