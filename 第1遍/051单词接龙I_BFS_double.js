/* 
  https://leetcode-cn.com/problems/word-ladder/description/
*/
/**
 * 看图示，双端BFS是在终点已知的情况下，由两端交替进行 BFS，为什么要两端交替？
 * 因为在 BFS 时，从起点扩散后，假设有3种可能，目标只有一个，那就是终点，
 * 最好的情况，第1个 === 目标点，最坏的情况 第3个 === 目标点。
 * 此时如果从终点开始扩散时，目标就变成3个了（起点扩散出的3个），肯定比找一个概率要大。
 * 每次只要检查终点扩散出的可能点中，是否被这3个点包含即可。
 * 同样的，如果终点扩散出的可能点 > 起点的3个，那再从起点的3个点开始 BFS。
 * 如此反复，就缩短了时间。
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  let wordSet = new Set(wordList)
  if (!wordSet.has(endWord)) return 0

  const strDict = new Set(wordList.join(''))
  // 不能直接 new Set(beginWord)，字符会被分开
  let beginSet = new Set()
  beginSet.add(beginWord)
  let endSet = new Set()
  endSet.add(endWord)
  let count = 1

  while (beginSet.size) {
    let newSet = new Set()
    for (const beginWord of beginSet) {
      for (let i = 0; i < beginWord.length; i++) {
        for (const letter of strDict) {
          const str = beginWord.slice(0, i) + letter + beginWord.slice(i+1)
          if (endSet.has(str)) {
            return count + 1
          }
          if (wordSet.has(str)) {
            newSet.add(str)
            wordSet.delete(str)
          }
        }
      }
    }
    count++
    beginSet = newSet
    if (beginSet.size > endSet.size) {
      [beginSet, endSet] = [endSet, beginSet]
    }
  }
  return 0
}


console.log(ladderLength('hit', 'cog', ["hot","dot","dog","lot","log","cog"]))