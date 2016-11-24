export class Song {
  constructor(
    private album_id: number,
    private artist_id: number,
    private name: string,
    private price: number,
    private duration: string,
    private release: string,
  ){ }
}
