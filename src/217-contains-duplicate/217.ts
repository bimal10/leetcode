// 217. Contains Duplicate
// https://leetcode.com/problems/contains-duplicate

/**
 * Solve
 */
// 🟡 Add the function or class skeleton from LeetCode here.
function containsDuplicate(nums: number[]): boolean {

    var newarr = new Set();
    for(var i=0;i<nums.length;i++) {
        if(newarr.has(nums[i])){
            return true
        }
        newarr.add(nums[i])
    }
    return false;
};
/**
 * Test
 */
describe("217. Contains Duplicate", () => {
    it("example 1", () => {
        // 🟡 Add test case here.
        const input = containsDuplicate([1,2]);
        expect(input).toBe(false);
    });
});

// Make this file a module to avoid global scoping
export { }
