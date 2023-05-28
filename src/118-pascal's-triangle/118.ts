// 118. Pascal's Triangle
// https://leetcode.com/problems/pascal's-triangle

/**
 * Solve
 */
// 🟡 Add the function or class skeleton from LeetCode here.
function generate(numRows: number): number[][] {
    let pas: number[][] = [];
    pas[0] = [1];
    // pas[1] = [1,1]
    var temp: number[]=[];
    for(var i=1;i<numRows;i++){
        for(var j=0;j<=i;j++){
            if(j==0 || j==i)
                temp[j]=1
            else{
                temp[j] = pas[i-1][j-1] + pas[i-1][j];
            }
        }
        pas[i]= temp;
        temp = [];
    }
    return pas;
};
/**
 * Test
 */
describe("118. Pascal's Triangle", () => {
    it("example 1", () => {
        // 🟡 Add test case here.
        const input = generate(5);
        expect(input).toStrictEqual([
            [
              1,
            ],
            [
              1,
              1,
            ],
            [
              1,
              2,
              1,
            ],
            [
              1,
              3,
              3,
              1,
            ],
            [
              1,
              4,
              6,
              4,
              1,
            ],
          ])
    });
});

// Make this file a module to avoid global scoping
export { }
