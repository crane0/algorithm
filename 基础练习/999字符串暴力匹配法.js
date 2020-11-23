function forceSearch(txt, pat) {
  let n = txt.length, m = pat.length, j = 0
  for (let i = 0; i < n - m + 1; i++) {
    for (j; j < m; j++) {
      if (txt[i+j] !== pat[j]) {
        break
      }
    }
    if (j === m) return true
  }
  return false
}

console.log(forceSearch("abcabcabx", "abcabx"))



function rabinKarpSearch(txt, pat) {
  let n = txt.length, m = pat.length
  let txtHash = 0, patHash = 0
  // 因为字符的 Unicode 编码是在 0 - 256 之间的。这里的含义是 256 进制。
  const D = 256
  // 如果 pat 足够长，每次 * 256，最后会爆掉。需要取模一个质数，并且尽可能的大，来减少 hash 碰撞的概率，这里选 9997。
  const Q = 9997

  /* 
    类比十进制，假设 m = 3，pat 对应的每一位是 1 9 7
    第1次，patHash = 10 * 0 + 1 = 1
    第2次，patHash = 10 * 1 + 9 = 19
    第3次，patHash = 10 * 19 + 7 = 197
    
    每次都带上取模即可，大概是这么个思想。计算出2个 hash
  */
  for (let i = 0; i < m; i++) {
    txtHash = (D * txtHash + txt[i].codePointAt()) % Q
    patHash = (D * patHash + pat[i].codePointAt()) % Q
  }

  /* 
    计算出最高位的值，因为下面在进行滑动窗口时，会减去最高位的，再加上新的个位。
    注意到 highestPow 初始值是 1，所以循环到 m - 1

    还是十进制，以 1 9 7 为例，会循环 2 次，不考虑 % Q的情况，则 highestPow = 100
  */
  let highestPow = 1
  for (let i = 0; i < m - 1; i++) {
    highestPow = D * highestPow % Q
  }

  let i, j
  for (i = 0; i < n - m + 1; i++) {
    if (txtHash === patHash) {
      for (j = 0; j < m; j++) {
        if (txt[i + j] !== pat[j]) {
          break
        }
      }
      if (j === m) return i;
    }

    /* 
      这里要删除最高位，添加最低位。
      还是十进制，以 1 9 7 6为例，高位是 1，要添加的低位是 6，不考虑 % Q
      txtHash =  10 * (197 - 1 * 100) + 6 = 976

      就是因为这个 Hash 函数设计的巧妙，类似滑动窗口，每次减掉最高位，在到最低位加一个，
      从到保证了 txtHash 是以 O(1) 的时间复杂度更新，也就保证了该算法的时间复杂度是 O(N)
      最坏还是 O(MN)，平均是 O(N)
    */
    if (i < n - m) {
      txtHash = (D * (txtHash - txt[i].codePointAt() * highestPow) + txt[i+m].codePointAt()) % Q
      // 因为每次都取模 Q，可能会 < 0
      if (txtHash < 0) {
        txtHash += Q
      }
    }
  }
  return -1
}
console.log(rabinKarpSearch("abcabcabx", "abcabx"))
