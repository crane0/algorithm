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
    return this.heap[leftChild] < this.heap[rightChild] ? leftChild : rightChild
  }

  findMin() {
    if (this.isEmpty()) {
      throw new Error('堆为空')
    }
    return this.heap[0]
  }

  insert(x) {
    if (this.isFull()) {
      throw new Error('堆已经满了')
    }
    this.heap[this.heapSize] = x
    this.heapSize++
    this.heapifyUp(this.heapSize - 1)
  }

  heapifyUp(i) {
    const insertValue = this.heap[i]
    while (i > 0 && insertValue < this.heap[this.parent(i)]) {
      this.heap[i] = this.heap[this.parent(i)]
      i = this.parent(i)
    }
    this.heap[i] = insertValue
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
    const lastValue = this.heap[i]
    let minChild;
    while (this.kthChild(i, 1) < this.heapSize) {
      minChild = this.minChild(i)
      if (lastValue <= this.heap[minChild]) {
        break
      }
      this.heap[i] = this.heap[minChild]
      i = minChild
    }
    this.heap[i] = lastValue
  }
}