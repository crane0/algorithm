/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let queue = [['(', 1, 0]]
  let ret = []
  while (queue.length > 0) {
    let [s, left, right] = queue.shift()
    if (left < n) {
      queue.push([s+'(', left + 1, right])
    }
    if (right < left) {
      queue.push([s+')', left, right + 1])
    }
    if (s.length === 2 * n) {
      ret.push(s)
    }
  }
  return ret
};

console.log(generateParenthesis(3))
