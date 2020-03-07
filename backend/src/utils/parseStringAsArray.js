// Don't repeat yourself always remember
module.exports = function parseArrayAsString(arrayAsString) {
  return arrayAsString.split(',').map((tech) => tech.trim());
};
