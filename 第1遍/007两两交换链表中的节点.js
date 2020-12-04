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
  let faker = new ListNode()
  faker.next = head
  let temp = faker

  while (temp.next !== null && temp.next.next !== null) {
    const node1 = temp.next
    const node2 = temp.next.next

    temp.next = node2 // temp 要变，temp.next 也要变，在 node2 未发生变化之前
    node1.next = node2.next
    node2.next = node1
    temp = node1
  }
  return faker.next
};