const request = require("supertest");
const app = require("./app");
const bodyParser = require("body-parser");
app.use(bodyParser());

test("GET / should return Hello World!", async () => {
  const response = await request(app).get("/");
  expect(response.status).toEqual(200);
  expect(response.body).toEqual("Hello World!");
});
