require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();

const API_ID = process.env.API_ID;
const API_KEY = process.env.API_KEY;

app.use(cors());
app.use(express.json());

app.post("/getNutrition", async (req, res) => {
  const url = `https://api.edamam.com/api/nutrition-details?app_id=${API_ID}&app_key=${API_KEY}`;
  const recipe = req.body;

  try {
    const response = await axios.post(url, recipe, {
      headers: { "Content-Type": "application/json" }
    });
    res.json(response.data);
  } catch (error) {
    console.error("API Error:", error.message);
    res.status(500).json({ error: "Failed to retrieve nutrition data" });
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
