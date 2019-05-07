var noPollutionJsonParser = JSON.parser;
var safeParser = function(jsonString, reviver) {
  jsonString = jsonString.replace(/"__proto__"/g, '"__________"');
  if(reviver) return noPollutionJsonParser(jsonString, reviver);
  else return noPollutionJsonParser(jsonString);
};
JSON.parse = safeParser;
