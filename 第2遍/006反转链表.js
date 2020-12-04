/* 
  https://leetcode-cn.com/problems/reverse-linked-list/
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
var reverseList = function(head) {
  let prev = null, curr = head
  while (curr !== null) {
    let temp = curr.next
    curr.next = prev
    prev = curr
    curr = temp
  }
  return prev
};