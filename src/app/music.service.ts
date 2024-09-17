import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Music } from './Music';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  constructor(private http:HttpClient) { }
  getMusic():Observable<Music[]>{
    return this.http.get<Music[]>("http://localhost:3000/musicList")
  }
}
