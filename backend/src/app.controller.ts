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
  // @Get('ui/login-form')
  // getLoginFormUI(): string {
  //   return `
  //     <div>
  //       <p>E-Mail</p>
  //       <input id="email-input" type="email"/>
  //     </div>
  //     <div>
  //       <p>Password</p>
  //       <input id="password-input" type="password"/>
  //     </div>
  //     <div>
  //       <button id="login-button">Login</button>
  //     </div>
  //   `;
  // }

  @Get('ui/login-form')
  getLoginFormUI(): any {
    return JSON.parse(`
      {
        "templateId": "login-form",
        "version": "1",
        "preferredOrientation": "vertical",
        "parts":
        [
          {
            "label": {
              "text": "Login Form",
              "type": "headline"
            }
          },
          {
            "label": {
              "text": "E-Mail",
              "type": "plain"
            }
          },
          {
            "input": {
              "type": "text",
              "text": "",
              "placeholder": "E-Mail"
            }
          },
          {
            "label": {
              "text": "Password",
              "type": "plain"
            }
          },
          {
            "input": {
              "type": "password",
              "text": "",
              "placeholder": "Password"
            }
          },
          {
            "button":{
              "text": "Login",
              "action": {
                "type": "url",
                "target": "http://ec2-54-172-192-20.compute-1.amazonaws.com:3000/api/login"
              }
            }
          }
        ]
      }
    `);
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
