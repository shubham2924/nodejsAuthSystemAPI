const usersDB = {
  users: require("../model/users.json"),
  setUsers: function (data) {
    this.users = data;
  },
};
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
//require("dotenv").config();
const fsPromises = require("fs").promises;
const path = require("path");

const handleNewUser = async (req, res) => {
  const username = req.body.user;
  const password = req.body.password;
  const email =  req.body.email;
  const phoneno = req.body.phoneno;
  if (!username || !password || !email || !phoneno) {
    return res.status(400).json({
      msg: "All fields are required",
    });
  }
  // check for duplicate usernames in the db
  const ifExists = usersDB.users.find((person) => person.phoneno === phoneno);
  if (ifExists) return res.sendStatus(409); //Conflict
  try {
    //encrypting password
    const hashedpassword = await bcrypt.hash(password, 10);
    //storing new user
    const newUser = {
      "id":usersDB.users.length+1,
      "username": username,
      "password": hashedpassword,
      "email": email,
      "phoneno":phoneno
    };
    usersDB.setUsers([...usersDB.users, newUser]);
    await fsPromises.writeFile(
      path.join(__dirname, "..", "model", "users.json"),
      JSON.stringify(usersDB.users)
    );
    console.log(usersDB.users);
    res.status(201).json({ success: `New user ${username} created!` });
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.log(`this is a error ${err}`);
  }
};
module.exports={handleNewUser}