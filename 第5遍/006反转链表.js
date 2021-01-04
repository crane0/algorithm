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
  let k = null
  while (head !== null) {
    let temp = head.next
    head.next = k
    k = head
    head = temp
  }
  return k
};