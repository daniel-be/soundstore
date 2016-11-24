import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

//Models
import { Album } from '../models/album';

//Services
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'my-album-detail',
  templateUrl: './app/templates/album-detail.component.html',
  providers: [ AlbumService ]
})
export class AlbumDetailComponent implements OnInit {
  private album: Album;

  constructor(private albumService: AlbumService, private route: ActivatedRoute, private location: Location) {  }

  ngOnInit() {
    this.route.params
            .switchMap((params: Params) => this.albumService.getAlbum(+params['id']))
            .subscribe(
              data => this.album = data,
              error => console.log(error),
              () => console.log('Finished')
            );
  }
}
