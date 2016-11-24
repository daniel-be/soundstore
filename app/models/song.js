"use strict";
var Song = (function () {
    function Song(album_id, artist_id, name, price, duration, release) {
        this.album_id = album_id;
        this.artist_id = artist_id;
        this.name = name;
        this.price = price;
        this.duration = duration;
        this.release = release;
    }
    return Song;
}());
exports.Song = Song;
//# sourceMappingURL=song.js.map