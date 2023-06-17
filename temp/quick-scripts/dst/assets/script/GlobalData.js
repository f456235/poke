
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxHbG9iYWxEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7QUFDbEY7SUFBQTtJQWNBLENBQUM7SUFiVSxjQUFHLEdBQVcsRUFBRSxDQUFDO0lBQ2pCLG9CQUFTLEdBQVUsRUFBRSxDQUFDO0lBQ3RCLGdCQUFLLEdBQVcsQ0FBQyxDQUFDO0lBQ2xCLHFCQUFVLEdBQVksRUFBRSxDQUFDO0lBQ3pCLHFCQUFVLEdBQVksQ0FBQyxFQUFFLENBQUM7SUFDMUIsc0JBQVcsR0FBWSxFQUFFLENBQUM7SUFDMUIsc0JBQVcsR0FBWSxDQUFDLEVBQUUsQ0FBQztJQUMzQixxQkFBVSxHQUFZLEdBQUcsQ0FBQztJQUMxQixxQkFBVSxHQUFZLEVBQUUsQ0FBQztJQUN6QixpQkFBTSxHQUFZLEdBQUcsQ0FBQztJQUN0QixlQUFJLEdBQWEsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ2pELGNBQUcsR0FBWSxNQUFNLENBQUM7SUFDdEIsd0JBQWEsR0FBYyxFQUFFLENBQUM7SUFDekMsaUJBQUM7Q0FkRCxBQWNDLElBQUE7a0JBZG9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdsb2JhbERhdGEge1xyXG4gICAgc3RhdGljIHVpZDogc3RyaW5nID0gXCJcIjtcclxuICAgIHN0YXRpYyBwb2tld29tYW46IGFueVtdID0gW107XHJcbiAgICBzdGF0aWMgbGV2ZWw6IG51bWJlciA9IDE7XHJcbiAgICBzdGF0aWMgUGxheWVyUG9zWCA6IG51bWJlciA9IDI5O1xyXG4gICAgc3RhdGljIFBsYXllclBvc1kgOiBudW1iZXIgPSAtNjI7XHJcbiAgICBzdGF0aWMgUGxheWVyMlBvc1ggOiBudW1iZXIgPSAzNTtcclxuICAgIHN0YXRpYyBQbGF5ZXIyUG9zWSA6IG51bWJlciA9IC02MjtcclxuICAgIHN0YXRpYyBjYW1lcmFQb3NYIDogbnVtYmVyID0gMTM4O1xyXG4gICAgc3RhdGljIGNhbWVyYVBvc1kgOiBudW1iZXIgPSA3MTtcclxuICAgIHN0YXRpYyB2b2x1bWUgOiBudW1iZXIgPSAwLjU7XHJcbiAgICBzdGF0aWMgbXV0ZSA6IGJvb2xlYW4gPSB0aGlzLnZvbHVtZSA9PSAwID8gZmFsc2UgOiB0cnVlO1xyXG4gICAgc3RhdGljIG1hcCA6IHN0cmluZyA9ICdtYXAyJztcclxuICAgIHN0YXRpYyBub2RlVG9EZXN0cm95IDogc3RyaW5nW10gPSBbXTtcclxufVxyXG4iXX0=