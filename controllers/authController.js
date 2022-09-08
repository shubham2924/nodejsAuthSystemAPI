const usersDB = {
  users: require("../model/users.json"),
  setUsers: function (data) {
    this.users = data;
  },
};
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
require("dotenv").config();
const fsPromises = require("fs").promises;
const path = require("path");

const handleLogin = async (req, res) => {
  const password = req.body.password;
  const username = req.body.username;
  if (!password || !username)
    return res
      .status(400)
      .json({ message: "All fields are required." });
  const foundUser = usersDB.users.find((person) => person.username === username);
  console.log("********")
  console.log(foundUser)
  console.log("********")
  if (!foundUser) return res.sendStatus(401); //Unauthorized
  // evaluate password
  const match = await bcrypt.compare(password, foundUser.password);
  if (match) {
    res.json(`user is logged in whose username is ${username}`);
    // // create JWTs
    const accessToken = jwt.sign(
      { username: foundUser.username },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "60s" }
    );
    const refreshToken = jwt.sign(
      { username: foundUser.username },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "1d" }
    );
    console.log("*&*&*&*&*&&*&*&&*&**&&*&***&")
    console.log(accessToken);
    console.log("*&*&*&*&*&&*&*&&*&**&&*&***&")
    // Saving refreshToken with current user
    const otherUsers = usersDB.users.filter(
      (person) => person.username !== foundUser.username
    );
    const currentUser = { ...foundUser, refreshToken, accessToken };
    console.log(`logging currentuser object here ${currentUser}`)
    usersDB.setUsers([...otherUsers, currentUser]);
    await fsPromises.writeFile(
      path.join(__dirname, "..", "model", "users.json"),
      JSON.stringify(usersDB.users)
    );
    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      sameSite: "None",
      secure: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.json({ accessToken, refreshToken });
  } else {
    res.sendStatus(401);
  }
};

module.exports = { handleLogin };
