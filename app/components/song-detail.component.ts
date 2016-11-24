import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

//Models
import { Song } from '../models/song';

//Services
import { SongService } from '../services/song.service';

@Component({
  selector: 'my-song-detail',
  templateUrl: './app/templates/song-detail.component.html',
  providers: [ SongService ]
})
export class SongDetailComponent implements OnInit {
  private song: Song;

  constructor(private songService: SongService, private route: ActivatedRoute, private location: Location) {

  }

  ngOnInit() {
    this.route.params
          .switchMap((params: Params) => this.songService.getSong(+params['id']))
          .subscribe(
            data => this.song = data,
            error => console.log(error),
            () => console.log('Finished')
          );
  }
}
