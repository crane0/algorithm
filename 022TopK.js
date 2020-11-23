/* 
借助 哈希表 来建立数字和其出现次数的映射，遍历一遍数组统计元素的频率
维护一个元素数目为 kk 的最小堆
每次都将新的元素与堆顶元素（堆中频率最小的元素）进行比较
如果新的元素的频率比堆顶端的元素大，则弹出堆顶端的元素，将新的元素添加进堆中
最终，堆中的 kk 个元素即为前 kk 个高频元素
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function topKFrequent(nums, k) {
  let minHeap = new BinaryHeap(k);

  const map = nums.reduce((prev, next) => {
    if (prev.has(next)) {
      prev.set(next, prev.get(next) + 1)
    } else {
      prev.set(next, 1)
    }
    return prev
  }, new Map())

  const map = new Map()
  for (const num of nums) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1)
    } else { 
      map.set(num, 1)
    }
  }

  for (let [key, value] of map) {
    if (minHeap.heapSize < k) {
      minHeap.insert(key, map)
    } else if (value > map.get(minHeap.findMin())) {
      minHeap.delete(0, map)
      minHeap.insert(key, map)
    }
  }
  return minHeap.heap
};

/* 
  小顶堆实现
*/
class BinaryHeap {
  constructor(size) {
    // 都填充 Infinity 是因为是小顶堆，所有插入的都要保证比初始化的内容小。
    this.heap = new Array(size).fill(Infinity)
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

  // 获取 i 节点的第 k 个子节点
  kthChild(i, k) {
      return 2 * i + k;
  }

  /**
   * O(log N)，最坏的情况下，需要从底遍历到顶。
   */
  insert(x, map) {
      if (this.isFull()) {
        throw new Error('Heap is full, No space to insert new element')
      }
      this.heap[this.heapSize] = x;
      this.heapSize ++;
      map !== undefined ? this.myHeapifyUp(this.heapSize - 1, map) : this.heapifyUp(this.heapSize - 1);
  }

  /**
   * Complexity: O(log N)，删除时，会用最后一个元素替换被删除的元素。
   */
  delete(x, map) {
      if (this.isEmpty()) {
        throw new Error('Heap is empty, No element to delete')
      }
      let minElement = this.heap[x];
      this.heap[x] = this.heap[this.heapSize - 1];
      this.heapSize--;
      map !== undefined ? this.myHeapifyDown(x, map) : this.heapifyDown(x);
      return minElement;
  }

  heapifyUp(i) {
      let insertValue = this.heap[i];
      while (i > 0 && insertValue < this.heap[this.parent(i)]) {
        this.heap[i] = this.heap[this.parent(i)];
        i = this.parent(i);
      }
      this.heap[i] = insertValue;
  }

  // insert时，如果一个节点比它的父节点小，那么需要将它同父节点交换位置。这个节点在数组的位置上升。
  myHeapifyUp(i, map) {
    let insertValue = this.heap[i];
    while (i > 0 && map.get(insertValue) < map.get(this.heap[this.parent(i)])) {
      this.heap[i] = this.heap[this.parent(i)];
      i = this.parent(i);
    }
    this.heap[i] = insertValue;
  }

  heapifyDown(i) {
      let child;
      let temp = this.heap[i];
      // i 不是最后一个节点
      while (this.kthChild(i, 1) < this.heapSize) {
          child = this.minChild(i);
          // L <= 子节点
          if (temp <= this.heap[child]) {
              break;
          }
          this.heap[i] = this.heap[child];
          i = child;
      }
      this.heap[i] = temp;
  }

   // delete时，因为用最后一个节点替换了被删除的元素，
  // 所以如果最后一个节点到新的位置后，比它的子节点大，那么需要将它向下移动。这个操作也称作“堆化（heapify）”。
  myHeapifyDown(i, map) {
    let child;
    // 最后一个元素，也就是当前位置 i 的
    let temp = this.heap[i];
    // i 不是最后一个节点
    while (this.kthChild(i, 1) < this.heapSize) {
        child = this.myMinChild(i, map);
        // L <= 子节点
        if (map.get(temp) <= map.get(this.heap[child])) {
            break;
        }
        this.heap[i] = this.heap[child];
        i = child;
    }
    this.heap[i] = temp;
  }


  // 子节点中最小的那个的 index
  myMinChild(i, map) {
      let leftChild = this.kthChild(i, 1);
      let rightChild = this.kthChild(i, 2);
      return map.get(this.heap[leftChild]) < map.get(this.heap[rightChild]) ? leftChild : rightChild;
  }

  minChild(i) {
    let leftChild = this.kthChild(i, 1);
    let rightChild = this.kthChild(i, 2);
    return this.heap[leftChild] < this.heap[rightChild] ? leftChild : rightChild;
}


  /**
   * 打印测试 heap
   */
  printHeap() {
    console.log('nHeap = ')
    for (let i = 0; i < this.heapSize; i++){
      console.log(this.heap[i] + " ")
    }
  }


  /**
   * 找到堆中最小的元素
   * O(1)
   */
  findMin() {
    if (this.isEmpty()) {
      throw new Error('Heap is empty.')
    }
    return this.heap[0];
  }
}

topKFrequent([6,0,1,4,9,7,-3,1,-4,-8,4,-7,-3,3,2,-3,9,5,-4,0], 6)

// [-3,-4,0,1,4,9]