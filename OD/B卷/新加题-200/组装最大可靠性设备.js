const readline = require("readline")

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const lines = []
// s 预算 、n 原件 、total:行数
let s,n,total

rl.on("line",(line)=>{
    lines.push(line)

    if(lines.length===2){
        [s,n] = lines[0].split(" ").map(Number)
        total = lines[1] - 0
    }
    if(total!=undefined&&lines.length===total+2){
        lines.shift()
        lines.shift()

        //记录各种类
        const kinds = new Array(n).fill(0).map(()=>new Array())
        //记录所有器件的可靠性
        const reliabilities = new Set()

        lines.map(s=>s.split(" ").map(Number)).forEach(arr=>{
            // type:种类 reliability:可靠性 price:价格 
             const [type,reliability,price] = arr
            // 将器件加入到对应的种类下
             kinds[type].push(new Device(reliability,price))
            // 收集到该器物的可靠性
            reliabilities.add(reliability)
        })

        console.log(getResult(kinds,s,reliabilities))
        lines.length = 0
    }
})

class Device{
    constructor(reliability,price){
        this.reliability = reliability
        this.price = price
    }
}

function getResult(kinds,s,reliabilities){
    // 记录题解
    let ans = -1

    // 按照种类的器件,可靠性升序
    for(let kind of kinds){
        kind.sort((a,b)=>a.reliability-b.reliability)
    }

    // 将所有器物的可靠性集合,变成数组,并将可靠性升序
    const maybe = [...reliabilities].sort((a,b)=>a-b)

    let low = 0
    let high = maybe.length - 1

    while(low<=high){
        const mid = (low+high)>>1
        //如果所有种类的器件都能选到
        if(check(kinds,maybe[mid],s)){
            ans = maybe[mid]
            low = mid + 1
        }else{
            high = mid - 1
        }
    }

    return ans
}

function check(kinds,reliability,s){
    //价格
    let sumPrice = 0

    for(let kind of kinds){
        //找到可靠性器件
        let idx = binarySearch(kind,reliability)
        //idx是一个插入位置
        if(idx<0) idx = -idx - 1
        //可靠性都低于maxReliability,因此kind选取不到
        if(idx == kind.length) return false
        //计算价格到总价
        sumPrice += kind[idx].price
    }

    return sumPrice <= s
}

function binarySearch(kind,target){
    let low = 0
    let high = kind.length - 1

    while(low<=high){
        const mid = (low+high)>>1
        const device = kind[mid]

        if(device.reliability>target){
            high = mid -1
        }else if(device.reliability<target){
            low = mid +1
        }else{
            return mid
        }
    }

    return -low -1
}

