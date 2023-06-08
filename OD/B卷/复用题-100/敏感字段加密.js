const readline = require("readline")

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const lines = []
rl.on("line",line=>{
    lines.push(line)
    if(lines.length===2){
        const k = parseInt(lines[0])
        const s = lines[1]
        console.log(getResult(s,k))
        lines.length = 0
    }
})

function getResult(s,k){
    let stack = []
    let result = []
    for(let i=0;i<s.length;i++){
        if(s[i]==="_"&&stack[0]!='"'){
            result.push(stack.join(""));
            stack.length = 0
        }else if(s[i]==='"'&&stack.length!==0){
            result.push(stack.join("")+'"')
            stack.length = 0
        }else{
            stack.push(s[i])
        }
    }
 
    if(stack.length)result.push(stack.join(""))
    result = result.filter(ele=>ele!=="")

    if(k>result.length-1)return "ERROR"
    result[k] = "******"
    return result.join("_")
}