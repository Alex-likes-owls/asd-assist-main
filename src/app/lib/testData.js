const { default: aqData, mongaqData } = require("./aqData");
const { default: asrsData, mongasrsData } = require("./asrsData");
const { default: tasData, mongtasData } = require("./tas");

let testData = {
  aqTest: {
    english: aqData,
    mong: mongaqData,
  },
  asrsTest: {
    english: asrsData,
    mong: mongasrsData,
  },
  tasTest: {
    english: tasData,
    mong: mongtasData,
  },
};
export default testData;
