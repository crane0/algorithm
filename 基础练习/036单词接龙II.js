// 下面的解法，测试用例未完全跑通。。。
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
  let maxLength = 0
  let dfsList = [[beginWord, 1, '']]

  function bfs() {
    let hashMap = new Map()
    let listSet = new Set(wordList)
    console.log('listSet', listSet)
    if(!listSet.has(endWord)) return 0;
    if(listSet.has(beginWord)) listSet.delete(beginWord);
    let dict = new Set(wordList.join('').split(''))

    let queue = [[beginWord, 1]]
    while (queue.length > 0) {
      let [node, count] = queue.shift()
      if(node === endWord){
        maxLength = maxLength !== 0 ? maxLength : count
        continue
      }

      for (let [key, value] of hashMap.entries()) {
        if (value > count) {
          listSet.add(key)
        }
      }

      for (let i = 0; i < node.length; i++) {
        for (let j of dict) {
          let str= node.slice(0, i) + j + node.slice(i + 1)
          if (node === 'be') {
            console.log('listSet', JSON.stringify(listSet))
          }
          if (listSet.has(str)) {
            queue.push([str, count + 1])
            hashMap.set(str, count + 1)
            dfsList.push([str, count + 1, node])
            // listSet.delete(str)
            
            if (str !== endWord) {
              listSet.delete(str)
            }
          }
        }
      }
    }
    return maxLength
  }

  maxLength = bfs()
  console.log('maxLength', maxLength)
  // console.log('dfsList', dfsList)

  dfsList = dfsList.filter(item => {
    if (item[1] > maxLength || item[0] === item[2] || (item[1] === maxLength && item[0] !== endWord)) {
      return false
    } else {
      return true
    }
  })
  console.log('dfsList', JSON.stringify(dfsList))

  // 没有符合条件的
  if (maxLength === 0) {
    return []
  }

  // dfsList = [
  //   [ 'kiss', 1, '' ],
  //   [ 'miss', 2, 'kiss' ],
  //   [ 'diss', 2, 'kiss' ],
  //   [ 'muss', 3, 'miss' ],
  //   [ 'disk', 3, 'diss' ],
  //   [ 'muss', 4, 'muss' ],
  //   [ 'musk', 4, 'muss' ],
  //   [ 'dusk', 4, 'disk' ],
  //   [ 'tusk', 5, 'musk' ],
  //   [ 'tusk', 5, 'dusk' ]
  // ]

  var arrry= [dfsList[0]];
  for (var i = 1; i < dfsList.length; i++) {
      if (JSON.stringify(dfsList[i]) !== JSON.stringify(dfsList[i-1])) {
          arrry.push(dfsList[i]);
      }
  }
  dfsList =  arrry;

  let retList = []
  let begin = beginWord

  function dfs(beginWord, endWord, arr) {
    if (beginWord === endWord) {
      retList.push([begin, ...arr])
      return
    }

    for (const r of dfsList) {
      let [cur, level, parent] = r
      if (beginWord === parent) {
        arr.push(cur)
        dfs(cur, endWord, arr)
        arr.pop(cur)
      }
    }
  }

  dfs(beginWord, endWord, [])
  return retList
};

// console.log(findLadders("hit", "cog", ["hot","dot","dog","lot","log","cog"]))
/* 
  [
  [ 'hit', 'hot', 'dot', 'dog', 'cog' ],
  [ 'hit', 'hot', 'lot', 'log', 'cog' ]
]
*/
// console.log(findLadders("hit", "cog", ["hot","dot","dog","lot","log"])) // []
// console.log(findLadders("hot", "dog", ["hot","dog", "dot"])) // [ [ 'hot', 'dot', 'dog' ] ]
// console.log(findLadders("hot", "dog", ["hot","cog","dog","tot","hog","hop","pot","dot"])) 
// [["hot","dot","dog"],["hot","hog","dog"]]

// console.log(findLadders("hot", "dog", ["hot","dog"]))
// console.log(findLadders("red", "tax", ["ted","tex","red","tax","tad","den","rex","pee"]))
// console.log(findLadders("kiss", "tusk", ["miss","dusk","kiss","musk","tusk","diss","disk","sang","ties","muss"]))
console.log(findLadders("qa", "sq", ["si","go","se","cm","so","ph","mt","db","mb","sb","kr","ln","tm","le","av","sm","ar","ci","ca","br","ti","ba","to","ra","fa","yo","ow","sn","ya","cr","po","fe","ho","ma","re","or","rn","au","ur","rh","sr","tc","lt","lo","as","fr","nb","yb","if","pb","ge","th","pm","rb","sh","co","ga","li","ha","hz","no","bi","di","hi","qa","pi","os","uh","wm","an","me","mo","na","la","st","er","sc","ne","mn","mi","am","ex","pt","io","be","fm","ta","tb","ni","mr","pa","he","lr","sq","ye"]))

// "qa"
// "sq"
// ["si","go","se","cm","so","ph","mt","db","mb","sb","kr","ln","tm","le","av","sm","ar","ci","ca","br","ti","ba","to","ra","fa","yo","ow","sn","ya","cr","po","fe","ho","ma","re","or","rn","au","ur","rh","sr","tc","lt","lo","as","fr","nb","yb","if","pb","ge","th","pm","rb","sh","co","ga","li","ha","hz","no","bi","di","hi","qa","pi","os","uh","wm","an","me","mo","na","la","st","er","sc","ne","mn","mi","am","ex","pt","io","be","fm","ta","tb","ni","mr","pa","he","lr","sq","ye"]


// [["qa","ga","go","so","sq"],
// ["qa","ga","go","ge","se","sq"],
// ["qa","ga","ge","se","sq"],
// ["qa","ca","ci","si","sq"],
// ["qa","ca","ci","cr","sr","sq"],
// ["qa","ca","co","cr","sr","sq"],
// ["qa","ca","cm","sm","sq"],
// ["qa","ca","cm","cr","sr","sq"],
// ["qa","ca","cr","sr","sq"],
// ["qa","ma","mi","mn","sn","sq"],
// ["qa","ma","mo","mn","sn","sq"],
// ["qa","ma","me","ge","se","sq"],
// ["qa","ma","me","mn","sn","sq"],
// ["qa","ma","mt","st","sq"],
// ["qa","ma","mt","mn","sn","sq"],["qa","ma","mb","sb","sq"],["qa","ma","mb","mn","sn","sq"],["qa","ma","mr","mn","sn","sq"],["qa","ma","mn","sn","sq"],["qa","pa","ph","sh","sq"],["qa","ta","tc","sc","sq"]]


// [["qa","ba","be","se","sq"],
// ["qa","ba","bi","si","sq"],
// ["qa","ba","br","sr","sq"],
// ["qa","ca","cm","sm","sq"],
// ["qa","ca","co","so","sq"],["qa","la","ln","sn","sq"],["qa","la","lt","st","sq"],["qa","ma","mb","sb","sq"],["qa","pa","ph","sh","sq"],["qa","ta","tc","sc","sq"],["qa","fa","fe","se","sq"],["qa","ga","ge","se","sq"],["qa","ha","he","se","sq"],["qa","la","le","se","sq"],["qa","ma","me","se","sq"],["qa","na","ne","se","sq"],["qa","ra","re","se","sq"],["qa","ya","ye","se","sq"],["qa","ca","ci","si","sq"],["qa","ha","hi","si","sq"],["qa","la","li","si","sq"],["qa","ma","mi","si","sq"],["qa","na","ni","si","sq"],["qa","pa","pi","si","sq"],["qa","ta","ti","si","sq"],["qa","ca","cr","sr","sq"],["qa","fa","fr","sr","sq"],["qa","la","lr","sr","sq"],["qa","ma","mr","sr","sq"],["qa","fa","fm","sm","sq"],["qa","pa","pm","sm","sq"],["qa","ta","tm","sm","sq"],["qa","ga","go","so","sq"],["qa","ha","ho","so","sq"],["qa","la","lo","so","sq"],["qa","ma","mo","so","sq"],["qa","na","no","so","sq"],...