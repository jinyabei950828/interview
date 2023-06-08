const readline = require("readline")

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const lines = []

rl.on("line",line=>{
    lines.push(line)
    if(lines.length==2){
        const arr = lines[0].split(",").map(Number)
        const sum = parseInt(lines[1])
        console.log(getMaxLen(arr,sum))
        lines.length = 0
    }
})

function getMaxLen(arr,sum){
    let ans = -1
    let l=0,r=0,n=arr.length
    let total = arr[l]
    while(true){
        if(total>sum){
            l++
            total-=arr[l-1]
            if(l<n&&r<l){
                r = l
                total+=arr[r]
            }
        }else if(total<sum){
            r++
            if(r<n)total+=arr[r]
            else break;
        }else{
            ans = Math.max(ans,r-l+1)
            l++
            r++
            if(r<n)total+=arr[r]-arr[l-1]
            else break
        }
    }
    return ans
}