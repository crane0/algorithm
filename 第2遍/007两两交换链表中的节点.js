/* 
  https://leetcode-cn.com/problems/swap-nodes-in-pairs/
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  let hair = new ListNode()
  hair.next = head
  let temp = hair

  while (temp.next !== null && temp.next.next !== null) {
    const node1 = temp.next
    const node2 = temp.next.next
    
    node1.next = node2.next
    temp.next = node2
    node2.next = node1

    temp = node1
  }
  return hair.next
};