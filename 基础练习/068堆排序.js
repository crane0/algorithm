/* 
  升序排序，用大顶推，最后交换数组首尾元素，再从 0, length-1 再次建立大顶堆，依次建立即可。
  为什么不用小顶堆？
    因为堆调整的算法 heapify，如果只是从第2个元素开始，到 length 再次建立小顶堆是不成立的，因为没有一个 if 会执行。
    如果用for循环加 heapify 的方法，需要将第一个元素移除，这样数组中每个元素都会移动，复杂度就会增加。
    并且堆调整的算法中，关于 len 的判断，就是为了忽略掉最后的元素。
    而如果是大顶堆的方式，首尾交换后，堆会重新开始调整。
  所以，升序用大顶堆，降序用小顶堆。
*/
function heapSort(arr) {
  if (arr.length === 0) return;
  let len = arr.length;
  // 建大顶堆
  for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
    heapify(arr, len, i);
  }
  // 此时 arr 已经是一个大顶推

  // 排序，每次将堆顶元素放到最后，对剩下的再次建大顶堆，继续重复，最后 arr 就是从小到大了。
  for (let i = len - 1; i >= 0; i--) {
    // 堆顶元素与最后一个互换
    [arr[0], arr[i]] = [arr[i], arr[0]];
    // 对 0 ～ i 的数组建堆
    heapify(arr, i, 0);
  }
  return arr
}
function heapify(arr, len, i) {
  let left = i * 2 + 1;
  let right = i * 2 + 2;
  let largest = i;
  if (left < len && arr[left] > arr[largest]) {
    largest = left;
  }
  if (right < len && arr[right] > arr[largest]) {
    largest = right;
  }
  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, len, largest);
  }
}

const params = [6, 2, 3, 5, 7, 10, 1, 9, 4]
/* 
  [6, 2, 3, 9, 7, 10, 1, 5, 4]
  [6, 2, 10, 9, 7, 3, 1, 5, 4]
*/
const params1 = [4, 2, 3, 5, 1, 6, 7, 9, 10]

console.log(heapSort(params))