const usersDB = {
  users: require("../model/users.json"),
  setUsers: function (data) {
    this.users = data;
  },
};
const fsPromises = require("fs").promises;
const path = require("path");
const changeUserPassword = async (req, res) => {
  const newPassword = req.body.newPassword;
  const id = req.params.id;
  const userToUpdate = usersDB.users.find((person) => person.id == id);
  console.log("**&&^&&^&%&%&*5");
  console.log(userToUpdate);
  userToUpdate.password = newPassword;
  const otherUsers = usersDB.users.filter(
    (person) => person.username !== userToUpdate.username
  );
  const currentUser = { ...userToUpdate };
  console.log(`logging currentuser object here ${currentUser}`);
  usersDB.setUsers([...otherUsers, currentUser]);
  await fsPromises.writeFile(
    path.join(__dirname, "..", "model", "users.json"),
    JSON.stringify(usersDB.users)
  );
};

module.exports = { changeUserPassword };
