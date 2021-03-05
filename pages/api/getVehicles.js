const Vehicle = require("./../../model/Vehicle");

export default async function login(req, res) {
  const db = await require("./../../utils/mongodb");
  const { userId } = req.body;
  const data = await Vehicle.find({
    userId: userId,
  });
  const vehicles = data.map((vehicle) => ({
    registrationNumber: vehicle.registrationNumber,
  }));
  res.status(200).json({ vehicles: vehicles });
}
