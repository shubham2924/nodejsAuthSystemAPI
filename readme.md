**⬜Sign-up or Registration API**

* **URL**

  http://localhost:5000/register

* **Method:**

  `POST`


  Request Body:
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


  Request Body:
  ```
    {
        "username":"john",
        "password":"john"
    }
  ```

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{ user is logged in whose username is ${username}  }`
 
* **Error Response:**

  * **Code:** 401  <br />

