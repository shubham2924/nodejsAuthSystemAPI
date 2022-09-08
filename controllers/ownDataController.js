const usersDB = {
    users: require("../model/users.json"),
    setUsers: function (data) {
      this.users = data;
    },
  };

const ownData = (req,res)=>{
    const username = req.body.username;
    const allUsers = usersDB.users;
    const employee = allUsers.find(user => user.username === username);
    if (!employee) {
        return res.status(400).json({ "message": `Employee ID ${username} not found` });
    }
    let userarr=[]
    let obj={
        userName:employee.username,
        email:employee.email,
        phoneno:employee.phoneno

    }
    userarr.push(obj)
    res.json(userarr);
}  
module.exports={ownData}