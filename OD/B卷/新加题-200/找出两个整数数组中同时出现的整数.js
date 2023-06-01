const readline = require('readline')

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const lines = []
rl.on("line",line=>{
    lines.push(line)

    if(lines.length==2){
        const arr1 = lines[0].split(",").map(Number)
        const arr2 = lines[1].split(",").map(Number)
        getResult(arr1,arr2)
        lines.length = 0
    }
})

function getResult(arr1,arr2){
    //统计arr1中数字出现的次数
    const count1 = new Map()

    for(let num of arr1){
        count1.set(num,(count1.get(num)||0)+1)
    }
    
    const count2 = new Map()
    for(let num of arr2){
        count2.set(num,(count2.get(num)||0)+1)
    }

    let noSameNum = true
    //记录arr1和arr2相同的数字
    const sameCountNums = new Map()

    for(let num of count1.keys()){
        if(count2.get(num)!==undefined){
            noSameNum = false
            const count = Math.min(count1.get(num),count2.get(num))

            sameCountNums.set(count,sameCountNums.get(count)||[])
            sameCountNums.get(count).push(num)
        }
    }

    if(noSameNum){
        console.log("NULL")
        return
    }

    [...sameCountNums.keys()].sort((a,b)=>a-b).forEach(count=>{
        console.log(
            `${count}:${sameCountNums.get(count).sort((a,b)=>a-b).join(",")}`
        )
    })

}