import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor() { }

  async login(username: string, password: string): Promise<boolean> {
    try {
      const result = await fetch('http://ec2-54-172-192-20.compute-1.amazonaws.com:3000/api/login',
        {
          method: 'POST',
          headers: [['Content-Type', 'application/json']],
          body: JSON.stringify({username, password})
        });

      if (result.ok) {
        return await result.json() as boolean;
      }
    } catch (e) {
      return false;
    }
  }
}
