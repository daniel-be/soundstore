import { Component, OnInit, Input } from '@angular/core';

import { Song } from '../models/song';
import { SongService } from '../services/song.service';

@Component({
  selector: 'my-song-detail',
  templateUrl: './app/templates/song-detail.component.html',
  providers: [ SongService ]
})
export class SongDetailComponent implements OnInit {
  private song: Song;

  constructor(private songService: SongService) {  }

  ngOnInit() {
    this.getSong();
  }

  getSong(): void {
    this.songService.getSong()
                    .subscribe(
                      data => this.song = data,
                      error => console.log(error),
                      () => console.log("Finished ")
                    );
  }
}
