var express = require("express");
var router = express.Router();
var User = require("../models/User");

/* GET users listing. */

router.get("/", async (req, res, next) => {
  try {
    const users = await User.find({});
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    var users = await User.create(req.body);
    (res.status(201).json({ users }))
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const userId = req.params.id;

    await User.findByIdAndDelete(userId);

    // Return a success response
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    // Catch any errors that occurred during the delete operation
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/:id/edit", async (req, res, next) => {
  try {
    const Id = req.params.id;
    const user = await User.findById(Id);
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
    next(error);
  }
});

router.put("/:id/edit", async (req, res, next) => {
  const Id = req.params.id;
  const updatedItemData = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(Id, updatedItemData, {
      new: true,
    });
    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(201).json({ updatedUser });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
    next(error);
  }
});

module.exports = router;
