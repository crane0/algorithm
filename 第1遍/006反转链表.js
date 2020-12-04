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
  // 以 head = [1,2,3,4,5] 为例，第一次循环时
  let prev = null, curr = head
  while (curr) {
    let temp = curr.next // curr.next = [2,3,4,5]
    curr.next = prev // prev = null
    prev = curr // curr = 1，因为 curr.next 已经指向 null 了
    curr = temp
  }
  return prev
};