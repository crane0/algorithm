/* 
  https://leetcode-cn.com/problems/walking-robot-simulation/description/
*/
/**
 * 4个方向的坐标
 * 步数一步步加，才可以判断下一步是否是绊脚石
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
  
}

console.log(robotSim([4,-1,3], [])) // 25
console.log(robotSim([4,-1,4,-2,4], [[2,4]])) // 65