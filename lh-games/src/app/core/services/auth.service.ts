import { Injectable } from '@angular/core';
import { Observable, of, delay, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  login(email: string, senha: string): Observable<boolean> {
    const ok = !!email && email.length > 3 && !!senha && senha.length >= 4;
    return of(ok).pipe(delay(300), tap(a => { if (a) localStorage.setItem('token','fake'); }));
  }
  logout(): void { localStorage.removeItem('token'); }
  isLogged(): boolean { return !!localStorage.getItem('token'); }
}
