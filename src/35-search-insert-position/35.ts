// 35. Search Insert Position
// https://leetcode.com/problems/search-insert-position

/**
 * Solve
 */
// 🟡 Add the function or class skeleton from LeetCode here.
function searchInsert(nums: number[], target: number): number {
    let low=0, high=nums.length,mid=(low+high)/2;
    if(high === 0)
        return 0;
    if(high === 1 ){
        // if(nums[0] === target)
        //     return 0
        if(nums[0]>=target)
            return 0;
        else 
            return 1;
    }
    while(low <= high) {
        mid= Math.floor((low+high)/2);
        if(nums[mid] === target)
            return mid;
        else if(nums[mid] < target && nums[mid+1] > target) {
            return mid+1;
        }
        else if (nums[mid] > target) {
            high = mid-1;
        } else {
            low = mid+1;
        }
    }
    return mid;
};
/**
 * Test
 */
describe("35. Search Insert Position", () => {
    it("example 1", () => {
        // 🟡 Add test case here.
        const input = searchInsert([1,3,5,6],2);
        expect(input).toBe(1);
    });
});

// Make this file a module to avoid global scoping
export { }
