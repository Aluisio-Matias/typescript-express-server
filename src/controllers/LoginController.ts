import { Router, Request, Response, NextFunction } from "express";
import { get } from './decorators/routes';
import { controller } from "./decorators/controller";

@controller('/auth')
class LoginController {

  @get('/login')
  getLogin(req: Request, res: Response): void {
    if (req.session && req.session.loggedIn) {
      res.send(`
      <div>
        <h3>You are now logged in</h3>
        <a href="/logout">Logout</a>
      </div>
      `);
    }  else {
      res.send(`
      <div>
        <h3>You are not currently logged in</h3>
        <a href="/login">Login</a>
      </div>
      `);
    }
  }
}