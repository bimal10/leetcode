// 67. Add Binary
// https://leetcode.com/problems/add-binary

/**
 * Solve
 */
// 🟡 Add the function or class skeleton from LeetCode here.
function addBinary(a: string, b: string): string {
    let i= a.length-1, j= b.length-1;
    var carry: number=0;
    let str='';
    while(i>=0 || j>=0 || carry>0) {
        if(i>=0){
            carry += +a.charAt(i--)
        }
            
        if(j>=0)
            carry += +b.charAt(j--)
        str += carry%2;
        carry = Math.floor(carry/2)
    }
    return str.split("").reverse().join("");
};
/**
 * Test
 */
describe("67. Add Binary", () => {
    it("example 1", () => {
        // 🟡 Add test case here.
        const input = addBinary('101','1011');
        expect(input).toBe('10000');
    });
});

// Make this file a module to avoid global scoping
export { }
