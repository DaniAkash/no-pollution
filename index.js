var noPollutionDefaultJsonParser = JSON.parse;
var safeParser = function(jsonString, reviver) {
  return noPollutionDefaultJsonParser(jsonString? jsonString.replace(/"__proto__"/g, '"__pollutants__"'): jsonString, reviver);
};
JSON.parse = safeParser;
