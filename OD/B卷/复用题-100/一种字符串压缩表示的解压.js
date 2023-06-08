const readline = require("readline")

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.on("line",line=>{
    console.log(getResult(line))
})

function getResult(str){
    const back_str = str

    if(/[^a-z0-9]/.test(str))return '!error'
    
    const regExp = /(\d+)([a-z])?/g

    while(true){
        const res = regExp.exec(str)
        if(!res)break

        const src = res[0]
        const repeat_time = res[1] - 0

        if(repeat_time<=2)return '!error'

        const repeat_content =res[2]
        if(!repeat_content)return '!error'
        const tar = new Array(repeat_time).fill(repeat_content).join("")
        str = str.replace(src,tar)
    }
    if(zip(str)!=back_str)return '!error'
    return str
}

function zip(str){
    str+="-"
    const ans = []
    const stack = []
    let repeat = 0

    for(let c of str){
        if(stack.length==0){
            stack.push(c)
            repeat++
            continue
        }

        const top = stack.at(-1)
        if(top==c){
            repeat++
            continue
        }

        if(repeat>2){
            ans.push(`${repeat}${top}`)
        }else{
            ans.push(...new Array(repeat).fill(top))
        }
        stack.length = 0
        stack.push(c)
        repeat = 1
    }
    return ans.join("")
}