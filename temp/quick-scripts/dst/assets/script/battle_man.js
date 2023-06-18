
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/battle_man.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0a690eqTH9JkbGGdX00Deas', 'battle_man');
// script/battle_man.ts

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
var GlobalData_1 = require("./GlobalData");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        _this.battleBgm = null;
        _this.winSound = null;
        _this.loseSound = null;
        _this.red_dong_punch = null;
        _this.mainCamera = null;
        _this.enemy1 = null;
        _this.enemy2 = null;
        _this.enemy3 = null;
        _this.enemy7 = null;
        _this.myHP = null;
        _this.enemyHP = null;
        _this.man = null;
        _this.sprite = [];
        _this.bag = GlobalData_1.default.pokewoman;
        _this.mylife = GlobalData_1.default.mylife;
        _this.myLife = 100;
        _this.enemyLife = 100;
        _this.isWin = false;
        _this.myTurn = true;
        _this.enemyTurn = false;
        _this.isLose = false;
        _this.enemynum = 0;
        _this.renew = true;
        _this.last_myself = -1;
        _this.skill1Button = null;
        _this.skill2Button = null;
        _this.skill3Button = null;
        _this.skill4Button = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        cc.find('Canvas/skills/bag2').on('click', function () {
            cc.find('Canvas/skills').active = false;
            cc.find('Canvas/bags2').active = true;
        });
        this.skill1Button = cc.find("Canvas/skills/skill1").getComponent(cc.Button);
        this.skill2Button = cc.find("Canvas/skills/skill2").getComponent(cc.Button);
        this.skill3Button = cc.find("Canvas/skills/skill3").getComponent(cc.Button);
        this.skill4Button = cc.find("Canvas/skills/skill4").getComponent(cc.Button);
        this.skill1Button.node.on('click', this.skill1, this);
        this.skill2Button.node.on('click', this.skill2, this);
        this.skill3Button.node.on('click', this.skill3, this);
        this.skill4Button.node.on('click', this.skill4, this);
    };
    NewClass.prototype.start = function () {
        this.last_myself = GlobalData_1.default.myelf;
        this.enemynum = cc.director.getScene()["enemyNum"];
        if (this.enemynum == 4) {
            if (cc.find("Canvas/enemy").getComponent(cc.Sprite).spriteFrame == null) {
                cc.find("Canvas/enemy").getComponent(cc.Sprite).spriteFrame = this.enemy1;
            }
        }
        else if (this.enemynum == 5) {
            if (cc.find("Canvas/enemy").getComponent(cc.Sprite).spriteFrame == null) {
                cc.find("Canvas/enemy").getComponent(cc.Sprite).spriteFrame = this.enemy2;
                cc.find("Canvas/enemy").color = cc.Color.RED;
            }
        }
        else if (this.enemynum == 6) {
            if (cc.find("Canvas/enemy").getComponent(cc.Sprite).spriteFrame == null) {
                cc.find("Canvas/enemy").getComponent(cc.Sprite).spriteFrame = this.enemy3;
                // cc.find("Canvas/enemy").getComponent(cc.Sprite).spriteFrame.setFlipX(true);
                cc.find("Canvas/enemy").scaleX *= -1;
                cc.find("Canvas/enemy").width = 300;
                cc.find("Canvas/enemy").y = 0;
            }
        }
        else if (this.enemynum == 7) {
            if (cc.find("Canvas/enemy").getComponent(cc.Sprite).spriteFrame == null) {
                cc.find("Canvas/enemy").getComponent(cc.Sprite).spriteFrame = this.enemy7;
                cc.find("Canvas/enemy").color = cc.Color.RED;
            }
        }
        cc.audioEngine.playMusic(this.battleBgm, true);
        var enemyParticleEffect2 = cc.find("Canvas/enemy/onLoad").getComponent(cc.ParticleSystem);
        if (this.enemynum == 4) {
            console.log("this.enemynum == 4");
            enemyParticleEffect2.playOnLoad = true;
            enemyParticleEffect2.resetSystem();
        }
    };
    NewClass.prototype.update = function (dt) {
        if (this.renew) {
            this.renew = false;
            if (GlobalData_1.default.myelf == 0) {
                cc.find("Canvas/skills/skill1/Background/Label").getComponent(cc.Label).string = "魔法攻擊";
                cc.find("Canvas/skills/skill4/Background/Label").getComponent(cc.Label).string = "懶蛋攻擊";
            }
            else {
                cc.find("Canvas/skills/skill1/Background/Label").getComponent(cc.Label).string = "衝撞";
            }
        }
        if (GlobalData_1.default.myelf != this.last_myself) {
            console.log("GlobalData.myelf:", GlobalData_1.default.myelf);
            this.last_myself = GlobalData_1.default.myelf;
            this.renew = true;
        }
        this.node.getComponent(cc.Sprite).spriteFrame = this.sprite[this.bag[GlobalData_1.default.myelf]];
        this.updateUI(dt);
        if (this.enemyLife <= 0 && !this.isWin) {
            GlobalData_1.default.pokewoman.push(this.enemynum);
            this.enemyLife = 0;
            this.isWin = true;
            this.enemyHP.progress = 0;
            cc.audioEngine.pauseMusic();
            cc.audioEngine.playEffect(this.winSound, false);
            GlobalData_1.default.exp += 100;
            this.scheduleOnce(function () {
                var _this = this;
                cc.director.loadScene("map2", function () {
                    var enemyNumString = cc.js.formatStr("%d", _this.enemynum);
                    GlobalData_1.default.nodeToDestroy.push(enemyNumString);
                });
            }, 4);
        }
        if (this.myLife <= 0 && !this.isLose) {
            this.myLife = 0;
            this.isLose = true;
            this.myTurn = false;
            this.enemyTurn = false;
            this.myHP.progress = 0;
            cc.audioEngine.pauseMusic();
            cc.audioEngine.playEffect(this.loseSound, false);
            this.scheduleOnce(function () {
                cc.director.loadScene("map2");
            }, 4);
        }
        if (this.enemyTurn && !this.myTurn && this.enemyLife > 0) {
            this.enemyTurn = false;
            this.myTurn = true;
            this.enemyTurnAction();
        }
        if (!this.enemyTurn && this.myTurn && this.myLife > 0) {
            //cc.find("Canvas/skill1").getComponent(cc.Button).interactable = this.myTurn;
        }
        cc.find("Canvas/skills/skill1").getComponent(cc.Button).interactable = this.myTurn;
        cc.find("Canvas/skills/skill2").getComponent(cc.Button).interactable = this.myTurn;
        cc.find("Canvas/skills/skill3").getComponent(cc.Button).interactable = this.myTurn;
        cc.find("Canvas/skills/skill4").getComponent(cc.Button).interactable = this.myTurn;
        //}
        cc.audioEngine.setMusicVolume(GlobalData_1.default.volume);
        cc.audioEngine.setEffectsVolume(GlobalData_1.default.volume);
    };
    NewClass.prototype.updateUI = function (dt) {
        // console.log(this.enemynum);
        this.myHP.progress = this.myLife / 100;
        this.enemyHP.progress = this.enemyLife / 100;
        var myLifeLabel = cc.find("Canvas/myLife").getComponent(cc.Label);
        var enemyLifeLabel = cc.find("Canvas/enemyLife").getComponent(cc.Label);
        myLifeLabel.string = ((Array(7).join("0") + this.myLife.toString()).slice(-3)) + ('/100');
        enemyLifeLabel.string = ((Array(7).join("0") + this.enemyLife.toString()).slice(-3)) + ('/100');
    };
    NewClass.prototype.skill1 = function () {
        var enemyLifeDeduct = cc.callFunc(function (target) {
            if (GlobalData_1.default.myelf == 0)
                this.enemyLife -= 80;
            else
                this.enemyLife -= 20;
        }, this);
        var turnSwitch1 = cc.callFunc(function (target) {
            this.myTurn = false;
        }, this);
        var turnSwitch2 = cc.callFunc(function (target) {
            this.enemyTurn = true;
        }, this);
        this.node.runAction(cc.sequence(turnSwitch1, cc.moveBy(1, cc.v2(520, 0)), cc.moveBy(1, cc.v2(-520, 0)), enemyLifeDeduct, turnSwitch2));
    };
    NewClass.prototype.skill2 = function () {
        //cc.log("skill2");
        var enemyLifeDeduct = cc.callFunc(function (target) {
            this.enemyLife -= 20;
        }, this);
        var turnSwitch1 = cc.callFunc(function (target) {
            this.myTurn = false;
        }, this);
        var turnSwitch2 = cc.callFunc(function (target) {
            this.enemyTurn = true;
        }, this);
        this.node.runAction(cc.sequence(turnSwitch1, cc.moveBy(1, cc.v2(520, 0)), cc.moveBy(1, cc.v2(-520, 0)), enemyLifeDeduct, turnSwitch2));
    };
    NewClass.prototype.skill3 = function () {
        //cc.log("skill3");
        var enemyLifeDeduct = cc.callFunc(function (target) {
            this.enemyLife -= 20;
        }, this);
        var turnSwitch1 = cc.callFunc(function (target) {
            this.myTurn = false;
        }, this);
        var turnSwitch2 = cc.callFunc(function (target) {
            this.enemyTurn = true;
        }, this);
        this.node.runAction(cc.sequence(turnSwitch1, cc.moveBy(1, cc.v2(520, 0)), cc.moveBy(1, cc.v2(-520, 0)), enemyLifeDeduct, turnSwitch2));
    };
    NewClass.prototype.skill4 = function () {
        //cc.log("skill4");
        var enemyLifeDeduct = cc.callFunc(function (target) {
            this.enemyLife -= 100;
        }, this);
        var turnSwitch1 = cc.callFunc(function (target) {
            this.myTurn = false;
        }, this);
        var turnSwitch2 = cc.callFunc(function (target) {
            this.enemyTurn = true;
        }, this);
        this.node.runAction(cc.sequence(turnSwitch1, cc.moveBy(1, cc.v2(520, 0)), cc.moveBy(1, cc.v2(-520, 0)), enemyLifeDeduct, turnSwitch2));
    };
    NewClass.prototype.enemyTurnAction = function () {
        var enemyAnimation = cc.find("Canvas/enemy").getComponent(cc.Animation);
        var enemyParticleEffect = cc.find("Canvas/enemy/magic").getComponent(cc.ParticleSystem);
        var enemyParticleEffect3 = cc.find("Canvas/enemy/punch").getComponent(cc.ParticleSystem);
        var enemyParticleEffect4 = cc.find("Canvas/enemy/boom").getComponent(cc.ParticleSystem);
        var shakeCamera = cc.callFunc(function (target) {
            var mainCamera = cc.Camera.main;
            this.originalPosition = mainCamera.node.position.clone();
            var shakeSequence = cc.sequence(cc.moveTo(0.05, cc.v2(this.originalPosition.x, this.originalPosition.y + 8)), cc.moveTo(0.05, cc.v2(this.originalPosition.x, this.originalPosition.y - 8)), cc.moveTo(0.05, this.originalPosition));
            // Run the shake sequence on the camera
            cc.find("Canvas/Main Camera").getComponent(cc.Camera).node.runAction(shakeSequence);
            //this.camera.node.runAction(shakeSequence);
        });
        var shakeCamera2 = cc.callFunc(function (target) {
            var mainCamera = cc.Camera.main;
            this.originalPosition = mainCamera.node.position.clone();
            //let shakeSequence;
            var shakeSequence = cc.sequence(cc.moveTo(0.05, cc.v2(this.originalPosition.x + 15, this.originalPosition.y)), cc.moveTo(0.05, cc.v2(this.originalPosition.x - 15, this.originalPosition.y)), cc.moveTo(0.05, this.originalPosition));
            cc.find("Canvas/Main Camera").getComponent(cc.Camera).node.runAction(shakeSequence);
        });
        if (this.enemynum == 4) {
            enemyAnimation.play("dong_move");
        }
        else if (this.enemynum == 5) {
            enemyAnimation.play("red_dong_move");
        }
        else if (this.enemynum == 6) {
            enemyAnimation.play("boom");
        }
        else if (this.enemynum == 7) {
            enemyAnimation.play("fish3");
        }
        var myLifeDeduct = cc.callFunc(function (target) {
            console.log("enemyNum in mylife deduct:", this.enemynum);
            if (this.enemynum == 4)
                this.myLife -= 10;
            else if (this.enemynum == 5)
                this.myLife -= 20;
            else if (this.enemynum == 6)
                this.myLife -= 45;
            else if (this.enemynum == 7)
                this.myLife -= 10;
        }, this);
        var turnSwitch1 = cc.callFunc(function (target) {
            this.myTurn = false;
            this.enemyTurn = false;
        }, this);
        var turnSwitch2 = cc.callFunc(function (target) {
            this.myTurn = true;
            this.enemyTurn = false;
        }, this);
        var particleAction = cc.callFunc(function (target) {
            if (this.enemynum == 4)
                enemyParticleEffect.resetSystem();
            else if (this.enemynum == 5)
                enemyParticleEffect3.resetSystem();
            else if (this.enemynum == 6) {
                enemyParticleEffect4.resetSystem();
                cc.find("Canvas/enemy/boom").runAction(cc.moveBy(0.2, cc.v2(-525, 0)));
                cc.find("Canvas/enemy/boom").x = 17.366;
            }
        }, this);
        var sound = cc.callFunc(function (target) {
            if (this.enemynum == 4) { } //enemyParticleEffect.resetSystem();
            else if (this.enemynum == 5) {
                cc.audioEngine.playEffect(this.red_dong_punch, false);
                console.log("sound");
            }
            else if (this.enemynum == 6) {
                cc.audioEngine.playEffect(this.red_dong_punch, false);
                console.log("sound");
            }
        }, this);
        var moveAction = cc.callFunc(function (target) {
            if (this.enemynum == 4)
                enemy.runAction(cc.sequence(cc.moveBy(0.6, cc.v2(0, 50)), cc.moveBy(0.2, cc.v2(0, -50)), particleAction, shakeCamera, myLifeDeduct, turnSwitch2));
            else if (this.enemynum == 5)
                enemy.runAction(cc.sequence(cc.moveBy(0.8, cc.v2(-460, 0)), sound, shakeCamera2, particleAction, cc.moveBy(1.5, cc.v2(460, 0)), myLifeDeduct, turnSwitch2));
            else if (this.enemynum == 6)
                enemy.runAction(cc.sequence(cc.moveBy(0.6, cc.v2(0, 20)), sound, shakeCamera2, particleAction, cc.moveBy(0.1, cc.v2(0, -20)), myLifeDeduct, turnSwitch2));
            else if (this.enemynum == 7) {
                enemy.runAction(cc.sequence(cc.moveBy(1, cc.v2(-480, 0)), cc.moveBy(1, cc.v2(520, 0)), myLifeDeduct, turnSwitch2));
            }
        }, this);
        var enemy = cc.find("Canvas/enemy");
        enemy.runAction(cc.sequence(turnSwitch1, moveAction));
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], NewClass.prototype, "battleBgm", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], NewClass.prototype, "winSound", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], NewClass.prototype, "loseSound", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], NewClass.prototype, "red_dong_punch", void 0);
    __decorate([
        property({ type: cc.Node })
    ], NewClass.prototype, "mainCamera", void 0);
    __decorate([
        property({ type: cc.SpriteFrame })
    ], NewClass.prototype, "enemy1", void 0);
    __decorate([
        property({ type: cc.SpriteFrame })
    ], NewClass.prototype, "enemy2", void 0);
    __decorate([
        property({ type: cc.SpriteFrame })
    ], NewClass.prototype, "enemy3", void 0);
    __decorate([
        property({ type: cc.SpriteFrame })
    ], NewClass.prototype, "enemy7", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], NewClass.prototype, "myHP", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], NewClass.prototype, "enemyHP", void 0);
    __decorate([
        property(man_1.default)
    ], NewClass.prototype, "man", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], NewClass.prototype, "sprite", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxiYXR0bGVfbWFuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZCQUF3QjtBQUN4QiwyQ0FBc0M7QUFFaEMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFzWEM7UUFuWEcsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQVcsT0FBTyxDQUFDO1FBR3ZCLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRy9CLGNBQVEsR0FBaUIsSUFBSSxDQUFDO1FBRzlCLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRy9CLG9CQUFjLEdBQWlCLElBQUksQ0FBQztRQUdwQyxnQkFBVSxHQUFZLElBQUksQ0FBQztRQUczQixZQUFNLEdBQW1CLElBQUksQ0FBQztRQUc5QixZQUFNLEdBQW1CLElBQUksQ0FBQztRQUc5QixZQUFNLEdBQW1CLElBQUksQ0FBQztRQUc5QixZQUFNLEdBQW1CLElBQUksQ0FBQztRQUc5QixVQUFJLEdBQW1CLElBQUksQ0FBQztRQUc1QixhQUFPLEdBQW1CLElBQUksQ0FBQztRQUcvQixTQUFHLEdBQVEsSUFBSSxDQUFDO1FBR2hCLFlBQU0sR0FBcUIsRUFBRSxDQUFDO1FBRTlCLFNBQUcsR0FBYSxvQkFBVSxDQUFDLFNBQVMsQ0FBQztRQUVyQyxZQUFNLEdBQVUsb0JBQVUsQ0FBQyxNQUFNLENBQUM7UUFFMUIsWUFBTSxHQUFXLEdBQUcsQ0FBQztRQUNyQixlQUFTLEdBQVcsR0FBRyxDQUFDO1FBQ3hCLFdBQUssR0FBWSxLQUFLLENBQUM7UUFDdkIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUN2QixlQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLFlBQU0sR0FBWSxLQUFLLENBQUM7UUFDeEIsY0FBUSxHQUFHLENBQUMs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QUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBQyxlQUFlLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQTtJQUN6SSxDQUFDO0lBRUQseUJBQU0sR0FBTjtRQUNJLG1CQUFtQjtRQUNuQixJQUFJLGVBQWUsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFVBQVMsTUFBTTtZQUM3QyxJQUFJLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQztRQUN6QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFVCxJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFVBQVMsTUFBTTtZQUN6QyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN4QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFVCxJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFVBQVMsTUFBTTtZQUN6QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUMxQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFVCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBQyxlQUFlLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQTtJQUN6SSxDQUFDO0lBRUQseUJBQU0sR0FBTjtRQUNJLG1CQUFtQjtRQUNuQixJQUFJLGVBQWUsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFVBQVMsTUFBTTtZQUM3QyxJQUFJLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQztRQUN6QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFVCxJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFVBQVMsTUFBTTtZQUN6QyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN4QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFVCxJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFVBQVMsTUFBTTtZQUN6QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUMxQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFVCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBQyxlQUFlLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQTtJQUN6SSxDQUFDO0lBRUQseUJBQU0sR0FBTjtRQUNJLG1CQUFtQjtRQUNuQixJQUFJLGVBQWUsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFVBQVMsTUFBTTtZQUM3QyxJQUFJLENBQUMsU0FBUyxJQUFJLEdBQUcsQ0FBQztRQUMxQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFVCxJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFVBQVMsTUFBTTtZQUN6QyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN4QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFVCxJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFVBQVMsTUFBTTtZQUN6QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUMxQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFVCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBQyxlQUFlLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQTtJQUN6SSxDQUFDO0lBQ0Qsa0NBQWUsR0FBZjtRQUNJLElBQUksY0FBYyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN4RSxJQUFJLG1CQUFtQixHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3hGLElBQUksb0JBQW9CLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDekYsSUFBSSxvQkFBb0IsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUV4RixJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFVBQVMsTUFBTTtZQUN6QyxJQUFNLFVBQVUsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNsQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDekQsSUFBTSxhQUFhLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FDN0IsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxFQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFDN0UsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFDNUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQ3pDLENBQUM7WUFFRix1Q0FBdUM7WUFDdkMsRUFBRSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNwRiw0Q0FBNEM7UUFDaEQsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLFlBQVksR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFVBQVMsTUFBTTtZQUMxQyxJQUFNLFVBQVUsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNsQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDMUQsb0JBQW9CO1lBRWYsSUFBTSxhQUFhLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FDN0IsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxHQUFDLEVBQUUsRUFBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDNUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxHQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDM0UsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQ3pDLENBQUM7WUFDTixFQUFFLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3hGLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBRyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsRUFBQztZQUNsQixjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3BDO2FBQUssSUFBRyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsRUFBQztZQUN4QixjQUFjLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQ3hDO2FBQUssSUFBRyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsRUFBQztZQUN4QixjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQy9CO2FBQ0ksSUFBRyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsRUFBQztZQUN2QixjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ2hDO1FBQ0QsSUFBSSxZQUFZLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxVQUFTLE1BQU07WUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDekQsSUFBRyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUM7Z0JBQUUsSUFBSSxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUM7aUJBQ3BDLElBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDO2dCQUFFLElBQUksQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDO2lCQUN6QyxJQUFHLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQztnQkFBRSxJQUFJLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQztpQkFDekMsSUFBRyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUM7Z0JBQUUsSUFBSSxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUM7UUFDbEQsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRVQsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxVQUFTLE1BQU07WUFDekMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDM0IsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRVQsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxVQUFTLE1BQU07WUFDekMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDM0IsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRVQsSUFBSSxjQUFjLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxVQUFTLE1BQU07WUFDNUMsSUFBRyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUM7Z0JBQUUsbUJBQW1CLENBQUMsV0FBVyxFQUFFLENBQUM7aUJBQ3BELElBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDO2dCQUFFLG9CQUFvQixDQUFDLFdBQVcsRUFBRSxDQUFDO2lCQUMxRCxJQUFHLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxFQUFDO2dCQUN2QixvQkFBb0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDbkMsRUFBRSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdkUsRUFBRSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUM7YUFDM0M7UUFDTCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFVCxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFVBQVMsTUFBTTtZQUNuQyxJQUFHLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxFQUFFLEdBQUUsQ0FBQSxvQ0FBb0M7aUJBQ3hELElBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLEVBQUU7Z0JBQ3hCLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ3RELE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDeEI7aUJBQUssSUFBRyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsRUFBRTtnQkFDekIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDdEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUN4QjtRQUNELENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUViLElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsVUFBUyxNQUFNO1lBQ3hDLElBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDO2dCQUNqQixLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsY0FBYyxFQUFFLFdBQVcsRUFBQyxZQUFZLEVBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztpQkFDL0ksSUFBRyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUM7Z0JBQ3RCLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztpQkFDekosSUFBRyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUM7Z0JBQzFCLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztpQkFDbkosSUFBRyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsRUFBQztnQkFBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7YUFBQztRQUVsSixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFLVCxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3BDLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQTtJQUN6RCxDQUFDO0lBaFhEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ0k7SUFHdkI7UUFEQyxRQUFROzBDQUNjO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUMsQ0FBQzsrQ0FDQztJQUcvQjtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBQyxFQUFFLENBQUMsU0FBUyxFQUFDLENBQUM7OENBQ0E7SUFHOUI7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUMsRUFBRSxDQUFDLFNBQVMsRUFBQyxDQUFDOytDQUNDO0lBRy9CO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUMsQ0FBQztvREFDTTtJQUdwQztRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBQyxFQUFFLENBQUMsSUFBSSxFQUFDLENBQUM7Z0RBQ0U7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUMsRUFBRSxDQUFDLFdBQVcsRUFBQyxDQUFDOzRDQUNGO0lBRzlCO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUMsQ0FBQzs0Q0FDRjtJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBQyxFQUFFLENBQUMsV0FBVyxFQUFDLENBQUM7NENBQ0Y7SUFHOUI7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUMsRUFBRSxDQUFDLFdBQVcsRUFBQyxDQUFDOzRDQUNGO0lBRzlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7MENBQ0c7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzs2Q0FDTTtJQUcvQjtRQURDLFFBQVEsQ0FBQyxhQUFHLENBQUM7eUNBQ0U7SUFHaEI7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7NENBQ0c7SUE3Q2IsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXNYNUI7SUFBRCxlQUFDO0NBdFhELEFBc1hDLENBdFhxQyxFQUFFLENBQUMsU0FBUyxHQXNYakQ7a0JBdFhvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1hbiBmcm9tIFwiLi9tYW5cIjtcclxuaW1wb3J0IEdsb2JhbERhdGEgZnJvbSBcIi4vR2xvYmFsRGF0YVwiO1xyXG5kZWNsYXJlIGNvbnN0IGZpcmViYXNlOiBhbnk7XHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICB0ZXh0OiBzdHJpbmcgPSAnaGVsbG8nO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7dHlwZTpjYy5BdWRpb0NsaXB9KVxyXG4gICAgYmF0dGxlQmdtOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7dHlwZTpjYy5BdWRpb0NsaXB9KVxyXG4gICAgd2luU291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHt0eXBlOmNjLkF1ZGlvQ2xpcH0pXHJcbiAgICBsb3NlU291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHt0eXBlOmNjLkF1ZGlvQ2xpcH0pXHJcbiAgICByZWRfZG9uZ19wdW5jaDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoe3R5cGU6Y2MuTm9kZX0pXHJcbiAgICBtYWluQ2FtZXJhOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoe3R5cGU6Y2MuU3ByaXRlRnJhbWV9KVxyXG4gICAgZW5lbXkxOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHt0eXBlOmNjLlNwcml0ZUZyYW1lfSlcclxuICAgIGVuZW15MjogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7dHlwZTpjYy5TcHJpdGVGcmFtZX0pXHJcbiAgICBlbmVteTM6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoe3R5cGU6Y2MuU3ByaXRlRnJhbWV9KVxyXG4gICAgZW5lbXk3OiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByb2dyZXNzQmFyKVxyXG4gICAgbXlIUDogY2MuUHJvZ3Jlc3NCYXIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Qcm9ncmVzc0JhcilcclxuICAgIGVuZW15SFA6IGNjLlByb2dyZXNzQmFyID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoTWFuKVxyXG4gICAgbWFuOiBNYW4gPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShbY2MuU3ByaXRlRnJhbWVdKVxyXG4gICAgc3ByaXRlOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XHJcblxyXG4gICAgYmFnOiBudW1iZXJbXSA9IEdsb2JhbERhdGEucG9rZXdvbWFuO1xyXG5cclxuICAgIG15bGlmZTogbnVtYmVyID1HbG9iYWxEYXRhLm15bGlmZTtcclxuXHJcbiAgICBwcml2YXRlIG15TGlmZTogbnVtYmVyID0gMTAwO1xyXG4gICAgcHJpdmF0ZSBlbmVteUxpZmU6IG51bWJlciA9IDEwMDtcclxuICAgIHByaXZhdGUgaXNXaW46IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgbXlUdXJuOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHByaXZhdGUgZW5lbXlUdXJuOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGlzTG9zZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBlbmVteW51bSA9IDA7XHJcbiAgICBwcml2YXRlIHJlbmV3OiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHByaXZhdGUgbGFzdF9teXNlbGY6IG51bWJlciA9IC0xO1xyXG4gICAgcHVibGljIHNraWxsMUJ1dHRvbjogY2MuQnV0dG9uID0gbnVsbDtcclxuICAgIHB1YmxpYyBza2lsbDJCdXR0b246IGNjLkJ1dHRvbiA9IG51bGw7XHJcbiAgICBwdWJsaWMgc2tpbGwzQnV0dG9uOiBjYy5CdXR0b24gPSBudWxsO1xyXG4gICAgcHVibGljIHNraWxsNEJ1dHRvbjogY2MuQnV0dG9uID0gbnVsbDtcclxuXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICBcclxuICAgICAgICBjYy5maW5kKCdDYW52YXMvc2tpbGxzL2JhZzInKS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9za2lsbHMnKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL2JhZ3MyJykuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnNraWxsMUJ1dHRvbiA9IGNjLmZpbmQoXCJDYW52YXMvc2tpbGxzL3NraWxsMVwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcclxuICAgICAgICB0aGlzLnNraWxsMkJ1dHRvbiA9IGNjLmZpbmQoXCJDYW52YXMvc2tpbGxzL3NraWxsMlwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcclxuICAgICAgICB0aGlzLnNraWxsM0J1dHRvbiA9IGNjLmZpbmQoXCJDYW52YXMvc2tpbGxzL3NraWxsM1wiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcclxuICAgICAgICB0aGlzLnNraWxsNEJ1dHRvbiA9IGNjLmZpbmQoXCJDYW52YXMvc2tpbGxzL3NraWxsNFwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcclxuICAgICAgICB0aGlzLnNraWxsMUJ1dHRvbi5ub2RlLm9uKCdjbGljaycsIHRoaXMuc2tpbGwxLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnNraWxsMkJ1dHRvbi5ub2RlLm9uKCdjbGljaycsIHRoaXMuc2tpbGwyLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnNraWxsM0J1dHRvbi5ub2RlLm9uKCdjbGljaycsIHRoaXMuc2tpbGwzLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnNraWxsNEJ1dHRvbi5ub2RlLm9uKCdjbGljaycsIHRoaXMuc2tpbGw0LCB0aGlzKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5sYXN0X215c2VsZiA9IEdsb2JhbERhdGEubXllbGY7XHJcbiAgICAgICAgdGhpcy5lbmVteW51bSA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKClbXCJlbmVteU51bVwiXTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5lbmVteW51bSA9PSA0KXtcclxuICAgICAgICAgICAgaWYoY2MuZmluZChcIkNhbnZhcy9lbmVteVwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9PSBudWxsKXtcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvZW5lbXlcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmVuZW15MTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9ZWxzZSBpZih0aGlzLmVuZW15bnVtID09IDUpe1xyXG4gICAgICAgICAgICBpZihjYy5maW5kKFwiQ2FudmFzL2VuZW15XCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID09IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9lbmVteVwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuZW5lbXkyO1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9lbmVteVwiKS5jb2xvciA9IGNjLkNvbG9yLlJFRDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNlIGlmKHRoaXMuZW5lbXludW0gPT0gNil7XHJcbiAgICAgICAgICAgIGlmKGNjLmZpbmQoXCJDYW52YXMvZW5lbXlcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL2VuZW15XCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5lbmVteTM7XHJcbiAgICAgICAgICAgICAgIC8vIGNjLmZpbmQoXCJDYW52YXMvZW5lbXlcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUuc2V0RmxpcFgodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL2VuZW15XCIpLnNjYWxlWCAqPSAtMTtcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvZW5lbXlcIikud2lkdGggPSAzMDA7XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL2VuZW15XCIpLnkgPSAwOyAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKHRoaXMuZW5lbXludW0gPT0gNyl7XHJcbiAgICAgICAgICAgIGlmKGNjLmZpbmQoXCJDYW52YXMvZW5lbXlcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL2VuZW15XCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5lbmVteTc7XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL2VuZW15XCIpLmNvbG9yID0gY2MuQ29sb3IuUkVEO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLmJhdHRsZUJnbSwgdHJ1ZSk7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIGxldCBlbmVteVBhcnRpY2xlRWZmZWN0MiA9IGNjLmZpbmQoXCJDYW52YXMvZW5lbXkvb25Mb2FkXCIpLmdldENvbXBvbmVudChjYy5QYXJ0aWNsZVN5c3RlbSk7XHJcbiAgICAgICAgaWYodGhpcy5lbmVteW51bSA9PSA0KXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzLmVuZW15bnVtID09IDRcIik7XHJcbiAgICAgICAgICAgIGVuZW15UGFydGljbGVFZmZlY3QyLnBsYXlPbkxvYWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBlbmVteVBhcnRpY2xlRWZmZWN0Mi5yZXNldFN5c3RlbSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQpe1xyXG4gICAgICAgIGlmKHRoaXMucmVuZXcpe1xyXG4gICAgICAgICAgICB0aGlzLnJlbmV3ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmKEdsb2JhbERhdGEubXllbGYgPT0gMCl7XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL3NraWxscy9za2lsbDEvQmFja2dyb3VuZC9MYWJlbFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwi6a2U5rOV5pS75pOKXCI7XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL3NraWxscy9za2lsbDQvQmFja2dyb3VuZC9MYWJlbFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwi5oe26JuL5pS75pOKXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvc2tpbGxzL3NraWxsMS9CYWNrZ3JvdW5kL0xhYmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCLooZ3mkp5cIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihHbG9iYWxEYXRhLm15ZWxmICE9IHRoaXMubGFzdF9teXNlbGYpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkdsb2JhbERhdGEubXllbGY6XCIsIEdsb2JhbERhdGEubXllbGYpO1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RfbXlzZWxmID0gR2xvYmFsRGF0YS5teWVsZjtcclxuICAgICAgICAgICAgdGhpcy5yZW5ldyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByaXRlW3RoaXMuYmFnW0dsb2JhbERhdGEubXllbGZdXTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVVJKGR0KTtcclxuICAgICAgICBpZih0aGlzLmVuZW15TGlmZSA8PSAwICYmICF0aGlzLmlzV2luKXtcclxuICAgICAgICAgICAgR2xvYmFsRGF0YS5wb2tld29tYW4ucHVzaCh0aGlzLmVuZW15bnVtKTtcclxuXHJcblxyXG4gICAgICAgICAgICB0aGlzLmVuZW15TGlmZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuaXNXaW4gPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmVuZW15SFAucHJvZ3Jlc3MgPSAwO1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wYXVzZU11c2ljKCk7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy53aW5Tb3VuZCwgZmFsc2UpO1xyXG4gICAgICAgICAgICBHbG9iYWxEYXRhLmV4cCArPSAxMDA7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwibWFwMlwiLCAoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlbmVteU51bVN0cmluZyA9IGNjLmpzLmZvcm1hdFN0cihcIiVkXCIsIHRoaXMuZW5lbXludW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIEdsb2JhbERhdGEubm9kZVRvRGVzdHJveS5wdXNoKGVuZW15TnVtU3RyaW5nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0sIDQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5teUxpZmU8PTAgJiYgIXRoaXMuaXNMb3NlKXtcclxuICAgICAgICAgICAgdGhpcy5teUxpZmUgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmlzTG9zZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubXlUdXJuID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlUdXJuID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubXlIUC5wcm9ncmVzcyA9IDA7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBhdXNlTXVzaWMoKTtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmxvc2VTb3VuZCwgZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIm1hcDJcIik7XHJcbiAgICAgICAgICAgIH0sIDQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5lbmVteVR1cm4gJiYgIXRoaXMubXlUdXJuICYmIHRoaXMuZW5lbXlMaWZlID4gMCl7XHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlUdXJuID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubXlUdXJuID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5lbmVteVR1cm5BY3Rpb24oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKCF0aGlzLmVuZW15VHVybiAmJiB0aGlzLm15VHVybiAmJiB0aGlzLm15TGlmZSA+IDApe1xyXG5cclxuICAgICAgICAgICAgLy9jYy5maW5kKFwiQ2FudmFzL3NraWxsMVwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0aGlzLm15VHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9za2lsbHMvc2tpbGwxXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IHRoaXMubXlUdXJuO1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvc2tpbGxzL3NraWxsMlwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0aGlzLm15VHVybjtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL3NraWxscy9za2lsbDNcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gdGhpcy5teVR1cm47XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9za2lsbHMvc2tpbGw0XCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IHRoaXMubXlUdXJuO1xyXG4gICAgLy99XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0TXVzaWNWb2x1bWUoR2xvYmFsRGF0YS52b2x1bWUpO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldEVmZmVjdHNWb2x1bWUoR2xvYmFsRGF0YS52b2x1bWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVVJKGR0KXtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmVuZW15bnVtKTtcclxuICAgICAgICB0aGlzLm15SFAucHJvZ3Jlc3MgPSB0aGlzLm15TGlmZSAvIDEwMDtcclxuICAgICAgICB0aGlzLmVuZW15SFAucHJvZ3Jlc3MgPSB0aGlzLmVuZW15TGlmZSAvIDEwMDtcclxuICAgICAgICBjb25zdCBteUxpZmVMYWJlbCA9IGNjLmZpbmQoXCJDYW52YXMvbXlMaWZlXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgY29uc3QgZW5lbXlMaWZlTGFiZWwgPSBjYy5maW5kKFwiQ2FudmFzL2VuZW15TGlmZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICBcclxuICAgICAgICBteUxpZmVMYWJlbC5zdHJpbmcgPSAoKEFycmF5KDcpLmpvaW4oXCIwXCIpICsgdGhpcy5teUxpZmUudG9TdHJpbmcoKSkuc2xpY2UoLTMpKSArICgnLzEwMCcpO1xyXG4gICAgICAgIGVuZW15TGlmZUxhYmVsLnN0cmluZyA9ICgoQXJyYXkoNykuam9pbihcIjBcIikgKyB0aGlzLmVuZW15TGlmZS50b1N0cmluZygpKS5zbGljZSgtMykpICsgKCcvMTAwJyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2tpbGwxKCl7XHJcbiAgICAgICAgbGV0IGVuZW15TGlmZURlZHVjdCA9IGNjLmNhbGxGdW5jKGZ1bmN0aW9uKHRhcmdldCkge1xyXG4gICAgICAgICAgICBpZihHbG9iYWxEYXRhLm15ZWxmID09IDApIHRoaXMuZW5lbXlMaWZlIC09IDgwO1xyXG4gICAgICAgICAgICBlbHNlIHRoaXMuZW5lbXlMaWZlIC09IDIwO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICBsZXQgdHVyblN3aXRjaDEgPSBjYy5jYWxsRnVuYyhmdW5jdGlvbih0YXJnZXQpIHtcclxuICAgICAgICAgICAgdGhpcy5teVR1cm4gPSBmYWxzZTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgbGV0IHR1cm5Td2l0Y2gyID0gY2MuY2FsbEZ1bmMoZnVuY3Rpb24odGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlUdXJuID0gdHJ1ZTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UodHVyblN3aXRjaDEsIGNjLm1vdmVCeSgxLCBjYy52Mig1MjAsIDApKSwgY2MubW92ZUJ5KDEsIGNjLnYyKC01MjAsIDApKSxlbmVteUxpZmVEZWR1Y3QsIHR1cm5Td2l0Y2gyKSlcclxuICAgIH1cclxuXHJcbiAgICBza2lsbDIoKXtcclxuICAgICAgICAvL2NjLmxvZyhcInNraWxsMlwiKTtcclxuICAgICAgICBsZXQgZW5lbXlMaWZlRGVkdWN0ID0gY2MuY2FsbEZ1bmMoZnVuY3Rpb24odGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlMaWZlIC09IDIwO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICBsZXQgdHVyblN3aXRjaDEgPSBjYy5jYWxsRnVuYyhmdW5jdGlvbih0YXJnZXQpIHtcclxuICAgICAgICAgICAgdGhpcy5teVR1cm4gPSBmYWxzZTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgbGV0IHR1cm5Td2l0Y2gyID0gY2MuY2FsbEZ1bmMoZnVuY3Rpb24odGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlUdXJuID0gdHJ1ZTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZSh0dXJuU3dpdGNoMSwgY2MubW92ZUJ5KDEsIGNjLnYyKDUyMCwgMCkpLCBjYy5tb3ZlQnkoMSwgY2MudjIoLTUyMCwgMCkpLGVuZW15TGlmZURlZHVjdCwgdHVyblN3aXRjaDIpKVxyXG4gICAgfVxyXG5cclxuICAgIHNraWxsMygpe1xyXG4gICAgICAgIC8vY2MubG9nKFwic2tpbGwzXCIpO1xyXG4gICAgICAgIGxldCBlbmVteUxpZmVEZWR1Y3QgPSBjYy5jYWxsRnVuYyhmdW5jdGlvbih0YXJnZXQpIHtcclxuICAgICAgICAgICAgdGhpcy5lbmVteUxpZmUgLT0gMjA7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIGxldCB0dXJuU3dpdGNoMSA9IGNjLmNhbGxGdW5jKGZ1bmN0aW9uKHRhcmdldCkge1xyXG4gICAgICAgICAgICB0aGlzLm15VHVybiA9IGZhbHNlO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICBsZXQgdHVyblN3aXRjaDIgPSBjYy5jYWxsRnVuYyhmdW5jdGlvbih0YXJnZXQpIHtcclxuICAgICAgICAgICAgdGhpcy5lbmVteVR1cm4gPSB0cnVlO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKHR1cm5Td2l0Y2gxLCBjYy5tb3ZlQnkoMSwgY2MudjIoNTIwLCAwKSksIGNjLm1vdmVCeSgxLCBjYy52MigtNTIwLCAwKSksZW5lbXlMaWZlRGVkdWN0LCB0dXJuU3dpdGNoMikpXHJcbiAgICB9XHJcblxyXG4gICAgc2tpbGw0KCl7XHJcbiAgICAgICAgLy9jYy5sb2coXCJza2lsbDRcIik7XHJcbiAgICAgICAgbGV0IGVuZW15TGlmZURlZHVjdCA9IGNjLmNhbGxGdW5jKGZ1bmN0aW9uKHRhcmdldCkge1xyXG4gICAgICAgICAgICB0aGlzLmVuZW15TGlmZSAtPSAxMDA7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIGxldCB0dXJuU3dpdGNoMSA9IGNjLmNhbGxGdW5jKGZ1bmN0aW9uKHRhcmdldCkge1xyXG4gICAgICAgICAgICB0aGlzLm15VHVybiA9IGZhbHNlO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICBsZXQgdHVyblN3aXRjaDIgPSBjYy5jYWxsRnVuYyhmdW5jdGlvbih0YXJnZXQpIHtcclxuICAgICAgICAgICAgdGhpcy5lbmVteVR1cm4gPSB0cnVlO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKHR1cm5Td2l0Y2gxLCBjYy5tb3ZlQnkoMSwgY2MudjIoNTIwLCAwKSksIGNjLm1vdmVCeSgxLCBjYy52MigtNTIwLCAwKSksZW5lbXlMaWZlRGVkdWN0LCB0dXJuU3dpdGNoMikpXHJcbiAgICB9XHJcbiAgICBlbmVteVR1cm5BY3Rpb24oKXtcclxuICAgICAgICBsZXQgZW5lbXlBbmltYXRpb24gPSBjYy5maW5kKFwiQ2FudmFzL2VuZW15XCIpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgIGxldCBlbmVteVBhcnRpY2xlRWZmZWN0ID0gY2MuZmluZChcIkNhbnZhcy9lbmVteS9tYWdpY1wiKS5nZXRDb21wb25lbnQoY2MuUGFydGljbGVTeXN0ZW0pO1xyXG4gICAgICAgIGxldCBlbmVteVBhcnRpY2xlRWZmZWN0MyA9IGNjLmZpbmQoXCJDYW52YXMvZW5lbXkvcHVuY2hcIikuZ2V0Q29tcG9uZW50KGNjLlBhcnRpY2xlU3lzdGVtKTtcclxuICAgICAgICBsZXQgZW5lbXlQYXJ0aWNsZUVmZmVjdDQgPSBjYy5maW5kKFwiQ2FudmFzL2VuZW15L2Jvb21cIikuZ2V0Q29tcG9uZW50KGNjLlBhcnRpY2xlU3lzdGVtKTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgc2hha2VDYW1lcmEgPSBjYy5jYWxsRnVuYyhmdW5jdGlvbih0YXJnZXQpIHtcclxuICAgICAgICAgICAgY29uc3QgbWFpbkNhbWVyYSA9IGNjLkNhbWVyYS5tYWluO1xyXG4gICAgICAgICAgICB0aGlzLm9yaWdpbmFsUG9zaXRpb24gPSBtYWluQ2FtZXJhLm5vZGUucG9zaXRpb24uY2xvbmUoKTtcclxuICAgICAgICAgICAgY29uc3Qgc2hha2VTZXF1ZW5jZSA9IGNjLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICAgICAgY2MubW92ZVRvKDAuMDUsIGNjLnYyKHRoaXMub3JpZ2luYWxQb3NpdGlvbi54ICwgdGhpcy5vcmlnaW5hbFBvc2l0aW9uLnkgKyA4KSksXHJcbiAgICAgICAgICAgICAgICBjYy5tb3ZlVG8oMC4wNSwgY2MudjIodGhpcy5vcmlnaW5hbFBvc2l0aW9uLngsIHRoaXMub3JpZ2luYWxQb3NpdGlvbi55IC0gOCkpLFxyXG4gICAgICAgICAgICAgICAgY2MubW92ZVRvKDAuMDUsIHRoaXMub3JpZ2luYWxQb3NpdGlvbilcclxuICAgICAgICAgICAgKTtcclxuICAgIFxyXG4gICAgICAgICAgICAvLyBSdW4gdGhlIHNoYWtlIHNlcXVlbmNlIG9uIHRoZSBjYW1lcmFcclxuICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYVwiKS5nZXRDb21wb25lbnQoY2MuQ2FtZXJhKS5ub2RlLnJ1bkFjdGlvbihzaGFrZVNlcXVlbmNlKTtcclxuICAgICAgICAgICAgLy90aGlzLmNhbWVyYS5ub2RlLnJ1bkFjdGlvbihzaGFrZVNlcXVlbmNlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IHNoYWtlQ2FtZXJhMiA9IGNjLmNhbGxGdW5jKGZ1bmN0aW9uKHRhcmdldCkge1xyXG4gICAgICAgICAgICBjb25zdCBtYWluQ2FtZXJhID0gY2MuQ2FtZXJhLm1haW47XHJcbiAgICAgICAgICAgIHRoaXMub3JpZ2luYWxQb3NpdGlvbiA9IG1haW5DYW1lcmEubm9kZS5wb3NpdGlvbi5jbG9uZSgpO1xyXG4gICAgICAgICAgIC8vbGV0IHNoYWtlU2VxdWVuY2U7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2hha2VTZXF1ZW5jZSA9IGNjLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICAgICAgICAgIGNjLm1vdmVUbygwLjA1LCBjYy52Mih0aGlzLm9yaWdpbmFsUG9zaXRpb24ueCsxNSAsIHRoaXMub3JpZ2luYWxQb3NpdGlvbi55KSksXHJcbiAgICAgICAgICAgICAgICAgICAgY2MubW92ZVRvKDAuMDUsIGNjLnYyKHRoaXMub3JpZ2luYWxQb3NpdGlvbi54LTE1LCB0aGlzLm9yaWdpbmFsUG9zaXRpb24ueSkpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNjLm1vdmVUbygwLjA1LCB0aGlzLm9yaWdpbmFsUG9zaXRpb24pXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhXCIpLmdldENvbXBvbmVudChjYy5DYW1lcmEpLm5vZGUucnVuQWN0aW9uKHNoYWtlU2VxdWVuY2UpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZih0aGlzLmVuZW15bnVtID09IDQpe1xyXG4gICAgICAgICAgICBlbmVteUFuaW1hdGlvbi5wbGF5KFwiZG9uZ19tb3ZlXCIpO1xyXG4gICAgICAgIH1lbHNlIGlmKHRoaXMuZW5lbXludW0gPT0gNSl7XHJcbiAgICAgICAgICAgIGVuZW15QW5pbWF0aW9uLnBsYXkoXCJyZWRfZG9uZ19tb3ZlXCIpO1xyXG4gICAgICAgIH1lbHNlIGlmKHRoaXMuZW5lbXludW0gPT0gNil7XHJcbiAgICAgICAgICAgIGVuZW15QW5pbWF0aW9uLnBsYXkoXCJib29tXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKHRoaXMuZW5lbXludW0gPT0gNyl7XHJcbiAgICAgICAgICAgIGVuZW15QW5pbWF0aW9uLnBsYXkoXCJmaXNoM1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG15TGlmZURlZHVjdCA9IGNjLmNhbGxGdW5jKGZ1bmN0aW9uKHRhcmdldCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImVuZW15TnVtIGluIG15bGlmZSBkZWR1Y3Q6XCIsIHRoaXMuZW5lbXludW0pO1xyXG4gICAgICAgICAgICBpZih0aGlzLmVuZW15bnVtID09IDQpIHRoaXMubXlMaWZlIC09IDEwO1xyXG4gICAgICAgICAgICBlbHNlIGlmKHRoaXMuZW5lbXludW0gPT0gNSkgdGhpcy5teUxpZmUgLT0gMjA7XHJcbiAgICAgICAgICAgIGVsc2UgaWYodGhpcy5lbmVteW51bSA9PSA2KSB0aGlzLm15TGlmZSAtPSA0NTtcclxuICAgICAgICAgICAgZWxzZSBpZih0aGlzLmVuZW15bnVtID09IDcpIHRoaXMubXlMaWZlIC09IDEwO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICBsZXQgdHVyblN3aXRjaDEgPSBjYy5jYWxsRnVuYyhmdW5jdGlvbih0YXJnZXQpIHtcclxuICAgICAgICAgICAgdGhpcy5teVR1cm4gPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5lbmVteVR1cm4gPSBmYWxzZTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgbGV0IHR1cm5Td2l0Y2gyID0gY2MuY2FsbEZ1bmMoZnVuY3Rpb24odGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIHRoaXMubXlUdXJuID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5lbmVteVR1cm4gPSBmYWxzZTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgbGV0IHBhcnRpY2xlQWN0aW9uID0gY2MuY2FsbEZ1bmMoZnVuY3Rpb24odGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuZW5lbXludW0gPT0gNCApZW5lbXlQYXJ0aWNsZUVmZmVjdC5yZXNldFN5c3RlbSgpO1xyXG4gICAgICAgICAgICBlbHNlIGlmKHRoaXMuZW5lbXludW0gPT0gNSkgZW5lbXlQYXJ0aWNsZUVmZmVjdDMucmVzZXRTeXN0ZW0oKTtcclxuICAgICAgICAgICAgZWxzZSBpZih0aGlzLmVuZW15bnVtID09IDYpeyBcclxuICAgICAgICAgICAgICAgIGVuZW15UGFydGljbGVFZmZlY3Q0LnJlc2V0U3lzdGVtKCk7XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL2VuZW15L2Jvb21cIikucnVuQWN0aW9uKGNjLm1vdmVCeSgwLjIsIGNjLnYyKC01MjUsIDApKSk7XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL2VuZW15L2Jvb21cIikueCA9IDE3LjM2NjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICBsZXQgc291bmQgPSBjYy5jYWxsRnVuYyhmdW5jdGlvbih0YXJnZXQpIHtcclxuICAgICAgICAgICAgaWYodGhpcy5lbmVteW51bSA9PSA0ICl7fS8vZW5lbXlQYXJ0aWNsZUVmZmVjdC5yZXNldFN5c3RlbSgpO1xyXG4gICAgICAgICAgICBlbHNlIGlmKHRoaXMuZW5lbXludW0gPT0gNSkge1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnJlZF9kb25nX3B1bmNoLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNvdW5kXCIpO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZih0aGlzLmVuZW15bnVtID09IDYpIHtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5yZWRfZG9uZ19wdW5jaCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzb3VuZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCB0aGlzKTsgXHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IG1vdmVBY3Rpb24gPSBjYy5jYWxsRnVuYyhmdW5jdGlvbih0YXJnZXQpIHtcclxuICAgICAgICAgICAgaWYodGhpcy5lbmVteW51bSA9PSA0KVxyXG4gICAgICAgICAgICAgICAgZW5lbXkucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLm1vdmVCeSgwLjYsIGNjLnYyKDAsIDUwKSksIGNjLm1vdmVCeSgwLjIsIGNjLnYyKDAsIC01MCkpLCBwYXJ0aWNsZUFjdGlvbiwgc2hha2VDYW1lcmEsbXlMaWZlRGVkdWN0LHR1cm5Td2l0Y2gyKSk7XHJcbiAgICAgICAgICAgIGVsc2UgaWYodGhpcy5lbmVteW51bSA9PSA1KVxyXG4gICAgICAgICAgICAgICAgZW5lbXkucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLm1vdmVCeSgwLjgsIGNjLnYyKC00NjAsIDApKSwgc291bmQsIHNoYWtlQ2FtZXJhMiwgcGFydGljbGVBY3Rpb24sIGNjLm1vdmVCeSgxLjUsIGNjLnYyKDQ2MCwgMCkpLG15TGlmZURlZHVjdCx0dXJuU3dpdGNoMikpO1xyXG4gICAgICAgICAgICBlbHNlIGlmKHRoaXMuZW5lbXludW0gPT0gNilcclxuICAgICAgICAgICAgZW5lbXkucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLm1vdmVCeSgwLjYsIGNjLnYyKDAsIDIwKSksIHNvdW5kLCBzaGFrZUNhbWVyYTIsIHBhcnRpY2xlQWN0aW9uLCBjYy5tb3ZlQnkoMC4xLCBjYy52MigwLCAtMjApKSxteUxpZmVEZWR1Y3QsdHVyblN3aXRjaDIpKTtcclxuICAgICAgICAgICAgZWxzZSBpZih0aGlzLmVuZW15bnVtID09IDcpe2VuZW15LnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5tb3ZlQnkoMSwgY2MudjIoLTQ4MCwgMCkpLCBjYy5tb3ZlQnkoMSwgY2MudjIoNTIwLCAwKSksbXlMaWZlRGVkdWN0LHR1cm5Td2l0Y2gyKSk7fVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgXHJcblxyXG5cclxuICAgICAgICBsZXQgZW5lbXkgPSBjYy5maW5kKFwiQ2FudmFzL2VuZW15XCIpO1xyXG4gICAgICAgIGVuZW15LnJ1bkFjdGlvbihjYy5zZXF1ZW5jZSh0dXJuU3dpdGNoMSwgbW92ZUFjdGlvbikpXHJcbiAgICB9XHJcbiAgICBcclxuXHJcbn0iXX0=