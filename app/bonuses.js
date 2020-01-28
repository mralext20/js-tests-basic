//Given the string "team number 2", transform and return the string in camelCase
let str = "team number 2"

function camelCase(str) {
  let ret = "";
  let flag;
  for (let i = 0; i < str.length; i++) {
    let letter = str[i]
    if (letter == ' ') {
      flag = true;
      continue;
    }
    if (flag) {
      ret += letter.toUpperCase();
      flag = false;
    } else {
      ret += letter;
    }

  }

  return ret;


}
