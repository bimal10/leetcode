// 3. Longest Substring Without Repeating Characters
// https://leetcode.com/problems/longest-substring-without-repeating-characters

/**
 * Solve
 */
// 🟡 Add the function or class skeleton from LeetCode here.
function lengthOfLongestSubstring(s: string): number {
    var c=0;
    var maxc=0;
    var x:string[]=[];
    // x.push(s.charAt(0));
    for(var i=0;i<s.length;i++){
        if(x.includes(s.charAt(i))){
            x = [];
            if(c>maxc){
                maxc=c;
                c=1;
            }
        } else {
            c++;
        }
        x.push(s.charAt(i));
    }
 return maxc;
};
/**
 * Test
 */
describe("3. Longest Substring Without Repeating Characters", () => {
    it("example 1", () => {
        // 🟡 Add test case here.
        const input = lengthOfLongestSubstring("abcabcbb");
        expect(input).toBe(3);
    });
    it("pwwkew", () => {
        // 🟡 Add test case here.
        const input = lengthOfLongestSubstring("pwwkew");
        expect(input).toBe(3);
    });
});

// Make this file a module to avoid global scoping
export { }
