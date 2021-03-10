const Vehicle = require("./../../model/Vehicle");

export default async function login(req, res) {
  const db = await require("./../../utils/mongodb");
  const { userId, registrationNumber } = req.body;
  const vehicle = await Vehicle.find({
    userId: userId,
    registrationNumber,
  });
  if (vehicle.length) await vehicle[0].remove();
  res.status(200).json({ message: "delete successfull" });
}
