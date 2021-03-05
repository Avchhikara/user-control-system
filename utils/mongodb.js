const mongoose = require("mongoose");

module.exports = (async () => {
  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = await mongoose.connection;
  return db;
})();
