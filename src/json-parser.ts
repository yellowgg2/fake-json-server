import fs from "fs";

export interface IRouteStructure {
  get: IRoutes;
  post: IRoutes;
}

export interface IRoutes {
  routes: Array<IRoute>;
}

export interface IRoute {
  route: string;
  key: string;
}

export default class JsonParser {
  private dataFullPath = "./data.json";
  private routesFullPath = "./routes.json";

  getData(): any | null {
    if (fs.existsSync(this.dataFullPath)) {
      let dataStr = fs.readFileSync(this.dataFullPath);
      try {
        let parsedData = JSON.parse(dataStr.toString());
        return parsedData;
      } catch (error) {
        console.error(error);
      }
    }
    console.log(`${this.dataFullPath}를 확인해주세요`);
    return null;
  }

  getRoutes(): IRouteStructure | null {
    if (fs.existsSync(this.routesFullPath)) {
      let dataStr = fs.readFileSync(this.routesFullPath);
      try {
        let parsedRoutes: IRouteStructure = JSON.parse(dataStr.toString());
        return parsedRoutes;
      } catch (error) {
        console.error(error);
      }
    }
    console.log(`${this.routesFullPath}를 확인해주세요`);
    return null;
  }
}
