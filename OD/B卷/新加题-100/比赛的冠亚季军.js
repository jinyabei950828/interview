const readline = require("readline")

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.on("line",(line)=>{
    const sports = line.split(" ").map(Number).map((val,idx)=>new Sport(idx,val))
    console.log(getResult(sports))
})

function getResult(sports){
    const ans = []
    promote(sports,ans)

    while(ans[0].length>1){
        promote(ans.shift(),ans)
    }

    const first  = ans[0][0].id
    const second = ans[1][0].id

    ans[2].sort((a,b)=> a.strength!=b.strength?b.strength-a.strength:a.id-b.id)
    const third = ans[2][0].id
    
    
    return `${first} ${second} ${third}`
}

function promote(sports,ans){
    const win = []
    const fail = []

    for(let i=1;i<sports.length;i+=2){
        const major = sports[i]
        const minor = sports[i-1]

        if(major.strength>minor.strength){
            win.push(major)
            fail.push(minor)
        }else{
            win.push(minor)
            fail.push(major)
        }
    }

    if(sports.length%2!=0){
        win.push(sports.at(-1))
    }

    ans.unshift(fail)
    ans.unshift(win)

    while(ans.length>3) ans.pop()
}

class Sport{
    constructor(id,strength){
        this.id = id
        this.strength = strength
    }
}