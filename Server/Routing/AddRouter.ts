import { IRouter } from "./Router";
import { Response } from "express";

export class AddPictureRouter implements IRouter {
  public AddRoute(route: any): void {
    route.post('/add/', (request: Request, response: Response) => { }
    )
  }
}