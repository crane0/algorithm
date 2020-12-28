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
  let set = new Set()
  while (head !== null) {
    if (set.has(head)) {
      return head
    }
    set.add(head)
    head = head.next
  }
  return null
};

// O(1)
var detectCycle = function(head) {
  if (head === null || head.next === null) return null;

  let slow = head, fast = head
  while (fast !== null && fast.next !== null) {
    slow = slow.next
    fast = fast.next.next
    if (slow === fast) {
      let three = head
      while (three !== slow) {
        three = three.next
        slow = slow.next
      }
      return three
    }
  }
  return null
};