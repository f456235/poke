
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
        _this.goinSound = null;
        _this.moveSpeed = 1.5;
        _this.animation = null;
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
        cc.director.getScene().walk(function (node) {
            if (GlobalData_1.default.nodeToDestroy.includes(node.name)) {
                node.destroy();
            }
        }, function () {
        });
        this.Gamemanger = cc.find('Canvas/gamemanager').getComponent('gamemanager');
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
        this.node.setPosition(GlobalData_1.default.Player2PosX, GlobalData_1.default.Player2PosY);
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
                break;
            case cc.macro.KEY.s:
                this.isMovingDown = true;
                break;
            case cc.macro.KEY.a:
                this.isMovingLeft = true;
                break;
            case cc.macro.KEY.d:
                this.isMovingRight = true;
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
        }
        GlobalData_1.default.Player2PosX = this.node.getPosition().x;
        GlobalData_1.default.Player2PosY = this.node.getPosition().y;
    };
    NewClass.prototype.onBeginContact = function (contact, selfCollider, otherCollider) {
        console.log("shit1");
        var worldManifold = contact.getWorldManifold();
        var points = worldManifold.points;
        var normal = worldManifold.normal;
        if (otherCollider.tag == 4 || otherCollider.tag == 5) {
            console.log("shit");
            this.enemyNum = otherCollider.tag;
            this.isBattle = true;
            cc.audioEngine.pauseMusic();
            cc.audioEngine.playEffect(this.goinSound, false);
            var canvasNode = cc.find("Canvas");
            var blinkAction = cc.blink(2, 5);
            this.Gamemanger.palse = true;
            console.log("fuck your life ", this.Gamemanger.palse);
            canvasNode.runAction(cc.sequence(blinkAction, cc.callFunc(function () {
                cc.director.loadScene("battle", function () {
                    var nextScene = cc.director.getScene();
                    nextScene["enemyNum"] = otherCollider.tag;
                });
            })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxtYW4yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBQzFDLDZDQUF3QztBQUN4QywyQ0FBc0M7QUFFdEM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUE4S0M7UUEzS0csZ0JBQVUsR0FBZ0IsSUFBSSxDQUFDO1FBRy9CLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsU0FBRyxHQUFtQixJQUFJLENBQUM7UUFHM0IsVUFBSSxHQUFXLE9BQU8sQ0FBQztRQUl2QixlQUFTLEdBQWlCLElBQUksQ0FBQztRQUcvQixlQUFTLEdBQVcsR0FBRyxDQUFDO1FBRXhCLGVBQVMsR0FBRSxJQUFJLENBQUM7UUFFUixjQUFRLEdBQVksS0FBSyxDQUFDO1FBRTFCLGdCQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLGtCQUFZLEdBQVksS0FBSyxDQUFDO1FBQzlCLGtCQUFZLEdBQVksS0FBSyxDQUFDO1FBQzlCLG1CQUFhLEdBQVksS0FBSyxDQUFDO1FBQy9CLGdCQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLGNBQVEsR0FBRyxDQUFDLENBQUM7O0lBZ0p4QixDQUFDO0lBOUlHLHdCQUFLLEdBQUw7UUFDSSxJQUFJLGFBQWEsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzVELE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFDcEQsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxJQUFhO1lBQ3RDLElBQUcsb0JBQVUsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQztnQkFDNUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQ2xCO1FBQ0wsQ0FBQyxFQUFFO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDNUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ2xDLENBQUM7SUFFRCx5QkFBTSxHQUFOO1FBQ0ksU0FBUztRQUNULEVBQUUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQy9DLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUNoRCxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2pELEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzNFLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLG9CQUFVLENBQUMsV0FBVyxFQUFDLG9CQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7SUFFekUsQ0FBQztJQUVELDRCQUFTLEdBQVQ7UUFDSSxXQUFXO1FBQ1gsRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDNUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQUVELGdDQUFhLEdBQWIsVUFBYyxhQUFxQjtRQUMvQixJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsQ0FBQyxTQUFTLEVBQUU7WUFDN0UsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELGdDQUFhLEdBQWIsVUFBYyxhQUFxQjtRQUMvQixJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsQ0FBQyxTQUFTLEVBQUU7WUFDN0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDdEM7SUFDTCxDQUFDO0lBRUQsNEJBQVMsR0FBVCxVQUFVLEtBQTZCO1FBQ25DLFFBQVEsS0FBSyxDQUFDLE9BQU8sRUFBRTtZQUNuQixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7Z0JBQ3ZCLE1BQU07WUFDVixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQ3pCLE1BQU07WUFDVixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQ3pCLE1BQU07WUFDVixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7Z0JBQzFCLE1BQU07WUFDVixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUs7Z0JBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFDN0QsTUFBTTtTQUViO0lBQ0wsQ0FBQztJQUVELDBCQUFPLEdBQVAsVUFBUSxLQUE2QjtRQUNqQyxRQUFRLEtBQUssQ0FBQyxPQUFPLEVBQUU7WUFDbkIsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO2dCQUN4QixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUM5QixNQUFNO1lBQ1YsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO2dCQUMxQixJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUNoQyxNQUFNO1lBQ1YsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO2dCQUMxQixJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUNoQyxNQUFNO1lBQ1YsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO2dCQUMzQixJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUNqQyxNQUFNO1NBQ2I7SUFDTCxDQUFDO0lBRUQseUJBQU0sR0FBTixVQUFPLEVBQVU7UUFDYixJQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxJQUFFLEtBQUssRUFDL0I7WUFDSSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsQ0FBQztnQkFDckMsSUFBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUztvQkFBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUM1RjtZQUNELElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7Z0JBQ25DLElBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVM7b0JBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDaEc7WUFDRCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO2dCQUNuQyxJQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTO29CQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ2hHO1lBQ0QsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO2dCQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBRTtnQkFDcEMsSUFBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLENBQUMsU0FBUztvQkFBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUNsRztTQUNKO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLEtBQUssRUFBRTtTQUNuSDtRQUNELG9CQUFVLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ25ELG9CQUFVLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRCxpQ0FBYyxHQUFkLFVBQWUsT0FBTyxFQUFFLFlBQVksRUFBRSxhQUFhO1FBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckIsSUFBSSxhQUFhLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDL0MsSUFBSSxNQUFNLEdBQUcsYUFBYSxDQUFDLE1BQU0sQ0FBQztRQUNsQyxJQUFJLE1BQU0sR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDO1FBQ2xDLElBQUcsYUFBYSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksYUFBYSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUM7WUFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLGFBQWEsQ0FBQyxHQUFHLENBQUM7WUFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUM1QixFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBRWpELElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDbkMsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNyRCxVQUFVLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQzVCLFdBQVcsRUFDWCxFQUFFLENBQUMsUUFBUSxDQUFDO2dCQUNSLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRTtvQkFDN0IsSUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDekMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxHQUFHLENBQUM7Z0JBQzdDLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQ0wsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBMUtEO1FBREMsUUFBUSxDQUFDLHFCQUFXLENBQUM7Z0RBQ1M7SUFHL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsyQ0FDSTtJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO3lDQUNFO0lBRzNCO1FBREMsUUFBUTswQ0FDYztJQUl2QjtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBQyxFQUFFLENBQUMsU0FBUyxFQUFDLENBQUM7K0NBQ0M7SUFHL0I7UUFEQyxRQUFRLENBQUMsTUFBTSxDQUFDOytDQUNPO0lBbkJQLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0E4SzVCO0lBQUQsZUFBQztDQTlLRCxBQThLQyxDQTlLcUMsRUFBRSxDQUFDLFNBQVMsR0E4S2pEO2tCQTlLb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5pbXBvcnQgR2FtZU1hbmFnZXIgZnJvbSBcIi4vZ2FtZW1hbmFnZXJcIjtcclxuaW1wb3J0IEdsb2JhbERhdGEgZnJvbSBcIi4vR2xvYmFsRGF0YVwiO1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KEdhbWVNYW5hZ2VyKVxyXG4gICAgR2FtZW1hbmdlcjogR2FtZU1hbmFnZXIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgbGllOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICB0ZXh0OiBzdHJpbmcgPSAnaGVsbG8nO1xyXG5cclxuICAgIFxyXG4gICAgQHByb3BlcnR5KHt0eXBlOmNjLkF1ZGlvQ2xpcH0pXHJcbiAgICBnb2luU291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KE51bWJlcilcclxuICAgIG1vdmVTcGVlZDogbnVtYmVyID0gMS41OyBcclxuXHJcbiAgICBhbmltYXRpb249IG51bGw7IFxyXG5cclxuICAgIHByaXZhdGUgaXNCYXR0bGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIGlzTW92aW5nVXA6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgaXNNb3ZpbmdEb3duOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGlzTW92aW5nTGVmdDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBpc01vdmluZ1JpZ2h0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGRlc3Ryb3ludW0gPSAwO1xyXG4gICAgcHVibGljIGVuZW15TnVtID0gMDtcclxuXHJcbiAgICBzdGFydCgpe1xyXG4gICAgICAgIGxldCBub2RldG9kZXN0b3J5ID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKVtcIm5vZGVUb0Rlc3Ryb3lcIl07XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJub2RlVG9EZXN0cm95IGluIG1hbjpcIiwgbm9kZXRvZGVzdG9yeSk7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS53YWxrKChub2RlOiBjYy5Ob2RlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKEdsb2JhbERhdGEubm9kZVRvRGVzdHJveS5pbmNsdWRlcyhub2RlLm5hbWUpKXtcclxuICAgICAgICAgICAgICAgIG5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgKCkgPT4ge1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuR2FtZW1hbmdlciA9IGNjLmZpbmQoJ0NhbnZhcy9nYW1lbWFuYWdlcicpLmdldENvbXBvbmVudCgnZ2FtZW1hbmFnZXInKTtcclxuICAgICAgICB0aGlzLkdhbWVtYW5nZXIucGFsc2UgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgLy8g5rOo5YaM6ZSu55uY5LqL5Lu2XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICB2YXIgbWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKTtcclxuICAgICAgICBtYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uID0gdGhpcy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLCB0aGlzLm9uS2V5VXAsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihHbG9iYWxEYXRhLlBsYXllcjJQb3NYLEdsb2JhbERhdGEuUGxheWVyMlBvc1kpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICAvLyDnp7vpmaTplK7nm5jkuovku7bnm5HlkKxcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsIHRoaXMub25LZXlVcCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcGxheUFuaW1hdGlvbihhbmltYXRpb25OYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5hbmltYXRpb24gJiYgdGhpcy5hbmltYXRpb24uZ2V0QW5pbWF0aW9uU3RhdGUoYW5pbWF0aW9uTmFtZSkuaXNQbGF5aW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uLnBsYXkoYW5pbWF0aW9uTmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RvcEFuaW1hdGlvbihhbmltYXRpb25OYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5hbmltYXRpb24gJiYgdGhpcy5hbmltYXRpb24uZ2V0QW5pbWF0aW9uU3RhdGUoYW5pbWF0aW9uTmFtZSkuaXNQbGF5aW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uLnN0b3AoYW5pbWF0aW9uTmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uS2V5RG93bihldmVudDogY2MuRXZlbnQuRXZlbnRLZXlib2FyZCkge1xyXG4gICAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS53OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc01vdmluZ1VwID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5zOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc01vdmluZ0Rvd24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmE6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzTW92aW5nTGVmdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuZDpcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNNb3ZpbmdSaWdodCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuc3BhY2U6XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmxpZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBvbktleVVwKGV2ZW50OiBjYy5FdmVudC5FdmVudEtleWJvYXJkKSB7XHJcbiAgICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzTW92aW5nVXAgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcEFuaW1hdGlvbihcIm1hbjJfdXBcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuczpcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNNb3ZpbmdEb3duID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3BBbmltYXRpb24oXCJtYW4yX2Rvd25cIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuYTpcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNNb3ZpbmdMZWZ0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3BBbmltYXRpb24oXCJtYW4yX2xlZnRcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuZDpcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNNb3ZpbmdSaWdodCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wQW5pbWF0aW9uKFwibWFuMl9yaWdodFwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQ6IG51bWJlcikge1xyXG4gICAgICAgIGlmKHRoaXMuR2FtZW1hbmdlci5wYWxzZT09ZmFsc2UpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc01vdmluZ1VwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUueSArPSAodGhpcy5tb3ZlU3BlZWQgKiBkdCk7XHJcbiAgICAgICAgICAgICAgICBpZighdGhpcy5hbmltYXRpb24uZ2V0QW5pbWF0aW9uU3RhdGUoXCJtYW4yX3VwXCIpLmlzUGxheWluZyl0aGlzLmFuaW1hdGlvbi5wbGF5KFwibWFuMl91cFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc01vdmluZ0Rvd24pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS55IC09IHRoaXMubW92ZVNwZWVkICogZHQ7XHJcbiAgICAgICAgICAgICAgICBpZighdGhpcy5hbmltYXRpb24uZ2V0QW5pbWF0aW9uU3RhdGUoXCJtYW4yX2Rvd25cIikuaXNQbGF5aW5nKXRoaXMuYW5pbWF0aW9uLnBsYXkoXCJtYW4yX2Rvd25cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNNb3ZpbmdMZWZ0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUueCAtPSB0aGlzLm1vdmVTcGVlZCAqIGR0O1xyXG4gICAgICAgICAgICAgICAgaWYoIXRoaXMuYW5pbWF0aW9uLmdldEFuaW1hdGlvblN0YXRlKFwibWFuMl9sZWZ0XCIpLmlzUGxheWluZyl0aGlzLmFuaW1hdGlvbi5wbGF5KFwibWFuMl9sZWZ0XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzTW92aW5nUmlnaHQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS54ICs9IHRoaXMubW92ZVNwZWVkICogZHQgO1xyXG4gICAgICAgICAgICAgICAgaWYoIXRoaXMuYW5pbWF0aW9uLmdldEFuaW1hdGlvblN0YXRlKFwibWFuMl9yaWdodFwiKS5pc1BsYXlpbmcpdGhpcy5hbmltYXRpb24ucGxheShcIm1hbjJfcmlnaHRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKCh0aGlzLm5vZGUueCA+PSA0OCAmJiB0aGlzLm5vZGUueCA8PSA4OCkgJiYgKHRoaXMubm9kZS55ID49IDUwICYmIHRoaXMubm9kZS55IDw9IDg2KSAmJiB0aGlzLmlzQmF0dGxlID09IGZhbHNlKSB7XHJcbiAgICAgICAgfSAgIFxyXG4gICAgICAgIEdsb2JhbERhdGEuUGxheWVyMlBvc1ggPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKS54O1xyXG4gICAgICAgIEdsb2JhbERhdGEuUGxheWVyMlBvc1kgPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKS55OyAgXHJcbiAgICB9XHJcblxyXG4gICAgb25CZWdpbkNvbnRhY3QoY29udGFjdCwgc2VsZkNvbGxpZGVyLCBvdGhlckNvbGxpZGVyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzaGl0MVwiKTtcclxuICAgICAgICBsZXQgd29ybGRNYW5pZm9sZCA9IGNvbnRhY3QuZ2V0V29ybGRNYW5pZm9sZCgpO1xyXG4gICAgICAgIGxldCBwb2ludHMgPSB3b3JsZE1hbmlmb2xkLnBvaW50cztcclxuICAgICAgICBsZXQgbm9ybWFsID0gd29ybGRNYW5pZm9sZC5ub3JtYWw7XHJcbiAgICAgICAgaWYob3RoZXJDb2xsaWRlci50YWcgPT0gNCB8fCBvdGhlckNvbGxpZGVyLnRhZyA9PSA1KXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzaGl0XCIpO1xyXG4gICAgICAgICAgICB0aGlzLmVuZW15TnVtID0gb3RoZXJDb2xsaWRlci50YWc7XHJcbiAgICAgICAgICAgIHRoaXMuaXNCYXR0bGUgPSB0cnVlO1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wYXVzZU11c2ljKCk7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5nb2luU291bmQsIGZhbHNlKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgdmFyIGNhbnZhc05vZGUgPSBjYy5maW5kKFwiQ2FudmFzXCIpOyBcclxuICAgICAgICAgICAgdmFyIGJsaW5rQWN0aW9uID0gY2MuYmxpbmsoMiwgNSk7IFxyXG4gICAgICAgICAgICB0aGlzLkdhbWVtYW5nZXIucGFsc2UgPSB0cnVlO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImZ1Y2sgeW91ciBsaWZlIFwiLHRoaXMuR2FtZW1hbmdlci5wYWxzZSk7XHJcbiAgICAgICAgICAgIGNhbnZhc05vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICAgICAgYmxpbmtBY3Rpb24sXHJcbiAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYyhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiYmF0dGxlXCIsICgpID0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5leHRTY2VuZSA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgbmV4dFNjZW5lW1wiZW5lbXlOdW1cIl0gPSBvdGhlckNvbGxpZGVyLnRhZztcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==