/* 
  https://leetcode-cn.com/problems/top-k-frequent-elements/
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function topKFrequent(nums, k) {
  let map = new Map()
  for (const num of nums) {
    map.set(num, map.has(num) ? map.get(num) + 1 : 1)
  }
  let minHeap = new BinaryHeap(k)
  let index = 0
  for (const [key, value] of map) {
    if (index < k) {
      minHeap.insert([key, value])
      index++
    } else {
      if (value > minHeap.findMin()) {
        minHeap.delete(0)
        minHeap.insert([key, value])
      }
    }
  }
  return minHeap.heap.map(item => item[0])
};


// 小顶堆，在基础模板上做了修改，传入的是 [key, value]
class BinaryHeap {
  constructor(size) {
    this.heap = new Array(size).fill(Infinity)
    this.heapSize = 0
  }

  isEmpty() {
    return this.heapSize === 0
  }

  isFull() {
    return this.heap.length === this.heapSize
  }

  parent(i) {
    return parseInt((i-1)/2)
  }

  kthChild(i, k) {
    return i*2+k
  }

  minChild(i) {
    const left = this.kthChild(i, 1)
    const right = this.kthChild(i, 2)
    return this.heap[left][1] < this.heap[right][1] ? left : right
  }

  findMin() {
    if (this.isEmpty()) {
      throw new Error('堆为空')
    }
    return this.heap[0][1]
  }

  insert(x) {
    if (this.isFull()) {
      throw new Error('堆已满')
    }
    this.heap[this.heapSize++] = x
    this.heapifyUp(this.heapSize - 1)
  }

  heapifyUp(i) {
    const [key, insertValue] = this.heap[i]
    while (i > 0 && insertValue < this.heap[this.parent(i)][1]) {
      this.heap[i] = this.heap[this.parent(i)]
      i = this.parent(i)
    }
    this.heap[i] = [key, insertValue]
  }

  delete(i) {
    if (this.isEmpty()) {
      throw new Error('堆为空')
    }
    const deleteEle = this.heap[i]
    this.heap[i] = this.heap[--this.heapSize]
    this.heapifyDown(i)
    return deleteEle
  }

  heapifyDown(i) {
    const [key, lastValue] = this.heap[i]
    while (this.kthChild(i, 1) < this.heapSize) {
      if (lastValue <= this.heap[this.minChild(i)][1]) {
        break
      }
      this.heap[i] = this.heap[this.minChild(i)]
      i = this.minChild(i)
    }
    this.heap[i] = [key, lastValue]
  }
}

console.log(topKFrequent([1,1,1,2,2,3], 2))