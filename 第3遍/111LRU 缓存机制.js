/* 
  https://leetcode-cn.com/problems/lru-cache/
*/

class LinkedNode {
  constructor(key = 0, value = 0) {
    this.key = key
    this.value = value
    this.prev = null
    this.next = null
  }
}

/**
 * 这是双端列表，头部和尾部始终是存在的，插入的 node 也是在他俩中间
 */
class LinkedList {
  constructor() {
    this.head = new LinkedNode()
    this.tail = new LinkedNode()
    this.head.next = this.tail
    this.tail.prev = this.head
  }

  insertFirst(node) {
    node.prev = this.head
    node.next = this.head.next
    this.head.next.prev = node
    this.head.next = node
  }

  removeLast() {
    if (this.head.next === this.tail) return null
    const node = this.tail.prev
    this.remove(node)
    return node
  }

  remove(node) {
    node.prev.next = node.next
    node.next.prev = node.prev
  }
}
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity
  this.keyNodeMap = new Map()
  this.cacheLink = new LinkedList()
};

/** 
 * get 时执行 put 是为了更新排序
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (!this.keyNodeMap.has(key)) return -1
  const node = this.keyNodeMap.get(key)
  this.put(key, node.value)
  return node.value
};

/** 
 * 如果已经有了，删掉（之后新增是为了更新排序）
 * 如果没有，但是满了，删掉最后的，
 * 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (this.keyNodeMap.has(key)) {
    this.cacheLink.remove(this.keyNodeMap.get(key))
    // 这里之前有 size 判断的方式，其实也是一个道理
    this.keyNodeMap.delete(key)
  }
  if (this.keyNodeMap.size >= this.capacity) {
    this.keyNodeMap.delete(this.cacheLink.removeLast().key)
  }
  const node = new LinkedNode(key, value)
  this.keyNodeMap.set(key, node)
  this.cacheLink.insertFirst(node)
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity
    this.map = new Map()
  }
  get(key) {
    if (!this.map.has(key)) return -1
    const value = this.map.get(key)
    this.put(key, value)
    return value
  }
  put(key, value) {
    if (this.map.has(key)) {
      this.map.delete(key)
    }
    this.map.set(key, value)
    if (this.map.size > this.capacity) {
      this.map.delete(this.map.keys().next().value)
    }
  }
}