import { Injectable } from '@angular/core';
import { Http, Headers, Response} from '@angular/http';
import { Observable } from 'rxjs';

import { Song } from '../models/song';

@Injectable()
export class SongService {
  private songUrl = 'http://localhost:3000/song'

  constructor(private http: Http) {  }

  getSong(): Observable<Song> {
    return this.http.get(this.songUrl + '/')
              .map((res: Response) => {console.log(res.json() as Song); return res.json().songs as Song});
  }

  getDashboardSongs(): Observable<Song[]> {
    return this.http.get(this.songUrl + '/latest/6')
                .map((res: Response) => {console.log(res.json().songs); return res.json().songs as Song[]});
  }
}
