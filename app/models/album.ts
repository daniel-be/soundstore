export class Album {
  constructor(
    private album_id: number,
    private name: string,
    private price: number,
    private duration: string,
    private song_count: number,
    private release: string,
    private genre_id: number,
    private artist_id: number,
    private img_url: string,
    private artist_name: string
  ) { }
}
