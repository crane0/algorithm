class BinaryHeap {
  constructor(size) {
    this.heap = new Array(size).fill(-1)
    this.heapSize = 0
  }

  isEmpty() {
    return this.heapSize === 0
  }

  isFull() {
    return this.heapSize === this.heap.length
  }

  parent(i) {
    return parseInt((i-1)/2)
  }

  kthChild(i, k) {
    return 2*i + k
  }

  maxChild(i) {
    const leftChild = this.kthChild(i, 1)
    const rightChild = this.kthChild(i, 2)
    return this.heap[leftChild] > this.heap[rightChild] ? leftChild : rightChild
  }

  findMax() {
    if (this.isEmpty()) {
      throw new Error('堆为空')
    }
    return this.heap[0]
  }

  insert(x) {
    if (this.isFull()) {
      throw new Error('没有空间了')
    }
    this.heap[this.heapSize] = x
    this.heapSize++
    this.heapifyUp(this.heapSize - 1)
  }

  heapifyUp(i) {
    let insertValue = this.heap[i]
    // 一直往上走，i 可能等于 0，到顶了
    while (i > 0 && insertValue > this.heap[this.parent(i)]) {
      this.heap[i] = this.heap[this.parent(i)]
      i = this.parent(i)
    }
    this.heap[i] = insertValue
  }

  delete(i) {
    if (this.isEmpty()) {
      throw new Error('堆已经空了')
    }
    let deleteElement = this.heap[i]
    this.heap[i] = this.heap[this.heapSize - 1]
    this.heapSize--
    this.heapifyDown(i)
    return deleteElement
  }

  heapifyDown(i) {
    let lastValue = this.heap[i]
    let maxChild;
    // i 不是最后一个节点
    while (this.kthChild(i, 1) < this.heapSize) {
      maxChild = this.maxChild(i)
      if (lastValue >= this.heap[maxChild]) {
        break
      }
      this.heap[i] = this.heap[maxChild]
      i = maxChild
    }
    this.heap[i] = lastValue
  }
}