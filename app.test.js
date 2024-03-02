const request = require("supertest");
const app = require("./app");
const fs = require("fs");

describe("7-1", () => {
  it("7-1.1 /simpleString", () => {
    return request(app)
      .get("/simpleString")
      .expect("Content-Type", /text/)
      .expect(200)
      .then((response) => {
        expect(response.text).toMatch("Hello World");
      });
  });

  it("7-1.2 /myAccount", () => {
    return request(app)
      .delete("/myAccount")
      .expect("Content-Type", /text/)
      .expect(200)
      .then((response) => {
        expect(response.text).toMatch("Deleted");
      });
  });

  it("7-1.3 /newComment", () => {
    return request(app)
      .post("/newComment")
      .expect(200)
      .then((response) => {
        expect(response.text).toMatch("Posted");
      });
  });
});

let data = {};
function randomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}

describe("7-2", () => {
  beforeAll(() => {
    data = JSON.parse(fs.readFileSync("./mockData.json", "utf8"));
  });
  it("7-2.1 /data", () => {
    return request(app)
      .get("/data")
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(data);
      });
  });
  it("7-2.2 /data/[id]", () => {
    const itemNum = randomIntFromInterval(0, data.length);
    const item = data.find((item) => item.id === itemNum);
    // console.log(item);
    return request(app)
      .get("/data/" + itemNum)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(item);
      });
  });
});
