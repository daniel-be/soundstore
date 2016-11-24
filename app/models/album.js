"use strict";
var Album = (function () {
    function Album(album_id, name, price, duration, song_count, release, genre_id, artist_id, img_url, artist_name) {
        this.album_id = album_id;
        this.name = name;
        this.price = price;
        this.duration = duration;
        this.song_count = song_count;
        this.release = release;
        this.genre_id = genre_id;
        this.artist_id = artist_id;
        this.img_url = img_url;
        this.artist_name = artist_name;
    }
    return Album;
}());
exports.Album = Album;
//# sourceMappingURL=album.js.map