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
  for (const n of nums) {
    if (map.has(n)) {
      map.set(n, map.get(n) + 1)
    } else {
      map.set(n, 1)
    }
  }

  let minHeap = new BinaryHeap(k)

  for (const [key, value] of map) {
    if (minHeap.heapSize < k) {
      minHeap.insert([key, value])
    } else if (value > minHeap.findMin()) {
      minHeap.delete(0)
      minHeap.insert([key, value])
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
    return parseInt((i - 1) / 2)
  }

  kthChild(i, k) {
    return  2 * i + k
  }

  minChild(i) {
    const leftChild = this.kthChild(i, 1)
    const rightChild = this.kthChild(i, 2)
    return this.heap[leftChild][1] < this.heap[rightChild][1] ? leftChild : rightChild
  }

  findMin() {
    if (this.isEmpty()) {
      throw new Error('堆为空')
    }
    return this.heap[0][1]
  }

  // x = [key, value]
  insert(x) {
    if (this.isFull()) {
      throw new Error('堆已经满了')
    }
    this.heap[this.heapSize] = x
    this.heapSize++
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
    const deleteElement = this.heap[i]
    this.heap[i] = this.heap[this.heapSize - 1]
    this.heapSize--
    this.heapifyDown(i)
    return deleteElement
  }

  heapifyDown(i) {
    const [key, lastValue] = this.heap[i]
    let minChild;
    while (this.kthChild(i, 1) < this.heapSize) {
      minChild = this.minChild(i)
      if (lastValue <= this.heap[minChild][1]) {
        break
      }
      this.heap[i] = this.heap[minChild]
      i = minChild
    }
    this.heap[i] = [key, lastValue]
  }
}

console.log(topKFrequent([1,1,1,2,2,3], 2))