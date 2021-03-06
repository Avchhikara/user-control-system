const Vehicle = require("./../../model/Vehicle");

export default async function login(req, res) {
  const db = await require("./../../utils/mongodb");
  const { registrationNumber, userId } = req.body;
  try {
    const vehicle = new Vehicle({
      userId,
      registrationNumber,
    });
    // Find if it already exist
    const v = await Vehicle.find({
      registrationNumber,
    });
    if (v.length > 0) {
      throw new Error(
        "Registration number is already registered by someone else!"
      );
    }
    await vehicle.save();
    res.status(200).json({ message: "added sucessfully" });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Already present" });
  }
}
