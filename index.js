
exports = module.exports = trim;

function trim(str){
  if (typeof str.trim === "function") {
    return str.trim();
  }

  return trimLeft(trimRight(str));
}

exports.left = function(str){
  if (typeof str.trimStart === "function") {
    return str.trimStart();
  }

  return typeof str.trimLeft === "function" ? str.trimLeft() : trimLeft(str);
};

exports.right = function(str){
  if (typeof str.trimEnd === "function") {
    return str.trimEnd();
  }

  return typeof str.trimRight === "function" ? str.trimRight() : trimRight(str);
};

var getFirstNonSpaceIndex = function(str, isRightTrim) {
  if (isEmpty(str)) {
    return -1;
  }

  if (isRightTrim) {
    var nonSpaceIndex = str.length - 1;
    while (nonSpaceIndex > -1) {
      if (isSpaceChar(str[nonSpaceIndex])) {
        nonSpaceIndex--;
        continue;
      }

      return nonSpaceIndex;
    }
  }

  var nonSpaceIndex = 0;
  var maxLength = str.length;
  while (nonSpaceIndex < maxLength) {
    if (isSpaceChar(str[nonSpaceIndex])) {
      nonSpaceIndex++;
      continue;
    }

    break;
  }

  return nonSpaceIndex >= maxLength ? -1 : nonSpaceIndex;
}

var isEmpty = function (str) {
  return typeof str !== "string" || str.length === 0;
}

var isSpaceChar = function (char) {
  return [" ", "\n", "\r"].indexOf(char) !== -1;
}

var trimLeft = function(str) {
  if (isEmpty(str) || !isSpaceChar(str[0])) {
    return str;
  }

  var nonSpaceIndex = getFirstNonSpaceIndex(str, false);
  if (nonSpaceIndex < 0) {
    return "";
  }

  return str.slice(nonSpaceIndex, str.length);
}

var trimRight = function(str) {
  if (isEmpty(str) || !isSpaceChar(str[str.length - 1])) {
    return str;
  }

  var nonSpaceIndex = getFirstNonSpaceIndex(str, true);
  if (nonSpaceIndex < 0) {
    return "";
  }

  var firstSpaceIndexFromTheEnd = nonSpaceIndex + 1;
  return str.slice(0, firstSpaceIndexFromTheEnd);
}