const readline = require("readline")

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.on("line",line=>{
    console.log(getResult(line))
})

function getResult(s){
    const ip = s.split("#")

    if(ip.length!=4)return "invalid IP"

    if(!isValid(ip[0],1,128)||!isValid(ip[1],0,255)||!isValid(ip[2],0,255)||!isValid(ip[3],0,255))return "invalid IP"

    return parseInt(getHexStr(ip[0])+getHexStr(ip[1])+getHexStr(ip[2])+getHexStr(ip[3]),16)
}

function isValid(s,from,to){
    if(/[^0-9]/.test(s))return false

    const num = parseInt(s)
    if(num+""!=s)return false
    return num>=from && num<=to
}

function getHexStr(s){
    let hexStr = parseInt(s).toString(16)
    if(hexStr.length<2)hexStr='0'+hexStr
    return hexStr
}