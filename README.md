# Fake Json Server

Simple fake json server for `GET`, `POST` only.
Each api call only returns `json data`. It fits if you simply verify your api call works with return value.

# Argument

Port number can be set with `-p` option. (default: `8080`)

```
npm start -p 8888
```

# routes.json

You can define `url` in this file like below.  
Root key can be either `get` or `post` and its value is an array consisting of object with `route` and `key`

```json
{
  "get": { # determine get or post
    "routes": [
      { "route": "/api/photos", "key": "getPhotos" },
      { "route": "/api/names/:id", "key": "getNames" }
    ]
  },
  "post": { # determine get or post
    "routes": [
      { "route": "/api/photos", "key": "postPhotos" },
      {
        "route": "/api/names",
        "key": "getNames"
      }
    ]
  }
}
```

# data.json

Root key should be identical to the value that is in `routes.json`.  
For example, `getPhotos` in `data.json` comes from `get.routes.key` in `routes.json`

```
{
  "getPhotos": {
    "photo": "photo.jpg"
  },

  "getNames": {
    "name": "young"
  },

  "postPhotos": {
    "result": "ok",
    "photo": "photo.png"
  },
  "postNames": {
    "result": "ok",
    "name": ["young", "ddong"]
  }
}

```

# Call the url

```
GET http://localhost:8080/api/photos
GET http://localhost:8080/api/names
GET http://localhost:8080/api/names/user-id

POST http://localhost:8080/api/photos
POST http://localhost:8080/api/names
```
