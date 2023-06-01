function getResult(children,cap,target){
  let ans = 0

  const stack = []
  stack.push(target)

  while(stack.length>0){
   const id = stack.pop()
   //目录id为空，循环结束
   if(cap.get(id)===undefined)continue
   ans += cap.get(id)
   stack.push(...children.get(id))
  }
  return ans
}