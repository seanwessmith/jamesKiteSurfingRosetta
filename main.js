const moment = require("moment");
const path =
  "M2.0 128.3L2.9 87.1L3.2 152.6L4.1 128.9L4.3 104.5L4.7 101.5L4.9 140.6L6.2 136.8L6.5 118.1L6.6 137.1L8.4 100.3L8.6 135.9L9.2 121.1L9.7 105.6L10.7 155.0L10.9 100.6L11.2 177.9L11.5 194.1L11.8 81.7L13.1 67.7L13.2 167.0L14.4 47.0L15.1 167.0L15.5 177.4L15.6 109.7L16.5 73.6L16.8 193.2L17.7 156.0L17.9 90.3L18.5 168.2L18.8 84.1L19.8 156.6L20.1 101.1L20.5 92.6L22.0 155.6L22.2 83.7L22.3 147.3L23.3 181.9L23.9 71.7L24.5 108.3L24.6 178.7L25.0 185.0L25.2 71.9L26.7 157.9L26.8 159.3L27.0 70.8L27.2 173.7L29.0 176.6L29.0 81.6L";

const main = (startTime, endTime) => {
  const startTimeMoment = moment(startTime, "YYYY-MM-DD HH:mm:ss");
  const endTimeMoment = moment(endTime, "YYYY-MM-DD HH:mm:ss");
  const pathArray = path
    .split("M")[1]
    .split("L")
    .map((v) => parseFloat(v.split(" ")[0]))
    .filter(v => !Number.isNaN(v));
  const maxTime = Math.max.apply(null, pathArray);
  const timeRatio = endTimeMoment.diff(startTimeMoment, "milliseconds") / maxTime;
  console.log(maxTime);
  console.log(timeRatio);
  const timeArray = [];
  for (const x of pathArray) {
    timeArray.push(startTimeMoment.clone().add(x * timeRatio, "milliseconds").format("YYYY-MM-DD HH:mm:ss"));
  }
  console.log('timeArray: ', timeArray);
};

const startTime = "2021-11-30T11:36:13.000Z";
const endTime = "2021-11-30T12:36:13.000Z";
main(startTime, endTime);
