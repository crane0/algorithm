/* 
  double-BFS，双端广度优先遍历，运行过程参考对应图片。
  先从 beginSet 开始遍历，如果“第二层”的个数 > endSet，就从 endSet 开始遍历，因为这样衍生出的层数肯定是最少的。
  如此反复交换，直到在遍历 beginSet 时，重组的 str 在 endSet 中找到了，那说明首尾相遇，count + 1 就是最短路径。
*/
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  let listSet = new Set(wordList)
  if(!listSet.has(endWord)) return 0;
  
  let dict = new Set(wordList.join('').split(''))
  let beginSet = new Set()
  beginSet.add(beginWord)
  let endSet = new Set()
  endSet.add(endWord)

  let count = 1
  while (beginSet.size > 0) {
    let newBeginSet = new Set()
    for (const begin of beginSet) {
      for (let i = 0; i < begin.length; i++) {
        for (let j of dict) {
          let str = begin.slice(0, i) + j + begin.slice(i + 1)
          // 首尾相遇
          if (endSet.has(str)) {
            return count + 1
          }
          if (listSet.has(str)) {
            newBeginSet.add(str)
            listSet.delete(str)
          }
        }
      }
    }
    
    beginSet = newBeginSet;
    count++
    if (beginSet.size > endSet.size) {
      [beginSet, endSet] = [endSet, beginSet]
    }
  }
  return 0
};

console.log(ladderLength("hit", "cog", ["hot","dot","dog","lot","log","cog"]))