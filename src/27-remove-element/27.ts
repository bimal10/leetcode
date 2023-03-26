// 27. Remove Element
// https://leetcode.com/problems/remove-element

/**
 * Solve
 */
// 🟡 Add the function or class skeleton from LeetCode here.
function removeElement(nums: number[], val: number): number {
    var j=0;
    for(var i=0;i<nums.length;i++){
        if(nums[i] !== val) {
            nums[j++]=nums[i]
        }
    }
    return j;
    };
/**
 * Test
 */
describe("27. Remove Element", () => {
    it("example 1", () => {
        // 🟡 Add test case here.
        const input = removeElement([3,2,2,3], 3);
        expect(input).toBe(2);
    });
});

// Make this file a module to avoid global scoping
export { }
