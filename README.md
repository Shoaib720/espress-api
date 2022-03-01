# Express API

*Author: Shoaib S. Shaikh*

*Node Version: v14.19.0*

*npm version: 6.14.16*

## Description

This is a simple express application that serves REST API endpoints.

## API Endpoints

```
GET http://localhost:3000/internal

RESPONSE:

{
  "message": "This is an internal api response"
}
```

```
GET http://localhost:3000/external

RESPONSE:

{
  "message": "This is an external api response"
}
```


```
GET http://localhost:3000/external/users

RESPONSE:

{
  "message": "SUCCESS",
  "data": {
    "users": [
      {
        "name": "David Smith",
        "age": 30
      },
      {
        "name": "John Salmon",
        "age": 31
      },
      {
        "name": "Katy Grace",
        "age": 22
      }
    ]
  }
}
```