/* 
  https://leetcode-cn.com/problems/walking-robot-simulation
*/
/**
 * 4个方向的坐标
 * 步数一步步加，才可以判断下一步是否是绊脚石
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
  let directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ]

  let obstaclesSet = new Set()
  for (const o of obstacles) {
    obstaclesSet.add(o[0] + ' ' + o[1])
  }

  let x = 0, y = 0, distance = 0, direction = 0 // 起始方向北
  for (const cmd of commands) {
    if (cmd === -2) {
      direction = (direction + 3) % 4
    } else if (cmd === -1) {
      direction = (direction + 1) % 4
    } else {
      let step = 0
      // 要判断的是下一个点，是不是障碍
      while (step < cmd && !obstaclesSet.has((x + directions[direction][0]) + ' ' + (y + directions[direction][1]))) {
        x += directions[direction][0]
        y += directions[direction][1]
        step++
      }
      distance = Math.max(distance, x * x + y * y)
    }
  }
  return distance
}

console.log(robotSim([4,-1,3], [])) // 25
console.log(robotSim([4,-1,4,-2,4], [[2,4]])) // 65