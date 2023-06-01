const readline = require('readline')

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const lines = []
let n
rl.on("line",line=>{
    lines.push(line)
    if(lines.length===1){
        n = lines[0] -0
    }
    if(n&&lines.length==n+1){
        lines.shift()

        const lights = lines.map(line=>{
            const [id,x1,y1,x2,y2] = line.split(" ").map(Number)
            return new Light(id,(x1+x2)>>1,(y1+y2)>>1,(x2-x1)>>1)
        })

        console.log(getResult(lights))

        lines.length = 0
    }
})

class Light{
    constructor(id,x,y,r){
        this.id = id
        this.x = x
        this.y = y
        this.r = r
    }
}

function getResult(lights){
    // 按照圆心坐标升序
    lights.sort((a,b)=>a.y-b.y)

    const ans = []

    //记录同一行的灯
    const sameRowLights = []
    let base = lights[0]
    sameRowLights.push(base)

    for(let i=1;i<lights.length;i++){
        const light = lights[i]
        
        if(light.y-base.y<=base.r){
            sameRowLights.push(light)
        }else{
            //再重新排序(按纵坐标升序进行排列)
            sameRowLights.sort((a,b)=>a.x-b.x).forEach(a=>ans.push(a.id))
            sameRowLights.length = 0

            //开始新的一行记录
            base = light
            sameRowLights.push(base)
        }   
    }
    //最后一行
    if(sameRowLights.length>0){
        sameRowLights.sort((a,b)=>a.x-b.x).forEach((a)=>ans.push(a.id))
        sameRowLights.length = 0
    }

    return ans.join(" ")
}