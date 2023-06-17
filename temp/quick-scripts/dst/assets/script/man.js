
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/man.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6a0c28JVppJgLNy4xXQY0Ko', 'man');
// script/man.ts

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
var gamemanager_1 = require("./gamemanager");
var GlobalData_1 = require("./GlobalData");
var Man = /** @class */ (function (_super) {
    __extends(Man, _super);
    function Man() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Gamemanger = null;
        _this.label = null;
        _this.text = 'hello';
        _this.bgm = null;
        _this.goinSound = null;
        _this.moveSpeed = 1; // 移动速度，可以根据需要调整
        _this.animation = null; // 动画组件
        _this.isBattle = false;
        _this.isMovingUp = false;
        _this.isMovingDown = false;
        _this.isMovingLeft = false;
        _this.isMovingRight = false;
        _this.destroynum = 0;
        _this.enemyNum = 0;
        return _this;
    }
    Man.prototype.start = function () {
        var nodetodestory = cc.director.getScene()["nodeToDestroy"];
        console.log("nodeToDestroy in man:", nodetodestory);
        //if(this.node.getChildByName(nodetodestory) !== null){
        //    this.node.destroy();
        //}
        cc.director.getScene().walk(function (node) {
            // Perform operations on each node
            // Access node properties, call methods, etc.
            if (GlobalData_1.default.nodeToDestroy.includes(node.name)) {
                node.destroy();
            }
        }, function () {
            // This callback is invoked after visiting each node in the scene hierarchy
            //console.log("Iteration complete");
        });
        cc.audioEngine.playMusic(this.bgm, true);
        this.Gamemanger = cc.find('Canvas/gamemanager').getComponent('gamemanager');
        // console.log(this.Gamemanger);
        this.Gamemanger.palse = false;
    };
    Man.prototype.onLoad = function () {
        // 注册键盘事件
        cc.director.getPhysicsManager().enabled = true;
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        this.animation = this.getComponent(cc.Animation);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        this.node.setPosition(GlobalData_1.default.PlayerPosX, GlobalData_1.default.PlayerPosY);
    };
    Man.prototype.onDestroy = function () {
        // 移除键盘事件监听
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    };
    Man.prototype.playAnimation = function (animationName) {
        if (this.animation && this.animation.getAnimationState(animationName).isPlaying) {
            return;
        }
        this.animation.play(animationName);
    };
    Man.prototype.stopAnimation = function (animationName) {
        if (this.animation && this.animation.getAnimationState(animationName).isPlaying) {
            this.animation.stop(animationName);
        }
    };
    Man.prototype.onKeyDown = function (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.up:
                this.isMovingUp = true;
                break;
            case cc.macro.KEY.down:
                this.isMovingDown = true;
                break;
            case cc.macro.KEY.left:
                this.isMovingLeft = true;
                break;
            case cc.macro.KEY.right:
                this.isMovingRight = true;
                break;
        }
    };
    Man.prototype.onKeyUp = function (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.up:
                this.isMovingUp = false;
                this.stopAnimation("man_up");
                break;
            case cc.macro.KEY.down:
                this.isMovingDown = false;
                this.stopAnimation("man_down");
                break;
            case cc.macro.KEY.left:
                this.isMovingLeft = false;
                this.stopAnimation("man_left");
                break;
            case cc.macro.KEY.right:
                this.isMovingRight = false;
                this.stopAnimation("man_right");
                break;
        }
    };
    Man.prototype.update = function (dt) {
        //cc.log(this.node.x, this.node.y);
        // 根据按键状态更新角色位置
        if (this.Gamemanger.palse == false) {
            if (this.isMovingUp) {
                this.node.y += (this.moveSpeed * dt);
                if (!this.animation.getAnimationState("man_up").isPlaying)
                    this.animation.play("man_up");
            }
            if (this.isMovingDown) {
                this.node.y -= this.moveSpeed * dt;
                if (!this.animation.getAnimationState("man_down").isPlaying)
                    this.animation.play("man_down");
            }
            if (this.isMovingLeft) {
                this.node.x -= this.moveSpeed * dt;
                if (!this.animation.getAnimationState("man_left").isPlaying)
                    this.animation.play("man_left");
            }
            if (this.isMovingRight) {
                this.node.x += this.moveSpeed * dt;
                if (!this.animation.getAnimationState("man_right").isPlaying)
                    this.animation.play("man_right");
            }
        }
        if ((this.node.x >= 48 && this.node.x <= 88) && (this.node.y >= 50 && this.node.y <= 86) && this.isBattle == false) {
        }
        GlobalData_1.default.PlayerPosX = this.node.getPosition().x;
        GlobalData_1.default.PlayerPosY = this.node.getPosition().y;
    };
    Man.prototype.onBeginContact = function (contact, selfCollider, otherCollider) {
        //cc.log("Player hits the bush");
        var worldManifold = contact.getWorldManifold();
        var points = worldManifold.points;
        var normal = worldManifold.normal;
        if (otherCollider.tag == 4 || otherCollider.tag == 5) {
            this.enemyNum = otherCollider.tag;
            //console.log("enemyNum in man");
            //console.log(this.enemyNum);
            //cc.log("Player hits the enemy");
            this.isBattle = true;
            // cc.audioEngine.pauseMusic();
            cc.audioEngine.playEffect(this.goinSound, false);
            var canvasNode = cc.find("Canvas"); // 获取画布节点
            var blinkAction = cc.blink(2, 5); // 闪烁动画，持续时间为2秒，闪烁次数为5次
            this.Gamemanger.palse = true;
            console.log(this.Gamemanger.palse);
            canvasNode.runAction(cc.sequence(blinkAction, cc.callFunc(function () {
                cc.director.loadScene("battle", function () {
                    var nextScene = cc.director.getScene();
                    nextScene["enemyNum"] = otherCollider.tag;
                    //console.log("nextScene[enemyNum]", nextScene["enemyNum"]);
                });
            })));
            //cc.audioEngine.pauseMusic();
            //cc.audioEngine.playEffect(this.battleBgm, true);
        }
    };
    __decorate([
        property(gamemanager_1.default)
    ], Man.prototype, "Gamemanger", void 0);
    __decorate([
        property(cc.Label)
    ], Man.prototype, "label", void 0);
    __decorate([
        property
    ], Man.prototype, "text", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Man.prototype, "bgm", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Man.prototype, "goinSound", void 0);
    __decorate([
        property(cc.Integer)
    ], Man.prototype, "moveSpeed", void 0);
    Man = __decorate([
        ccclass
    ], Man);
    return Man;
}(cc.Component));
exports.default = Man;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxtYW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFDMUMsNkNBQXdDO0FBQ3hDLDJDQUFzQztBQUV0QztJQUFpQyx1QkFBWTtJQUE3QztRQUFBLHFFQXlMQztRQXRMRyxnQkFBVSxHQUFnQixJQUFJLENBQUM7UUFHL0IsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQVcsT0FBTyxDQUFDO1FBR3ZCLFNBQUcsR0FBaUIsSUFBSSxDQUFDO1FBR3pCLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRy9CLGVBQVMsR0FBVyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0I7UUFFdkMsZUFBUyxHQUFFLElBQUksQ0FBQyxDQUFDLE9BQU87UUFFaEIsY0FBUSxHQUFZLEtBQUssQ0FBQztRQUUxQixnQkFBVSxHQUFZLEtBQUssQ0FBQztRQUM1QixrQkFBWSxHQUFZLEtBQUssQ0FBQztRQUM5QixrQkFBWSxHQUFZLEtBQUssQ0FBQztRQUM5QixtQkFBYSxHQUFZLEtBQUssQ0FBQztRQUMvQixnQkFBVSxHQUFHLENBQUMsQ0FBQztRQUNoQixjQUFRLEdBQUcsQ0FBQyxDQUFDOztJQTRKeEIsQ0FBQztJQXpKRyxtQkFBSyxHQUFMO1FBQ0ksSUFBSSxhQUFhLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM1RCxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQ3BELHVEQUF1RDtRQUN2RCwwQkFBMEI7UUFDMUIsR0FBRztRQUNILEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBYTtZQUN0QyxrQ0FBa0M7WUFD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Q0M7SUFsQkwsR0FBRztRQUR2QixPQUFPO09BQ2EsR0FBRyxDQXlMdkI7SUFBRCxVQUFDO0NBekxELEFBeUxDLENBekxnQyxFQUFFLENBQUMsU0FBUyxHQXlMNUM7a0JBekxvQixHQUFHIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcbmltcG9ydCBHYW1lTWFuYWdlciBmcm9tIFwiLi9nYW1lbWFuYWdlclwiO1xyXG5pbXBvcnQgR2xvYmFsRGF0YSBmcm9tIFwiLi9HbG9iYWxEYXRhXCI7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hbiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KEdhbWVNYW5hZ2VyKVxyXG4gICAgR2FtZW1hbmdlcjogR2FtZU1hbmFnZXIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICB0ZXh0OiBzdHJpbmcgPSAnaGVsbG8nO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7dHlwZTpjYy5BdWRpb0NsaXB9KVxyXG4gICAgYmdtOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgXHJcbiAgICBAcHJvcGVydHkoe3R5cGU6Y2MuQXVkaW9DbGlwfSlcclxuICAgIGdvaW5Tb3VuZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuSW50ZWdlcilcclxuICAgIG1vdmVTcGVlZDogbnVtYmVyID0gMTsgLy8g56e75Yqo6YCf5bqm77yM5Y+v5Lul5qC55o2u6ZyA6KaB6LCD5pW0XHJcblxyXG4gICAgYW5pbWF0aW9uPSBudWxsOyAvLyDliqjnlLvnu4Tku7ZcclxuXHJcbiAgICBwcml2YXRlIGlzQmF0dGxlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBpc01vdmluZ1VwOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGlzTW92aW5nRG93bjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBpc01vdmluZ0xlZnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgaXNNb3ZpbmdSaWdodDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBkZXN0cm95bnVtID0gMDtcclxuICAgIHB1YmxpYyBlbmVteU51bSA9IDA7XHJcblxyXG5cclxuICAgIHN0YXJ0KCl7XHJcbiAgICAgICAgbGV0IG5vZGV0b2Rlc3RvcnkgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpW1wibm9kZVRvRGVzdHJveVwiXTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm5vZGVUb0Rlc3Ryb3kgaW4gbWFuOlwiLCBub2RldG9kZXN0b3J5KTtcclxuICAgICAgICAvL2lmKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShub2RldG9kZXN0b3J5KSAhPT0gbnVsbCl7XHJcbiAgICAgICAgLy8gICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAvL31cclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLndhbGsoKG5vZGU6IGNjLk5vZGUpID0+IHtcclxuICAgICAgICAgICAgLy8gUGVyZm9ybSBvcGVyYXRpb25zIG9uIGVhY2ggbm9kZVxyXG4gICAgICAgICAgICAvLyBBY2Nlc3Mgbm9kZSBwcm9wZXJ0aWVzLCBjYWxsIG1ldGhvZHMsIGV0Yy5cclxuICAgICAgICAgICAgaWYoR2xvYmFsRGF0YS5ub2RlVG9EZXN0cm95LmluY2x1ZGVzKG5vZGUubmFtZSkpe1xyXG4gICAgICAgICAgICAgICAgbm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIFRoaXMgY2FsbGJhY2sgaXMgaW52b2tlZCBhZnRlciB2aXNpdGluZyBlYWNoIG5vZGUgaW4gdGhlIHNjZW5lIGhpZXJhcmNoeVxyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiSXRlcmF0aW9uIGNvbXBsZXRlXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLmJnbSwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5HYW1lbWFuZ2VyID0gY2MuZmluZCgnQ2FudmFzL2dhbWVtYW5hZ2VyJykuZ2V0Q29tcG9uZW50KCdnYW1lbWFuYWdlcicpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuR2FtZW1hbmdlcik7XHJcbiAgICAgICAgdGhpcy5HYW1lbWFuZ2VyLnBhbHNlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIC8vIOazqOWGjOmUruebmOS6i+S7tlxyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgdmFyIG1hbmFnZXIgPSBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCk7XHJcbiAgICAgICAgbWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbiA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCwgdGhpcy5vbktleVVwLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24oR2xvYmFsRGF0YS5QbGF5ZXJQb3NYLEdsb2JhbERhdGEuUGxheWVyUG9zWSk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIC8vIOenu+mZpOmUruebmOS6i+S7tuebkeWQrFxyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCwgdGhpcy5vbktleVVwLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwbGF5QW5pbWF0aW9uKGFuaW1hdGlvbk5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLmFuaW1hdGlvbiAmJiB0aGlzLmFuaW1hdGlvbi5nZXRBbmltYXRpb25TdGF0ZShhbmltYXRpb25OYW1lKS5pc1BsYXlpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5hbmltYXRpb24ucGxheShhbmltYXRpb25OYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBzdG9wQW5pbWF0aW9uKGFuaW1hdGlvbk5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLmFuaW1hdGlvbiAmJiB0aGlzLmFuaW1hdGlvbi5nZXRBbmltYXRpb25TdGF0ZShhbmltYXRpb25OYW1lKS5pc1BsYXlpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb24uc3RvcChhbmltYXRpb25OYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25LZXlEb3duKGV2ZW50OiBjYy5FdmVudC5FdmVudEtleWJvYXJkKSB7XHJcbiAgICAgICAgc3dpdGNoKGV2ZW50LmtleUNvZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkudXA6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzTW92aW5nVXAgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmRvd246XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzTW92aW5nRG93biA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkubGVmdDpcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNNb3ZpbmdMZWZ0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5yaWdodDpcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNNb3ZpbmdSaWdodCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25LZXlVcChldmVudDogY2MuRXZlbnQuRXZlbnRLZXlib2FyZCkge1xyXG4gICAgICAgIHN3aXRjaChldmVudC5rZXlDb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnVwOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc01vdmluZ1VwID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgdGhpcy5zdG9wQW5pbWF0aW9uKFwibWFuX3VwXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmRvd246XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzTW92aW5nRG93biA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgIHRoaXMuc3RvcEFuaW1hdGlvbihcIm1hbl9kb3duXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmxlZnQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzTW92aW5nTGVmdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgIHRoaXMuc3RvcEFuaW1hdGlvbihcIm1hbl9sZWZ0XCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnJpZ2h0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc01vdmluZ1JpZ2h0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgdGhpcy5zdG9wQW5pbWF0aW9uKFwibWFuX3JpZ2h0XCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdDogbnVtYmVyKSB7XHJcbiAgICAgICAgLy9jYy5sb2codGhpcy5ub2RlLngsIHRoaXMubm9kZS55KTtcclxuICAgICAgICAvLyDmoLnmja7mjInplK7nirbmgIHmm7TmlrDop5LoibLkvY3nva5cclxuICAgICAgICBpZih0aGlzLkdhbWVtYW5nZXIucGFsc2U9PWZhbHNlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNNb3ZpbmdVcCkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUueSArPSAodGhpcy5tb3ZlU3BlZWQgKiBkdCk7XHJcbiAgICAgICAgICAgICAgICBpZighdGhpcy5hbmltYXRpb24uZ2V0QW5pbWF0aW9uU3RhdGUoXCJtYW5fdXBcIikuaXNQbGF5aW5nKXRoaXMuYW5pbWF0aW9uLnBsYXkoXCJtYW5fdXBcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNNb3ZpbmdEb3duKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUueSAtPSB0aGlzLm1vdmVTcGVlZCAqIGR0O1xyXG4gICAgICAgICAgICAgICAgaWYoIXRoaXMuYW5pbWF0aW9uLmdldEFuaW1hdGlvblN0YXRlKFwibWFuX2Rvd25cIikuaXNQbGF5aW5nKXRoaXMuYW5pbWF0aW9uLnBsYXkoXCJtYW5fZG93blwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc01vdmluZ0xlZnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS54IC09IHRoaXMubW92ZVNwZWVkICogZHQ7XHJcbiAgICAgICAgICAgICAgICBpZighdGhpcy5hbmltYXRpb24uZ2V0QW5pbWF0aW9uU3RhdGUoXCJtYW5fbGVmdFwiKS5pc1BsYXlpbmcpdGhpcy5hbmltYXRpb24ucGxheShcIm1hbl9sZWZ0XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzTW92aW5nUmlnaHQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS54ICs9IHRoaXMubW92ZVNwZWVkICogZHQ7XHJcbiAgICAgICAgICAgICAgICBpZighdGhpcy5hbmltYXRpb24uZ2V0QW5pbWF0aW9uU3RhdGUoXCJtYW5fcmlnaHRcIikuaXNQbGF5aW5nKXRoaXMuYW5pbWF0aW9uLnBsYXkoXCJtYW5fcmlnaHRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKCh0aGlzLm5vZGUueCA+PSA0OCAmJiB0aGlzLm5vZGUueCA8PSA4OCkgJiYgKHRoaXMubm9kZS55ID49IDUwICYmIHRoaXMubm9kZS55IDw9IDg2KSAmJiB0aGlzLmlzQmF0dGxlID09IGZhbHNlKSB7XHJcbiAgICAgICAgfSAgIFxyXG4gICAgICAgIEdsb2JhbERhdGEuUGxheWVyUG9zWCA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpLng7XHJcbiAgICAgICAgR2xvYmFsRGF0YS5QbGF5ZXJQb3NZID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCkueTsgIFxyXG4gICAgfVxyXG5cclxuICAgIG9uQmVnaW5Db250YWN0KGNvbnRhY3QsIHNlbGZDb2xsaWRlciwgb3RoZXJDb2xsaWRlcikge1xyXG4gICAgICAgIC8vY2MubG9nKFwiUGxheWVyIGhpdHMgdGhlIGJ1c2hcIik7XHJcbiAgICAgICAgbGV0IHdvcmxkTWFuaWZvbGQgPSBjb250YWN0LmdldFdvcmxkTWFuaWZvbGQoKTtcclxuICAgICAgICBsZXQgcG9pbnRzID0gd29ybGRNYW5pZm9sZC5wb2ludHM7XHJcbiAgICAgICAgbGV0IG5vcm1hbCA9IHdvcmxkTWFuaWZvbGQubm9ybWFsO1xyXG4gICAgICAgIGlmKG90aGVyQ29sbGlkZXIudGFnID09IDQgfHwgb3RoZXJDb2xsaWRlci50YWcgPT0gNSl7XHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlOdW0gPSBvdGhlckNvbGxpZGVyLnRhZztcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImVuZW15TnVtIGluIG1hblwiKTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmVuZW15TnVtKTtcclxuICAgICAgICAgICAgLy9jYy5sb2coXCJQbGF5ZXIgaGl0cyB0aGUgZW5lbXlcIik7XHJcbiAgICAgICAgICAgIHRoaXMuaXNCYXR0bGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyBjYy5hdWRpb0VuZ2luZS5wYXVzZU11c2ljKCk7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5nb2luU291bmQsIGZhbHNlKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgdmFyIGNhbnZhc05vZGUgPSBjYy5maW5kKFwiQ2FudmFzXCIpOyAvLyDojrflj5bnlLvluIPoioLngrlcclxuICAgICAgICAgICAgdmFyIGJsaW5rQWN0aW9uID0gY2MuYmxpbmsoMiwgNSk7IC8vIOmXqueDgeWKqOeUu++8jOaMgee7reaXtumXtOS4ujLnp5LvvIzpl6rng4HmrKHmlbDkuLo15qyhXHJcbiAgICAgICAgICAgIHRoaXMuR2FtZW1hbmdlci5wYWxzZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuR2FtZW1hbmdlci5wYWxzZSk7XHJcbiAgICAgICAgICAgIGNhbnZhc05vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICAgICAgYmxpbmtBY3Rpb24sXHJcbiAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYyhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiYmF0dGxlXCIsICgpID0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5leHRTY2VuZSA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgbmV4dFNjZW5lW1wiZW5lbXlOdW1cIl0gPSBvdGhlckNvbGxpZGVyLnRhZztcclxuICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwibmV4dFNjZW5lW2VuZW15TnVtXVwiLCBuZXh0U2NlbmVbXCJlbmVteU51bVwiXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApKTtcclxuICAgICAgICAgICAgLy9jYy5hdWRpb0VuZ2luZS5wYXVzZU11c2ljKCk7XHJcbiAgICAgICAgICAgIC8vY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmJhdHRsZUJnbSwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19