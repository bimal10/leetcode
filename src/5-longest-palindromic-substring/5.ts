// 5. Longest Palindromic Substring
// https://leetcode.com/problems/longest-palindromic-substring

/**
 * Solve
 */
// 🟡 Add the function or class skeleton from LeetCode here.
function longestPalindrome(s: string): string {
    var maxp=0;
    var res=''
    for(var i=0;i<=s.length-1-maxp;i++){
        for(var j=i+1;j<=s.length;j++){
            var token = s.substring(i,j);
            if(token === token.split("").reverse().join("")){
                if(token.length > maxp){
                    maxp=token.length;
                    res=token;
                }
            }
        }
    }
    return res;
};
 
/**
 * Test
 */
describe("5. Longest Palindromic Substring", () => {
    it("ababfag", () => {
        // 🟡 Add test case here.
        const input = longestPalindrome("a");
        expect(input).toBe('a');
    });
});

// Make this file a module to avoid global scoping
export { }
