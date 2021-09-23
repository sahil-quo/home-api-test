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
        JSON.stringify(newObject).replaceAll("localhost", hostUrl)
      );
      returnObject.data.push(newObject);
    }

    return returnObject;
  }
  return null;
}
module.exports = getPageData;
