/* 
  https://leetcode-cn.com/problems/implement-trie-prefix-tree/
  相比 基础练习中的写法，不用加 endOfWord 也可以实现。
*/
class Trie {
  constructor() {
    this.root = {}
  }
  insert(word) {
    let node = this.root
    for (const w of word) {
      node[w] = node[w] || {}
      node = node[w]
    }
    node.word = word
  }
  search(word) {
    let node = this.root
    for (const w of word) {
      if (!node[w]) return false
      node = node[w]
    }
    return node.word = word
  }

  startsWith(prefix) {
    let node = this.root
    for (const w of prefix) {
      if (!node[w]) return false
      node = node[w]
    }
    return true
  }
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