import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gif } from 'app/models/gif.model';

@Injectable()
export class GifService {
  apiUrl = 'https://wt-3b6a0ce309b75675a193824d9bfb90cf-0.sandbox.auth0-extend.com/gif-battle';

  constructor(private http: HttpClient) {}

  // CREATE =====================================================
  // get a random gif
  getRandom(): Observable<Gif> {
    return this.http.get<Gif>(`${this.apiUrl}/random`);
  }

  // store a gif
  save(id: string, url: string, caption: string): Observable<any> {
    return this.http.post(this.apiUrl, { id, url, caption, votes: 0 });
  }

  // BATTLE =====================================================
  // get a battle (2 gifs)
  getBattle(): Observable<Gif[]> {
    return this.http.get<Gif[]>(`${this.apiUrl}/versus`);
  }

  // vote on a gif
  vote(id): Observable<any> {
    return this.http.post(`${this.apiUrl}/vote`, { id });
  }

  // LEADERBOARD =====================================================
  // get the leaderboard
  getLeaderboard(): Observable<Gif[]> {
    return this.http.get<Gif[]>(`${this.apiUrl}/leaderboard`);
  }

}
