  var seeder = require("mongoose-seed");

// Connect to MongoDB via Mongoose
seeder.connect(
  process.env.MONGODB_URI || "mongodb://localhost/mongoDB-computers",
  function() {
    // Load Mongoose models
    seeder.loadModels(["models/motherboard.js"]);

    // Clear specified collections
    seeder.clearModels(["MotherboardModel"], function() {
      // Callback to populate DB once collections have been cleared
      seeder.populateModels(data, function() {
        seeder.disconnect();
      });
    });
  }
);

var data = [
  {
    model: "MotherboardModel",
    documents: [
      {
        id: 1,
        model: "ASUS PRIME A320M-K",
        cpuCompability: "AMD Ryzen",
        price: 106
      },
      {
        id: 2,
        model: "ASUS PRIME B350M-A",
        cpuCompability: "AMD Ryzen",
        price: 138
      },
      {
        id: 3,
        model: "ASUS PRIME B350-Plus",
        cpuCompability: "AMD Ryzen",
        price: 155
      },
      {
        id: 4,
        model: "ASUS PRIME X370-PRO",
        cpuCompability: "AMD Ryzen",
        price: 255
      },
      {
        id: 5,
        model: "ASUS Crosshair-VI-Hero",
        cpuCompability: "AMD Ryzen",
        price: 409
      },
      {
        id: 6,
        model: "Asus PRIME X470-Pro",
        cpuCompability: "AMD Ryzen",
        price: 310
      },
      {
        id: 7,
        model: "Asus STRIX X470-F Gaming",
        cpuCompability: "AMD Ryzen",
        price: 350
      },
      {
        id: 8,
        model: "Asus STRIX X470-I Gaming ITX",
        cpuCompability: "AMD Ryzen",
        price: 317
      },
      {
        id: 9,
        model: "Asus SCROSSHAIR VII Hero Wif",
        cpuCompability: "AMD Ryzen",
        price: 485
      },
      {
        id: 10,
        model: "Asrock AB350M-HDV",
        cpuCompability: "AMD Ryzen",
        price: 100
      },
      {
        id: 11,
        model: "Asrock A320M-DGS",
        cpuCompability: "AMD Ryzen",
        price: 75
      },
      {
        id: 12,
        model: "Asrock AB350M",
        cpuCompability: "AMD Ryzen",
        price: 100
      },
      {
        id: 13,
        model: "Asrock AB350 Pro4",
        cpuCompability: "AMD Ryzen",
        price: 143
      },
      {
        id: 14,
        model: "Asrock AB350M Pro4",
        cpuCompability: "AMD Ryzen",
        price: 131
      },
      {
        id: 15,
        model: "Asrock AB350 Gaming K4",
        cpuCompability: "AMD Ryzen",
        price: 168
      },
      {
        id: 16,
        model: "Asrock AB350 Gaming ITX/AC",
        cpuCompability: "AMD Ryzen",
        price: 171
      },
      {
        id: 17,
        model: "Asrock X370 Gaming K4",
        cpuCompability: "AMD Ryzen",
        price: 236
      },
      {
        id: 18,
        model: "Asrock X370 KILLER SLI",
        cpuCompability: "AMD Ryzen",
        price: 227
      },
      {
        id: 19,
        model: "Asrock X370 Taichi ",
        cpuCompability: "AMD Ryzen",
        price: 356
      },
      {
        id: 20,
        model: "Asrock X470 Taichi Ultimate",
        cpuCompability: "AMD Ryzen",
        price: 449
      },
      {
        id: 21,
        model: "Gigabyte GA-A320M-DS2",
        cpuCompability: "AMD Ryzen",
        price: 102
      },
      {
        id: 22,
        model: "Gigabyte GA-AB350M-DS3H",
        cpuCompability: "AMD Ryzen",
        price: 106
      },
      {
        id: 23,
        model: "Gigabyte GA-AB350M-D3H",
        cpuCompability: "AMD Ryzen",
        price: 141
      },
      {
        id: 24,
        model: "Gigabyte GA-AB350M-GAMING 3",
        cpuCompability: "AMD Ryzen",
        price: 141
      },
      {
        id: 25,
        model: "Gigabyte GA-AB350N-GAMING WIFI",
        cpuCompability: "AMD Ryzen",
        price: 181
      },
      {
        id: 26,
        model: "Gigabyte GA-AB350-GAMING",
        cpuCompability: "AMD Ryzen",
        price: 149
      },
      {
        id: 27,
        model: "Gigabyte GA-AB350-GAMING 3",
        cpuCompability: "AMD Ryzen",
        price: 170
      },
      {
        id: 28,
        model: "Gigabyte GA-AX370-GAMING 3",
        cpuCompability: "AMD Ryzen",
        price: 181
      },
      {
        id: 29,
        model: "Gigabyte GA-AX370-GAMING 5",
        cpuCompability: "AMD Ryzen",
        price: 245
      },
      {
        id: 30,
        model: "Gigabyte GA-AX370-GAMING K7",
        cpuCompability: "AMD Ryzen",
        price: 273
      },
      {
        id: 31,
        model: "Gigabyte X470 AORUS GAMING 5 WIFI",
        cpuCompability: "AMD Ryzen",
        price: 294
      },
      {
        id: 32,
        model: "Gigabyte X470 AORUS ULTRA GAMING",
        cpuCompability: "AMD Ryzen",
        price: 224
      },
      {
        id: 33,
        model: "Gigabyte X470 AORUS GAMING 7 WIFI",
        cpuCompability: "AMD Ryzen",
        price: 369
      },
      {
        id: 34,
        model: "MSI X399 Gaming Pro Carbon AC",
        cpuCompability: "AMD Ryzen",
        price: 556
      },
      {
        id: 35,
        model: "MSI X370 Xpower Gaming Titanium",
        cpuCompability: "AMD Ryzen",
        price: 441
      },
      {
        id: 36,
        model: "MSI X370 Gaming M7 ACK",
        cpuCompability: "AMD Ryzen",
        price: 342
      },
      {
        id: 37,
        model: "MSI X370 Gaming Pro Carbon",
        cpuCompability: "AMD Ryzen",
        price: 278
      },
      {
        id: 38,
        model: "MSI B350 Tomahawk Arctic",
        cpuCompability: "AMD Ryzen",
        price: 179
      },
      {
        id: 39,
        model: "MSI B350 Tomahawk",
        cpuCompability: "AMD Ryzen",
        price: 165
      },
      {
        id: 40,
        model: "MSI B350M Mortar Arctic",
        cpuCompability: "AMD Ryzen",
        price: 150
      },
      {
        id: 41,
        model: "MSI B350M Mortar",
        cpuCompability: "AMD Ryzen",
        price: 126
      },
      {
        id: 42,
        model: "MSI B350M Bazooka",
        cpuCompability: "AMD Ryzen",
        price: 116
      },
      {
        id: 43,
        model: "MSI B350i Pro AC",
        cpuCompability: "AMD Ryzen",
        price: 190
      },
      {
        id: 44,
        model: "MSI X470 Gaming Plus",
        cpuCompability: "AMD Ryzen",
        price: 216
      },
      {
        id: 45,
        model: "MSI X470 Pro Carbon",
        cpuCompability: "AMD Ryzen",
        price: 291
      },
      {
        id: 46,
        model: "MSI AMD A320M Pro-VH Plus",
        cpuCompability: "AMD Ryzen",
        price: 89
      },
      {
        id: 47,
        model: "Biostar H310MHD Pro",
        cpuCompability: "Intel 8th Gen",
        price: 85
      },
      {
        id: 48,
        model: "Biostar B360MHD Pro",
        cpuCompability: "Intel 8th Gen",
        price: 95
      },
      {
        id: 49,
        model: "ASUS PRIME H310M-A",
        cpuCompability: "Intel 8th Gen",
        price: 117
      },
      {
        id: 50,
        model: "ASUS PRIME H310i Plus ITX",
        cpuCompability: "Intel 8th Gen",
        price: 132
      },
      {
        id: 51,
        model: "ASUS PRIME B360M-A/CSM",
        cpuCompability: "Intel 8th Gen",
        price: 164
      },
      {
        id: 52,
        model: "ASUS TUF B360-PRO GAMING/WIFI",
        cpuCompability: "Intel 8th Gen",
        price: 214
      },
      {
        id: 53,
        model: "ASUS ROG STRIX B360-F GAMING",
        cpuCompability: "Intel 8th Gen",
        price: 225
      },
      {
        id: 54,
        model: "ASUS ROG STRIX B360-G GAMING",
        cpuCompability: "Intel 8th Gen",
        price: 178
      },
      {
        id: 55,
        model: "ASUS ROG STRIX B360-I GAMING",
        cpuCompability: "Intel 8th Gen",
        price: 226
      },
      {
        id: 56,
        model: "ASUS H370M-PLUS/CSM",
        cpuCompability: "Intel 8th Gen",
        price: 189
      },
      {
        id: 57,
        model: "Asus Prime Z370-P",
        cpuCompability: "Intel 8th Gen",
        price: 246
      },
      {
        id: 58,
        model: "Asus PRIME Z370-A",
        cpuCompability: "Intel 8th Gen",
        price: 320
      },
      {
        id: 59,
        model: "ASUS TUF H370-PRO GAMING WIFI",
        cpuCompability: "Intel 8th Gen",
        price: 232
      },
      {
        id: 60,
        model: "ASUS ROG STRIX H370-F GAMING",
        cpuCompability: "Intel 8th Gen",
        price: 239
      },
      {
        id: 61,
        model: "ASUS ROG STRIX H370-I GAMING",
        cpuCompability: "Intel 8th Gen",
        price: 249
      },
      {
        id: 62,
        model: "Asus TUF Z370-PLUS GAMING",
        cpuCompability: "Intel 8th Gen",
        price: 274
      },
      {
        id: 63,
        model: "Asus TUF Z370-PRO GAMING",
        cpuCompability: "Intel 8th Gen",
        price: 301
      },
      {
        id: 64,
        model: "Asus ROG STRIX Z370-I GAMING",
        cpuCompability: "Intel 8th Gen",
        price: 372
      },
      {
        id: 65,
        model: "Asus ROG STRIX Z370-H GAMING",
        cpuCompability: "Intel 8th Gen",
        price: 316
      },
      {
        id: 66,
        model: "Asus ROG STRIX Z370-F GAMING",
        cpuCompability: "Intel 8th Gen",
        price: 343
      },
      {
        id: 67,
        model: "Asus ROG STRIX Z370-G GAMING AC",
        cpuCompability: "Intel 8th Gen",
        price: 343
      },
      {
        id: 68,
        model: "Asus ROG STRIX Z370-E GAMING Z370",
        cpuCompability: "Intel 8th Gen",
        price: 380
      },
      {
        id: 69,
        model: "Asus ROG MAXIMUS X HERO Z370",
        cpuCompability: "Intel 8th Gen",
        price: 465
      },
      {
        id: 70,
        model: "Asus ROG MAXIMUS X APEX Z370",
        cpuCompability: "Intel 8th Gen",
        price: 538
      },
      {
        id: 71,
        model: "Asus ROG MAXIMUS X HERO WI-FI AC",
        cpuCompability: "Intel 8th Gen",
        price: 511
      },
      {
        id: 72,
        model: "Asus ROG MAXIMUS X CODE Z370",
        cpuCompability: "Intel 8th Gen",
        price: 565
      },
      {
        id: 73,
        model: "Asus ROG MAXIMUS X FORMULA Z370",
        cpuCompability: "Intel 8th Gen",
        price: 609
      },
      {
        id: 74,
        model: "Gigabyte Z370 AORUS GAMING 7",
        cpuCompability: "Intel 8th Gen",
        price: 388
      },
      {
        id: 75,
        model: "Gigabyte Z370 AORUS GAMING 5",
        cpuCompability: "Intel 8th Gen",
        price: 308
      },
      {
        id: 76,
        model: "Gigabyte Z370 AORUS GAMING WIFI",
        cpuCompability: "Intel 8th Gen",
        price: 280
      },
      {
        id: 77,
        model: "Gigabyte Z370 AORUS ULTRA GAMING",
        cpuCompability: "Intel 8th Gen",
        price: 265
      },
      {
        id: 78,
        model: "Gigabyte Z370 AORUS ULTRA GAMING OP",
        cpuCompability: "Intel 8th Gen",
        price: 308
      },
      {
        id: 79,
        model: "Gigabyte Z370XP SLI",
        cpuCompability: "Intel 8th Gen",
        price: 221
      },
      {
        id: 80,
        model: "Gigabyte Z370 HD3",
        cpuCompability: "Intel 8th Gen",
        price: 194
      },
      {
        id: 81,
        model: "Gigabyte Z370 HD3 OP",
        cpuCompability: "Intel 8th Gen",
        price: 237
      },
      {
        id: 82,
        model: "Gigabyte Z370N WIFI",
        cpuCompability: "Intel 8th Gen",
        price: 247
      },
      {
        id: 83,
        model: "Gigabyte Z370M D3H",
        cpuCompability: "Intel 8th Gen",
        price: 211
      },
      {
        id: 84,
        model: "Gigabyte H370 AORUS GAMING 3",
        cpuCompability: "Intel 8th Gen",
        price: 221
      },
      {
        id: 85,
        model: "Gigabyte H370N WIFI",
        cpuCompability: "Intel 8th Gen",
        price: 215
      },
      {
        id: 86,
        model: "Gigabyte H370M D3H",
        cpuCompability: "Intel 8th Gen",
        price: 189
      },
      {
        id: 87,
        model: "Gigabyte B360M AORUS GAMING 3",
        cpuCompability: "Intel 8th Gen",
        price: 167
      },
      {
        id: 88,
        model: "Gigabyte B360M-D3H",
        cpuCompability: "Intel 8th Gen",
        price: 150
      },
      {
        id: 89,
        model: "Gigabyte H310M S2P",
        cpuCompability: "Intel 8th Gen",
        price: 113
      },
      {
        id: 90,
        model: "Gigabyte H310M DS2",
        cpuCompability: "Intel 8th Gen",
        price: 107
      },
      {
        id: 91,
        model: "Msi Z370 Gaming Pro Carbon AC",
        cpuCompability: "Intel 8th Gen",
        price: 324
      },
      {
        id: 92,
        model: "Msi Z370 Gaming Pro Carbon",
        cpuCompability: "Intel 8th Gen",
        price: 273
      },
      {
        id: 93,
        model: "Msi Z370 Gaming Plus",
        cpuCompability: "Intel 8th Gen",
        price: 198
      },
      {
        id: 94,
        model: "MSI Z370M Mortar",
        cpuCompability: "Intel 8th Gen",
        price: 200
      },
      {
        id: 95,
        model: "Msi Z370M Gaming Pro AC",
        cpuCompability: "Intel 8th Gen",
        price: 270
      },
      {
        id: 96,
        model: "Msi Z370-A Pro",
        cpuCompability: "Intel 8th Gen",
        price: 180
      },
      {
        id: 97,
        model: "Msi Z370I Gaming Pro Carbon AC ITX",
        cpuCompability: "Intel 8th Gen",
        price: 294
      },
      {
        id: 98,
        model: "MSI Z370 Gaming M5",
        cpuCompability: "Intel 8th Gen",
        price: 308
      },
      {
        id: 99,
        model: "MSI Z370 Krait Gaming",
        cpuCompability: "Intel 8th Gen",
        price: 254
      },
      {
        id: 100,
        model: "MSI B360i Gaming PRO AC",
        cpuCompability: "Intel 8th Gen",
        price: 191
      },
      {
        id: 101,
        model: "MSI B360 GAMING ARCTIC",
        cpuCompability: "Intel 8th Gen",
        price: 170
      },
      {
        id: 102,
        model: "MSI B360M MORTAR TITANIUM",
        cpuCompability: "Intel 8th Gen",
        price: 160
      },
      {
        id: 103,
        model: "MSI B360 Gaming PRO Carbon",
        cpuCompability: "Intel 8th Gen",
        price: 192
      },
      {
        id: 104,
        model: "MSI B360M Bazooka",
        cpuCompability: "Intel 8th Gen",
        price: 146
      },
      {
        id: 105,
        model: "MSI H310I PRO ITX",
        cpuCompability: "Intel 8th Gen",
        price: 123
      },
      {
        id: 106,
        model: "MSI H310M PRO M2",
        cpuCompability: "Intel 8th Gen",
        price: 114
      },
      {
        id: 107,
        model: "MSI H370M Bazooka",
        cpuCompability: "Intel 8th Gen",
        price: 170
      },
      {
        id: 108,
        model: "MSI H370 Gaming Pro Carbon",
        cpuCompability: "Intel 8th Gen",
        price: 224
      },
      {
        id: 109,
        model: "Biostar H110MHV3/H110MHC",
        cpuCompability: "Intel 7th Gen",
        price: 78
      },
      {
        id: 110,
        model: "Asus H110M M.2 DDR4",
        cpuCompability: "Intel 7th Gen",
        price: 118
      },
      {
        id: 111,
        model: "Asus H110M-Plus DDR4",
        cpuCompability: "Intel 7th Gen",
        price: 140
      },
      {
        id: 112,
        model: "Asus H110i Plus",
        cpuCompability: "Intel 7th Gen",
        price: 140
      },
      {
        id: 113,
        model: "Asus B150M-A/M.2 DDR4",
        cpuCompability: "Intel 7th Gen",
        price: 122
      },
      {
        id: 114,
        model: "Asus B150M-C",
        cpuCompability: "Intel 7th Gen",
        price: 161
      },
      {
        id: 115,
        model: "Asus B150i Pro Gaming Wifi Aura",
        cpuCompability: "Intel 7th Gen",
        price: 209
      },
      {
        id: 116,
        model: "Asus B150 Pro Gaming Aura",
        cpuCompability: "Intel 7th Gen",
        price: 213
      },
      {
        id: 117,
        model: "Asus Prime B250M-K",
        cpuCompability: "Intel 7th Gen",
        price: 133
      },
      {
        id: 118,
        model: "Asus B250M-A",
        cpuCompability: "Intel 7th Gen",
        price: 148
      },
      {
        id: 119,
        model: "Asus Prime H270M Plus",
        cpuCompability: "Intel 6th/7th",
        price: 177
      },
      {
        id: 120,
        model: "Asus Prime H270 Plus",
        cpuCompability: "Intel 6th/7th",
        price: 187
      },
      {
        id: 121,
        model: "Asus Prime H270 Pro",
        cpuCompability: "Intel 6th/7th",
        price: 198
      },
      {
        id: 122,
        model: "Asus Strix H270F Gaming",
        cpuCompability: "Intel 6th/7th",
        price: 213
      },
      {
        id: 123,
        model: "Asus Strix B250G Gaming",
        cpuCompability: "Intel 6th/7th",
        price: 160
      },
      {
        id: 124,
        model: "Asus Strix B250i Gaming ITX",
        cpuCompability: "Intel 6th/7th",
        price: 184
      },
      {
        id: 125,
        model: "Asus Strix H270i Gaming ITX",
        cpuCompability: "Intel 6th/7th",
        price: 216
      },
      {
        id: 126,
        model: "Asus ROG STRIX Z270I Gaming ITX",
        cpuCompability: "Intel 6th/7th",
        price: 254
      },
      {
        id: 127,
        model: "Asus ROG Maximus VIII Extreme",
        cpuCompability: "Intel 6th/7th",
        price: 750
      },
      {
        id: 128,
        model: "Asus ROG Maximus VIII Extreme Assembly",
        cpuCompability: "Intel 6th/7th",
        price: 756
      },
      {
        id: 129,
        model: "Asus ROG Maximus IX Apex",
        cpuCompability: "Intel 6th/7th",
        price: 415
      },
      {
        id: 130,
        model: "Asus ROG Maximus IX Code",
        cpuCompability: "Intel 6th/7th",
        price: 434
      },
      {
        id: 131,
        model: "MSI Z270M Mortar",
        cpuCompability: "Intel 6th/7th",
        price: 185
      },
      {
        id: 132,
        model: "MSI B250M Bazooka",
        cpuCompability: "Intel 6th/7th",
        price: 144
      },
      {
        id: 133,
        model: "MSI Z270I Gaming Pro Carbon AC (ITX",
        cpuCompability: "Intel 6th/7th",
        price: 261
      },
      {
        id: 134,
        model: "MSI B250I Gaming Pro AC (ITX",
        cpuCompability: "Intel 6th/7th",
        price: 201
      },
      {
        id: 135,
        model: "MSI H110I Pro-AC (ITX w/wifi)",
        cpuCompability: "Intel 6th/7th",
        price: 137
      }
    ]
  }
];
