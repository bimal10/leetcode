// 26. Remove Duplicates from Sorted Array
// https://leetcode.com/problems/remove-duplicates-from-sorted-array

/**
 * Solve
 */
// 🟡 Add the function or class skeleton from LeetCode here.
function removeDuplicates(nums: number[]): number {
    var c=0;
    if(nums.length === 1)
        return 1;

    let lc=0;
    for(var i=0;i<nums.length-1;i++){
        if(nums[i] === nums[i+1])
            lc++;
    }
    if(lc === nums.length -1)
        return 1;
    var indexer=0;
    for(var i=0;i<nums.length-1;i++){
        if(nums[indexer] === nums[indexer+1]){
            c++;
            shift(nums, indexer+1);
            // if(i+c >= nums.length)
            //     break;
            // i--;
            continue;
        }
        indexer++;
    }
    
    return nums.length - c;
    
    function shift(nums: number[], index: number) {
        for(var i= index; i< nums.length-1;i++){
            var temp = nums[i];
            nums[i] = nums[i+1];
            nums[i+1] = temp;
        }
        return nums;
    }
    };
/**
 * Test
 */
describe("26. Remove Duplicates from Sorted Array", () => {
    it("example 1", () => {
        // 🟡 Add test case here.
        const input = removeDuplicates([-3,-1,-1,0,0,0,0,0,2]);
        expect(input).toBe(4);
    });
});

// Make this file a module to avoid global scoping
export { }
