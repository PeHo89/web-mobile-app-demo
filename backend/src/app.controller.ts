import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /* API here */

  @Get('api/ping')
  getPong(): string {
    return this.appService.getPong();
  }

  @Post('api/login')
  login(@Body() body): boolean {
    return this.appService.login(body.username, body.password);
  }

  /* UI here */
  @Get('ui/login-form')
  getLoginFormUI(): string {
    return `
      <div>
        <p>E-Mail</p>
        <input id="email-input" type="email"/>
      </div>
      <div>
        <p>Password</p>
        <input id="password-input" type="password"/>
      </div>
      <div>
        <button id="login-button">Login</button>
      </div>
    `;
  }

  @Get('ui/login-success')
  getLoginSuccessUI(): string {
    return `
      <div>
        <h1>Welcome</h1>
      </div>
    `;
  }

  @Get('ui/login-error')
  getLoginErrorUI(): string {
    return `
      <div>
        <h1>Wrong Credentials</h1>
      </div>
    `;
  }
}
