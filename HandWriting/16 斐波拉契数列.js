function fb(n,num1=1,num2=1){
  if(n==0)return 0
  if(n<=2){
    return num2
  }else{
    return fb(n-1,num2,num1+num2)
  }
}