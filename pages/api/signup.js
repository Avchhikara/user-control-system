import Cors from "cors";
const User = require("./../../model/User");

// Initializing the cors middleware
const cors = Cors({
  methods: ["GET", "HEAD"],
});

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export default async function signup(req, res) {
  await runMiddleware(req, res, cors);
  const db = await require("./../../utils/mongodb");
  const { name, email, password } = req.body;
  const userObj = new User({
    name,
    email,
    password,
  });
  const saveResp = await userObj.save();
  //   console.log(saveResp);
  res.status(200).json({
    userId: saveResp["_id"],
    name,
    email,
  });
}
