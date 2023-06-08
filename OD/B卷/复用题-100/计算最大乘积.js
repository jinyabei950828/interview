const readline = require("readline")

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})


rl.on("line",line=>{
    const arr = line.split(",")
    console.log(getResult(arr))
})

function getResult(arr){
    let ans = 0
    const sets = arr.map(s=>new Set([...s]))

    for(let i=0;i<sets.length;i++){
        for(let j=i+1;j<sets.length;j++){
            if(disjoint(sets[i],sets[j])){
                ans = Math.max(ans,arr[i].length*arr[j].length)
            }
        }
    }
    return ans
}

function disjoint(set1,set2){
    for(let c of set1){
        if(set2.has(c))return false
    }
    return true
}