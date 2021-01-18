/* 
  https://leetcode-cn.com/problems/word-ladder-ii/
*/
/**
 * dfs 会超时，bfs 不知道如何将所有的都拿出来
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
}

// console.log(findLadders('hit', 'cog', ["hot","dot","dog","lot","log","cog"]))
console.log(findLadders('hot', 'dog', ["hot","dog","dot"]))
