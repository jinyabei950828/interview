const readline = require("readline")

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.on("line",(line)=>{
    const arr = line.split(",").map(Number)
    console.log(getResult(arr))
})

function getResult(arr){
    const stack = []
    const res = new Array(arr.length).fill(-1)

    findNextBig(arr,stack,res)

    if(stack.length!=1)findNextBig(arr,stack,res)

    return res.join(",")
}

function findNextBig(arr,stack,res){
    for(let i=0;i<arr.length;i++){
        const ele = arr[i]

        while(true){
            if(stack.length==0){
                stack.push([ele,i])
                break
            }else{
                const [peekEle,peekIdx] = stack.at(-1)

                if(ele>peekEle){
                    res[peekIdx] = ele
                    stack.pop()
                }else{
                    stack.push([ele,i])
                    break
                }
            }
        }
    }
}