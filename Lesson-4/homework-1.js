function replaceString(string, valueToReplace, valueToReplaceWith){
      return string.split(valueToReplace).join(valueToReplaceWith);
}

console.log(replaceString("Dogs Are Better Than Cats", "Are", "Aren't"));