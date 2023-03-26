// 14. Longest Common Prefix
// https://leetcode.com/problems/longest-common-prefix

/**
 * Solve
 */
// 🟡 Add the function or class skeleton from LeetCode here.
function longestCommonPrefix(strs: string[]): string {

    let c=0;
    let out='';
    let maxlen=100;
    let nomatch = false;
    while(c<strs.length) {
    if(maxlen>strs[c].length)
        maxlen= strs[c].length;
    
    c++;
    }
    c=0;
    while(c< maxlen){
        for( var i=1;i<strs.length;i++){
            if(strs[0][c] !== strs[i][c]){
                nomatch = true;
                break;
            }
            
        }
        if(nomatch)
            break;

        c++;
    
        
    }
    return strs[0].substring(0,c)
    
    };
/**
 * Test
 */
describe("14. Longest Common Prefix", () => {
    it("example 1", () => {
        // 🟡 Add test case here.
        const input = longestCommonPrefix(["flower","flower","flower","flower"]);
        expect(input).toBe('flower');
    });
});

// Make this file a module to avoid global scoping
export { }
