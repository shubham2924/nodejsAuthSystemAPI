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

