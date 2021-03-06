var seeder = require("mongoose-seed");

// Connect to MongoDB via Mongoose
seeder.connect(
  process.env.MONGODB_URI || "mongodb://localhost/mongoDB-computers",
  function() {
    // Load Mongoose models
    seeder.loadModels(["models/cpu.js"]);

    // Clear specified collections
    seeder.clearModels(["CpuModel"], function() {
      // Callback to populate DB once collections have been cleared
      seeder.populateModels(data, function() {
        seeder.disconnect();
      });
    });
  }
);

// Data array containing seed data - documents organized by cpuModel
var data = [
  {
    model: "CpuModel",  
    documents: [
      {
        id: 1,  
        processor: "AMD Ryzen",
        model: "3",
        varaint: "1200",
        price: 148
      },
      {
        id: 2,
        processor: "AMD Ryzen",
        model: "3",
        varaint: "1300X",
        price: 177
      },
      {
        id: 3,
        processor: "AMD Ryzen",
        model: "5",
        varaint: "1400",
        price: 225
      },
      {
        id: 4,
        processor: "AMD Ryzen",
        model: "5",
        varaint: "1500X",
        price: 233
      },
      {
        id: 5,
        processor: "AMD Ryzen",
        model: "5",
        varaint: "1600",
        price: 262
      },
      {
        id: 6,
        processor: "AMD Ryzen",
        model: "5",
        varaint: "1600X",
        price: 300
      },
      {
        id: 7,
        processor: "AMD Ryzen",
        model: "7",
        varaint: "1700",
        price: 433
      },
      {
        id: 8,
        processor: "AMD Ryzen",
        model: "7",
        varaint: "1700X",
        price: 449
      },
      {
        id: 9,
        processor: "AMD Ryzen",
        model: "7",
        varaint: "1800X",
        price: 494
      },
      {
        id: 10,
        processor: "AMD Ryzen",
        model: "3",
        varaint: "2200G",
        price: 141
      },
      {
        id: 11,
        processor: "AMD Ryzen",
        model: "5",
        varaint: "2400G",
        price: 227
      },
      {
        id: 12,
        processor: "AMD Ryzen",
        model: "5",
        varaint: "2600",
        price: 278
      },
      {
        id: 13,
        processor: "AMD Ryzen",
        model: "5",
        varaint: "2600X",
        price: 316
      },
      {
        id: 14,
        processor: "AMD Ryzen",
        model: "7",
        varaint: "2700",
        price: 431
      },
      {
        id: 15,
        processor: "AMD Ryzen",
        model: "7",
        varaint: "2700X",
        price: 462
      },
      {
        id: 16,
        processor: "AMD Threadripper",
        model: "1950",
        varaint: "1950X",
        price: 1279
      },
      {
        id: 17,
        processor: "Intel BX80684I78700K",
        model: "i7",
        varaint: "8700K",
        price: 504
      },
      {
        id: 18,
        processor: "Intel BX80684I78700",
        model: "i7",
        varaint: "8700",
        price: 422
      },
      {
        id: 19,
        processor: "Intel BX80684I58600K",
        model: "i5",
        varaint: "8600k",
        price: 357
      },
      {
        id: 20,
        processor: "Intel BX80684I58600",
        model: "i5",
        varaint: "8600",
        price: 308
      },
      {
        id: 21,
        processor: "Intel BX80684I58500",
        model: "i5",
        varaint: "8500",
        price: 275
      },
      {
        id: 22,
        processor: "Intel BX80684I58400",
        model: "i5",
        varaint: "8400",
        price: 248
      },
      {
        id: 23,
        processor: "Intel BX80684I38350K",
        model: "i3",
        varaint: "8350K",
        price: 247
      },
      {
        id: 24,
        processor: "Intel BX80684I38300",
        model: "i3",
        varaint: "8300",
        price: 203
      },
      {
        id: 25,
        processor: "Intel BX80684I38100",
        model: "i3",
        varaint: "8100",
        price: 154
      },
      {
        id: 26,
        processor: "Intel BX80684I78086K",
        model: "i7",
        varaint: "8086K",
        price: 593
      },
      {
        id: 27,
        processor: "Intel Original LGA1151 ",
        model: "null",
        varaint: "G4400",
        price: 68
      },
      {
        id: 28,
        processor: "Intel Original LGA1151",
        model: "null",
        varaint: "G4560",
        price: 97
      },
      {
        id: 29,
        processor: "Intel Original LGA1151",
        model: "i3",
        varaint: "7100",
        price: 156
      },
      {
        id: 30,
        processor: "Intel Original LGA1151",
        model: "i5",
        varaint: "7400",
        price: 238
      },
      {
        id: 31,
        processor: "Intel Original LGA1151",
        model: "i5",
        varaint: "7500",
        price: 272
      },
      {
        id: 32,
        processor: "Intel Original LGA1151",
        model: "i5",
        varaint: "7600",
        price: 310
      },
      {
        id: 33,
        processor: "Intel Original LGA1151",
        model: "i5",
        varaint: "7600K",
        price: 332
      },
      {
        id: 34,
        processor: "Intel Original LGA1151",
        model: "i7",
        varaint: "7700",
        price: 415
      },
      {
        id: 35,
        processor: "Intel Original LGA1151",
        model: "i7",
        varaint: "7700K",
        price: 465
      },
      {
        id: 36,
        processor: "BX80673I97900X",
        model: "i9",
        varaint: "7900X",
        price: 1347
      },
      {
        id: 37,
        processor: "BX80673I77820X",
        model: "i7",
        varaint: "7820X",
        price: 817
      }
    ]
  }
];
