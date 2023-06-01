const readline = require("readline")

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.on('line',(line)=>{
    const desk = line.split(",").map(Number)
    console.log(getResult(desk))
})

function getResult(desk){
    let ans = 0
    for(let i=0;i<desk.length;i++){
        if(desk[i]==0){
            const isLeftEmpty = i==0||desk[i-1]==0
            const isRightEmpty = i==desk.length-1||desk[i+1]==0

            if(isLeftEmpty&&isRightEmpty){
                ans++
                desk[i] = 1
                i++
            }
        }
    }
    return ans
}