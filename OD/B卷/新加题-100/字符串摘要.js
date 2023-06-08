const readline = require("readline")

const rl =  readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.on("line",line=>{
    console.log(getResult(line))
})

function getResult(s){
    s =s.toLowerCase()

    const count = {}
    const letters = []

    for(let c of s){
        if(c>='a'&&c<='z'){
            count[c] = (count[c]||0)+1
            letters.push(c)
        }
    }

    s = letters.join("")+" "

    const ans = []
    let pre = s[0]
    let repeat = 1
    count[pre]--
    for(let i=1;i<s.length;i++){
        const cur = s[i]
        count[cur]--
        if(cur==pre){
            repeat++
        }else{
            ans.push([pre,repeat>1?repeat:count[pre]])
            pre = cur
            repeat = 1
        }
    }

    return ans
        .sort((a,b)=>
            a[1]!=b[1]?b[1]-a[1]:a[0].charCodeAt()-b[0].charCodeAt()).map(([letter,num])=>letter+num).join("")
}