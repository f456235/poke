
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/no.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e2fa4VOZhxKCqZCMVbjgXBd', 'no');
// script/no.ts

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
var No = /** @class */ (function (_super) {
    __extends(No, _super);
    function No() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.text = 'hello';
        _this.moveSpeed = 1;
        _this.circleRadius = 50; // 围绕半径
        _this.angularSpeed = 60; // 角速度，控制每秒围绕的角度
        //@property(cc.Animation)
        _this.animation = null; // 动画组件
        _this.isBattle = false;
        _this.targetMan = null; // 目标man节点
        _this.angle = 0; // 当前角度
        _this.updateTimer = 0; // 更新位置的计时器
        return _this;
    }
    No.prototype.start = function () {
        // 获取场景中的"man"节点
        this.targetMan = cc.find("Canvas/man");
        // 播放 "no" 动画
    };
    No.prototype.onLoad = function () {
        this.animation = this.getComponent(cc.Animation);
    };
    No.prototype.update = function (dt) {
        console.log("this.animation:", this.animation);
        if (this.animation && !this.animation.getAnimationState("no").isPlaying) {
            this.animation.play("no");
        }
        // 如果目标man节点存在，则围绕其移动
        if (this.targetMan) {
            // 计算当前位置与目标位置之间的向量
            var targetPos = this.targetMan.position;
            var currentPos = this.node.position;
            var direction = targetPos.sub(currentPos);
            // 计算当前位置与目标位置之间的距离
            var distance = direction.mag();
            if (distance > this.circleRadius) {
                // 根据移动速度和时间间隔更新位置
                var moveDistance = direction.normalize().mul(this.moveSpeed * dt);
                this.node.position = currentPos.add(moveDistance);
            }
            else {
                // 每隔一段时间围绕目标运动一次
                this.updateTimer += dt;
                var updateInterval = 0.005; // 更新位置的时间间隔
                if (this.updateTimer >= updateInterval) {
                    this.updateTimer -= updateInterval;
                    // 围绕目标运动
                    var angleIncrement = this.angularSpeed * updateInterval;
                    this.angle = (this.angle + angleIncrement) % 360; // 增加角度并限制在0-360范围内
                    // 根据角度和半径计算新位置
                    var radians = cc.misc.degreesToRadians(this.angle);
                    var offsetX = Math.cos(radians) * this.circleRadius;
                    var offsetY = Math.sin(radians) * this.circleRadius;
                    var circlePosition = cc.v2(targetPos.x + offsetX, targetPos.y + offsetY);
                    this.node.position = cc.v3(circlePosition.x, circlePosition.y, this.node.position.z);
                }
            }
        }
    };
    __decorate([
        property
    ], No.prototype, "text", void 0);
    __decorate([
        property(cc.Integer)
    ], No.prototype, "moveSpeed", void 0);
    __decorate([
        property(cc.Float)
    ], No.prototype, "circleRadius", void 0);
    __decorate([
        property(cc.Float)
    ], No.prototype, "angularSpeed", void 0);
    No = __decorate([
        ccclass
    ], No);
    return No;
}(cc.Component));
exports.default = No;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxuby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUsxQztJQUFnQyxzQkFBWTtJQUE1QztRQUFBLHFFQTRFQztRQXpFRyxVQUFJLEdBQVcsT0FBTyxDQUFDO1FBR3ZCLGVBQVMsR0FBVyxDQUFDLENBQUM7UUFHdEIsa0JBQVksR0FBVyxFQUFFLENBQUMsQ0FBQyxPQUFPO1FBR2xDLGtCQUFZLEdBQVcsRUFBRSxDQUFDLENBQUMsZ0JBQWdCO1FBRTNDLHlCQUF5QjtRQUN6QixlQUFTLEdBQUcsSUFBSSxDQUFDLENBQUMsT0FBTztRQUVqQixjQUFRLEdBQVksS0FBSyxDQUFDO1FBRTFCLGVBQVMsR0FBWSxJQUFJLENBQUMsQ0FBQyxVQUFVO1FBQ3JDLFdBQUssR0FBVyxDQUFDLENBQUMsQ0FBQyxPQUFPO1FBQzFCLGlCQUFXLEdBQVcsQ0FBQyxDQUFDLENBQUMsV0FBVzs7SUF1RGhELENBQUM7SUFyREcsa0JBQUssR0FBTDtRQUNJLGdCQUFnQjtRQUNoQixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFdkMsYUFBYTtJQUVqQixDQUFDO0lBRUQsbUJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELG1CQUFNLEdBQU4sVUFBTyxFQUFVO1FBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDL0MsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLEVBQUU7WUFDckUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDN0I7UUFDRCxxQkFBcUI7UUFDckIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLG1CQUFtQjtZQUNuQixJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQztZQUMxQyxJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUN0QyxJQUFNLFNBQVMsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBRTVDLG1CQUFtQjtZQUNuQixJQUFNLFFBQVEsR0FBRyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUM7WUFFakMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDOUIsa0JBQWtCO2dCQUNsQixJQUFNLFlBQVksR0FBRyxTQUFTLENBQUMsU0FBUyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBQ3BFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDckQ7aUJBQU07Z0JBQ0gsaUJBQWlCO2dCQUNqQixJQUFJLENBQUMsV0FBVyxJQUFJLEVBQUUsQ0FBQztnQkFDdkIsSUFBTSxjQUFjLEdBQUcsS0FBSyxDQUFDLENBQUMsWUFBWTtnQkFFMUMsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLGNBQWMsRUFBRTtvQkFDcEMsSUFBSSxDQUFDLFdBQVcsSUFBSSxjQUFjLENBQUM7b0JBRW5DLFNBQVM7b0JBQ1QsSUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxjQUFjLENBQUM7b0JBQzFELElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLGNBQWMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLG1CQUFtQjtvQkFFckUsZUFBZTtvQkFDZixJQUFNLE9BQU8sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDckQsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO29CQUN0RCxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7b0JBQ3RELElBQU0sY0FBYyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQztvQkFDM0UsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLGNBQWMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ3hGO2FBQ0o7U0FDSjtJQUNMLENBQUM7SUF4RUQ7UUFEQyxRQUFRO29DQUNjO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7eUNBQ0M7SUFHdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs0Q0FDTztJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzRDQUNPO0lBWlQsRUFBRTtRQUR0QixPQUFPO09BQ2EsRUFBRSxDQTRFdEI7SUFBRCxTQUFDO0NBNUVELEFBNEVDLENBNUUrQixFQUFFLENBQUMsU0FBUyxHQTRFM0M7a0JBNUVvQixFQUFFIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcbmltcG9ydCBHYW1lTWFuYWdlciBmcm9tIFwiLi9nYW1lbWFuYWdlclwiO1xyXG5pbXBvcnQgR2xvYmFsRGF0YSBmcm9tIFwiLi9HbG9iYWxEYXRhXCI7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBObyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICB0ZXh0OiBzdHJpbmcgPSAnaGVsbG8nO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxyXG4gICAgbW92ZVNwZWVkOiBudW1iZXIgPSAxO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5GbG9hdClcclxuICAgIGNpcmNsZVJhZGl1czogbnVtYmVyID0gNTA7IC8vIOWbtOe7leWNiuW+hFxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5GbG9hdClcclxuICAgIGFuZ3VsYXJTcGVlZDogbnVtYmVyID0gNjA7IC8vIOinkumAn+W6pu+8jOaOp+WItuavj+enkuWbtOe7leeahOinkuW6plxyXG5cclxuICAgIC8vQHByb3BlcnR5KGNjLkFuaW1hdGlvbilcclxuICAgIGFuaW1hdGlvbiA9IG51bGw7IC8vIOWKqOeUu+e7hOS7tlxyXG5cclxuICAgIHByaXZhdGUgaXNCYXR0bGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIHRhcmdldE1hbjogY2MuTm9kZSA9IG51bGw7IC8vIOebruagh21hbuiKgueCuVxyXG4gICAgcHJpdmF0ZSBhbmdsZTogbnVtYmVyID0gMDsgLy8g5b2T5YmN6KeS5bqmXHJcbiAgICBwcml2YXRlIHVwZGF0ZVRpbWVyOiBudW1iZXIgPSAwOyAvLyDmm7TmlrDkvY3nva7nmoTorqHml7blmahcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICAvLyDojrflj5blnLrmma/kuK3nmoRcIm1hblwi6IqC54K5XHJcbiAgICAgICAgdGhpcy50YXJnZXRNYW4gPSBjYy5maW5kKFwiQ2FudmFzL21hblwiKTtcclxuXHJcbiAgICAgICAgLy8g5pKt5pS+IFwibm9cIiDliqjnlLtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQoKXtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbiA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0OiBudW1iZXIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInRoaXMuYW5pbWF0aW9uOlwiLCB0aGlzLmFuaW1hdGlvbik7XHJcbiAgICAgICAgaWYgKHRoaXMuYW5pbWF0aW9uICYmICF0aGlzLmFuaW1hdGlvbi5nZXRBbmltYXRpb25TdGF0ZShcIm5vXCIpLmlzUGxheWluZykge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbi5wbGF5KFwibm9cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOWmguaenOebruagh21hbuiKgueCueWtmOWcqO+8jOWImeWbtOe7leWFtuenu+WKqFxyXG4gICAgICAgIGlmICh0aGlzLnRhcmdldE1hbikge1xyXG4gICAgICAgICAgICAvLyDorqHnrpflvZPliY3kvY3nva7kuI7nm67moIfkvY3nva7kuYvpl7TnmoTlkJHph49cclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0UG9zID0gdGhpcy50YXJnZXRNYW4ucG9zaXRpb247XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRQb3MgPSB0aGlzLm5vZGUucG9zaXRpb247XHJcbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHRhcmdldFBvcy5zdWIoY3VycmVudFBvcyk7XHJcblxyXG4gICAgICAgICAgICAvLyDorqHnrpflvZPliY3kvY3nva7kuI7nm67moIfkvY3nva7kuYvpl7TnmoTot53nprtcclxuICAgICAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBkaXJlY3Rpb24ubWFnKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZGlzdGFuY2UgPiB0aGlzLmNpcmNsZVJhZGl1cykge1xyXG4gICAgICAgICAgICAgICAgLy8g5qC55o2u56e75Yqo6YCf5bqm5ZKM5pe26Ze06Ze06ZqU5pu05paw5L2N572uXHJcbiAgICAgICAgICAgICAgICBjb25zdCBtb3ZlRGlzdGFuY2UgPSBkaXJlY3Rpb24ubm9ybWFsaXplKCkubXVsKHRoaXMubW92ZVNwZWVkICogZHQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gY3VycmVudFBvcy5hZGQobW92ZURpc3RhbmNlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIOavj+malOS4gOauteaXtumXtOWbtOe7leebruagh+i/kOWKqOS4gOasoVxyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVUaW1lciArPSBkdDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZUludGVydmFsID0gMC4wMDU7IC8vIOabtOaWsOS9jee9rueahOaXtumXtOmXtOmalFxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnVwZGF0ZVRpbWVyID49IHVwZGF0ZUludGVydmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVUaW1lciAtPSB1cGRhdGVJbnRlcnZhbDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5Zu057uV55uu5qCH6L+Q5YqoXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYW5nbGVJbmNyZW1lbnQgPSB0aGlzLmFuZ3VsYXJTcGVlZCAqIHVwZGF0ZUludGVydmFsO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5nbGUgPSAodGhpcy5hbmdsZSArIGFuZ2xlSW5jcmVtZW50KSAlIDM2MDsgLy8g5aKe5Yqg6KeS5bqm5bm26ZmQ5Yi25ZyoMC0zNjDojIPlm7TlhoVcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5qC55o2u6KeS5bqm5ZKM5Y2K5b6E6K6h566X5paw5L2N572uXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmFkaWFucyA9IGNjLm1pc2MuZGVncmVlc1RvUmFkaWFucyh0aGlzLmFuZ2xlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvZmZzZXRYID0gTWF0aC5jb3MocmFkaWFucykgKiB0aGlzLmNpcmNsZVJhZGl1cztcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvZmZzZXRZID0gTWF0aC5zaW4ocmFkaWFucykgKiB0aGlzLmNpcmNsZVJhZGl1cztcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjaXJjbGVQb3NpdGlvbiA9IGNjLnYyKHRhcmdldFBvcy54ICsgb2Zmc2V0WCwgdGFyZ2V0UG9zLnkgKyBvZmZzZXRZKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSBjYy52MyhjaXJjbGVQb3NpdGlvbi54LCBjaXJjbGVQb3NpdGlvbi55LCB0aGlzLm5vZGUucG9zaXRpb24ueik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=