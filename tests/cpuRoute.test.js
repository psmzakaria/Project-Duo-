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

test("GET /cpu should return back all the cpus in the test DB", async () => {
  const response = await request(app).get("/cpu");
  const expectedCpus = await cpuModel.find();

  expect(response.status).toBe(200);
  expect(response.body.length).toEqual(expectedCpus.length);
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

test.only("PUT /cpu should update the cpus with a given id the test DB", async () => {
  const updateCpu = { processor: "AMD Ryzen New" };
  const response = await request(app)
    .put("/cpu/" + savedCpus1._id)
    .send(updateCpu);
  const updatedCpu = await cpuModel.findById(savedCpus1._id);

  expect(response.status).toBe(204);
  expect(updatedCpu.processor).toEqual(updateCpu.processor);
});

test("Delete/ a cpu with a given id should be deleted from the test DB", async () => {
  const response = await request(app).delete("/cpu/" + savedCpus1._id);
  const deleteCpu = await cpuModel.findById(savedCpus1._id);

  expect(response.status).toBe(204);
  expect(deleteCpu).toBeNull;
});
