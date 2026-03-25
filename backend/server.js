require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { exec } = require("child_process");
const mongoose = require("mongoose");

const Scan = require("./models/Scan");

const app = express();

app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Atlas Connected"))
.catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("API working");
});

app.post("/scan", async (req, res) => {

  try {

    const { network } = req.body;

    if (!network) {

      return res.status(400).json({
        error: "Please enter network IP"
      });

    }

    console.log("Scanning:", network);

  const command = `"C:\\Program Files (x86)\\Nmap\\nmap.exe" ${network}`;

    exec(command, async (error, stdout, stderr) => {

      if (error) {

        console.log("Nmap error:", stderr || error.message);

        return res.status(500).json({

          error: stderr || error.message

        });

      }

      try {

        const newScan = new Scan({

          network: network,

          results: stdout

        });

        await newScan.save();

        console.log("Scan saved in DB");

        res.json({

          success: true,

          result: stdout

        });

      } catch (dbError) {

        console.log("DB Error:", dbError);

        res.status(500).json({

          error: "Database error"

        });

      }

    });

  } catch (err) {

    console.log("Server error:", err);

    res.status(500).json({

      error: err.message

    });

  }

});

app.get("/scans", async (req, res) => {

  try {

    const scans = await Scan.find().sort({ createdAt: -1 });

    res.json(scans);

  } catch (err) {

    res.status(500).json({

      error: err.message

    });

  }

});

app.listen(5000, () => {

  console.log("Server running on port 5000");

});