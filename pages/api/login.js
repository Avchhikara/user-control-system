const User = require("./../../model/User");

export default async function login(req, res) {
  const db = await require("./../../utils/mongodb");
  const { email, password } = req.body;
  const user = await User.find({
    email,
    password,
  });
  // console.log(user);
  //   console.log(saveResp);
  res.status(200).json({
    userId: user[0]._id,
    name: user[0].name,
    email: user[0].email,
  });
}
