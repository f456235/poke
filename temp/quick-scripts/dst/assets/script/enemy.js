
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
        // if(this.node.name == "Turtle") {
        //     this.node.scaleX = this.node.scaleX;
        //     this.node.scaleY = this.node.scaleY;
        // }
        // else {
        //      this.schedule(function() { 
        //          this.node.scaleX *= -1;
        //      }, 0.1);
        //  }
    };
    Enemy.prototype.update = function (dt) {
        //if(!this.anim.getAnimationState("enemy-walk").isPlaying)
        //  this.anim.play("enemy-walk");  
        this.node.x = this.node.x + this.enemySpeed * dt;
    };
    Enemy.prototype.onBeginContact = function (contact, self, other) {
        if (other.tag != 2) {
            //cc.log("enemy contact blocks")
            //if(!(contact.getWorldManifold().normal.x != -1) && !(contact.getWorldManifold().normal.y != -0)) { //right bound
            this.enemySpeed *= -1;
            this.node.scaleX *= -1;
        }
        else {
            this.enemySpeed *= 0;
            if (other.scaleX == this.node.scaleX)
                this.node.scaleX *= -1;
            else
                this.node.scaleX *= 1;
        }
        //else if(!(contact.getWorldManifold().normal.x != 1) && !(contact.getWorldManifold().normal.y != -0)) { //left bound
        //this.enemySpeed *= -1;
        //this.node.scaleX *= -1;
        //}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxlbmVteS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2QkFBd0I7QUFDbEIsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBbUMseUJBQVk7SUFBL0M7UUFBQSxxRUFvREM7UUFuRFcsZ0JBQVUsR0FBVyxFQUFFLENBQUM7UUFFeEIsVUFBSSxHQUFHLElBQUksQ0FBQztRQUdwQixTQUFHLEdBQVEsSUFBSSxDQUFDOztJQThDcEIsQ0FBQztJQTVDRyxxQkFBSyxHQUFMO1FBQ0ksbUNBQW1DO1FBQ25DLDJDQUEyQztRQUMzQywyQ0FBMkM7UUFDM0MsSUFBSTtRQUNKLFNBQVM7UUFDVCxtQ0FBbUM7UUFDbkMsbUNBQW1DO1FBQ25DLGdCQUFnQjtRQUNoQixLQUFLO0lBQ1QsQ0FBQztJQUVELHNCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsMERBQTBEO1FBQ3hELG1DQUFtQztRQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztJQUN2RCxDQUFDO0lBR0QsOEJBQWMsR0FBZCxVQUFlLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSztRQUMvQixJQUFHLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFO1lBQ2YsZ0NBQWdDO1lBQ2hDLGtIQUFrSDtZQUM5RyxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQzFCO2FBQUk7WUFFRCxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQztZQUNyQixJQUFHLEtBQUssQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNO2dCQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQzs7Z0JBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQztTQUM5QjtRQUNELHFIQUFxSDtRQUNqSCx3QkFBd0I7UUFDeEIseUJBQXlCO1FBQzdCLEdBQUc7SUFDWCxDQUFDO0lBRUQsc0JBQU0sR0FBTjtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQy9DLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUNoRCxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUE3Q0M7UUFEQyxRQUFRLENBQUMsYUFBRyxDQUFDO3NDQUNFO0lBTkMsS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQW9EekI7SUFBRCxZQUFDO0NBcERELEFBb0RDLENBcERrQyxFQUFFLENBQUMsU0FBUyxHQW9EOUM7a0JBcERvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1hbiBmcm9tIFwiLi9tYW5cIjtcclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbmVteSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBwcml2YXRlIGVuZW15U3BlZWQ6IG51bWJlciA9IDUwO1xyXG5cclxuICAgIHByaXZhdGUgYW5pbSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KG1hbilcclxuICAgIG1hbjogbWFuID0gbnVsbDtcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICAvLyBpZih0aGlzLm5vZGUubmFtZSA9PSBcIlR1cnRsZVwiKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMubm9kZS5zY2FsZVggPSB0aGlzLm5vZGUuc2NhbGVYO1xyXG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUuc2NhbGVZID0gdGhpcy5ub2RlLnNjYWxlWTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICB0aGlzLnNjaGVkdWxlKGZ1bmN0aW9uKCkgeyBcclxuICAgICAgICAvLyAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYICo9IC0xO1xyXG4gICAgICAgIC8vICAgICAgfSwgMC4xKTtcclxuICAgICAgICAvLyAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIC8vaWYoIXRoaXMuYW5pbS5nZXRBbmltYXRpb25TdGF0ZShcImVuZW15LXdhbGtcIikuaXNQbGF5aW5nKVxyXG4gICAgICAgICAgLy8gIHRoaXMuYW5pbS5wbGF5KFwiZW5lbXktd2Fsa1wiKTsgIFxyXG4gICAgICAgICAgdGhpcy5ub2RlLnggPSB0aGlzLm5vZGUueCArIHRoaXMuZW5lbXlTcGVlZCAqIGR0O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBvbkJlZ2luQ29udGFjdChjb250YWN0LCBzZWxmLCBvdGhlcikge1xyXG4gICAgICAgIGlmKG90aGVyLnRhZyAhPSAyKSB7XHJcbiAgICAgICAgICAgIC8vY2MubG9nKFwiZW5lbXkgY29udGFjdCBibG9ja3NcIilcclxuICAgICAgICAgICAgLy9pZighKGNvbnRhY3QuZ2V0V29ybGRNYW5pZm9sZCgpLm5vcm1hbC54ICE9IC0xKSAmJiAhKGNvbnRhY3QuZ2V0V29ybGRNYW5pZm9sZCgpLm5vcm1hbC55ICE9IC0wKSkgeyAvL3JpZ2h0IGJvdW5kXHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZW15U3BlZWQgKj0gLTE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYICo9IC0xO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmVteVNwZWVkICo9IDA7XHJcbiAgICAgICAgICAgICAgICBpZihvdGhlci5zY2FsZVggPT0gdGhpcy5ub2RlLnNjYWxlWClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYICo9IC0xO1xyXG4gICAgICAgICAgICAgICAgZWxzZSB0aGlzLm5vZGUuc2NhbGVYICo9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy9lbHNlIGlmKCEoY29udGFjdC5nZXRXb3JsZE1hbmlmb2xkKCkubm9ybWFsLnggIT0gMSkgJiYgIShjb250YWN0LmdldFdvcmxkTWFuaWZvbGQoKS5ub3JtYWwueSAhPSAtMCkpIHsgLy9sZWZ0IGJvdW5kXHJcbiAgICAgICAgICAgICAgICAvL3RoaXMuZW5lbXlTcGVlZCAqPSAtMTtcclxuICAgICAgICAgICAgICAgIC8vdGhpcy5ub2RlLnNjYWxlWCAqPSAtMTtcclxuICAgICAgICAgICAgLy99XHJcbiAgICB9XHJcbiAgICBcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHZhciBtYW5hZ2VyID0gY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpO1xyXG4gICAgICAgIG1hbmFnZXIuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5hbmltID0gdGhpcy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTsgXHJcbiAgfVxyXG59XHJcbiJdfQ==