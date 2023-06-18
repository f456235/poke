
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/GlobalData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '82690sReQhC9549JIczU9Ud', 'GlobalData');
// script/GlobalData.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var GlobalData = /** @class */ (function () {
    function GlobalData() {
    }
    GlobalData.initializeHPArrays = function () {
        //this.hp = 100 + 10 * this.level;
        console.log(this.pokewoman.length);
        for (var i = 0; i < 6; i++) {
            if (i < this.pokewoman.length) {
                this.myPokewomanHP[i] = (this.pokewomanBaseHP[this.pokewoman[i]] +
                    this.level * this.pokewomanHPscale[this.pokewoman[i]]);
                this.fullHP[i] = this.myPokewomanHP[i];
            }
            else {
                this.myPokewomanHP[i] = 0;
                this.fullHP[i] = 0;
            }
        }
    };
    GlobalData.updateFullHP = function () {
        for (var i = 0; i < this.pokewoman.length; i++) {
            this.fullHP[i] = (this.pokewomanBaseHP[this.pokewoman[i]] +
                this.level * this.pokewomanHPscale[this.pokewoman[i]]);
        }
    };
    GlobalData.uid = "";
    GlobalData.pokewoman = [];
    GlobalData.level = 1;
    GlobalData.PlayerPosX = 29;
    GlobalData.PlayerPosY = -62;
    GlobalData.Player2PosX = 35;
    GlobalData.Player2PosY = -62;
    GlobalData.cameraPosX = 138;
    GlobalData.cameraPosY = 71;
    GlobalData.volume = 0.5;
    GlobalData.mute = this.volume == 0 ? false : true;
    GlobalData.map = 'map2';
    GlobalData.nodeToDestroy = [];
    GlobalData.myelf = 0;
    GlobalData.mylife = 0;
    GlobalData.exp = 0;
    GlobalData.level_exp = [50, 120, 190, 290, 390, 500, 610, 670, 800, 1000];
    GlobalData.enemyHPbyID = [50, 54, 63, 65, 70, 59, 60];
    GlobalData.enemyAttackById = [21, 25, 21, 23, 18, 25, 24];
    GlobalData.enemyLevelById = [15, 15, 20, 30, 20, 23, 26];
    GlobalData.pokewomanAttack = [10, 15, 20, 23, 22, 18, 12, 29, 30, 24, 15, 31, 25, 31, 9, 8];
    GlobalData.pokewomanBaseHP = [80, 70, 60, 69, 78, 97, 62, 88, 73, 74, 81, 72, 60, 90, 50, 40];
    GlobalData.pokewomanHPscale = [9, 10, 11, 9, 10, 8, 13, 9, 14, 10, 10, 11, 13, 14, 9];
    GlobalData.hp = 100;
    GlobalData.myPokewomanHP = [];
    GlobalData.fullHP = [];
    return GlobalData;
}());
exports.default = GlobalData;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxHbG9iYWxEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7QUFDbEY7SUFBQTtJQWdEQSxDQUFDO0lBdkJVLDZCQUFrQixHQUF6QjtRQUNJLGtDQUFrQztRQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkMsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQztZQUNyQixJQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBQztnQkFDekIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDNUQsSUFBSSxDQUFDLEtBQUssR0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBQ3hELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUMxQztpQkFBSTtnQkFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDdEI7U0FDSjtJQUVMLENBQUM7SUFDTSx1QkFBWSxHQUFuQjtRQUNJLEtBQUksSUFBSSxDQUFDLEdBQUUsQ0FBQyxFQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFD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aERELEFBZ0RDLElBQUE7a0JBaERvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHbG9iYWxEYXRhIHtcclxuICAgIHN0YXRpYyB1aWQ6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBzdGF0aWMgcG9rZXdvbWFuOiBhbnlbXSA9IFtdO1xyXG4gICAgc3RhdGljIGxldmVsOiBudW1iZXIgPSAxO1xyXG4gICAgc3RhdGljIFBsYXllclBvc1ggOiBudW1iZXIgPSAyOTtcclxuICAgIHN0YXRpYyBQbGF5ZXJQb3NZIDogbnVtYmVyID0gLTYyO1xyXG4gICAgc3RhdGljIFBsYXllcjJQb3NYIDogbnVtYmVyID0gMzU7XHJcbiAgICBzdGF0aWMgUGxheWVyMlBvc1kgOiBudW1iZXIgPSAtNjI7XHJcbiAgICBzdGF0aWMgY2FtZXJhUG9zWCA6IG51bWJlciA9IDEzODtcclxuICAgIHN0YXRpYyBjYW1lcmFQb3NZIDogbnVtYmVyID0gNzE7XHJcbiAgICBzdGF0aWMgdm9sdW1lIDogbnVtYmVyID0gMC41O1xyXG4gICAgc3RhdGljIG11dGUgOiBib29sZWFuID0gdGhpcy52b2x1bWUgPT0gMCA/IGZhbHNlIDogdHJ1ZTtcclxuICAgIHN0YXRpYyBtYXAgOiBzdHJpbmcgPSAnbWFwMic7XHJcbiAgICBzdGF0aWMgbm9kZVRvRGVzdHJveSA6IHN0cmluZ1tdID0gW107XHJcbiAgICBzdGF0aWMgbXllbGYgOiBudW1iZXIgPSAwO1xyXG4gICAgc3RhdGljIG15bGlmZSA6IG51bWJlciA9IDA7XHJcbiAgICBzdGF0aWMgZXhwIDogbnVtYmVyID0gMDtcclxuICAgIHN0YXRpYyBsZXZlbF9leHA6IG51bWJlcltdID0gWzUwLDEyMCwxOTAsMjkwLDM5MCw1MDAsNjEwLDY3MCw4MDAsMTAwMF07XHJcbiAgICBzdGF0aWMgZW5lbXlIUGJ5SUQ6IG51bWJlcltdID0gWzUwLDU0LDYzLDY1LDcwLDU5LDYwXVxyXG4gICAgc3RhdGljIGVuZW15QXR0YWNrQnlJZDogbnVtYmVyW10gPSBbMjEsMjUsMjEsMjMsMTgsMjUsMjRdXHJcbiAgICBzdGF0aWMgZW5lbXlMZXZlbEJ5SWQ6IG51bWJlcltdID0gWzE1LDE1LDIwLDMwLDIwLDIzLDI2XVxyXG4gICAgc3RhdGljIHBva2V3b21hbkF0dGFjazogbnVtYmVyW10gPSBbMTAsMTUsMjAsMjMsMjIsMTgsMTIsMjksMzAsMjQsMTUsMzEsMjUsMzEsOSw4XVxyXG4gICAgc3RhdGljIHBva2V3b21hbkJhc2VIUDogbnVtYmVyW10gPSBbODAsNzAsNjAsNjksNzgsOTcsNjIsODgsNzMsNzQsODEsNzIsNjAsOTAsNTAsNDBdXHJcbiAgICBzdGF0aWMgcG9rZXdvbWFuSFBzY2FsZTogbnVtYmVyW10gPSBbOSwxMCwxMSw5LDEwLDgsMTMsOSwxNCwxMCwxMCwxMSwxMywxNCw5XVxyXG4gICAgc3RhdGljIGhwOiBudW1iZXIgPSAxMDA7XHJcbiAgICBzdGF0aWMgaW5pdGlhbGl6ZUhQQXJyYXlzKCk6IHZvaWQge1xyXG4gICAgICAgIC8vdGhpcy5ocCA9IDEwMCArIDEwICogdGhpcy5sZXZlbDtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnBva2V3b21hbi5sZW5ndGgpO1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDAgO2kgPCA2O2krKyl7XHJcbiAgICAgICAgICAgIGlmKGkgPCB0aGlzLnBva2V3b21hbi5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5teVBva2V3b21hbkhQW2ldID0gKHRoaXMucG9rZXdvbWFuQmFzZUhQW3RoaXMucG9rZXdvbWFuW2ldXSArIFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGV2ZWwqdGhpcy5wb2tld29tYW5IUHNjYWxlW3RoaXMucG9rZXdvbWFuW2ldXSlcclxuICAgICAgICAgICAgICAgIHRoaXMuZnVsbEhQW2ldID0gdGhpcy5teVBva2V3b21hbkhQW2ldO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMubXlQb2tld29tYW5IUFtpXSA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZ1bGxIUFtpXSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBzdGF0aWMgdXBkYXRlRnVsbEhQKCk6IHZvaWR7XHJcbiAgICAgICAgZm9yKHZhciBpPSAwIDsgaSA8IHRoaXMucG9rZXdvbWFuLmxlbmd0aCA7aSsrKXtcclxuICAgICAgICAgICAgdGhpcy5mdWxsSFBbaV0gPSAodGhpcy5wb2tld29tYW5CYXNlSFBbdGhpcy5wb2tld29tYW5baV1dICsgXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxldmVsKnRoaXMucG9rZXdvbWFuSFBzY2FsZVt0aGlzLnBva2V3b21hbltpXV0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3RhdGljIG15UG9rZXdvbWFuSFA6IG51bWJlcltdID0gW107XHJcbiAgICBzdGF0aWMgZnVsbEhQOiBudW1iZXJbXSA9IFtdO1xyXG59XHJcbiJdfQ==