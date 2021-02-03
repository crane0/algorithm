/* 
  https://leetcode-cn.com/problems/walking-robot-simulation/
  
*/
/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
  // 上右下左
  let directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ]
  const set = new Set()
  for (const o of obstacles) {
    set.add(o[0] + ' ' + o[1])
  }

  /* 
    direction 为 directions 的索引。
    direction 初始方向：北，向左则为 [-1, 0]，所以要 + 3，向右为 [1, 0]，所以要 + 1
    如果此时方向为：西，向左则为 [0, -1]，则 (3 + 3) % 4 = 2，即为 [0, -1]
  */
  let x = 0, y = 0, direction = 0, maxDistSquare = 0;
  for (let i = 0; i < commands.length; i++) {
    if (commands[i] === -2) { // 向左
      direction = (direction + 3) % 4;
    } else if (commands[i] === -1) { // 向右
      direction = (direction + 1) % 4;
    } else {
      let step = 0
      // 一步一步加，所以可以判断出某个点是否为绊脚石。
      while (step < commands[i] && !set.has((x + directions[direction][0]) + ' ' + (y + directions[direction][1]))) {
          x += directions[direction][0];
          y += directions[direction][1];
          step++;
      }
    }
    maxDistSquare = Math.max(maxDistSquare, x * x + y * y);
  }

  return maxDistSquare
};

console.log(robotSim([4,-1,3], []))
