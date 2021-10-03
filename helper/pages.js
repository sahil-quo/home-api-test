const constants = require("./constants");

function getPageData(page, hostUrl) {
  if (page in constants.pageContent) {
    let objects = constants.pageContent[`${page}`];
    let returnObject = {
      page: page,
      data: [],
    };

    for (const object of objects) {
      const array = require(`../json/${object.key}.json`);

      let newObject = {
        ...object,
        data: array,
      };

      delete newObject.key;

      newObject = JSON.parse(
        replaceAll(JSON.stringify(newObject), "localhost", hostUrl)
      );
      returnObject.data.push(newObject);
    }

    return returnObject;
  }
  return null;
}
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
}
function replaceAll(str, match, replacement) {
  return str.replace(new RegExp(escapeRegExp(match), "g"), () => replacement);
}
module.exports = getPageData;
