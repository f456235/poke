
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
        if (this.node.name == "4") {
            if (!this.anim.getAnimationState("dong_move").isPlaying)
                this.playAnimation("dong_move");
        }
        else if (this.node.name == "7")
            if (!this.anim.getAnimationState("fish").isPlaying)
                this.playAnimation("fish");
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
            if (self.tag == 7) {
                this.stopAnimation("fish");
            }
            else {
                this.stopAnimation("dong_move");
            }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxlbmVteS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2QkFBd0I7QUFDbEIsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBbUMseUJBQVk7SUFBL0M7UUFBQSxxRUEwRUM7UUF6RVcsZ0JBQVUsR0FBVyxFQUFFLENBQUM7UUFFaEMsVUFBSSxHQUFHLElBQUksQ0FBQztRQUdaLFNBQUcsR0FBUSxJQUFJLENBQUM7O0lBb0VwQixDQUFDO0lBbEVHLHFCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsNkJBQWEsR0FBYixVQUFjLGFBQXFCO1FBQy9CLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxDQUFDLFNBQVMsRUFBRTtZQUNuRSxPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsNkJBQWEsR0FBYixVQUFjLGFBQXFCO1FBQy9CLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxDQUFDLFNBQVMsRUFBRTtZQUNuRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUNqQztJQUNMLENBQUM7SUFFRCxzQkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNMLHNCQUFzQjtRQUNsQixJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEdBQUcsRUFBQztZQUNyQixJQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTO2dCQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUE7U0FDMUY7YUFDSSxJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEdBQUc7WUFDN0IsSUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsZUFBZSxDQUFDLENBQUMsU0FBUztnQkFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ2hHLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksR0FBRyxFQUFDO1lBQ3JCLElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVM7Z0JBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQTtTQUMxRjthQUNJLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksR0FBRztZQUM3QixJQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTO2dCQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUUsc0JBQXNCO1FBRXZCLHFDQUFxQztRQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztJQUVyRCxDQUFDO0lBR0QsOEJBQWMsR0FBZCxVQUFlLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSztRQUMvQixJQUFHLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFO1lBQ1gsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQztTQUUxQjthQUNHO1lBQ0EsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUM7WUFDckIsSUFBRyxJQUFJLENBQUMsR0FBRyxJQUFFLENBQUMsRUFDZDtnQkFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQzlCO2lCQUVEO2dCQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDbkM7WUFDRCxJQUFHLEtBQUssQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNO2dCQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQzs7Z0JBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQztTQUM5QjtJQUNULENBQUM7SUFFRCxzQkFBTSxHQUFOO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDL0MsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQ2hELE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQW5FQztRQURDLFFBQVEsQ0FBQyxhQUFHLENBQUM7c0NBQ0U7SUFOQyxLQUFLO1FBRHpCLE9BQU87T0FDYSxLQUFLLENBMEV6QjtJQUFELFlBQUM7Q0ExRUQsQUEwRUMsQ0ExRWtDLEVBQUUsQ0FBQyxTQUFTLEdBMEU5QztrQkExRW9CLEtBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWFuIGZyb20gXCIuL21hblwiO1xyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZW15IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIHByaXZhdGUgZW5lbXlTcGVlZDogbnVtYmVyID0gNTA7XHJcblxyXG4gICAgYW5pbSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KE1hbilcclxuICAgIG1hbjogTWFuID0gbnVsbDtcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBwbGF5QW5pbWF0aW9uKGFuaW1hdGlvbk5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLmFuaW0gJiYgdGhpcy5hbmltLmdldEFuaW1hdGlvblN0YXRlKGFuaW1hdGlvbk5hbWUpLmlzUGxheWluZykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmFuaW0ucGxheShhbmltYXRpb25OYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBzdG9wQW5pbWF0aW9uKGFuaW1hdGlvbk5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLmFuaW0gJiYgdGhpcy5hbmltLmdldEFuaW1hdGlvblN0YXRlKGFuaW1hdGlvbk5hbWUpLmlzUGxheWluZykge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW0uc3RvcChhbmltYXRpb25OYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgLy9jYy5sb2coXCJkb25nX21vdmVcIik7XHJcbiAgICAgICAgICAgIGlmKHRoaXMubm9kZS5uYW1lID09IFwiNFwiKXtcclxuICAgICAgICAgICAgICAgIGlmKCF0aGlzLmFuaW0uZ2V0QW5pbWF0aW9uU3RhdGUoXCJkb25nX21vdmVcIikuaXNQbGF5aW5nKSB0aGlzLnBsYXlBbmltYXRpb24oXCJkb25nX21vdmVcIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKHRoaXMubm9kZS5uYW1lID09IFwiNVwiKVxyXG4gICAgICAgICAgICBpZighdGhpcy5hbmltLmdldEFuaW1hdGlvblN0YXRlKFwicmVkX2RvbmdfbW92ZVwiKS5pc1BsYXlpbmcpIHRoaXMucGxheUFuaW1hdGlvbihcInJlZF9kb25nX21vdmVcIik7XHJcbiAgICAgICAgICAgIGlmKHRoaXMubm9kZS5uYW1lID09IFwiNFwiKXtcclxuICAgICAgICAgICAgICAgIGlmKCF0aGlzLmFuaW0uZ2V0QW5pbWF0aW9uU3RhdGUoXCJkb25nX21vdmVcIikuaXNQbGF5aW5nKSB0aGlzLnBsYXlBbmltYXRpb24oXCJkb25nX21vdmVcIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKHRoaXMubm9kZS5uYW1lID09IFwiN1wiKVxyXG4gICAgICAgICAgICBpZighdGhpcy5hbmltLmdldEFuaW1hdGlvblN0YXRlKFwiZmlzaFwiKS5pc1BsYXlpbmcpIHRoaXMucGxheUFuaW1hdGlvbihcImZpc2hcIik7XHJcbiAgICAgICAgICAgIC8vY2MubG9nKFwiZG9uZ19tb3ZlXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgIC8vIHRoaXMucGxheUFuaW1hdGlvbihcImRvbmdfbW92ZVwiKTsgIFxyXG4gICAgICAgIHRoaXMubm9kZS54ID0gdGhpcy5ub2RlLnggKyB0aGlzLmVuZW15U3BlZWQgKiBkdDtcclxuICAgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgb25CZWdpbkNvbnRhY3QoY29udGFjdCwgc2VsZiwgb3RoZXIpIHtcclxuICAgICAgICBpZihvdGhlci50YWcgIT0gMikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmVteVNwZWVkICo9IC0xO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCAqPSAtMTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZW15U3BlZWQgKj0gMDtcclxuICAgICAgICAgICAgICAgIGlmKHNlbGYudGFnPT03KVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcEFuaW1hdGlvbihcImZpc2hcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9wQW5pbWF0aW9uKFwiZG9uZ19tb3ZlXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYob3RoZXIuc2NhbGVYID09IHRoaXMubm9kZS5zY2FsZVgpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCAqPSAtMTtcclxuICAgICAgICAgICAgICAgIGVsc2UgdGhpcy5ub2RlLnNjYWxlWCAqPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHZhciBtYW5hZ2VyID0gY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpO1xyXG4gICAgICAgIG1hbmFnZXIuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5hbmltID0gdGhpcy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTsgXHJcbiAgfVxyXG59XHJcbiJdfQ==