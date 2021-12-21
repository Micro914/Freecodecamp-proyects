function palindrome(str) {
  return str.replace(/(_)|([^\w])/g, "").toLowerCase() ==
    str
      .split("")
      .reverse()
      .join("")
      .replace(/(_)|([^\w])/g, "")
      .toLowerCase()
    ? true
    : false;
}

palindrome("eye");
console.log(palindrome("five|_/|four"));
