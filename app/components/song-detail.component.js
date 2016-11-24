"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var song_service_1 = require('../services/song.service');
var SongDetailComponent = (function () {
    function SongDetailComponent(songService) {
        this.songService = songService;
    }
    SongDetailComponent.prototype.ngOnInit = function () {
        this.getSong();
    };
    SongDetailComponent.prototype.getSong = function () {
        var _this = this;
        this.songService.getSong()
            .subscribe(function (data) { return _this.song = data; }, function (error) { return console.log(error); }, function () { return console.log("Finished "); });
    };
    SongDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-song-detail',
            templateUrl: './app/templates/song-detail.component.html',
            providers: [song_service_1.SongService]
        }), 
        __metadata('design:paramtypes', [song_service_1.SongService])
    ], SongDetailComponent);
    return SongDetailComponent;
}());
exports.SongDetailComponent = SongDetailComponent;
//# sourceMappingURL=song-detail.component.js.map