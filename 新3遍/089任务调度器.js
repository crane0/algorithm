/* 
  https://leetcode-cn.com/problems/task-scheduler/
*/
/**
 * 根据题目意思，关键要算出【待命】的个数。
 * 思路：为了得到最短时间，需要优先排列出现频率最高的字母，然后在每2个该字母之间放入其他的字母，其他的字母放完后，就需要填充【待命】。
 * 
 * 假设 tasks = ["A", "A", "A", "B", "B", "C"], n = 2，最优解是 ABCAB_A （下划线表示【待命】）
 * 可以看到，最终排列是 A??A??A，被分割的字母是 A，中间插入 slot，
 * slot 的个数 partCount = count(A) - 1
 * ? 的总数 emptySlots = partCount * n
 * 剩下可用的字母个数 enableTasks = tasks.length - count(A)
 * 所以，需要的【待命】数 spaces = emptySlots - enableTasks
 * 
 * 如果 spaces <= 0，说明 enableTasks 完全够把 emptySlots 填充完，也就不需要 spaces 了。
 * 所以最短时间 = tasks.length + Math.min(0, spaces)
 * 
 * 以上是大致的思路，现在考虑特殊情况
 * 1，出现频率最高的字母不止一个
 *    假设 tasks = ["A", "A", "A", "B", "B", "B", C"], n = 2，最优解是 ABCAB_AB
 * 按照原来的思路，最终排列应该由 A??A??A --> AB?AB?AB
 * 也就是说，被分割的字母不在是一个A了，而是AB，并且注意 B 填充了 ?
 * 
 * 虽然出现频率最高的字母不止一个，但频率是一样的。
 * 用 count(F) 表示出现的最高频率, maxCount 表示这几个频率最高的字母的个数
 * slot 的个数 partCount = count(F) - 1
 * ? 的总数 emptySlots = partCount * (n - (maxCount - 1))
 * > 这里有个小问题，(n - (maxCount - 1)) < 0，这会导致下面计算的 spaces 必然也 < 0，这又是什么情况？
 * 其实很好理解，例 3A，3B，3C，n = 2, 只需要依次排列即可：ABCABCABC，因为不同任务足够多，已经不需要【待命】了。
 * 剩下可用的字母个数 enableTasks = tasks.length - count(F) * maxCount
 * 需要的【待命】数 spaces = emptySlots - enableTasks
 * 
 * 同样的，如果 spaces <= 0，说明 enableTasks 完全够把 emptySlots 填充完，也就不需要 spaces 了。
 * 所以最短时间 = tasks.length + Math.min(0, spaces)
 * 
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
  
};

const tasks = ["A","A","A","B","B","B"]
console.log(leastInterval(tasks, 2))
