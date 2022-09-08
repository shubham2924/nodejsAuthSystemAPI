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

| Folder/files | Link |
| ------ | ------ |
| controllers | [controllers/][PlDb] |
| middleware | [middleware/][PlGh] |
| model/databse | [model/users.json][PlGd] |
| routes | [routes][PlOd] |
| index | [index.js][PlMe] |
| readme | [readme.md][PlGa] |

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

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [PlDb]: <https://github.com/shubham2924/nodejsAuthSystemAPI/tree/main/controllers>
   [PlGh]: <https://github.com/shubham2924/nodejsAuthSystemAPI/tree/main/middleware>
   [PlGd]: <https://github.com/shubham2924/nodejsAuthSystemAPI/tree/main/model>
   [PlOd]: <https://github.com/shubham2924/nodejsAuthSystemAPI/tree/main/routes>
   [PlMe]: <https://github.com/shubham2924/nodejsAuthSystemAPI/blob/main/index.js>
   [PlGa]: <https://github.com/shubham2924/nodejsAuthSystemAPI/blob/main/readme.md>
