import {HttpException, HttpStatus, Injectable} from '@nestjs/common';

@Injectable()
export class AppService {
  getPong(): string {
    return 'pong';
  }

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'password') {
      return true;
    } else {
      throw new HttpException(
        {
          status: HttpStatus.UNAUTHORIZED,
          error: 'Invalid credentials',
        },
        HttpStatus.UNAUTHORIZED,
      );
    }
  }
}
