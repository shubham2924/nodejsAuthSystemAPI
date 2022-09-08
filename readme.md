**⬜Sign-up or Registration API**

* **URL**

  http://localhost:5000/register

* **Method:**

  `POST`


  Sample request Body:
  ```
    {
        "user":"john",
        "password":"john",
        "phoneno":"7712867881",
        "email":"john@doe.com"
    }
  ```

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{ success: New user ${username} created!  }`
 
* **Error Response:**

  * **Code:** 500  <br />
    **Content:** `{ message: err.message }`



**⬜Login API**

* **URL**

  http://localhost:5000/auth

* **Method:**

  `POST`


  Sample request Body:
  ```
    {
        "username":"john",
        "password":"john123"
    }
  ```

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{ user is logged in whose username is ${username}  }`
 
* **Error Response:**

  * **Code:** 401  <br />

**⬜Get all users information**

* **URL**

  http://localhost:5000/allusers

* **Method:**

  `GET`



**⬜Change user password API**

* **URL**

  http://localhost:5000/changepwd/:id
  example: http://localhost:5000/changepwd/3 

* **Method:**

  `PATCH`

*  **URL Params**

   **Required:**
 
   `id=[integer]`

  Sample request Body:
  ```
    {
        "newPassword":"john@1234"
    }
  ```


**⬜Get your data**

* **URL**

  http://localhost:5000/self/:id
  example : http://localhost:5000/self/3

* **Method:**

  `POST`

*  **URL Params**

   **Required:**
 
   `id=[integer]`

  Sample request Body:
  ```
    {
        "username":"john"
    }
  ```


**⬜Update your profile**

* **URL**

  http://localhost:5000/self/:id
  example : http://localhost:5000/self/3

* **Method:**

  `PATCH`

*  **URL Params**

   **Required:**
 
   `id=[integer]`

  Sample request Body:
  ```
    {
        "username":"newjohn",
        "email":"newjohn@email.com",
        "phoneno":"9135425631"
    }
  ```
## Folder structure(Following Best Practices for designing API)

Project/
├── controllers/
│   ├── allUsersInfoController.js
│   ├── authController.js
│   ├── changePasswordController.js
│   ├── logoutContoller.js
│   ├── ownDataController.js
│   ├── refreshTokenController.js
│   ├── registerController.js
│   └── updateSelfDataController.js
├── middleware/
│   └── verifyJWT.js
├── model/
│   └── usesrs.json
├── routes/
│   ├── auth.js
│   ├── changePassword.js
│   ├── logout.js
│   ├── refresh.js
│   ├── register.js
│   ├── root.js
│   ├── self.js
│   ├── selfUpate.js
│   └── users.js      
├── index.js
├── package.json   
├── package-lock.json
└── readme.md

## Problem Statement:
Complete User Authentication System.

- Create API for new user registration(Name, email, mobile, password, profile picture), 

- Create login API 

- Authenticate user, 

- Create an API to get the other user's info.

- Create an API to get own information

- Create API to update the user's info(Password will not be a part of this).

- Create API to change the password.

In the case of registration and login, you should generate a JWT token for the user that will be returned from the API.

Besides that, remember to hash the password before you save it in the database.

Note: As there is no database connection, You can use a JSON structure for storing the data.

### W.I.P: 
- Once a user registers and tries to login/ go to get all users info route, server has to be broken and have to rerun.