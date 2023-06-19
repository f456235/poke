
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/MapManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '38baapycFBADJtqV/tEPcO2', 'MapManager');
// script/MapManager.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MapManager = /** @class */ (function (_super) {
    __extends(MapManager, _super);
    function MapManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.map1 = null;
        _this.map2 = null;
        _this.map3 = null;
        _this.player = null;
        _this.sprite = [];
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    MapManager.prototype.start = function () {
        this.map1.x = -512;
        this.map2.x = 0;
        this.map3.x = 512;
    };
    MapManager.prototype.update = function (dt) {
        if (this.player.x > this.map1.x + 512 / 2 && this.map3.x < this.player.x) {
            this.map3.x += 512 * 3;
            this.changeMapSprite(this.map3);
        }
        if (this.player.x < this.map1.x - 512 / 2 && this.map2.x > this.player.x) {
            this.map2.x -= 512 * 3;
            this.changeMapSprite(this.map2);
        }
        if (this.player.x > this.map2.x + 512 / 2 && this.map1.x < this.player.x) {
            this.map1.x += 512 * 3;
            this.changeMapSprite(this.map1);
        }
        if (this.player.x < this.map2.x - 512 / 2 && this.map3.x > this.player.x) {
            this.map3.x -= 512 * 3;
            this.changeMapSprite(this.map3);
        }
        if (this.player.x > this.map3.x + 512 / 2 && this.map2.x < this.player.x) {
            this.map2.x += 512 * 3;
            this.changeMapSprite(this.map2);
        }
        if (this.player.x < this.map3.x - 512 / 2 && this.map1.x > this.player.x) {
            this.map1.x -= 512 * 3;
            this.changeMapSprite(this.map1);
        }
    };
    MapManager.prototype.changeMapSprite = function (mapNode) {
        var randomIndex = Math.floor(Math.random() * 9); // 生成0-8的随机整数
        var spriteFrame = this.sprite[randomIndex];
        var sprite = mapNode.getComponent(cc.Sprite);
        if (sprite) {
            sprite.spriteFrame = spriteFrame;
        }
    };
    __decorate([
        property(cc.Node)
    ], MapManager.prototype, "map1", void 0);
    __decorate([
        property(cc.Node)
    ], MapManager.prototype, "map2", void 0);
    __decorate([
        property(cc.Node)
    ], MapManager.prototype, "map3", void 0);
    __decorate([
        property(cc.Node)
    ], MapManager.prototype, "player", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], MapManager.prototype, "sprite", void 0);
    MapManager = __decorate([
        ccclass
    ], MapManager);
    return MapManager;
}(cc.Component));
exports.default = MapManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxNYXBNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXdDLDhCQUFZO0lBQXBEO1FBQUEscUVBK0RDO1FBN0RHLFVBQUksR0FBWSxJQUFJLENBQUM7UUFHckIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUdyQixVQUFJLEdBQVksSUFBSSxDQUFDO1FBR3JCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFHdkIsWUFBTSxHQUFxQixFQUFFLENBQUM7O0lBaURsQyxDQUFDO0lBL0NHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsMEJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDdEIsQ0FBQztJQUVELDJCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFO1lBQ3RFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDdkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbkM7UUFDRCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUU7WUFDdEUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNuQztRQUVELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRTtZQUN0RSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ25DO1FBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFO1lBQ3RFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDdkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbkM7UUFFRCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUU7WUFDdEUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNuQztRQUNELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRTtZQUN0RSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ25DO0lBQ0wsQ0FBQztJQUVELG9DQUFlLEdBQWYsVUFBZ0IsT0FBTztRQUNuQixJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWE7UUFDaEUsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM3QyxJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvQyxJQUFJLE1BQU0sRUFBRTtZQUNSLE1BQU0sQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1NBQ3BDO0lBQ0wsQ0FBQztJQTVERDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNHO0lBR3JCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ0c7SUFHckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDRztJQUdyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNLO0lBR3ZCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDOzhDQUNHO0lBZGIsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQStEOUI7SUFBRCxpQkFBQztDQS9ERCxBQStEQyxDQS9EdUMsRUFBRSxDQUFDLFNBQVMsR0ErRG5EO2tCQS9Eb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXBNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbWFwMTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBtYXAyOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG1hcDM6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcGxheWVyOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcclxuICAgIHNwcml0ZTogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMubWFwMS54ID0gLTUxMjtcclxuICAgICAgICB0aGlzLm1hcDIueCA9IDA7XHJcbiAgICAgICAgdGhpcy5tYXAzLnggPSA1MTI7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGxheWVyLnggPiB0aGlzLm1hcDEueCArIDUxMiAvIDIgJiYgdGhpcy5tYXAzLnggPCB0aGlzLnBsYXllci54KSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFwMy54ICs9IDUxMiAqIDM7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlTWFwU3ByaXRlKHRoaXMubWFwMyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnBsYXllci54IDwgdGhpcy5tYXAxLnggLSA1MTIgLyAyICYmIHRoaXMubWFwMi54ID4gdGhpcy5wbGF5ZXIueCkge1xyXG4gICAgICAgICAgICB0aGlzLm1hcDIueCAtPSA1MTIgKiAzO1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZU1hcFNwcml0ZSh0aGlzLm1hcDIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMucGxheWVyLnggPiB0aGlzLm1hcDIueCArIDUxMiAvIDIgJiYgdGhpcy5tYXAxLnggPCB0aGlzLnBsYXllci54KSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFwMS54ICs9IDUxMiAqIDM7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlTWFwU3ByaXRlKHRoaXMubWFwMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnBsYXllci54IDwgdGhpcy5tYXAyLnggLSA1MTIgLyAyICYmIHRoaXMubWFwMy54ID4gdGhpcy5wbGF5ZXIueCkge1xyXG4gICAgICAgICAgICB0aGlzLm1hcDMueCAtPSA1MTIgKiAzO1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZU1hcFNwcml0ZSh0aGlzLm1hcDMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMucGxheWVyLnggPiB0aGlzLm1hcDMueCArIDUxMiAvIDIgJiYgdGhpcy5tYXAyLnggPCB0aGlzLnBsYXllci54KSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFwMi54ICs9IDUxMiAqIDM7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlTWFwU3ByaXRlKHRoaXMubWFwMik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnBsYXllci54IDwgdGhpcy5tYXAzLnggLSA1MTIgLyAyICYmIHRoaXMubWFwMS54ID4gdGhpcy5wbGF5ZXIueCkge1xyXG4gICAgICAgICAgICB0aGlzLm1hcDEueCAtPSA1MTIgKiAzO1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZU1hcFNwcml0ZSh0aGlzLm1hcDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VNYXBTcHJpdGUobWFwTm9kZSkge1xyXG4gICAgICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOSk7IC8vIOeUn+aIkDAtOOeahOmaj+acuuaVtOaVsFxyXG4gICAgICAgIGNvbnN0IHNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGVbcmFuZG9tSW5kZXhdO1xyXG4gICAgICAgIGNvbnN0IHNwcml0ZSA9IG1hcE5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgaWYgKHNwcml0ZSkge1xyXG4gICAgICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=