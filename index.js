var noPollutionDefaultJsonParser = JSON.parse;
var safeParser = function(jsonString, reviver) {
  return noPollutionDefaultJsonParser(typeof jsonString === "string" ? jsonString.replace(/(_|\\_|[\\u05fFx]+){2}proto(_|\\_|[\\u05fFx]+){2}(?=["']+[\s:]+[{"'])/g, '__pollutants__') : jsonString, reviver);
};
JSON.parse = safeParser;
