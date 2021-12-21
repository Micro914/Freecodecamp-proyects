function rot13(str) {
  let newArr = str.trim().split('')
  let charCode = newArr.map(letter => letter.charCodeAt()-13)
  let newStr = []
  for ( let i = 0; i<charCode.length; i++){
    if(charCode[i]<=64){
      newStr.push(String.fromCharCode(charCode[i]+26))
    }
    if(charCode[i]>64){
      newStr.push(String.fromCharCode(charCode[i]))
    }
    
  }
  return newStr.join('').replace(/\d|[:=><@]/gi,'').replace(/[.]/gi,'!').replace(/L$/gi,'?').replace(/[;]/gi,'.').replace(/-/gi,' ')

}

rot13("SERR PBQR PNZC");
console.log(rot13("SERR YBIR?"))