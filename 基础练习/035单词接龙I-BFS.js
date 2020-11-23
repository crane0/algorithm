/* 
  单词接龙，I 和 II 非常高频
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

  // 注意和034最小基因变化的区别，这个返回的是长度，那个返回的是变化次数。
  let queue = [[beginWord, 1]]
  while (queue.length > 0) {
    let [node, count] = queue.shift()
    if(node === endWord) return count;

    for (let i = 0; i < node.length; i++) {
      for (let j of dict) {
        let str= node.slice(0, i) + j + node.slice(i + 1)
        if (listSet.has(str)) {
          queue.push([str, count + 1])
          listSet.delete(str)
        }
      }
    }
  }
  return 0
};

console.log(ladderLength("hit", "cog", ["hot","dot","dog","lot","log","cog"]))