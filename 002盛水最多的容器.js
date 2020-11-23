// 11 https://leetcode-cn.com/problems/container-with-most-water/

let arr = [1, 8, 6, 2, 5, 4, 8, 3, 7]

function foo1(arr) {
  let max = 0
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let area = _getArea(i, j, arr)
      max = Math.max(max, area)
    }
  }
  console.log(max)

  function _getArea(i, j, arr) {
    return (j - i) * Math.min(arr[i], arr[j])
  }
  return max
}

// console.log(foo1(arr))

/* 
  左右边界，向中间收敛，时间复杂度O(n)
  先找出左右边界中最高的柱子，低的那根柱子就是容器高度的上限。
    i 的自增或 j 的自减 放在计算 minHeight 之后
*/
function foo2(arr) {
  let max = 0
  let minHeight = 0
  let area = 0
  // i从左往右，j从右往左
  for (let i = 0, j = arr.length - 1; i < j;) {
    minHeight = arr[i] < arr[j] ? arr[i++] : arr[j--]
    area = (j - i + 1) * minHeight
    max = Math.max(max, area)
  }
  return max
}

console.log(foo2(arr))