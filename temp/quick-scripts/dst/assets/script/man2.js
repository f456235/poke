
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/man2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8cd4ddDGgBLnpBxRN4TNWzW', 'man2');
// script/man2.ts

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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Gamemanger = null;
        _this.label = null;
        _this.lie = null;
        _this.text = 'hello';
        // @property({type:cc.AudioClip})
        // bgm: cc.AudioClip = null;
        _this.goinSound = null;
        _this.moveSpeed = 1.5; // 移动速度，可以根据需要调整
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
    NewClass.prototype.start = function () {
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
        // cc.audioEngine.playMusic(this.bgm, true);
        this.Gamemanger = cc.find('Canvas/gamemanager').getComponent('gamemanager');
        // console.log(this.Gamemanger);
        this.Gamemanger.palse = false;
    };
    NewClass.prototype.onLoad = function () {
        // 注册键盘事件
        cc.director.getPhysicsManager().enabled = true;
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        this.animation = this.getComponent(cc.Animation);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        this.node.setPosition(GlobalData_1.default.PlayerPosX, GlobalData_1.default.PlayerPosY);
    };
    NewClass.prototype.onDestroy = function () {
        // 移除键盘事件监听
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    };
    NewClass.prototype.playAnimation = function (animationName) {
        if (this.animation && this.animation.getAnimationState(animationName).isPlaying) {
            return;
        }
        this.animation.play(animationName);
    };
    NewClass.prototype.stopAnimation = function (animationName) {
        if (this.animation && this.animation.getAnimationState(animationName).isPlaying) {
            this.animation.stop(animationName);
        }
    };
    NewClass.prototype.onKeyDown = function (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.w:
                this.isMovingUp = true;
                // this.playAnimation("man_up");
                // this.animation.play("man_up");
                break;
            case cc.macro.KEY.s:
                this.isMovingDown = true;
                // this.playAnimation("man_down");
                // this.animation.play("man_down");
                break;
            case cc.macro.KEY.a:
                this.isMovingLeft = true;
                // this.playAnimation("man_left");
                // this.animation.play("man_left");
                break;
            case cc.macro.KEY.d:
                this.isMovingRight = true;
                // this.playAnimation("man_right");
                // this.animation.play("man_right");
                break;
            case cc.macro.KEY.space:
                console.log(this.node);
                this.node.getComponent(cc.Sprite).spriteFrame = this.lie;
                break;
        }
    };
    NewClass.prototype.onKeyUp = function (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.w:
                this.isMovingUp = false;
                this.stopAnimation("man2_up");
                break;
            case cc.macro.KEY.s:
                this.isMovingDown = false;
                this.stopAnimation("man2_down");
                break;
            case cc.macro.KEY.a:
                this.isMovingLeft = false;
                this.stopAnimation("man2_left");
                break;
            case cc.macro.KEY.d:
                this.isMovingRight = false;
                this.stopAnimation("man2_right");
                break;
        }
    };
    NewClass.prototype.update = function (dt) {
        //cc.log(this.node.x, this.node.y);
        // 根据按键状态更新角色位置
        if (this.Gamemanger.palse == false) {
            if (this.isMovingUp) {
                this.node.y += (this.moveSpeed * dt);
                if (!this.animation.getAnimationState("man2_up").isPlaying)
                    this.animation.play("man2_up");
            }
            if (this.isMovingDown) {
                this.node.y -= this.moveSpeed * dt;
                if (!this.animation.getAnimationState("man2_down").isPlaying)
                    this.animation.play("man2_down");
            }
            if (this.isMovingLeft) {
                this.node.x -= this.moveSpeed * dt;
                if (!this.animation.getAnimationState("man2_left").isPlaying)
                    this.animation.play("man2_left");
            }
            if (this.isMovingRight) {
                this.node.x += this.moveSpeed * dt;
                if (!this.animation.getAnimationState("man2_right").isPlaying)
                    this.animation.play("man2_right");
            }
        }
        if ((this.node.x >= 48 && this.node.x <= 88) && (this.node.y >= 50 && this.node.y <= 86) && this.isBattle == false) {
            // this.isBattle = true;
            // cc.audioEngine.pauseMusic();
            // cc.audioEngine.playEffect(this.goinSound, false);
            // var canvasNode = cc.find("Canvas"); // 获取画布节点
            // var blinkAction = cc.blink(2, 5); // 闪烁动画，持续时间为2秒，闪烁次数为5次
            // this.Gamemanger.palse = true;
            // console.log(this.Gamemanger.palse);
            // canvasNode.runAction(cc.sequence(
            //     blinkAction,
            //     cc.callFunc(function () {
            //         cc.director.loadScene("battle");
            //     })
            // ));
        }
        GlobalData_1.default.PlayerPosX = this.node.getPosition().x;
        GlobalData_1.default.PlayerPosY = this.node.getPosition().y;
    };
    NewClass.prototype.onBeginContact = function (contact, selfCollider, otherCollider) {
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
    ], NewClass.prototype, "Gamemanger", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], NewClass.prototype, "lie", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], NewClass.prototype, "goinSound", void 0);
    __decorate([
        property(Number)
    ], NewClass.prototype, "moveSpeed", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFTLENBQUMsVUFBVSxDQUFDLEdBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBQztvQkFDMUMsNERBQTREO2dCQUMvRCxDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQyxDQUNMLENBQUMsQ0FBQztZQUNILDhCQUE4QjtZQUM5QixrREFBa0Q7U0FDckQ7SUFDTCxDQUFDO0lBbE5EO1FBREMsUUFBUSxDQUFDLHFCQUFXLENBQUM7Z0RBQ1M7SUFHL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsyQ0FDSTtJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO3lDQUNFO0lBRzNCO1FBREMsUUFBUTswQ0FDYztJQU12QjtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBQyxFQUFFLENBQUMsU0FBUyxFQUFDLENBQUM7K0NBQ0M7SUFHL0I7UUFEQyxRQUFRLENBQUMsTUFBTSxDQUFDOytDQUNPO0lBckJQLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FzTjVCO0lBQUQsZUFBQztDQXRORCxBQXNOQyxDQXROcUMsRUFBRSxDQUFDLFNBQVMsR0FzTmpEO2tCQXROb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5pbXBvcnQgR2FtZU1hbmFnZXIgZnJvbSBcIi4vZ2FtZW1hbmFnZXJcIjtcclxuaW1wb3J0IEdsb2JhbERhdGEgZnJvbSBcIi4vR2xvYmFsRGF0YVwiO1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KEdhbWVNYW5hZ2VyKVxyXG4gICAgR2FtZW1hbmdlcjogR2FtZU1hbmFnZXIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgbGllOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICB0ZXh0OiBzdHJpbmcgPSAnaGVsbG8nO1xyXG5cclxuICAgIC8vIEBwcm9wZXJ0eSh7dHlwZTpjYy5BdWRpb0NsaXB9KVxyXG4gICAgLy8gYmdtOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgXHJcbiAgICBAcHJvcGVydHkoe3R5cGU6Y2MuQXVkaW9DbGlwfSlcclxuICAgIGdvaW5Tb3VuZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoTnVtYmVyKVxyXG4gICAgbW92ZVNwZWVkOiBudW1iZXIgPSAxLjU7IC8vIOenu+WKqOmAn+W6pu+8jOWPr+S7peagueaNrumcgOimgeiwg+aVtFxyXG5cclxuICAgIGFuaW1hdGlvbj0gbnVsbDsgLy8g5Yqo55S757uE5Lu2XHJcblxyXG4gICAgcHJpdmF0ZSBpc0JhdHRsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgaXNNb3ZpbmdVcDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBpc01vdmluZ0Rvd246IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgaXNNb3ZpbmdMZWZ0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGlzTW92aW5nUmlnaHQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgZGVzdHJveW51bSA9IDA7XHJcbiAgICBwdWJsaWMgZW5lbXlOdW0gPSAwO1xyXG5cclxuICAgIHN0YXJ0KCl7XHJcbiAgICAgICAgbGV0IG5vZGV0b2Rlc3RvcnkgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpW1wibm9kZVRvRGVzdHJveVwiXTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm5vZGVUb0Rlc3Ryb3kgaW4gbWFuOlwiLCBub2RldG9kZXN0b3J5KTtcclxuICAgICAgICAvL2lmKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShub2RldG9kZXN0b3J5KSAhPT0gbnVsbCl7XHJcbiAgICAgICAgLy8gICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAvL31cclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLndhbGsoKG5vZGU6IGNjLk5vZGUpID0+IHtcclxuICAgICAgICAgICAgLy8gUGVyZm9ybSBvcGVyYXRpb25zIG9uIGVhY2ggbm9kZVxyXG4gICAgICAgICAgICAvLyBBY2Nlc3Mgbm9kZSBwcm9wZXJ0aWVzLCBjYWxsIG1ldGhvZHMsIGV0Yy5cclxuICAgICAgICAgICAgaWYoR2xvYmFsRGF0YS5ub2RlVG9EZXN0cm95LmluY2x1ZGVzKG5vZGUubmFtZSkpe1xyXG4gICAgICAgICAgICAgICAgbm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIFRoaXMgY2FsbGJhY2sgaXMgaW52b2tlZCBhZnRlciB2aXNpdGluZyBlYWNoIG5vZGUgaW4gdGhlIHNjZW5lIGhpZXJhcmNoeVxyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiSXRlcmF0aW9uIGNvbXBsZXRlXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLmJnbSwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5HYW1lbWFuZ2VyID0gY2MuZmluZCgnQ2FudmFzL2dhbWVtYW5hZ2VyJykuZ2V0Q29tcG9uZW50KCdnYW1lbWFuYWdlcicpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuR2FtZW1hbmdlcik7XHJcbiAgICAgICAgdGhpcy5HYW1lbWFuZ2VyLnBhbHNlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIC8vIOazqOWGjOmUruebmOS6i+S7tlxyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgdmFyIG1hbmFnZXIgPSBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCk7XHJcbiAgICAgICAgbWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbiA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCwgdGhpcy5vbktleVVwLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24oR2xvYmFsRGF0YS5QbGF5ZXJQb3NYLEdsb2JhbERhdGEuUGxheWVyUG9zWSk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIC8vIOenu+mZpOmUruebmOS6i+S7tuebkeWQrFxyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCwgdGhpcy5vbktleVVwLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwbGF5QW5pbWF0aW9uKGFuaW1hdGlvbk5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLmFuaW1hdGlvbiAmJiB0aGlzLmFuaW1hdGlvbi5nZXRBbmltYXRpb25TdGF0ZShhbmltYXRpb25OYW1lKS5pc1BsYXlpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5hbmltYXRpb24ucGxheShhbmltYXRpb25OYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBzdG9wQW5pbWF0aW9uKGFuaW1hdGlvbk5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLmFuaW1hdGlvbiAmJiB0aGlzLmFuaW1hdGlvbi5nZXRBbmltYXRpb25TdGF0ZShhbmltYXRpb25OYW1lKS5pc1BsYXlpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb24uc3RvcChhbmltYXRpb25OYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25LZXlEb3duKGV2ZW50OiBjYy5FdmVudC5FdmVudEtleWJvYXJkKSB7XHJcbiAgICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzTW92aW5nVXAgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5wbGF5QW5pbWF0aW9uKFwibWFuX3VwXCIpO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5hbmltYXRpb24ucGxheShcIm1hbl91cFwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5zOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc01vdmluZ0Rvd24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5wbGF5QW5pbWF0aW9uKFwibWFuX2Rvd25cIik7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmFuaW1hdGlvbi5wbGF5KFwibWFuX2Rvd25cIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuYTpcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNNb3ZpbmdMZWZ0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMucGxheUFuaW1hdGlvbihcIm1hbl9sZWZ0XCIpO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5hbmltYXRpb24ucGxheShcIm1hbl9sZWZ0XCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzTW92aW5nUmlnaHQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5wbGF5QW5pbWF0aW9uKFwibWFuX3JpZ2h0XCIpO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5hbmltYXRpb24ucGxheShcIm1hbl9yaWdodFwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5zcGFjZTpcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMubGllO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIG9uS2V5VXAoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50S2V5Ym9hcmQpIHtcclxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkudzpcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNNb3ZpbmdVcCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wQW5pbWF0aW9uKFwibWFuMl91cFwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5zOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc01vdmluZ0Rvd24gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcEFuaW1hdGlvbihcIm1hbjJfZG93blwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5hOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc01vdmluZ0xlZnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcEFuaW1hdGlvbihcIm1hbjJfbGVmdFwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc01vdmluZ1JpZ2h0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3BBbmltYXRpb24oXCJtYW4yX3JpZ2h0XCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdDogbnVtYmVyKSB7XHJcbiAgICAgICAgLy9jYy5sb2codGhpcy5ub2RlLngsIHRoaXMubm9kZS55KTtcclxuICAgICAgICAvLyDmoLnmja7mjInplK7nirbmgIHmm7TmlrDop5LoibLkvY3nva5cclxuICAgICAgICBpZih0aGlzLkdhbWVtYW5nZXIucGFsc2U9PWZhbHNlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNNb3ZpbmdVcCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnkgKz0gKHRoaXMubW92ZVNwZWVkICogZHQpO1xyXG4gICAgICAgICAgICAgICAgaWYoIXRoaXMuYW5pbWF0aW9uLmdldEFuaW1hdGlvblN0YXRlKFwibWFuMl91cFwiKS5pc1BsYXlpbmcpdGhpcy5hbmltYXRpb24ucGxheShcIm1hbjJfdXBcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNNb3ZpbmdEb3duKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUueSAtPSB0aGlzLm1vdmVTcGVlZCAqIGR0O1xyXG4gICAgICAgICAgICAgICAgaWYoIXRoaXMuYW5pbWF0aW9uLmdldEFuaW1hdGlvblN0YXRlKFwibWFuMl9kb3duXCIpLmlzUGxheWluZyl0aGlzLmFuaW1hdGlvbi5wbGF5KFwibWFuMl9kb3duXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzTW92aW5nTGVmdCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnggLT0gdGhpcy5tb3ZlU3BlZWQgKiBkdDtcclxuICAgICAgICAgICAgICAgIGlmKCF0aGlzLmFuaW1hdGlvbi5nZXRBbmltYXRpb25TdGF0ZShcIm1hbjJfbGVmdFwiKS5pc1BsYXlpbmcpdGhpcy5hbmltYXRpb24ucGxheShcIm1hbjJfbGVmdFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc01vdmluZ1JpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUueCArPSB0aGlzLm1vdmVTcGVlZCAqIGR0IDtcclxuICAgICAgICAgICAgICAgIGlmKCF0aGlzLmFuaW1hdGlvbi5nZXRBbmltYXRpb25TdGF0ZShcIm1hbjJfcmlnaHRcIikuaXNQbGF5aW5nKXRoaXMuYW5pbWF0aW9uLnBsYXkoXCJtYW4yX3JpZ2h0XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICgodGhpcy5ub2RlLnggPj0gNDggJiYgdGhpcy5ub2RlLnggPD0gODgpICYmICh0aGlzLm5vZGUueSA+PSA1MCAmJiB0aGlzLm5vZGUueSA8PSA4NikgJiYgdGhpcy5pc0JhdHRsZSA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAvLyB0aGlzLmlzQmF0dGxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gY2MuYXVkaW9FbmdpbmUucGF1c2VNdXNpYygpO1xyXG4gICAgICAgICAgICAvLyBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuZ29pblNvdW5kLCBmYWxzZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIHZhciBjYW52YXNOb2RlID0gY2MuZmluZChcIkNhbnZhc1wiKTsgLy8g6I635Y+W55S75biD6IqC54K5XHJcbiAgICAgICAgICAgIC8vIHZhciBibGlua0FjdGlvbiA9IGNjLmJsaW5rKDIsIDUpOyAvLyDpl6rng4HliqjnlLvvvIzmjIHnu63ml7bpl7TkuLoy56eS77yM6Zeq54OB5qyh5pWw5Li6NeasoVxyXG4gICAgICAgICAgICAvLyB0aGlzLkdhbWVtYW5nZXIucGFsc2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLkdhbWVtYW5nZXIucGFsc2UpO1xyXG4gICAgICAgICAgICAvLyBjYW52YXNOb2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShcclxuICAgICAgICAgICAgLy8gICAgIGJsaW5rQWN0aW9uLFxyXG4gICAgICAgICAgICAvLyAgICAgY2MuY2FsbEZ1bmMoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImJhdHRsZVwiKTtcclxuICAgICAgICAgICAgLy8gICAgIH0pXHJcbiAgICAgICAgICAgIC8vICkpO1xyXG4gICAgICAgIH0gICBcclxuICAgICAgICBHbG9iYWxEYXRhLlBsYXllclBvc1ggPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKS54O1xyXG4gICAgICAgIEdsb2JhbERhdGEuUGxheWVyUG9zWSA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpLnk7ICBcclxuICAgIH1cclxuXHJcbiAgICBvbkJlZ2luQ29udGFjdChjb250YWN0LCBzZWxmQ29sbGlkZXIsIG90aGVyQ29sbGlkZXIpIHtcclxuICAgICAgICAvL2NjLmxvZyhcIlBsYXllciBoaXRzIHRoZSBidXNoXCIpO1xyXG4gICAgICAgIGxldCB3b3JsZE1hbmlmb2xkID0gY29udGFjdC5nZXRXb3JsZE1hbmlmb2xkKCk7XHJcbiAgICAgICAgbGV0IHBvaW50cyA9IHdvcmxkTWFuaWZvbGQucG9pbnRzO1xyXG4gICAgICAgIGxldCBub3JtYWwgPSB3b3JsZE1hbmlmb2xkLm5vcm1hbDtcclxuICAgICAgICBpZihvdGhlckNvbGxpZGVyLnRhZyA9PSA0IHx8IG90aGVyQ29sbGlkZXIudGFnID09IDUpe1xyXG4gICAgICAgICAgICB0aGlzLmVuZW15TnVtID0gb3RoZXJDb2xsaWRlci50YWc7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJlbmVteU51bSBpbiBtYW5cIik7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5lbmVteU51bSk7XHJcbiAgICAgICAgICAgIC8vY2MubG9nKFwiUGxheWVyIGhpdHMgdGhlIGVuZW15XCIpO1xyXG4gICAgICAgICAgICB0aGlzLmlzQmF0dGxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gY2MuYXVkaW9FbmdpbmUucGF1c2VNdXNpYygpO1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuZ29pblNvdW5kLCBmYWxzZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIHZhciBjYW52YXNOb2RlID0gY2MuZmluZChcIkNhbnZhc1wiKTsgLy8g6I635Y+W55S75biD6IqC54K5XHJcbiAgICAgICAgICAgIHZhciBibGlua0FjdGlvbiA9IGNjLmJsaW5rKDIsIDUpOyAvLyDpl6rng4HliqjnlLvvvIzmjIHnu63ml7bpl7TkuLoy56eS77yM6Zeq54OB5qyh5pWw5Li6NeasoVxyXG4gICAgICAgICAgICB0aGlzLkdhbWVtYW5nZXIucGFsc2UgPSB0cnVlO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLkdhbWVtYW5nZXIucGFsc2UpO1xyXG4gICAgICAgICAgICBjYW52YXNOb2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShcclxuICAgICAgICAgICAgICAgIGJsaW5rQWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgY2MuY2FsbEZ1bmMoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImJhdHRsZVwiLCAoKSA9PntcclxuICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXh0U2NlbmUgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIG5leHRTY2VuZVtcImVuZW15TnVtXCJdID0gb3RoZXJDb2xsaWRlci50YWc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIm5leHRTY2VuZVtlbmVteU51bV1cIiwgbmV4dFNjZW5lW1wiZW5lbXlOdW1cIl0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKSk7XHJcbiAgICAgICAgICAgIC8vY2MuYXVkaW9FbmdpbmUucGF1c2VNdXNpYygpO1xyXG4gICAgICAgICAgICAvL2NjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5iYXR0bGVCZ20sIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==