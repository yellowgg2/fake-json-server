import express from "express";
import JsonParser, { IRouteStructure } from "./json-parser";

const app = express();
let port = 8080;

let myArgs = process.argv.slice(2);
console.log("myArgs: ", myArgs);

if (myArgs[0] === "-p") {
  port = parseInt(myArgs[1]);
}

let jp = new JsonParser();

let routes: IRouteStructure | null = jp.getRoutes();

if (routes) {
  let getKeys = routes.get.routes;
  let postKeys = routes.post.routes;

  for (let i = 0; i < getKeys.length; i++) {
    app.get(getKeys[i].route, (req, res) => {
      console.log(`GET : ${req.url} was called`);
      let bodyData = jp.getData();
      res.send(bodyData?.[`${getKeys[i].key}`]);
    });
  }

  for (let i = 0; i < postKeys.length; i++) {
    app.post(postKeys[i].route, (req, res) => {
      console.log(`POST : ${req.url} was called`);
      let bodyData = jp.getData();
      res.send(bodyData?.[`${postKeys[i].key}`]);
    });
  }
}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
