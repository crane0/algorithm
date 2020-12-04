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
    let one = temp.next, two = temp.next.next

    one.next = two.next
    two.next = one
    temp.next = two

    temp = one
  }
  return faker.next
};