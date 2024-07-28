## API-to-do-app

Hallo ini Project API saya dalam membuat API to-do-app. bisa mencobanya ikuti cara dibawah ini:

To install dependencies:
- note : install bun in your computer
```bash
bun install
```

create .env file with data :

- note : install postgresql in your computer

```env
API_PORT=3000 // optional
JWT_SECRET_KEY="rahasianegara"
DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"
```

Run prisma:

```bash
bun prisma db push
```

To run:

```bash
bun run start
```

This project was created using `bun init` in bun v1.1.12. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

## API Refence

Main ENPOINT : http://localhost:3000/api

# User API

login :

- `/user/login -> POST`

- Request Body :
  ```json
  {
    "email": "your-email@gmail.com",
    "password": "your-password"
  }
  ```

- Reponse Body (Success) :
  ```json
  {
    "data": {
      "token": "wfifwif9wer9843289"
    }
  }
  ```

- Reponse Body (failed) :
  ```json
  {
    "error": "Email or Password is wrong"
  }
  ```

register:

- `/user/register -> POST`

- Request Body :
  ```json
  {
    "name" : "your-name",
    "email": "your-email@gmail.com",
    "password": "your-password"
  }
  ```

- Reponse Body (Success) :
  ```json
  {
    "data": "ok"
  }
  ```

- Reponse Body (failed) :
  ```json
  {
    "error": "Email is already"
  }
  ```

# Checklist API


view :

- `/checklist/ -> GET`

- Request Header :

  - `Authorization: Bearer <token>` (Mandatory)

- Respone Body (Success) :
  ```json
  {
    "data": [
    {
      "id": 1,
      "name": "belajar pemograman",
      "userId": 1
    },
    ...
    ]
  }
  ```
- Reponse Body (failed) :
  ```json
  {
    "error": "unauthorized"
  }
  ```

view-detail :

- `/checklist/:id -> GET`

- Request Header :

  - `Authorization: Bearer <token>` (Mandatory)

- Respone Body (Success) :
  ```json
  {
    "data":
    {
      "id": 1,
      "name": "belajar pemograman",
      "userId": 1
      "items": [
        {
          "description" : "Belajar Python Dasar",
          "status": false,
          "checklistId": 1,
          "userId": 1
        },
        ...
      ]
    }
  }
  ```
- Reponse Body (failed) :
  ```json
  {
    "error": "unauthorized"
  }
  ```


create-checklist :

- `/checklist/ -> POST`

- Request Header :

  - `Authorization: Bearer <token>` (Mandatory)

- Request Body:
  ```json
  {
      "name": "belajar pemograman",
  }
  ```

- Reponse Body (Success) :
  ```json
  {
    "data": "ok"
  }
  ```
  
- Reponse Body (failed) :
  ```json
  {
    "error": "unauthorized"
  }
  ```


create-item :

- `checklist/:id/items -> POST`

- Request Header :

  - `Authorization: Bearer <token>` (Mandatory)

- Request Body:
  ```
  {
    "description" : "Belajar Python Dasar"
  }
  ```

- Reponse Body (Success) :
  ```json
  {
    "data": "ok"
  }
  ```

- Reponse Body (failed) :
  ```json
  {
    "error": "Id is not found"
  }
  ```

delete:

- `/checklist/:id DELETE`

- Request Header :

  - `Authorization: Bearer <token>` (Mandatory)

- Reponse Body (Success) :
  ```json
  {
    "data": "ok"
  }

- Reponse Body (failed) :
  ```json
  {
    "error": "Id is not found"
  }
  ```

# items API

view-detail :

- `/items/:id -> GET`

- Request Header :
  - `Authorization: Bearer <token>` (Mandatory)
 
- Response Body (Success) :
  ```json
  {
    "data": {
          "description" : "Belajar Python Dasar",
          "status": false,
          "checklistId": 1,
          "userId": 1
        }
  }
  ```
 
- Reponse Body (failed) :
  ```json
  {
    "error": "Id is not found"
  }
  ```

update :

- `/items/:id -> PUT`

- Request Header :
  - `Authorization: Bearer <token>` (Mandatory)
 
- Request Body :
  ```json
  {
    "data": {
          "description" : "Belajar Python Dasar",
          "status": false,
          "checklistId": 1
        }
  }
  ```
 
- Response Body (Success) :
  ```json
  {
    "data": {
          "description" : "Belajar HTML Dasar",
          "status": false,
          "checklistId": 1,
          "userId": 1
        }
  }
  ```

- Reponse Body (failed) :
  ```json
  {
    "error": "Id is not found"
  }
  ```

update-status :

- `/items/:id/status -> PATCH`

- Request Header :
  - `Authorization: Bearer <token>` (Mandatory)
 
- Request Body :
  ```json
  {
    "data": {
          "status": true,
        }
  }
  ```

- Response Body (Success) :
  ```json
  {
    "data": {
          "id":1,
          "description" : "Belajar Python Dasar",
          "status": true,
          "checklistId": 1
        }
  }
  ```

- Reponse Body (failed) :
  ```json
  {
    "error": "Id is not found"
  }
  ```

delete:

- `/items/:id DELETE`

- Request Header :
  - `Authorization: Bearer <token>` (Mandatory)
 
- Reponse Body (Success) :
  ```json
  {
    "data": "ok"
  }

- Reponse Body (failed) :
  ```json
  {
    "error": "Id is not found"
  }
  ```


#
Thank You
##
