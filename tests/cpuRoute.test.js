const request = require("supertest");
const express = require("express");
const cpurouter = require("./../dataRoutes/cpuRoute");
const cpuModel = require("./../models/cpu");
const { MongoMemoryServer } = require("mongodb-memory-server");
const mongod = new MongoMemoryServer();
const mongoose = require("mongoose");

const app = express();
cpurouter(app);

let savedCpus1;

async function addFakeCpus() {
  const cpu1 = new cpuModel({
    id: 100,
    processor: "New Processor",
    model: "Gamma",
    variant: "Epsilon",
    price: 10000
  });
  savedCpus1 = await cpu1.save();
}

beforeAll(async () => {
  jest.setTimeout(100000);

  const uri = await mongod.getConnectionString();
  await mongoose.connect(uri);
});

beforeEach(async () => {
  mongoose.connection.db.dropDatabase();
  await addFakeCpus();
});

afterAll(() => {
  mongoose.disconnect();
  mongod.stop();
});

test("GET/:id", async () => {
  const response = await request(app).get("/cpu/" + savedCpus1._id);
  expect(response.status).toBe(200);
  expect(response.body.id).toEqual(savedCpus1.id);
});

test("POST/", async () => {
  const newCpu = {
    id: 99,
    processor: "New Processor 1",
    model: "Gamma Alpha Omega",
    variant: "Epsilon Theta Psi",
    price: 10099
  };
  const response = await request(app)
    .post("/cpu")
    .send(newCpu);
  expect(response.status).toBe(201);
  const cpus = await cpuModel.find();
  expect(cpus.length).toBe(2);
});

// test("PUT /:id should update book", async () => {
//   const id = "100";
//   const processor = `new ${processor}`;
//   const model = "Gamma";
//   const variant = "Epsilon";
//   const cpus = new cpuModel({ title: TITLE, summary: SUMMARY });

//   await cpuModel.save();

//   const response = await request(app)
//     .put(`/${book.id}`)
//     .send({ title: NEW_TITLE, summary: SUMMARY });

//   expect(response.status).toEqual(200);
//   expect(response.header["content-type"]).toContain("application/json");
//   expect(response.body.message).toEqual("book updated");
//   expect(response.body.cpuModel.id).toEqual(100);
//   expect(response.body.b.summary).toEqual(SUMMARY);
// });
