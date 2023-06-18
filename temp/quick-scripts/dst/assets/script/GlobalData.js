
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
    GlobalData.pokewomanName = ["岩東勇", "炎東勇", "嚴冬勇", "魔關羽", "dong boss", "Jigglypuff", "Meowth", "鯉魚王", "Snorlax", "Mew", "Mewtwo", "Dragonite", "Gengar", "Gyarados", "Pidgey", "Rattata"];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxHbG9iYWxEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7QUFDbEY7SUFBQTtJQWlEQSxDQUFDO0lBdkJVLDZCQUFrQixHQUF6QjtRQUNJLGtDQUFrQztRQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkMsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBQztZQUNyQixJQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBQztnQkFDekIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDNUQsSUFBSSxDQUFDLEtBQUssR0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBQ3hELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUMxQztpQkFBSTtnQkFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDdEI7U0FDSjtJQUVMLENBQUM7SUFDTSx1QkFBWSxHQUFuQjtRQUNJLEtBQUksSUFBSSxDQUFDLEdBQUUsQ0FBQyxFQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBQztZQUMxQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNyRCxJQUFJLENBQUMsS0FBSyxHQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtTQUMzRDtJQUNMLENBQUM7SUE3Q00sY0FBRyxHQUFXLEVBQUUsQ0FBQztJQUNqQixvQkFBUyxHQUFVLEVBQUUsQ0FBQztJQUN0QixnQkFBSyxHQUFXLENBQUMsQ0FBQztJQUNsQixxQkFBVSxHQUFZLEVBQUUsQ0FBQztJQUN6QixxQkFBVSxHQUFZLENBQUMsRUFBRSxDQUFDO0lBQzFCLHNCQUFXLEdBQVksRUFBRSxDQUFDO0lBQzFCLHNCQUFXLEdBQVksQ0FBQyxFQUFFLENBQUM7SUFDM0IscUJBQVUsR0FBWSxHQUFHLENBQUM7SUFDMUIscUJBQVUsR0FBWSxFQUFFLENBQUM7SUFDekIsaUJBQU0sR0FBWSxHQUFHLENBQUM7SUFDdEIsZUFBSSxHQUFhLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNqRCxjQUFHLEdBQVksTUFBTSxDQUFDO0lBQ3RCLHdCQUFhLEdBQWMsRUFBRSxDQUFDO0lBQzlCLGdCQUFLLEdBQVksQ0FBQyxDQUFDO0lBQ25CLGlCQUFNLEdBQVksQ0FBQyxDQUFDO0lBQ3BCLGNBQUcsR0FBWSxDQUFDLENBQUM7SUFDakIsb0JBQVMsR0FBYSxDQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hFLHNCQUFXLEdBQWEsQ0FBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLENBQUMsQ0FBQTtJQUM5QywwQkFBZSxHQUFhLENBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxDQUFDLENBQUE7SUFDbEQseUJBQWMsR0FBYSxDQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQ2pELDBCQUFlLEdBQWEsQ0FBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQTtJQUMzRSwwQkFBZSxHQUFhLENBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxDQUFDLENBQUE7SUFDN0UsMkJBQWdCLEdBQWEsQ0FBQyxDQUFDLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUMsRUFBRSxFQUFDLENBQUMsRUFBQyxFQUFFLEVBQUMsQ0FBQyxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ3RFLHdCQUFhLEdBQWEsQ0FBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsV0FBVyxFQUFDLFlBQVksRUFBQyxRQUFRLEVBQUMsS0FBSyxFQUFDLFNBQVMsRUFBQyxLQUFLLEVBQUMsUUFBUSxFQUFDLFdBQVcsRUFBQyxRQUFRLEVBQUMsVUFBVSxFQUFDLFFBQVEsRUFBQyxTQUFTLENBQUMsQ0FBQTtJQUN2SyxhQUFFLEdBQVcsR0FBRyxDQUFDO0lBc0JqQix3QkFBYSxHQUFhLEVBQUUsQ0FBQztJQUM3QixpQkFBTSxHQUFhLEVBQUUsQ0FBQztJQUNqQyxpQkFBQztDQWpERCxBQWlEQyxJQUFBO2tCQWpEb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2xvYmFsRGF0YSB7XHJcbiAgICBzdGF0aWMgdWlkOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgc3RhdGljIHBva2V3b21hbjogYW55W10gPSBbXTtcclxuICAgIHN0YXRpYyBsZXZlbDogbnVtYmVyID0gMTtcclxuICAgIHN0YXRpYyBQbGF5ZXJQb3NYIDogbnVtYmVyID0gMjk7XHJcbiAgICBzdGF0aWMgUGxheWVyUG9zWSA6IG51bWJlciA9IC02MjtcclxuICAgIHN0YXRpYyBQbGF5ZXIyUG9zWCA6IG51bWJlciA9IDM1O1xyXG4gICAgc3RhdGljIFBsYXllcjJQb3NZIDogbnVtYmVyID0gLTYyO1xyXG4gICAgc3RhdGljIGNhbWVyYVBvc1ggOiBudW1iZXIgPSAxMzg7XHJcbiAgICBzdGF0aWMgY2FtZXJhUG9zWSA6IG51bWJlciA9IDcxO1xyXG4gICAgc3RhdGljIHZvbHVtZSA6IG51bWJlciA9IDAuNTtcclxuICAgIHN0YXRpYyBtdXRlIDogYm9vbGVhbiA9IHRoaXMudm9sdW1lID09IDAgPyBmYWxzZSA6IHRydWU7XHJcbiAgICBzdGF0aWMgbWFwIDogc3RyaW5nID0gJ21hcDInO1xyXG4gICAgc3RhdGljIG5vZGVUb0Rlc3Ryb3kgOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgc3RhdGljIG15ZWxmIDogbnVtYmVyID0gMDtcclxuICAgIHN0YXRpYyBteWxpZmUgOiBudW1iZXIgPSAwO1xyXG4gICAgc3RhdGljIGV4cCA6IG51bWJlciA9IDA7XHJcbiAgICBzdGF0aWMgbGV2ZWxfZXhwOiBudW1iZXJbXSA9IFs1MCwxMjAsMTkwLDI5MCwzOTAsNTAwLDYxMCw2NzAsODAwLDEwMDBdO1xyXG4gICAgc3RhdGljIGVuZW15SFBieUlEOiBudW1iZXJbXSA9IFs1MCw1NCw2Myw2NSw3MCw1OSw2MF1cclxuICAgIHN0YXRpYyBlbmVteUF0dGFja0J5SWQ6IG51bWJlcltdID0gWzIxLDI1LDIxLDIzLDE4LDI1LDI0XVxyXG4gICAgc3RhdGljIGVuZW15TGV2ZWxCeUlkOiBudW1iZXJbXSA9IFsxNSwxNSwyMCwzMCwyMCwyMywyNl1cclxuICAgIHN0YXRpYyBwb2tld29tYW5BdHRhY2s6IG51bWJlcltdID0gWzEwLDE1LDIwLDIzLDIyLDE4LDEyLDI5LDMwLDI0LDE1LDMxLDI1LDMxLDksOF1cclxuICAgIHN0YXRpYyBwb2tld29tYW5CYXNlSFA6IG51bWJlcltdID0gWzgwLDcwLDYwLDY5LDc4LDk3LDYyLDg4LDczLDc0LDgxLDcyLDYwLDkwLDUwLDQwXVxyXG4gICAgc3RhdGljIHBva2V3b21hbkhQc2NhbGU6IG51bWJlcltdID0gWzksMTAsMTEsOSwxMCw4LDEzLDksMTQsMTAsMTAsMTEsMTMsMTQsOV1cclxuICAgIHN0YXRpYyBwb2tld29tYW5OYW1lOiBzdHJpbmdbXSA9IFtcIuWyqeadseWLh1wiLFwi54KO5p2x5YuHXCIsXCLlmrTlhqzli4dcIixcIumtlOmXnOe+vVwiLFwiZG9uZyBib3NzXCIsXCJKaWdnbHlwdWZmXCIsXCJNZW93dGhcIixcIumviemtmueOi1wiLFwiU25vcmxheFwiLFwiTWV3XCIsXCJNZXd0d29cIixcIkRyYWdvbml0ZVwiLFwiR2VuZ2FyXCIsXCJHeWFyYWRvc1wiLFwiUGlkZ2V5XCIsXCJSYXR0YXRhXCJdXHJcbiAgICBzdGF0aWMgaHA6IG51bWJlciA9IDEwMDtcclxuICAgIHN0YXRpYyBpbml0aWFsaXplSFBBcnJheXMoKTogdm9pZCB7XHJcbiAgICAgICAgLy90aGlzLmhwID0gMTAwICsgMTAgKiB0aGlzLmxldmVsO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucG9rZXdvbWFuLmxlbmd0aCk7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMCA7aSA8IDY7aSsrKXtcclxuICAgICAgICAgICAgaWYoaSA8IHRoaXMucG9rZXdvbWFuLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm15UG9rZXdvbWFuSFBbaV0gPSAodGhpcy5wb2tld29tYW5CYXNlSFBbdGhpcy5wb2tld29tYW5baV1dICsgXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sZXZlbCp0aGlzLnBva2V3b21hbkhQc2NhbGVbdGhpcy5wb2tld29tYW5baV1dKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5mdWxsSFBbaV0gPSB0aGlzLm15UG9rZXdvbWFuSFBbaV07XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy5teVBva2V3b21hbkhQW2ldID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZnVsbEhQW2ldID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuICAgIHN0YXRpYyB1cGRhdGVGdWxsSFAoKTogdm9pZHtcclxuICAgICAgICBmb3IodmFyIGk9IDAgOyBpIDwgdGhpcy5wb2tld29tYW4ubGVuZ3RoIDtpKyspe1xyXG4gICAgICAgICAgICB0aGlzLmZ1bGxIUFtpXSA9ICh0aGlzLnBva2V3b21hbkJhc2VIUFt0aGlzLnBva2V3b21hbltpXV0gKyBcclxuICAgICAgICAgICAgICAgIHRoaXMubGV2ZWwqdGhpcy5wb2tld29tYW5IUHNjYWxlW3RoaXMucG9rZXdvbWFuW2ldXSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgbXlQb2tld29tYW5IUDogbnVtYmVyW10gPSBbXTtcclxuICAgIHN0YXRpYyBmdWxsSFA6IG51bWJlcltdID0gW107XHJcbn1cclxuIl19