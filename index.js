const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const verifyJWT = require('./middleware/verifyJWT')
// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json 
app.use(express.json());
app.use(cookieParser());
// app.get("/", (req, res) => {
//   res.status(200).json({
//     message: "success at root api point",
//     status: 200,
//   });
// });
app.use('/',require('./routes/root'))
app.use('/register', require('./routes/register'))
app.use('/auth', require('./routes/auth'))
app.use('/allusers', require('./routes/users'))
app.use('/refresh', require('./routes/refresh'))
app.use('/logout', require('./routes/logout'))
app.use('/self', require('./routes/self'))
app.use('/selfupdate', require('./routes/selfUpdate'))
app.use('/changepwd', require('./routes/changePassword'))
app.listen(5000);
