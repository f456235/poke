
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
        _this.bgmMapGrass = null;
        _this.bgmMapDesert = null;
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
        var scene = cc.director.getScene();
        if (scene.name == "map2") {
            console.log("map2 bgm");
            cc.audioEngine.playMusic(this.bgmMapGrass, true);
        }
        else if (scene.name == "map3") {
            console.log("map3 bgm");
            cc.audioEngine.playMusic(this.bgmMapDesert, true);
        }
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
        if (GlobalData_1.default.isEnenmyMagic && GlobalData_1.default.isEnenmyRed) {
            cc.find('enemies/6').active = true;
        }
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
        GlobalData_1.default.PlayerPosY = this.node.getPosition().y - 10;
        cc.audioEngine.setMusicVolume(GlobalData_1.default.volume);
        cc.audioEngine.setEffectsVolume(GlobalData_1.default.volume);
    };
    Man.prototype.onBeginContact = function (contact, selfCollider, otherCollider) {
        //cc.log("Player hits the bush");
        var worldManifold = contact.getWorldManifold();
        var points = worldManifold.points;
        var normal = worldManifold.normal;
        if (otherCollider.tag == 4 || otherCollider.tag == 5 || otherCollider.tag == 6 || otherCollider.tag == 7 || otherCollider.tag == 8) {
            this.enemyNum = otherCollider.tag;
            this.isBattle = true;
            var canvasNode = cc.find("Canvas");
            var cameraNode = cc.Camera.main;
            var blinkAction = cc.blink(2, 5);
            this.Gamemanger.palse = true;
            cc.audioEngine.pauseMusic();
            if (otherCollider.tag != 8) {
                cc.audioEngine.playEffect(this.goinSound, false);
                //console.log(this.Gamemanger.palse);
                canvasNode.runAction(cc.sequence(blinkAction, cc.callFunc(function () {
                    cc.director.loadScene("battle", function () {
                        var nextScene = cc.director.getScene();
                        nextScene["enemyNum"] = otherCollider.tag;
                        //console.log("nextScene[enemyNum]", nextScene["enemyNum"]);
                    });
                })));
            }
            else if (otherCollider.tag == 8) {
                GlobalData_1.default.isBOSScamera = true;
                //let cameraAction = cameraNode.runAction(cc.moveTo(2, cc.v2(0,50)));
                var cameraAction = cc.callFunc(function (target) {
                    var mainCamera = cc.Camera.main;
                    this.originalPosition = mainCamera.node.position.clone();
                    //let shakeSequence;
                    console.log("shakeSequence");
                    var shakeSequence = cc.moveTo(3, cc.v2(this.originalPosition.x, this.originalPosition.y + 70));
                    cc.find("Canvas/Main Camera").getComponent(cc.Camera).node.runAction(shakeSequence);
                });
                var loadAction = cc.moveBy(4, cc.v2(0, 0));
                this.scheduleOnce(function () {
                    GlobalData_1.default.isBOSScamera = false;
                }, 13);
                var conversationAction = cc.callFunc(function (target) {
                    cc.find("Canvas/Main Camera/moyan").active = true;
                });
                this.scheduleOnce(function () {
                    cc.audioEngine.playEffect(this.goinSound, false);
                }, 8);
                this.scheduleOnce(function () {
                    cc.find("Canvas/Main Camera/moyan").active = false;
                }, 8);
                canvasNode.runAction(cc.sequence(cameraAction, loadAction, conversationAction, loadAction, blinkAction, cc.callFunc(function () {
                    cc.director.loadScene("battle", function () {
                        var nextScene = cc.director.getScene();
                        nextScene["enemyNum"] = otherCollider.tag;
                        //console.log("nextScene[enemyNum]", nextScene["enemyNum"]);
                    });
                })));
            }
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
    ], Man.prototype, "bgmMapGrass", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Man.prototype, "bgmMapDesert", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxtYW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFDMUMsNkNBQXdDO0FBQ3hDLDJDQUFzQztBQUV0QztJQUFpQyx1QkFBWTtJQUE3QztRQUFBLHFFQXdQQztRQXJQRyxnQkFBVSxHQUFnQixJQUFJLENBQUM7UUFHL0IsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQVcsT0FBTyxDQUFDO1FBR3ZCLGlCQUFXLEdBQWlCLElBQUksQ0FBQztRQUdqQyxrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFHbEMsZUFBUyxHQUFpQixJQUFJLENBQUM7UUFHL0IsZUFBUyxHQUFXLENBQUMsQ0FBQyxDQUFDLGdCQUFnQjtRQUV2QyxlQUFTLEdBQUUsSUFBSSxDQUFDLENBQUMsT0FBTztRQUVoQixjQUFRLEdBQVksS0FBSyxDQUFDO1FBRTFCLGdCQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLGtCQUFZLEdBQVksS0FBSyxDQUFDO1FBQzlCLGtCQUFZLEdBQVksS0FBSyxDQUFDO1FBQzlCLG1CQUFhLEdBQVksS0FBSyxDQUFDO1FBQy9CLGdCQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLGNBQVEsR0FBRyxDQUFDLENBQUM7O0lBd054QixDQUFDO0lBck5HLG1CQUFLLEdBQUw7UUFDSSxJQUFJLGFBQWEsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzVELE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFDcEQsdURBQXVEO1FBQ3ZELDBCQUEwQjtRQUMxQixHQUFHO1FBQ0gsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENB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Q3pDLFNBQVMsQ0FBQyxVQUFVLENBQUMsR0FBRyxhQUFhLENBQUMsR0FBRyxDQUFDO3dCQUMxQyw0REFBNEQ7b0JBQzVELENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUMsQ0FBQyxDQUNMLENBQUMsQ0FBQzthQUVOO1lBQ0QsOEJBQThCO1lBQzlCLGtEQUFrRDtTQUNyRDtJQUNMLENBQUM7SUFwUEQ7UUFEQyxRQUFRLENBQUMscUJBQVcsQ0FBQzsyQ0FDUztJQUcvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3NDQUNJO0lBR3ZCO1FBREMsUUFBUTtxQ0FDYztJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBQyxFQUFFLENBQUMsU0FBUyxFQUFDLENBQUM7NENBQ0c7SUFHakM7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUMsRUFBRSxDQUFDLFNBQVMsRUFBQyxDQUFDOzZDQUNJO0lBR2xDO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUMsQ0FBQzswQ0FDQztJQUcvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDOzBDQUNDO0lBckJMLEdBQUc7UUFEdkIsT0FBTztPQUNhLEdBQUcsQ0F3UHZCO0lBQUQsVUFBQztDQXhQRCxBQXdQQyxDQXhQZ0MsRUFBRSxDQUFDLFNBQVMsR0F3UDVDO2tCQXhQb0IsR0FBRyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5pbXBvcnQgR2FtZU1hbmFnZXIgZnJvbSBcIi4vZ2FtZW1hbmFnZXJcIjtcclxuaW1wb3J0IEdsb2JhbERhdGEgZnJvbSBcIi4vR2xvYmFsRGF0YVwiO1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYW4gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShHYW1lTWFuYWdlcilcclxuICAgIEdhbWVtYW5nZXI6IEdhbWVNYW5hZ2VyID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgdGV4dDogc3RyaW5nID0gJ2hlbGxvJztcclxuXHJcbiAgICBAcHJvcGVydHkoe3R5cGU6Y2MuQXVkaW9DbGlwfSlcclxuICAgIGJnbU1hcEdyYXNzOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7dHlwZTpjYy5BdWRpb0NsaXB9KVxyXG4gICAgYmdtTWFwRGVzZXJ0OiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgXHJcbiAgICBAcHJvcGVydHkoe3R5cGU6Y2MuQXVkaW9DbGlwfSlcclxuICAgIGdvaW5Tb3VuZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuSW50ZWdlcilcclxuICAgIG1vdmVTcGVlZDogbnVtYmVyID0gMTsgLy8g56e75Yqo6YCf5bqm77yM5Y+v5Lul5qC55o2u6ZyA6KaB6LCD5pW0XHJcblxyXG4gICAgYW5pbWF0aW9uPSBudWxsOyAvLyDliqjnlLvnu4Tku7ZcclxuXHJcbiAgICBwcml2YXRlIGlzQmF0dGxlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBpc01vdmluZ1VwOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGlzTW92aW5nRG93bjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBpc01vdmluZ0xlZnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgaXNNb3ZpbmdSaWdodDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBkZXN0cm95bnVtID0gMDtcclxuICAgIHB1YmxpYyBlbmVteU51bSA9IDA7XHJcblxyXG5cclxuICAgIHN0YXJ0KCl7XHJcbiAgICAgICAgbGV0IG5vZGV0b2Rlc3RvcnkgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpW1wibm9kZVRvRGVzdHJveVwiXTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm5vZGVUb0Rlc3Ryb3kgaW4gbWFuOlwiLCBub2RldG9kZXN0b3J5KTtcclxuICAgICAgICAvL2lmKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShub2RldG9kZXN0b3J5KSAhPT0gbnVsbCl7XHJcbiAgICAgICAgLy8gICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAvL31cclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLndhbGsoKG5vZGU6IGNjLk5vZGUpID0+IHtcclxuICAgICAgICAgICAgLy8gUGVyZm9ybSBvcGVyYXRpb25zIG9uIGVhY2ggbm9kZVxyXG4gICAgICAgICAgICAvLyBBY2Nlc3Mgbm9kZSBwcm9wZXJ0aWVzLCBjYWxsIG1ldGhvZHMsIGV0Yy5cclxuICAgICAgICAgICAgaWYoR2xvYmFsRGF0YS5ub2RlVG9EZXN0cm95LmluY2x1ZGVzKG5vZGUubmFtZSkpe1xyXG4gICAgICAgICAgICAgICAgbm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIFRoaXMgY2FsbGJhY2sgaXMgaW52b2tlZCBhZnRlciB2aXNpdGluZyBlYWNoIG5vZGUgaW4gdGhlIHNjZW5lIGhpZXJhcmNoeVxyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiSXRlcmF0aW9uIGNvbXBsZXRlXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxldCBzY2VuZSA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCk7XHJcbiAgICBpZihzY2VuZS5uYW1lID09IFwibWFwMlwiKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm1hcDIgYmdtXCIpO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLmJnbU1hcEdyYXNzLCB0cnVlKTtcclxuICAgIH1lbHNlIGlmKHNjZW5lLm5hbWUgPT0gXCJtYXAzXCIpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibWFwMyBiZ21cIik7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHRoaXMuYmdtTWFwRGVzZXJ0LCB0cnVlKTtcclxuICAgIH1cclxuICAgICAgICB0aGlzLkdhbWVtYW5nZXIgPSBjYy5maW5kKCdDYW52YXMvZ2FtZW1hbmFnZXInKS5nZXRDb21wb25lbnQoJ2dhbWVtYW5hZ2VyJyk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5HYW1lbWFuZ2VyKTtcclxuICAgICAgICB0aGlzLkdhbWVtYW5nZXIucGFsc2UgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgLy8g5rOo5YaM6ZSu55uY5LqL5Lu2XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICB2YXIgbWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKTtcclxuICAgICAgICBtYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uID0gdGhpcy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLCB0aGlzLm9uS2V5VXAsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihHbG9iYWxEYXRhLlBsYXllclBvc1gsR2xvYmFsRGF0YS5QbGF5ZXJQb3NZKTtcclxuICAgICAgICBpZihHbG9iYWxEYXRhLmlzRW5lbm15TWFnaWMgJiYgR2xvYmFsRGF0YS5pc0VuZW5teVJlZCl7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ2VuZW1pZXMvNicpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICAvLyDnp7vpmaTplK7nm5jkuovku7bnm5HlkKxcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsIHRoaXMub25LZXlVcCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcGxheUFuaW1hdGlvbihhbmltYXRpb25OYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5hbmltYXRpb24gJiYgdGhpcy5hbmltYXRpb24uZ2V0QW5pbWF0aW9uU3RhdGUoYW5pbWF0aW9uTmFtZSkuaXNQbGF5aW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uLnBsYXkoYW5pbWF0aW9uTmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RvcEFuaW1hdGlvbihhbmltYXRpb25OYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5hbmltYXRpb24gJiYgdGhpcy5hbmltYXRpb24uZ2V0QW5pbWF0aW9uU3RhdGUoYW5pbWF0aW9uTmFtZSkuaXNQbGF5aW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uLnN0b3AoYW5pbWF0aW9uTmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uS2V5RG93bihldmVudDogY2MuRXZlbnQuRXZlbnRLZXlib2FyZCkge1xyXG4gICAgICAgIHN3aXRjaChldmVudC5rZXlDb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnVwOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc01vdmluZ1VwID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kb3duOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc01vdmluZ0Rvd24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmxlZnQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzTW92aW5nTGVmdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkucmlnaHQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzTW92aW5nUmlnaHQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uS2V5VXAoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50S2V5Ym9hcmQpIHtcclxuICAgICAgICBzd2l0Y2goZXZlbnQua2V5Q29kZSkge1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS51cDpcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNNb3ZpbmdVcCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgIHRoaXMuc3RvcEFuaW1hdGlvbihcIm1hbl91cFwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kb3duOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc01vdmluZ0Rvd24gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICB0aGlzLnN0b3BBbmltYXRpb24oXCJtYW5fZG93blwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5sZWZ0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc01vdmluZ0xlZnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICB0aGlzLnN0b3BBbmltYXRpb24oXCJtYW5fbGVmdFwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5yaWdodDpcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNNb3ZpbmdSaWdodCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgIHRoaXMuc3RvcEFuaW1hdGlvbihcIm1hbl9yaWdodFwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQ6IG51bWJlcikge1xyXG4gICAgICAgIC8vY2MubG9nKHRoaXMubm9kZS54LCB0aGlzLm5vZGUueSk7XHJcbiAgICAgICAgLy8g5qC55o2u5oyJ6ZSu54q25oCB5pu05paw6KeS6Imy5L2N572uXHJcbiAgICAgICAgaWYodGhpcy5HYW1lbWFuZ2VyLnBhbHNlPT1mYWxzZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzTW92aW5nVXApIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnkgKz0gKHRoaXMubW92ZVNwZWVkICogZHQpO1xyXG4gICAgICAgICAgICAgICAgaWYoIXRoaXMuYW5pbWF0aW9uLmdldEFuaW1hdGlvblN0YXRlKFwibWFuX3VwXCIpLmlzUGxheWluZyl0aGlzLmFuaW1hdGlvbi5wbGF5KFwibWFuX3VwXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzTW92aW5nRG93bikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnkgLT0gdGhpcy5tb3ZlU3BlZWQgKiBkdDtcclxuICAgICAgICAgICAgICAgIGlmKCF0aGlzLmFuaW1hdGlvbi5nZXRBbmltYXRpb25TdGF0ZShcIm1hbl9kb3duXCIpLmlzUGxheWluZyl0aGlzLmFuaW1hdGlvbi5wbGF5KFwibWFuX2Rvd25cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNNb3ZpbmdMZWZ0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUueCAtPSB0aGlzLm1vdmVTcGVlZCAqIGR0O1xyXG4gICAgICAgICAgICAgICAgaWYoIXRoaXMuYW5pbWF0aW9uLmdldEFuaW1hdGlvblN0YXRlKFwibWFuX2xlZnRcIikuaXNQbGF5aW5nKXRoaXMuYW5pbWF0aW9uLnBsYXkoXCJtYW5fbGVmdFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc01vdmluZ1JpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUueCArPSB0aGlzLm1vdmVTcGVlZCAqIGR0O1xyXG4gICAgICAgICAgICAgICAgaWYoIXRoaXMuYW5pbWF0aW9uLmdldEFuaW1hdGlvblN0YXRlKFwibWFuX3JpZ2h0XCIpLmlzUGxheWluZyl0aGlzLmFuaW1hdGlvbi5wbGF5KFwibWFuX3JpZ2h0XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICgodGhpcy5ub2RlLnggPj0gNDggJiYgdGhpcy5ub2RlLnggPD0gODgpICYmICh0aGlzLm5vZGUueSA+PSA1MCAmJiB0aGlzLm5vZGUueSA8PSA4NikgJiYgdGhpcy5pc0JhdHRsZSA9PSBmYWxzZSkge1xyXG4gICAgICAgIH0gICBcclxuICAgICAgICBHbG9iYWxEYXRhLlBsYXllclBvc1ggPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKS54O1xyXG4gICAgICAgIEdsb2JhbERhdGEuUGxheWVyUG9zWSA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpLnktMTA7ICBcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRNdXNpY1ZvbHVtZShHbG9iYWxEYXRhLnZvbHVtZSk7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0RWZmZWN0c1ZvbHVtZShHbG9iYWxEYXRhLnZvbHVtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25CZWdpbkNvbnRhY3QoY29udGFjdCwgc2VsZkNvbGxpZGVyLCBvdGhlckNvbGxpZGVyKSB7XHJcbiAgICAgICAgLy9jYy5sb2coXCJQbGF5ZXIgaGl0cyB0aGUgYnVzaFwiKTtcclxuICAgICAgICBsZXQgd29ybGRNYW5pZm9sZCA9IGNvbnRhY3QuZ2V0V29ybGRNYW5pZm9sZCgpO1xyXG4gICAgICAgIGxldCBwb2ludHMgPSB3b3JsZE1hbmlmb2xkLnBvaW50cztcclxuICAgICAgICBsZXQgbm9ybWFsID0gd29ybGRNYW5pZm9sZC5ub3JtYWw7XHJcbiAgICAgICAgaWYob3RoZXJDb2xsaWRlci50YWcgPT0gNCB8fCBvdGhlckNvbGxpZGVyLnRhZyA9PSA1IHx8IG90aGVyQ29sbGlkZXIudGFnID09IDZ8fCBvdGhlckNvbGxpZGVyLnRhZyA9PSA3IHx8IG90aGVyQ29sbGlkZXIudGFnID09IDggKXtcclxuICAgICAgICAgICAgdGhpcy5lbmVteU51bSA9IG90aGVyQ29sbGlkZXIudGFnO1xyXG4gICAgICAgICAgICB0aGlzLmlzQmF0dGxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdmFyIGNhbnZhc05vZGUgPSBjYy5maW5kKFwiQ2FudmFzXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBjYW1lcmFOb2RlID0gY2MuQ2FtZXJhLm1haW47XHJcbiAgICAgICAgICAgIHZhciBibGlua0FjdGlvbiA9IGNjLmJsaW5rKDIsIDUpO1xyXG4gICAgICAgICAgICB0aGlzLkdhbWVtYW5nZXIucGFsc2UgPSB0cnVlO1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wYXVzZU11c2ljKCk7XHJcbiAgICAgICAgICAgIGlmKG90aGVyQ29sbGlkZXIudGFnICE9IDgpe1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmdvaW5Tb3VuZCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLkdhbWVtYW5nZXIucGFsc2UpO1xyXG4gICAgICAgICAgICAgICAgY2FudmFzTm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgYmxpbmtBY3Rpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgY2MuY2FsbEZ1bmMoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiYmF0dGxlXCIsICgpID0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXh0U2NlbmUgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0U2NlbmVbXCJlbmVteU51bVwiXSA9IG90aGVyQ29sbGlkZXIudGFnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwibmV4dFNjZW5lW2VuZW15TnVtXVwiLCBuZXh0U2NlbmVbXCJlbmVteU51bVwiXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICApKTtcclxuICAgICAgICAgICAgfWVsc2UgaWYob3RoZXJDb2xsaWRlci50YWcgPT0gOCl7XHJcbiAgICAgICAgICAgICAgICBHbG9iYWxEYXRhLmlzQk9TU2NhbWVyYSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAvL2xldCBjYW1lcmFBY3Rpb24gPSBjYW1lcmFOb2RlLnJ1bkFjdGlvbihjYy5tb3ZlVG8oMiwgY2MudjIoMCw1MCkpKTtcclxuICAgICAgICAgICAgICAgIGxldCBjYW1lcmFBY3Rpb24gPSBjYy5jYWxsRnVuYyhmdW5jdGlvbih0YXJnZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtYWluQ2FtZXJhID0gY2MuQ2FtZXJhLm1haW47XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcmlnaW5hbFBvc2l0aW9uID0gbWFpbkNhbWVyYS5ub2RlLnBvc2l0aW9uLmNsb25lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAvL2xldCBzaGFrZVNlcXVlbmNlO1xyXG4gICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzaGFrZVNlcXVlbmNlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNoYWtlU2VxdWVuY2UgPSBjYy5tb3ZlVG8oMywgY2MudjIodGhpcy5vcmlnaW5hbFBvc2l0aW9uLnggLCB0aGlzLm9yaWdpbmFsUG9zaXRpb24ueSs3MCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmFcIikuZ2V0Q29tcG9uZW50KGNjLkNhbWVyYSkubm9kZS5ydW5BY3Rpb24oc2hha2VTZXF1ZW5jZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBsb2FkQWN0aW9uID0gY2MubW92ZUJ5KDQsIGNjLnYyKDAsMCkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgR2xvYmFsRGF0YS5pc0JPU1NjYW1lcmEgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0sIDEzKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgY29udmVyc2F0aW9uQWN0aW9uID0gY2MuY2FsbEZ1bmMoZnVuY3Rpb24odGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9tb3lhblwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmdvaW5Tb3VuZCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfSwgOCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9tb3lhblwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0sIDgpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjYW52YXNOb2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShcclxuICAgICAgICAgICAgICAgICAgICBjYW1lcmFBY3Rpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZEFjdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBjb252ZXJzYXRpb25BY3Rpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZEFjdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBibGlua0FjdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYyhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJiYXR0bGVcIiwgKCkgPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5leHRTY2VuZSA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRTY2VuZVtcImVuZW15TnVtXCJdID0gb3RoZXJDb2xsaWRlci50YWc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJuZXh0U2NlbmVbZW5lbXlOdW1dXCIsIG5leHRTY2VuZVtcImVuZW15TnVtXCJdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICkpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy9jYy5hdWRpb0VuZ2luZS5wYXVzZU11c2ljKCk7XHJcbiAgICAgICAgICAgIC8vY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmJhdHRsZUJnbSwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19