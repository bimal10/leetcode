// 88. Merge Sorted Array
// https://leetcode.com/problems/merge-sorted-array

/**
 * Solve
 */
// 🟡 Add the function or class skeleton from LeetCode here.
function merge(nums1: number[], m: number, nums2: number[], n: number): void {

    function shiftInsert(arr: number[],lastIndex: number, val: number, pos: number) {
        for(var i=lastIndex;i>pos;i--){
            arr[i] = arr[i-1];
        }
        arr[pos] = val;
    }
    if(n===0)
    {
        return;
    }

    if(m === 0) {
        var i=0;
        while(n-i>0){
            nums1[i]= nums2[i];
            i++;
        }
        return;
    }

    var c1=0;
    for(var i=0;i<n;){
        if(nums1[c1] > nums2[i]){
            shiftInsert(nums1, m, nums2[i], c1);
            ++i;++m;
        }else {
            ++c1;
        }
        nums1;
        if(c1===m){
            while(n-i > 0){
                nums1[m++] = nums2[i++]
            }
        }
    }

};
/**
 * Test
 */
describe("88. Merge Sorted Array", () => {
    it("example 1", () => {
        // 🟡 Add test case here.
        // const input = merge([1,2,4,0,0,0],3 , [3,5,6],3);
        const input = merge([0],0 , [1],1);
        expect(input).toBe(true);
    });
});

// Make this file a module to avoid global scoping
export { }
