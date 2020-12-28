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
  let set = new Set()
  while (head !== null) {
    if (set.has(head)) {
      return true
    }
    set.add(head)
    head = head.next
  }
  return false
};

// O(1) 的空间，要使用快慢指针
var hasCycle = function(head) {
  if (head === null || head.next === null) return false;
  
  let slow = head, fast = head.next
  while (slow !== fast) {
    if (fast === null || fast.next === null) return false;
    slow = slow.next
    fast = fast.next.next
  }
  return true
};