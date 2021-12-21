function convertToRoman(num) {
    let romanArray = [{
      1:'I',2:'II',3:'III',4:'IV',5:'V',6:'VI',7:'VII',8:'VIII',9:'IX',10:'X',20:'XX',30:'XXX',40:'XL',50:'L', 60:'LX', 70:'LXX', 80:'LXXX',90:'XC',100:'C',200:'CC',300:'CCC', 400:'CD', 500:'D',600:'DC',700:'DCC',800:'DCCC', 900:'CM',1000:'M', 2000:'MM',3000:'MMM',4000:'I̅V̅',5000:'V̅'
    }]
    let numArray = num.toString().split('')
    let nunArrayLength = numArray.length
    let units = numArray[nunArrayLength - 1]
    let tens = numArray[nunArrayLength - 2] * 10
    let hundreds = numArray[nunArrayLength - 3] * 100
    let thousands = numArray[nunArrayLength - 4] * 1000
    let mapArr = romanArray.map(el => (el[thousands]+el[hundreds]+el[tens]+el[units]))
    let romanNumber = mapArr.join().replace(/(NaN|undefined)/gi, '')
   return romanNumber  ;
  }
  
  convertToRoman(36);
  console.log(convertToRoman(4399))