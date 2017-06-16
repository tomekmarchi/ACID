//get characters in a range in a string
const insertInRange = $.insertInRange = (text, start, end, insert) => {
  return stringSliceCall(text, 0, start) + insert + stringSliceCall(text, end, getLength(text));
};
//start index from right of string
const rightString = $.rightString = function(text, a) {
  return text[getLength(text) - 1 - a];
};
const chunkString = $.chunkString = (string, size) => {
  return stringMatchCall(string, new regExp(`(.|[\r\n]){1, ${size}}`, 'g'));
};
$.initialString = (string) => {
  return string.slice(0, -1);
};
$.restString = (string) => {
  return string.slice(1, getLength(string));
};
