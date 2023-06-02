const readline = require("readline")

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.on("line",(line)=>{
    console.log(getResult(line))
})

function getResult(s){
    const cArr = []
    const eqs =[]

    let isOpen = false
    for(let i=0;i<s.length;i++){
        const c =s[i]
        if(c=="("){
            isOpen = true
            eqs.push(new Set())
        }else if(c==')'){
            isOpen = false
            if(eqs.at(-1).size==0)eqs.pop()
        }else{
            if(!isOpen)cArr.push(c)
            else eqs.at(-1).add(c)
        }
    }

    outer:while(true){
        for(let i=0;i<eqs.length;i++){
            for(let j=i+1;j<eqs.length;j++){
                if(canCombine(eqs[i],eqs[j])){
                    eqs[i] = new Set([...eqs[i],...eqs[j]])
                    eqs.splice(j,1)
                    continue outer
                }
            }
        }
        break
    }

    for(let eq of eqs){
        const t = [...eq].sort()[0]
        for(let i=0;i<cArr.length;i++){
            if(eq.has(cArr[i]))cArr[i] = t
        }
    }

    const ans = cArr.join("")
    return ans.length==0?"0":ans
}

function canCombine(set1,set2){
    for(let c=97;c<=122;c++){
        const lower = String.fromCharCode(c)
        const upper = String.fromCharCode(c-32)
        if((set1.has(lower)||set1.has(upper))&&(set2.has(lower)||set2.has(upper))){
            return true
        }
    }
    return false
}