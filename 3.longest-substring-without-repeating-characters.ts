/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
function lengthOfLongestSubstring1(s: string): number {
    if(s.charAt(0) === " " && s.length === 1)
        return 1;
    if(s.length === 1)
        return 1;
    function calculateMax(s: string): number{
        var c=0;
        var maxc=0;
        var x:string[]=[];
        // x.push(s.charAt(0));
        for(var i=0;i<s.length;i++){
            if(x.includes(s.charAt(i))){
                x = [];
                if(c>maxc) {
                    maxc=c;
                    c=1;
                }
            } else {
                c++;
            }
            x.push(s.charAt(i));
        }
        if(c>maxc){
            maxc=c;
        }
     return maxc;
    }
    const max1 = calculateMax(s);
    const max2 = calculateMax(s.split("").reverse().join(""));
    return max1 > max2? max1 : max2;
};
// @lc code=end

