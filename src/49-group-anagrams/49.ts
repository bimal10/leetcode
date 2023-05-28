// 49. Group Anagrams
// https://leetcode.com/problems/group-anagrams

/**
 * Solve
 */
// 🟡 Add the function or class skeleton from LeetCode here.
function groupAnagrams(strs: string[]): string[][] {
    let map = new Map<string, string[]>();
    for (let s of strs) {
        let charFreq = Array.from({ length: 26 }, () => 0);
        for (let i = 0; i < s.length; i++)charFreq[s.charCodeAt(i) - 97]++;
        let keyStr = charFreq.toString();
        if (!map.has(keyStr)) map.set(keyStr, []);
        if(map.get(keyStr) !== undefined) {
            // @ts-ignore
            map.get(keyStr).push(s);
        }    
    }
    return Array.from(map.values());
};

function groupAnagrams1(strs: string[]): string[][] {
    if(strs.length < 2)
        return [strs];
    var out: string[][] =[];
    for(var i=0;i<strs.length;i++) {
        var temp: string[] = [strs[i]];
        for(var j=i+1;j<strs.length;) {
            if(isAnagram(strs[i], strs[j])){
                
                temp.push(strs[j])
                strs.splice(j,1);
            } else {
                j++;
            }
        }
        // if(strs.length>1)
        out.push(temp);
    }
    return out;
};

function isAnagram( s: string, t: string): boolean {
    if(s.length !== t.length)
        return false;
    for(var i=0;i<s.length;i++){
        const index = t.indexOf(s.charAt(i));
        if( index < 0)
            return false;
        t = t.slice(0,index) + t.slice(index+1, t.length)
    }
    return true;
}
/**
 * Test
 */
describe("49. Group Anagrams", () => {
    it("example 1", () => {
        // 🟡 Add test case here.
        const input = groupAnagrams(["eat","tea","tan","ate","nat","bat"]);
        expect(input).toStrictEqual([
            [
              "eat",
              "tea",
              "ate",
            ],
            [
              "tan",
              "nat",
            ],
            [
              "bat",
            ],
          ]);
    });
});

// Make this file a module to avoid global scoping
export { }
