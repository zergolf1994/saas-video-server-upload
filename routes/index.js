"use strict";
const express = require("express");
const router = express.Router();

router.all("/", async (req, res) => {
  return res.status(200).json({ msg: "saas-video-server-upload" });
});

// upload

// server

router.all("*", async (req, res) => {
  return res.status(404).json({ error: true, msg: "not found!" });
});

module.exports = router;
