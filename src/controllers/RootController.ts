import { Request, Response, NextFunction } from "express";
import { get, controller, use } from "./decorators";

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }
  res.status(403);
  res.send('Not permitted')
}

@controller('')
class RootController {

  @get('/')
  getRoot(req: Request, res: Response): void {
    if (req.session && req.session.loggedIn) {
      res.send(`
      <div>
        <h3>You are now logged in</h3>
        <a href="/auth/logout">Logout</a>
      </div>
      `);
    }  else {
      res.send(`
      <div>
        <h3>You are not currently logged in</h3>
        <a href="/auth/login">Login</a>
      </div>
      `);
    }
  }

  @get('/protected')
  @use(requireAuth)
  getProtected(req: Request, res: Response) {
    res.send('Welcome to protected route, logged in User')
  };

}