/* 
  https://leetcode-cn.com/problems/linked-list-cycle/
  2 种方法参考的都是官方题解 https://leetcode-cn.com/problems/linked-list-cycle/solution/huan-xing-lian-biao-by-leetcode-solution/
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
/* 
  下面的方式，
  时间复杂度是 O(N)，N 是链表中的节点数，最坏是需要遍历每个节点
  空间复杂度是 O(N)，N 是链表中的节点数，因为有 set 表的存在，最坏是需要遍历每个节点，每个节点都会插入 set 中。
*/
var hasCycle = function(head) {
  let set = new Set()
  while (head !== null) {
    if (set.has(head)) {
      return true;
    } else {
      set.add(head)
    }
    head = head.next
  }
  return false
};


/* 
  快慢指针
  时间复杂度是 O(N)，N 是链表中的节点数,
    - 不存在环时，兔子到尾部时，乌龟走了一半，因为肚兔子跳着走，加起来每个节点都被访问 1 次。
    - 存在环时，因为每一轮移动后，二者距离-1，当兔子跑圈遇到乌龟时，至多移动 N 轮，
  空间复杂度是 O(1)，只用到了 2 个指针的额外空间
*/
var hasCycle2 = function(head) {
  if (head === null || head.next === null) return false;

  let slow = head, fast = head.next
  while (slow !== fast) {
    if (fast === null || fast.next === null) return false; // 兔子跑到头了

    slow = slow.next
    fast = fast.next.next // 兔子每次跑 2 步
  }
  return true
};