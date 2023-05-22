console.log(1);

new Promise(function(){//此处没有resolve，reject参数，所以会报未定义错误
    console.log(2);
    resolve(3);
}).then((res)=>{
    console.log(res);
});

setTimeout(function(){
    console.log(4);
},0);

console.log(5);

//1->2->5->4