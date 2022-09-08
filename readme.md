**Sign-up or Registration API**

* **URL**

  http://localhost:5000/register

* **Method:**

  `POST`


* **Data Params**

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

