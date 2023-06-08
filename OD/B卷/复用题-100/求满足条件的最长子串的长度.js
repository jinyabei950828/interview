const readline = require("readline")

const  rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.on("line",line=>{
    console.log(getResult(line))
})

function getResult(s){
    let maxLen = -1
    let l=0,r =0
    let hasLetter = false

    const letterIdx = []

    while(r<s.length){
        if(isLetter(s[r])){
            hasLetter = true
            letterIdx.push(r)

            if(letterIdx.length>1){
                l = letterIdx.shift()+1
            }

            if(r==l){
                r++
                continue
            }
        }
        maxLen = Math.max(maxLen,r-l+1)
        r++
    }
    if(!hasLetter)return -1
    return maxLen
}

function isLetter(c){
    return (c>='a'&&c<='z')||(c>='A'&&c<='Z')
}