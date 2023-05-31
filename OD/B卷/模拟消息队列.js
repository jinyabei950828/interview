const readline = require('readline')

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const lines = []
rl.on("line",(line)=>{
    lines.push(line)
    if(lines.length==2){
        const pubArr = lines[0].split(" ").map(Number)
        const subArr = lines[1].split(" ").map(Number)
        getResult(pubArr,subArr)
        lines.length = 0
    }
})

function getResult(pubArr,subArr){
    // 发布者数组
    const publisher = []
    for(let i=0;i<pubArr.length;i+=2){
        publisher.push([pubArr[i],pubArr[i+1]])
    }

    // 订阅者数组
    const subscrier = []
    for(let j=0;j<subArr.length;j+=2){
        subscrier.push([subArr[j],subArr[j+1]])
    }

    // 按照升序排列
    publisher.sort((a,b)=>a[0]-b[0])

    //订阅者内容集合
    const subContent = new Array(subscrier.length).fill(0).map(()=>new Array())

    for(let [pubTime,pubContent] of publisher){
        //后面的订阅者优先级更高，因此可以倒序是实现优先级
        for(let j=subscrier.length-1;j>=0;j--){
            let [subTime,unSubTime] = subscrier[j]
            //订阅时刻<=发布时刻<取消订阅时刻
            if(pubTime>=subTime&&pubTime<unSubTime){
                //最高订阅者收到消息
                subContent[j].push(pubContent)
                break
            }
        }
    }
    for(let contents of subContent){
        if(contents.length == 0)console.log("-1")
        //注意空格分隔
        else console.log(contents.join(" "))
    }
}