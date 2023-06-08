const readline = require("readline")

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const lines = []
rl.on("line",line=>{
    lines.push(line)
    if(lines.length==2){
        let k = parseInt(lines[0])
        let s = lines[1]
        console.log(getResult(s,k))
        lines.length = 0
    }
})

function getResult(s,k){
    const arr = s.split("-")

    const ans = []
    ans.push(arr[0])

    const newStr = arr.slice(1).join("")
    for(let i=0;i<newStr.length;i+=k){
        const subStr = newStr.slice(i,i+k)
        ans.push(convert(subStr))
    }
    return ans.join("-")
}

function convert(s){
    let lowerCount = 0
    let upperCount = 0

    for(let i=0;i<s.length;i++){
        if(s[i]>='a'&&s[i]<='z')lowerCount++
        else if(s[i]>='A'&&s[i]<='Z')upperCount++
    }

    if(lowerCount>upperCount)return s.toLowerCase()
    else if(lowerCount<upperCount)return s.toUpperCase()
    else return s
}