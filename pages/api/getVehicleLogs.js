const vehicleSearchLog = require("./../../model/VehicleSearchLog");
export default async function getVehicleLogsAPI(req, res) {
  const db = await require("./../../utils/mongodb");
  const { registrationNumber } = req.body;
  const rawData = await vehicleSearchLog.find({
    possibleRegistrationNumber: registrationNumber,
  });
  const logs = rawData.map((log) => ({
    timestamp: log._id.getTimestamp(),
  }));
  logs.sort((a, b) => b.timestamp - a.timestamp);
  if (logs.length) logs.length = 10;
  res.status(200).json(logs);
}
