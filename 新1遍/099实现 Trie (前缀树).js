/* 
  https://leetcode-cn.com/problems/implement-trie-prefix-tree/
  相比 基础练习中的写法，不用加 endOfWord 也可以实现。
*/
class Trie {
  
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
 let trie = new Trie();
 let words = ["oath","pea","eat","rain",'oat']
 for (const word of words) {
   trie.insert(word)
 }
 
 console.log(JSON.stringify(trie))