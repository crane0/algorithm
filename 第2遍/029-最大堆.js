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
    const left = this.kthChild(i, 1)
    const right = this.kthChild(i, 2)
    return this.heap[left] > this.heap[right] ? left : right
  }

  findMax() {
    if (this.isEmpty()) {
      throw new Error('堆为空')
    }
    return this.heap[0]
  }

  insert(x) {
    if (this.isFull()) {
      throw new Error('堆已满')
    }
    this.heap[this.heapSize] = x
    this.heapSize++
    this.heapifyUp(this.heapSize - 1)
  }

  heapifyUp(i) {
    const insertValue = this.heap[i]
    while (i > 0 && insertValue > this.heap[this.parent(i)]) {
      this.heap[i] = this.heap[this.parent(i)]
      i = this.parent(i)
    }
    this.heap[i] = insertValue
  }

  delete(i) {
    if (this.isEmpty()) {
      throw new Error('堆为空')
    }
    const deleteEle = this.heap[i]
    this.heap[i] = this.heap[this.heapSize - 1]
    this.heapSize--
    this.heapifyDown(i)
    return deleteEle
  }

  heapifyDown(i) {
    const lastValue = this.heap[i]
    while (this.kthChild(i, 1) < this.heapSize) {
      if (lastValue > this.heap[this.maxChild(i)]) {
        break
      }
      this.heap[i] = this.heap[this.maxChild(i)]
      i = this.maxChild(i)
    }
    this.heap[i] = lastValue
  }
}