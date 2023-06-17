
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxHbG9iYWxEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7QUFDbEY7SUFBQTtJQWtCQSxDQUFDO0lBakJVLGNBQUcsR0FBVyxFQUFFLENBQUM7SUFDakIsb0JBQVMsR0FBVSxFQUFFLENBQUM7SUFDdEIsZ0JBQUssR0FBVyxDQUFDLENBQUM7SUFDbEIscUJBQVUsR0FBWSxFQUFFLENBQUM7SUFDekIscUJBQVUsR0FBWSxDQUFDLEVBQUUsQ0FBQztJQUMxQixzQkFBVyxHQUFZLEVBQUUsQ0FBQztJQUMxQixzQkFBVyxHQUFZLENBQUMsRUFBRSxDQUFDO0lBQzNCLHFCQUFVLEdBQVksR0FBRyxDQUFDO0lBQzFCLHFCQUFVLEdBQVksRUFBRSxDQUFDO0lBQ3pCLGlCQUFNLEdBQVksR0FBRyxDQUFDO0lBQ3RCLGVBQUksR0FBYSxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDakQsY0FBRyxHQUFZLE1BQU0sQ0FBQztJQUN0Qix3QkFBYSxHQUFjLEVBQUUsQ0FBQztJQUM5QixnQkFBSyxHQUFZLENBQUMsQ0FBQztJQUNuQixpQkFBTSxHQUFZLENBQUMsQ0FBQztJQUNwQixjQUFHLEdBQVksQ0FBQyxDQUFDO0lBQ2pCLG9CQUFTLEdBQWEsQ0FBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxJQUFJLENBQUMsQ0FBQztJQUMzRSxpQkFBQztDQWxCRCxBQWtCQyxJQUFBO2tCQWxCb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2xvYmFsRGF0YSB7XHJcbiAgICBzdGF0aWMgdWlkOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgc3RhdGljIHBva2V3b21hbjogYW55W10gPSBbXTtcclxuICAgIHN0YXRpYyBsZXZlbDogbnVtYmVyID0gMTtcclxuICAgIHN0YXRpYyBQbGF5ZXJQb3NYIDogbnVtYmVyID0gMjk7XHJcbiAgICBzdGF0aWMgUGxheWVyUG9zWSA6IG51bWJlciA9IC02MjtcclxuICAgIHN0YXRpYyBQbGF5ZXIyUG9zWCA6IG51bWJlciA9IDM1O1xyXG4gICAgc3RhdGljIFBsYXllcjJQb3NZIDogbnVtYmVyID0gLTYyO1xyXG4gICAgc3RhdGljIGNhbWVyYVBvc1ggOiBudW1iZXIgPSAxMzg7XHJcbiAgICBzdGF0aWMgY2FtZXJhUG9zWSA6IG51bWJlciA9IDcxO1xyXG4gICAgc3RhdGljIHZvbHVtZSA6IG51bWJlciA9IDAuNTtcclxuICAgIHN0YXRpYyBtdXRlIDogYm9vbGVhbiA9IHRoaXMudm9sdW1lID09IDAgPyBmYWxzZSA6IHRydWU7XHJcbiAgICBzdGF0aWMgbWFwIDogc3RyaW5nID0gJ21hcDInO1xyXG4gICAgc3RhdGljIG5vZGVUb0Rlc3Ryb3kgOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgc3RhdGljIG15ZWxmIDogbnVtYmVyID0gMDtcclxuICAgIHN0YXRpYyBteWxpZmUgOiBudW1iZXIgPSAwO1xyXG4gICAgc3RhdGljIGV4cCA6IG51bWJlciA9IDA7XHJcbiAgICBzdGF0aWMgbGV2ZWxfZXhwOiBudW1iZXJbXSA9IFs1MCwxMjAsMTkwLDI5MCwzOTAsNTAwLDYxMCw2NzAsODAwLDEwMDBdO1xyXG59XHJcbiJdfQ==