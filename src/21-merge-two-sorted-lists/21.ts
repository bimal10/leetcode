// 21. Merge Two Sorted Lists
// https://leetcode.com/problems/merge-two-sorted-lists

/**
 * Solve
 */
// 🟡 Add the function or class skeleton from LeetCode here.

 class ListNode {
     val: number
     next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
 }
 

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {

    if (!list1 || !list2)
        return list2 || list1
    let outList1 = new ListNode(-1, null);
    let outList: ListNode= outList1;
    while(list1 !== null && list2 !== null){
        if(list1.val < list2.val) {
            outList.next = new ListNode(list1.val);
            list1=list1.next;
        } else {
            outList.next = new ListNode(list2.val);
            list2=list2.next;
        }
        outList= outList.next;
    }
    // outList.next = list1 || list2;
    while(list1 !== null){
        outList.next = list1;
        list1= list1.next;
        outList = outList.next;
    }
    while(list2 !== null){
        outList.next = list2;
        list2 = list2.next;
        outList = outList.next;
    }
    return outList1.next;
};
/**
 * Test
 */
describe("21. Merge Two Sorted Lists", () => {
    it("example 1", () => {
        let list1: ListNode= new ListNode(1);
        list1.next= new ListNode(2);
        list1.next.next = new ListNode(4);

        let list2: ListNode= new ListNode(1);
        list2.next= new ListNode(3);
        list2.next.next = new ListNode(4);
        // 🟡 Add test case here.
        const input = mergeTwoLists(list1, list2);
        // expect(input).toBe(true);
    });
});

// Make this file a module to avoid global scoping
export { }
