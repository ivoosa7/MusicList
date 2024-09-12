import { Component } from '@angular/core';
import { Music } from '../Music';

@Component({
  selector: 'app-music-table',
  templateUrl: './music-table.component.html',
  styleUrl: './music-table.component.css'
})
export class MusicTableComponent {
  musics : Music [] = [
      {
        "id": 1,
        "title": "Rhapsody in Blue",
        "artist": "George Gershwin",
        "year": 1924,
        "genre": "Jazz/Classical",
        "label": "Aeolian Company"
      },
      {
        "id": 2,
        "title": "Over the Rainbow",
        "artist": "Judy Garland",
        "year": 1939,
        "genre": "Classic Pop",
        "label": "Decca Records"
      },
      {
        "id": 3,
        "title": "Boogie Woogie Bugle Boy",
        "artist": "The Andrews Sisters",
        "year": 1941,
        "genre": "Swing",
        "label": "Decca Records"
      },
      {
        "id": 4,
        "title": "Jailhouse Rock",
        "artist": "Elvis Presley",
        "year": 1957,
        "genre": "Rock and Roll",
        "label": "RCA Victor"
      },
      {
        "id": 5,
        "title": "Hey Jude",
        "artist": "The Beatles",
        "year": 1968,
        "genre": "Rock",
        "label": "Apple Records"
      },
      {
        "id": 6,
        "title": "Stayin' Alive",
        "artist": "Bee Gees",
        "year": 1977,
        "genre": "Disco",
        "label": "RSO Records"
      },
      {
        "id": 7,
        "title": "Thriller",
        "artist": "Michael Jackson",
        "year": 1982,
        "genre": "Pop",
        "label": "Epic Records"
      },
      {
        "id": 8,
        "title": "Smells Like Teen Spirit",
        "artist": "Nirvana",
        "year": 1991,
        "genre": "Grunge",
        "label": "DGC Records"
      },
      {
        "id": 9,
        "title": "Crazy in Love",
        "artist": "Beyoncé feat. Jay-Z",
        "year": 2003,
        "genre": "R&B/Pop",
        "label": "Columbia Records"
      },
      {
        "id": 10,
        "title": "Uptown Funk",
        "artist": "Mark Ronson feat. Bruno Mars",
        "year": 2014,
        "genre": "Funk/Pop",
        "label": "RCA Records"
      }
  ]
}
