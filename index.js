var noPollutionDefaultJsonParser = JSON.parse;
var safeParser = function(jsonString, reviver) {
  return noPollutionDefaultJsonParser(typeof jsonString === "string" ? jsonString.replace(/(\\x5f|_|\\_){2}proto(\\x5f|_|\\_){2}(?=["']+[\s:]+[{"'])/g, '__pollutants__') : jsonString, reviver);
};
JSON.parse = safeParser;
