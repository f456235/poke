
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/enemy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fee8bOTl8NOdr370sTGgHbi', 'enemy');
// script/enemy.ts

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
var man_1 = require("./man");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Enemy = /** @class */ (function (_super) {
    __extends(Enemy, _super);
    function Enemy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.enemySpeed = 50;
        _this.anim = null;
        _this.man = null;
        return _this;
    }
    Enemy.prototype.start = function () {
    };
    Enemy.prototype.playAnimation = function (animationName) {
        if (this.anim && this.anim.getAnimationState(animationName).isPlaying) {
            return;
        }
        this.anim.play(animationName);
    };
    Enemy.prototype.stopAnimation = function (animationName) {
        if (this.anim && this.anim.getAnimationState(animationName).isPlaying) {
            this.anim.stop(animationName);
        }
    };
    Enemy.prototype.update = function (dt) {
        //cc.log("dong_move");
        if (this.node.name == "4") {
            if (!this.anim.getAnimationState("dong_move").isPlaying)
                this.playAnimation("dong_move");
        }
        else if (this.node.name == "5")
            if (!this.anim.getAnimationState("red_dong_move").isPlaying)
                this.playAnimation("red_dong_move");
        //cc.log("dong_move");
        // this.playAnimation("dong_move");  
        this.node.x = this.node.x + this.enemySpeed * dt;
    };
    Enemy.prototype.onBeginContact = function (contact, self, other) {
        if (other.tag != 2) {
            this.enemySpeed *= -1;
            this.node.scaleX *= -1;
        }
        else {
            this.enemySpeed *= 0;
            this.stopAnimation("dong_move");
            if (other.scaleX == this.node.scaleX)
                this.node.scaleX *= -1;
            else
                this.node.scaleX *= 1;
        }
    };
    Enemy.prototype.onLoad = function () {
        cc.director.getPhysicsManager().enabled = true;
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        this.anim = this.getComponent(cc.Animation);
    };
    __decorate([
        property(man_1.default)
    ], Enemy.prototype, "man", void 0);
    Enemy = __decorate([
        ccclass
    ], Enemy);
    return Enemy;
}(cc.Component));
exports.default = Enemy;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxlbmVteS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2QkFBd0I7QUFDbEIsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBbUMseUJBQVk7SUFBL0M7UUFBQSxxRUE2REM7UUE1RFcsZ0JBQVUsR0FBVyxFQUFFLENBQUM7UUFFaEMsVUFBSSxHQUFHLElBQUksQ0FBQztRQUdaLFNBQUcsR0FBUSxJQUFJLENBQUM7O0lBdURwQixDQUFDO0lBckRHLHFCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsNkJBQWEsR0FBYixVQUFjLGFBQXFCO1FBQy9CLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxDQUFDLFNBQVMsRUFBRTtZQUNuRSxPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsNkJBQWEsR0FBYixVQUFjLGFBQXFCO1FBQy9CLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxDQUFDLFNBQVMsRUFBRTtZQUNuRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUNqQztJQUNMLENBQUM7SUFFRCxzQkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNMLHNCQUFzQjtRQUNsQixJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEdBQUcsRUFBQztZQUNyQixJQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTO2dCQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUE7U0FDMUY7YUFDSSxJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEdBQUc7WUFDN0IsSUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsZUFBZSxDQUFDLENBQUMsU0FBUztnQkFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ2hHLHNCQUFzQjtRQUV2QixxQ0FBcUM7UUFDeEMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7SUFFckQsQ0FBQztJQUdELDhCQUFjLEdBQWQsVUFBZSxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUs7UUFDL0IsSUFBRyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRTtZQUNYLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUM7U0FFMUI7YUFBSTtZQUNELElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDaEMsSUFBRyxLQUFLLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTTtnQkFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUM7O2dCQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7U0FDOUI7SUFDVCxDQUFDO0lBRUQsc0JBQU0sR0FBTjtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQy9DLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUNoRCxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUF0REM7UUFEQyxRQUFRLENBQUMsYUFBRyxDQUFDO3NDQUNFO0lBTkMsS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQTZEekI7SUFBRCxZQUFDO0NBN0RELEFBNkRDLENBN0RrQyxFQUFFLENBQUMsU0FBUyxHQTZEOUM7a0JBN0RvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1hbiBmcm9tIFwiLi9tYW5cIjtcclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbmVteSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBwcml2YXRlIGVuZW15U3BlZWQ6IG51bWJlciA9IDUwO1xyXG5cclxuICAgIGFuaW0gPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShNYW4pXHJcbiAgICBtYW46IE1hbiA9IG51bGw7XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcGxheUFuaW1hdGlvbihhbmltYXRpb25OYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5hbmltICYmIHRoaXMuYW5pbS5nZXRBbmltYXRpb25TdGF0ZShhbmltYXRpb25OYW1lKS5pc1BsYXlpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5hbmltLnBsYXkoYW5pbWF0aW9uTmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RvcEFuaW1hdGlvbihhbmltYXRpb25OYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5hbmltICYmIHRoaXMuYW5pbS5nZXRBbmltYXRpb25TdGF0ZShhbmltYXRpb25OYW1lKS5pc1BsYXlpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5hbmltLnN0b3AoYW5pbWF0aW9uTmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIC8vY2MubG9nKFwiZG9uZ19tb3ZlXCIpO1xyXG4gICAgICAgICAgICBpZih0aGlzLm5vZGUubmFtZSA9PSBcIjRcIil7XHJcbiAgICAgICAgICAgICAgICBpZighdGhpcy5hbmltLmdldEFuaW1hdGlvblN0YXRlKFwiZG9uZ19tb3ZlXCIpLmlzUGxheWluZykgdGhpcy5wbGF5QW5pbWF0aW9uKFwiZG9uZ19tb3ZlXCIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZih0aGlzLm5vZGUubmFtZSA9PSBcIjVcIilcclxuICAgICAgICAgICAgaWYoIXRoaXMuYW5pbS5nZXRBbmltYXRpb25TdGF0ZShcInJlZF9kb25nX21vdmVcIikuaXNQbGF5aW5nKSB0aGlzLnBsYXlBbmltYXRpb24oXCJyZWRfZG9uZ19tb3ZlXCIpO1xyXG4gICAgICAgICAgICAvL2NjLmxvZyhcImRvbmdfbW92ZVwiKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAvLyB0aGlzLnBsYXlBbmltYXRpb24oXCJkb25nX21vdmVcIik7ICBcclxuICAgICAgICB0aGlzLm5vZGUueCA9IHRoaXMubm9kZS54ICsgdGhpcy5lbmVteVNwZWVkICogZHQ7XHJcbiAgICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIG9uQmVnaW5Db250YWN0KGNvbnRhY3QsIHNlbGYsIG90aGVyKSB7XHJcbiAgICAgICAgaWYob3RoZXIudGFnICE9IDIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5lbXlTcGVlZCAqPSAtMTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggKj0gLTE7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZW15U3BlZWQgKj0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcEFuaW1hdGlvbihcImRvbmdfbW92ZVwiKTtcclxuICAgICAgICAgICAgICAgIGlmKG90aGVyLnNjYWxlWCA9PSB0aGlzLm5vZGUuc2NhbGVYKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggKj0gLTE7XHJcbiAgICAgICAgICAgICAgICBlbHNlIHRoaXMubm9kZS5zY2FsZVggKj0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICB2YXIgbWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKTtcclxuICAgICAgICBtYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYW5pbSA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7IFxyXG4gIH1cclxufVxyXG4iXX0=