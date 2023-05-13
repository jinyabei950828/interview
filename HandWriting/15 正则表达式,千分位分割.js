function thousand(num){
  //?=匹配某样东西的前面
  return (num+"").replace(/\d(?=(\d{3})+$)/g,"$&,")
}