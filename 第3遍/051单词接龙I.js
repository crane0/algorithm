/* 
  https://leetcode-cn.com/problems/word-ladder/description/
  BFS + DFS 2种方法
*/
/**
 * BFS
 * 最小基因变化和该题是一模一样的，区别在于返回值的不同，
 * 前者返回变化的次数，后者返回总长度（也就是变化次数+1）
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  
}


console.log(ladderLength('hit', 'cog', ["hot","dot","dog","lot","log","cog"]))