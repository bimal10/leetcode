// 338. Counting Bits
// https://leetcode.com/problems/counting-bits

/**
 * Solve
 */
// 🟡 Add the function or class skeleton from LeetCode here.
function countBits(n: number): number[] {
    let out: number[] =[0,1];
    if(n===0)
        return [0];

    for(var i=2;i<=n;i++){
        var div = Math.floor(i/2);
        var rem = i%2;
        if (out.length >= div ) {
            out[out.length] = out[div] + rem;
        }
        
    }

    return out;
};
/**
 * Test
 */
describe("338. Counting Bits", () => {
    it("example 1", () => {
        // 🟡 Add test case here.
        const input = countBits(5);
        expect(input).toStrictEqual([0,1,1,2,1,2]);
    });
});

// Make this file a module to avoid global scoping
export { }
