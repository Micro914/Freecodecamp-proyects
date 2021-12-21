/* Valid formats
555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
*/
function telephoneCheck(str) {
  let regex = new RegExp(
    /(\d{3}-\d{3}-\d{4})|(\d{3} \d{3} \d{4})|(\(\d{3}\) \d{3}-\d{4})|(\(\d{3}\)\d{3}-\d{4})|(\d{10})|(1 \d{3} \d{3} \d{4})|(1 \d{3}-\d{3}-\d{4})|(1 \(\d{3}\) \d{3}-\d{4})|(1\(\d{3}\)\d{3}-\d{4})/,
    "g"
  );
  return str.match(regex) == null
    ? false
    : str.match(regex).join() == str
    ? true
    : false;
}

telephoneCheck("555-555-5555");
console.log(telephoneCheck("555-5555"));
