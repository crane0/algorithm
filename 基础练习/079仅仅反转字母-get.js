/* 
  String.prototype.charCodeAt(index) 返回目标字符索引 index 处的字符，UTF-16 代码单元值的一个数字
  String.fromCharCode(number) 返回 UTF-16 代码单元值数字 对应的字符
*/
for (let i = 'a'.charCodeAt(); i <= 'z'.charCodeAt(); i++) {
  console.log(String.fromCharCode(i))
}