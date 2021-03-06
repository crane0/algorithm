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
    } else {
      set.add(head)
    }
    head = head.next
  }
  return null  
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle2 = function(head) {
  let slow = head, fast = head
  while (fast !== null) {
    slow = slow.next
    if (fast.next !== null) {
      fast = fast.next.next
    } else {
      return null
    }
    if (slow === fast) {
      let three = head
      while (three !== slow) {
        slow = slow.next
        three = three.next
      }
      return three
    }
  }
  return null  
};