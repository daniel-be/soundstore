"use strict";
var Album = (function () {
    function Album(album_id, name, img_url, artist_name) {
        this.album_id = album_id;
        this.name = name;
        this.img_url = img_url;
        this.artist_name = artist_name;
    }
    return Album;
}());
exports.Album = Album;
//# sourceMappingURL=album.js.map