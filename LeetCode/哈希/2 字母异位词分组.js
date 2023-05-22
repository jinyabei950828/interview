/**
 * @todo 字母异位词分组
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  var map = new Map()
  for(let i=0;i<strs.length;i++){
    let key = strs[i].split("").sort().join('')
    if(!map.get(key)){
      map.set(key,[])
    }
    map.get(key).push(strs[i])
  }
  return [...map.values()]
}
