/* 
  https://leetcode-cn.com/problems/word-ladder-ii/
*/
/**
 * 
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
  let wordSet = new Set(wordList)
  if (!wordSet.has(endWord)) return []

  const letterDict = []
  for (let i = 0; i < 26; i++) {
    letterDict.push(String.fromCharCode(i+97))
  }

  let retList = []
  let foundList = new Map()
  let isFound = bfs()
  
  if (!isFound) {
    retList
  }

  dfs(beginWord, [beginWord])
  return retList


  function bfs() {
    let visited = new Set([beginWord])
    let queue = [beginWord]
    let isFound = false
    let nextLevelVisited = new Set()

    while (queue.length) {
      let n = queue.length
      // 当前层的循环
      while (n-- > 0) {
        const currentStr = queue.shift()
        for (let i = 0; i < currentStr.length; i++) {
          for (const letter of letterDict) {
            const nextStr = currentStr.slice(0, i) + letter + currentStr.slice(i+1)
            if (wordSet.has(nextStr)) {
              if (!visited.has(nextStr)) {
                if (nextStr === endWord) {
                  isFound = true
                }
                /* 
                  这个判断，避免下层元素重复加入队列。
                  当前层 queue = [dog, log] 时，
                  shift 出 dog，nextStr === cog，进入下面的判断
                  再 shift 出 log 时，就不会进入下面的判断了，直接添加到了 foundList 中，
                */
                if (!nextLevelVisited.has(nextStr)) {
                  queue.push(nextStr)
                  nextLevelVisited.add(nextStr)
                }
                foundList.has(currentStr) ? foundList.get(currentStr).add(nextStr) : foundList.set(currentStr, new Set([nextStr]))
              }
            }
          }
        }
      }
      if (isFound) {
        break
      }
      // 当前层的所有元素出栈，再添加到 visited 中。因为当前层其中一个元素 currentLevel-1 找到下层元素B后，有可能 currentLevel-2 找到的下层元素也是B。
      visited = union(visited, nextLevelVisited)
      nextLevelVisited = new Set()
    }
  }

  function union(setA, setB) {
    let _union = new Set(setA);
    for (let elem of setB) {
        _union.add(elem);
    }
    return _union;
  }

  /* 
    以 'hit', 'cog', ["hot","dot","dog","lot","log","cog"] 为例，
    此时 foundList
    Map {
      'hit' => Set { 'hot' },
      'hot' => Set { 'dot', 'lot' },
      'dot' => Set { 'dog' },
      'lot' => Set { 'log' },
      'dog' => Set { 'cog' },
      'log' => Set { 'cog' }
    }
    所以，通过 dfs 将其组合为目标结构即可。
  */
  function dfs(currentWord, list) {
    if (currentWord === endWord) {
      retList.push([...list])
      return
    }
    const currentSet = foundList.get(currentWord)
    // 有可能还没有走到 endWord，就在 wordSet 中找不到符合的 nextWord 了。
    if (!currentSet) return

    for (const nextWord of currentSet) {
      list.push(nextWord)
      dfs(nextWord, list)
      list.pop(nextWord)
    }
  }
}

console.log(findLadders('hit', 'cog', ["hot","dot","dog","lot","log","cog"]))
// console.log(findLadders('hot', 'dog', ["hot","dog","dot"]))
// const list = ["kid","tag","pup","ail","tun","woo","erg","luz","brr","gay","sip","kay","per","val","mes","ohs","now","boa","cet","pal","bar","die","war","hay","eco","pub","lob","rue","fry","lit","rex","jan","cot","bid","ali","pay","col","gum","ger","row","won","dan","rum","fad","tut","sag","yip","sui","ark","has","zip","fez","own","ump","dis","ads","max","jaw","out","btu","ana","gap","cry","led","abe","box","ore","pig","fie","toy","fat","cal","lie","noh","sew","ono","tam","flu","mgm","ply","awe","pry","tit","tie","yet","too","tax","jim","san","pan","map","ski","ova","wed","non","wac","nut","why","bye","lye","oct","old","fin","feb","chi","sap","owl","log","tod","dot","bow","fob","for","joe","ivy","fan","age","fax","hip","jib","mel","hus","sob","ifs","tab","ara","dab","jag","jar","arm","lot","tom","sax","tex","yum","pei","wen","wry","ire","irk","far","mew","wit","doe","gas","rte","ian","pot","ask","wag","hag","amy","nag","ron","soy","gin","don","tug","fay","vic","boo","nam","ave","buy","sop","but","orb","fen","paw","his","sub","bob","yea","oft","inn","rod","yam","pew","web","hod","hun","gyp","wei","wis","rob","gad","pie","mon","dog","bib","rub","ere","dig","era","cat","fox","bee","mod","day","apr","vie","nev","jam","pam","new","aye","ani","and","ibm","yap","can","pyx","tar","kin","fog","hum","pip","cup","dye","lyx","jog","nun","par","wan","fey","bus","oak","bad","ats","set","qom","vat","eat","pus","rev","axe","ion","six","ila","lao","mom","mas","pro","few","opt","poe","art","ash","oar","cap","lop","may","shy","rid","bat","sum","rim","fee","bmw","sky","maj","hue","thy","ava","rap","den","fla","auk","cox","ibo","hey","saw","vim","sec","ltd","you","its","tat","dew","eva","tog","ram","let","see","zit","maw","nix","ate","gig","rep","owe","ind","hog","eve","sam","zoo","any","dow","cod","bed","vet","ham","sis","hex","via","fir","nod","mao","aug","mum","hoe","bah","hal","keg","hew","zed","tow","gog","ass","dem","who","bet","gos","son","ear","spy","kit","boy","due","sen","oaf","mix","hep","fur","ada","bin","nil","mia","ewe","hit","fix","sad","rib","eye","hop","haw","wax","mid","tad","ken","wad","rye","pap","bog","gut","ito","woe","our","ado","sin","mad","ray","hon","roy","dip","hen","iva","lug","asp","hui","yak","bay","poi","yep","bun","try","lad","elm","nat","wyo","gym","dug","toe","dee","wig","sly","rip","geo","cog","pas","zen","odd","nan","lay","pod","fit","hem","joy","bum","rio","yon","dec","leg","put","sue","dim","pet","yaw","nub","bit","bur","sid","sun","oil","red","doc","moe","caw","eel","dix","cub","end","gem","off","yew","hug","pop","tub","sgt","lid","pun","ton","sol","din","yup","jab","pea","bug","gag","mil","jig","hub","low","did","tin","get","gte","sox","lei","mig","fig","lon","use","ban","flo","nov","jut","bag","mir","sty","lap","two","ins","con","ant","net","tux","ode","stu","mug","cad","nap","gun","fop","tot","sow","sal","sic","ted","wot","del","imp","cob","way","ann","tan","mci","job","wet","ism","err","him","all","pad","hah","hie","aim","ike","jed","ego","mac","baa","min","com","ill","was","cab","ago","ina","big","ilk","gal","tap","duh","ola","ran","lab","top","gob","hot","ora","tia","kip","han","met","hut","she","sac","fed","goo","tee","ell","not","act","gil","rut","ala","ape","rig","cid","god","duo","lin","aid","gel","awl","lag","elf","liz","ref","aha","fib","oho","tho","her","nor","ace","adz","fun","ned","coo","win","tao","coy","van","man","pit","guy","foe","hid","mai","sup","jay","hob","mow","jot","are","pol","arc","lax","aft","alb","len","air","pug","pox","vow","got","meg","zoe","amp","ale","bud","gee","pin","dun","pat","ten","mob"]
// console.log(findLadders('cet', 'ism', list))
