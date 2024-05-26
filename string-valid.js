/**
 * Takes a string, returns true of false
 * https://rune-taurus-c3a.notion.site/Mock-Interview-dd069edb04204237af06fd7467f509aa
 * @param {string} str
 * @returns boolean
 */
export function insertingString(str) {
  if (str == "") {
    return "abc";
  }

  let strSplit = str.split("");
  let subStrings = "";

  if (strSplit.length > 2) {
    for (let i = 0; i < strSplit.length; i++) {
      let subString = strSplit[i] + strSplit[i + 1] + strSplit[i + 2];

      subStrings += strSplit[i];

      if (subString === "abc") {
        strSplit.splice([i], 3);
        return insertingString(strSplit.join(""));
      }
    }
    return true;
  }
  if (strSplit.length === 2) {
    return false;
  }
}
