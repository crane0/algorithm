// 283 https://leetcode-cn.com/problems/move-zeroes/

let arr = [0, 2, 5, 0, 9]
/* 
当前元素是 0，不做任何操作
当前元素不是 0，将其赋值给上一个0元素的位置，并将当前元素设为 0 （其实就是0与非0交换）
  j 一直为了标记 0 所在的位置。所以经历过上面的交换后，j 自增就是为了保证它的使命。
*/
function foo1(arr) {
  let j = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[j] = arr[i]
      if (i !== j) {
        arr[i] = 0
      }
      j++
    }
  }
  return arr
}

/* 
  利用解构进行交换。a[j++] 中 j 是计算后才自增的。
*/
function foo2(arr) {
  let j = 0
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] !== 0) {
      [arr[j++], arr[index]] = [arr[index], arr[j]]
    }
  }
  return arr
}
