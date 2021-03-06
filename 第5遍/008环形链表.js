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
  if (head === null) return false;
  
  let slow = head, fast = head.next
  while (fast !== null && fast.next !== null) {
    if (slow === fast) {
      return true
    }
    slow = slow.next
    fast = fast.next.next
  }
  return false
};

var hasCycle = function(head) {
  if (head === null || head.next === null) return false;
  
  let slow = head, fast = head.next
  while (slow !== fast) {
    if (fast === null && fast.next === null) return false
    slow = slow.next
    fast = fast.next.next
  }
  return true
};