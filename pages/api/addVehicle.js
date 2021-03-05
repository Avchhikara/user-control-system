const Vehicle = require("./../../model/Vehicle");

export default async function login(req, res) {
  const db = await require("./../../utils/mongodb");
  const { registrationNumber, userId } = req.body;
  try {
    const vehicle = new Vehicle({
      userId,
      registrationNumber,
    });
    await vehicle.save();
    res.status(200).json({ message: "added sucessfully" });
  } catch (err) {
    res.status(400).json({ message: "Already present" });
  }
}
