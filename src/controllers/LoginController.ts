import { Request, Response } from "express";
import { get, controller } from './decorators'

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