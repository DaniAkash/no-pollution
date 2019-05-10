var noPollutionDefaultJsonParser = JSON.parse;
var safeParser = function(jsonString, reviver) {
  return noPollutionDefaultJsonParser(typeof jsonString === "string"? jsonString.replace(/"__proto__"/g, '"__pollutants__"'): jsonString, reviver);
};
JSON.parse = safeParser;
