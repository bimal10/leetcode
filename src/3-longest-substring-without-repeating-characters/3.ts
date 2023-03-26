// 3. Longest Substring Without Repeating Characters
// https://leetcode.com/problems/longest-substring-without-repeating-characters

/**
 * Solve
 */
// 🟡 Add the function or class skeleton from LeetCode here.

function lengthOfLongestSubstring(s: string): number {
    if(s.charAt(0) === " " && s.length === 1)
        return 1;
    if(s.length === 1)
        return 1;
    function calculateMax(s: string): number{
        var maxc=0, j=0;
        var x:string[]=[];
        for(var i=0;i<s.length;i++){
            var token = s.charAt(i);
            if(x.includes(token)){
                // x.push(s.charAt(i));
                j=Math.max(j,x.lastIndexOf(token)+1);
            } 
            maxc = Math.max(maxc, i-j+1)
            x.push(s.charAt(i));
        }
     return maxc;
    }
    const max = calculateMax(s);
    return max;
};
/**
 * Test
 */
describe("3. Longest Substring Without Repeating Characters", () => {
    it("abba", () => {
        // 🟡 Add test case here.
        const input = lengthOfLongestSubstring("abba");
        expect(input).toBe(2);
    });
    it("pwwkew", () => {
        // 🟡 Add test case here.
        const input = lengthOfLongestSubstring("pwwkew");
        expect(input).toBe(3);
    });
    it("dvdfd", () => {
        // 🟡 Add test case here.
        const input = lengthOfLongestSubstring("dvdfd");
        expect(input).toBe(3);
    });
});

// Make this file a module to avoid global scoping
export { }
