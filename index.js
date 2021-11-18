var noPollutionDefaultJsonParser = JSON.parse;
var safeParser = function(jsonString, reviver) {
  return noPollutionDefaultJsonParser(typeof jsonString === "string" ? jsonString.replace(/(\\u5f|_){1,2}proto(\\u5f|_){1,2}(?=["']+[\s:]+[{"'])/g, '__pollutants__') : jsonString, reviver);
};
JSON.parse = safeParser;
