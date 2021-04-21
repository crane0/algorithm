/* 
  https://leetcode-cn.com/problems/minimum-window-substring/
  参考：https://leetcode-cn.com/problems/minimum-window-substring/solution/tong-su-qie-xiang-xi-de-miao-shu-hua-dong-chuang-k/
*/
/**
 * 思路：滑动窗口问题
 * 1，先用字典 map 保存 t 中各个字母的次数。
 * 2，使用 left 和 right 2个指针遍历 s，
 *      right 先向右移动，如果 s[right] 在 t 中出现，则 t 中对应字符的次数 - 1; 如果没有出现，则在 t 中新增该字符并且次数为 -1; 直到窗口中包含了所有的字符。
 *      如何确定窗口中包含了 t 的所有字符？
 *      遍历字典当然可以判断，但每次都得遍历就有点麻烦了。我们可以维护一个 countT = t.length，
 *      在每次判断 s[right] 在 t 中出现后，countT 也 -1，countT === 0 就意味着窗口包含了 t 的所有字符。
 * 3，当窗口包含了 t 的所有字符后，开始将 left 向右移动，
 *      因为左边的部分，可能有部分不属于 t 的字符 或是 t 重复中的字符，需要将这些删除掉。
 *      如何判断是否可以删除？
 *      字典一开始记录了 t 中字符的次数，并且在第2步中，将 t 中没有的字符也一并记录（次数为负），
 *      如果窗口中包含 t 的某个字符多了，比如 t = 'ABC'，现在窗口是 'DAABC'，此时 map = {D: -1, A: -1, B: 0, C: 0}
 *      很明显，如果 map[left] < 0，我们就可以继续将 left 向右移动，同时 map[left] + 1，直到 map[left] == 0，此时窗口就是满足要求的字符串。
 * 4，找到满足的字符串后，还不能确定长度最小，
 *      继续将 left 向右移动，同时 map[left] + 1，countT++，又回到第一步了。循环直到遍历完 s 即可得到最小长度。
 * 
 * 其他：因为题目要求了 s 和 t 都只包含字母，所以map也可以是一个大小 54 的数组，index 对应字母，arr[index]对应次数。
 * for(var i = 65;i < 123;i++ ){
 *   console.log(String.fromCharCode(i))
 * }
 * 
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  let mapT = new Map()
  for (const letter of t) {
    mapT.set(letter, mapT.has(letter) ? mapT.get(letter) + 1 : 1)
  }

  // size 窗口大小，start 窗口起始位置
  let left = 0, right = 0, size = Infinity, countT = t.length, start = 0
  while (right < s.length) {
    const letter = s[right]
    if (mapT.get(letter) > 0) {
      countT--;
    }
    mapT.set(letter, mapT.has(letter) ? mapT.get(letter) - 1 : -1)

    // 窗口中已经包含所有字符
    if (countT === 0) {
      while (left < right && mapT.get(s[left]) < 0) {
        mapT.set(s[left], mapT.get(s[left]) + 1)
        left++
      }

      if (right - left + 1 < size) {
        size = right - left + 1
        start = left
      }
      mapT.set(s[left], mapT.get(s[left]) + 1)
      left++
      countT++
    }
    right++
  }
  return size === Infinity ? "" : s.substring(start, start + size)
};
console.log(minWindow('ADOBECODEBANC', 'ABC'))