// 347. Top K Frequent Elements
// https://leetcode.com/problems/top-k-frequent-elements

/**
 * Solve
 */
// 🟡 Add the function or class skeleton from LeetCode here.
function topKFrequent(nums: number[], k: number): number[] {
    var out: number[]=Array.from({ length: nums.length}, () => 0);
    // var unique = Array.from(new Set(nums));

    let maps = new Map<number, number>();
    if(nums.length===0)
        return out;
    if(nums.length === 1)
        return nums;
    nums.forEach((num) => {
        if(!maps.has(num)){
            maps.set(num,1)
        }else{
            let val = maps.get(num)
            // @ts-ignore
            maps.set(num,++val)
        }
        // out[unique.indexOf(num)]++;
    })
    const mapSort1 = new Map([...maps.entries()].sort((a, b) => b[1] - a[1]));
    const output = Array.from( mapSort1.keys())
    return output.slice(0,2)
};

/**
 * Test
 */
describe("347. Top K Frequent Elements", () => {
    it("example 1", () => {
        // 🟡 Add test case here.
        const input = topKFrequent([1,1,1,2,2,3],2);
        expect(input).toStrictEqual([1,2]);
    });
});

// Make this file a module to avoid global scoping
export { }
