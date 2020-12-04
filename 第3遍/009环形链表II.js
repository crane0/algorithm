/* 
  https://leetcode-cn.com/problems/linked-list-cycle-ii/
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
 * @return {ListNode}
 */
var detectCycle = function(head) {
  let slow = head, fast = head
  while (fast !== null && fast.next !== null) {
    slow = slow.next
    fast = fast.next.next
    if (slow === fast) {
      let three = head
      while (slow !== three) {
        slow = slow.next
        three = three.next
      }
      return three
    }
  }
  return null
};