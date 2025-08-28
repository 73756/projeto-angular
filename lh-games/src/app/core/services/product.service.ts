import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { Product } from '../models/product';


@Injectable({ providedIn: 'root' })
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Jogo 1', price: 300, image: 'assets/img/jogos/jogo1.png', description: 'Ação/aventura.' },
    { id: 2, name: 'Jogo 2', price: 200, image: 'assets/img/jogos/jogo2.png', description: 'Corrida.' },
    { id: 3, name: 'Jogo 3', price: 400, image: 'assets/img/jogos/jogo3.png', description: 'FPS.' }
  ];

  getAll(): Observable<Product[]> {
    return of(this.products).pipe(delay(200));
  }
}
