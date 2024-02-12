// 238. Product of Array Except Self
// https://leetcode.com/problems/product-of-array-except-self

/**
 * Solve
 */
// 🟡 Add the function or class skeleton from LeetCode here.
function productExceptSelf(nums: number[]): number[] {
    var out: number[]=Array(nums.length).fill(1);
    var map = new Map<number, number>()
    var carry =1;
    //prefix
    for(var i=0;i<nums.length-1;i++){
        out[i+1] = carry * nums[i];
        carry = out[i+1]
    }
    carry =1;
    //postfix
    for(var i=nums.length-1;i>0;i--){
        carry *= nums[i]
        out[i-1] = carry * out[i-1];
        
    }
    return out;
};

/**
 * Test
 */
describe("238. Product of Array Except Self", () => {
    it("example 1", () => {
        // 🟡 Add test case here.
        const input = productExceptSelf([1,2,3,4]);
        expect(input).toStrictEqual([24,12,8,6]);
    });
});

// Make this file a module to avoid global scoping
export { }
