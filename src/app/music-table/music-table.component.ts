import { Music } from './../Music';
import { Component, OnInit } from '@angular/core';
import { MusicService } from '../music.service';

@Component({
  selector: 'app-music-table',
  templateUrl: './music-table.component.html',
  styleUrl: './music-table.component.css'
})
export class MusicTableComponent implements OnInit {
  musics : Music [] = [];
  constructor(private service: MusicService) {
  };
  ngOnInit(): void {
    this.loadMusics();
  };
  loadMusics(){
      this.service.getMusic().subscribe({
        next: data => this.musics = data
      });
  }

  delete(music: Music){
    this.service.delete(music).subscribe({
      next: () => this.loadMusics()
    });
  }
}
