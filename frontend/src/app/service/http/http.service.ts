import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  async login(url: string, username: string, password: string): Promise<boolean> {
    try {
      const result = await fetch(url,
        {
          method: 'POST',
          headers: [['Content-Type', 'application/json']],
          body: JSON.stringify({username, password})
        });

      if (result.ok) {
        return await result.json() as boolean;
      } else {
        alert(`${result.status} - ${result.statusText}`);
        return false;
      }
    } catch (e) {
      return false;
    }
  }
}
