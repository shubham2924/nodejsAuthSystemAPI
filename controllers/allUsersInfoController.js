const usersDB = {
    users: require("../model/users.json"),
    setUsers: function (data) {
      this.users = data;
    },
  };

const allUserInfoController = (req,res)=>{
    const allUsers = usersDB.users
    let userarr=[]
    allUsers.map((allusers)=>{
        username = allusers.username;
        email = allusers.email;
        phoneno = allusers.phoneno;
        let obj={
            userName:username,
            email:email,
            phoneno:phoneno

        }
        userarr.push(obj)
    })
    
    return res.json(userarr);
}  
module.exports={allUserInfoController}