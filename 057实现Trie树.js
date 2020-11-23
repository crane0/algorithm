/* 
  https://leetcode-cn.com/problems/implement-trie-prefix-tree/
*/
class Trie {
  constructor() {
    this.root = {};
    this.endOfWord = "$";
  }

  insert(word) {
    let node = this.root;
    for (let ch of word) {
      node[ch] = node[ch] || {};
      node = node[ch];
    }
    node[this.endOfWord] = this.endOfWord;
    node.word = word
  }

  search(word) {
    let node = this.root;
    for (let ch of word) {
      if (!node[ch]) return false;
      node = node[ch];
    }
    return node[this.endOfWord] === this.endOfWord;
  }

  startsWith(word) {
    let node = this.root;
    for (let ch of word) {
      if (!node[ch]) return false;
      node = node[ch];
    }
    return true;
  }
}

// console.log(trie.insert("apple"));

let trie = new Trie();
let words = ["oath","pea","eat","rain",'oat']
for (const word of words) {
  trie.insert(word)
}

console.log(trie.startsWith("eat"))