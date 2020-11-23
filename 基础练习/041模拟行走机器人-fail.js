/* 
  https://leetcode-cn.com/problems/walking-robot-simulation/
  
  下面的方式，无法判断 obstacles，放弃了。
*/
/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
  let axis = [0, 0]
  let direction = [0, 1]
  for (let i = 0; i < commands.length; i++) {
    if (commands[i] < 0) {
      // < 0时只有 -1 -2 两种情况
      if (commands[i] === -1) {
        direction[0] += 1
        direction[1] -= 1
      } else {
        direction[0] -= 1
        direction[1] += 1
      }
      continue
    } else {
      if (direction[0] === 0) {
        axis[1] = commands[i] * direction[1]
      } else {
        axis[0] = commands[i] * direction[0]
      }
    }
  }

  return axis[0] * axis[0] + axis[1] * axis[1]
};

console.log(robotSim([4,-1,3]))