/* 
  https://leetcode-cn.com/problems/walking-robot-simulation/description/
*/
/**
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

  let direction = 0 // 默认向北 directions[0] = [0, 1]
  let x = 0, y = 0, distance = 0
  for (const c of commands) {
    if (c === -2) {
      direction = (direction + 3) % 4 // 顺时针 + 3
    } else if (c === -1) {
      direction = (direction + 1) % 4 // 顺时针 + 1
    } else {
      let step = 0
      while (step < c && !obstaclesSet.has((x + directions[direction][0]) + ' ' + (y + directions[direction][1]))) {
        x += directions[direction][0]
        y += directions[direction][1]
        step++
      }
    }
    distance = Math.max(distance, x * x + y * y)
  }
  return distance
}

console.log(robotSim([4,-1,3], [])) // 25
console.log(robotSim([4,-1,4,-2,4], [[2,4]]))