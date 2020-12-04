/* 
  https://leetcode-cn.com/problems/linked-list-cycle/
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if (head === null || head.next === null) return false;
  
  let slow = head, fast = head.next
  while (slow !== fast) {
    if (fast === null || fast.next === null) return false; // 兔子到头了
    slow = slow.next
    fast = fast.next.next
  }
  return true
};