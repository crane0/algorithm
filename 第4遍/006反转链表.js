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
  let temp = null
  while (head !== null) {
    const k = head.next
    head.next = temp
    temp = head
    head = k
  }
  return temp
};