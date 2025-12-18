const express = require("express");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const router = express.Router();
const path = require("path");
const filePath = path.join(__dirname, "../data/equipment.json");


function readData() {
  return JSON.parse(fs.readFileSync(filePath));
}

function writeData(data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

router.get("/", (req, res) => {
  res.json(readData());
});

router.post("/", (req, res) => {
  const equipment = readData();

  const newEquipment = {
    id: uuidv4(),
    name: req.body.name,
    type: req.body.type,
    status: req.body.status,
    lastCleaned: req.body.lastCleaned
  };

  equipment.push(newEquipment);
  writeData(equipment);

  res.status(201).json(newEquipment);
});

router.put("/:id", (req, res) => {
  const equipment = readData();
  const index = equipment.findIndex(e => e.id === req.params.id);

  if (index === -1) {
    return res.status(404).json({ message: "Equipment not found" });
  }

  equipment[index] = {
    ...equipment[index],
    ...req.body
  };

  writeData(equipment);
  res.json(equipment[index]);
});

router.delete("/:id", (req, res) => {
  const equipment = readData().filter(e => e.id !== req.params.id);
  writeData(equipment);
  res.json({ message: "Deleted successfully" });
});

module.exports = router;
