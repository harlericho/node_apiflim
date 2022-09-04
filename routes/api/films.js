const router = require("express").Router();
const { Film } = require("../../db");
router.get("/", async (req, res) => {
  const films = await Film.findAll();
  res.status(200).json({
    message: "List of films",
    data: films,
  });
});
router.get("/:id", async (req, res) => {
  const film = await Film.findByPk(req.params.id);
  res.status(201).json({
    message: "Updated film",
    data: film,
  });
});
router.post("/", async (req, res) => {
  await Film.create(req.body);
  res.status(201).json({
    message: "Create film",
  });
});
router.put("/:id", async (req, res) => {
  const film = await Film.findByPk(req.params.id);
  await film.update(req.body);
  res.status(201).json({
    message: "Updated film",
  });
});
router.delete("/:id", async (req, res) => {
  const film = await Film.findByPk(req.params.id);
  await film.destroy();
  res.status(201).json({
    message: "Deleting film",
  });
});
module.exports = router;
