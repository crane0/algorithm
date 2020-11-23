/* 
  大顶堆实现
*/
class BinaryHeap {
  constructor(size) {
    this.heap = new Array(size + 1).fill(-1)
    this.heapSize = 0
  }


  isEmpty() {
    return this.heapSize == 0;
  }


  isFull() {
    return this.heapSize == this.heap.length;
  }

  // 获取当前节点的父节点的 index
  parent(i) {
      return Math.floor((i - 1) / 2);
  }

  // 获取 index 为 i 的节点的第 k 个子节点
  kthChild(i, k) {
      return 2 * i + k;
  }

  /**
   * Inserts new element in to heap
   * Complexity: O(log N)
   * As worst case scenario, we need to traverse till the root
   */
  insert(x) {
      if (this.isFull()) {
        throw new Error('Heap is full, No space to insert new element')
      }
      this.heap[this.heapSize] = x;
      this.heapSize ++;
      this.heapifyUp(this.heapSize - 1);
  }

  /**
   * Deletes element at index x
   * Complexity: O(log N)
   * 删除时，会用最后一个元素替换被删除的元素。
   */
  delete(x) {
      if (this.isEmpty()) {
        throw new Error('Heap is empty, No element to delete')
      }
      let maxElement = this.heap[x];
      this.heap[x] = this.heap[this.heapSize - 1];
      this.heapSize--;
      this.heapifyDown(x);
      return maxElement;
  }

  // insert时，如果一个节点比它的父节点大（最大堆）或者小（最小堆），那么需要将它同父节点交换位置。这样是这个节点在数组的位置上升。
  heapifyUp(i) {
      let insertValue = this.heap[i];
      while (i > 0 && insertValue > this.heap[this.parent(i)]) {
        this.heap[i] = this.heap[this.parent(i)];
        i = this.parent(i);
      }
      this.heap[i] = insertValue;
  }

  // delete时，因为用最后一个节点 L 替换了被删除的元素，
  // 所以如果 L 比它的子节点小（最大堆）或者大（最小堆），那么需要将它向下移动。这个操作也称作“堆化（heapify）”。
  heapifyDown(i) {
      let child;
      let temp = this.heap[i];
      // i 不是最后一个节点
      while (this.kthChild(i, 1) < this.heapSize) {
          child = this.maxChild(i);
          // L 大于子节点
          if (temp >= this.heap[child]) {
              break;
          }
          this.heap[i] = this.heap[child];
          i = child;
      }
      this.heap[i] = temp;
  }


  maxChild(i) {
      let leftChild = this.kthChild(i, 1);
      let rightChild = this.kthChild(i, 2);
      return this.heap[leftChild] > this.heap[rightChild] ? leftChild : rightChild;
  }


  /**
   * Prints all elements of the heap
   */
  printHeap() {
    console.log('nHeap = ')
    for (let i = 0; i < this.heapSize; i++){
      console.log(this.heap[i] + " ")
    }
  }


  /**
   * This method returns the max element of the heap.
   * complexity: O(1)
   */
  findMax() {
    if (this.isEmpty()) {
      throw new Error('Heap is empty.')
    }
    return this.heap[0];
  }
}

let maxHeap = new BinaryHeap(10);
maxHeap.insert(10);
maxHeap.insert(4);
maxHeap.insert(9);
maxHeap.insert(1);
maxHeap.insert(7);
maxHeap.insert(5);
maxHeap.insert(3);

maxHeap.printHeap();
maxHeap.delete(5);
maxHeap.printHeap();
maxHeap.delete(2);
maxHeap.printHeap();
