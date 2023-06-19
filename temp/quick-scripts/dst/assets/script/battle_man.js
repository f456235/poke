
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
        _this.myLVlabel = null;
        _this.enemyLVlabel = null;
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
        this.myLVlabel.string = 'Lv. ' + GlobalData_1.default.level.toString();
        this.myLife = GlobalData_1.default.myPokewomanHP[GlobalData_1.default.myelf];
    };
    NewClass.prototype.start = function () {
        this.last_myself = GlobalData_1.default.myelf;
        this.enemynum = cc.director.getScene()["enemyNum"];
        if (this.enemynum == 4) {
            if (cc.find("Canvas/enemy").getComponent(cc.Sprite).spriteFrame == null) {
                cc.find("Canvas/enemy").getComponent(cc.Sprite).spriteFrame = this.enemy1;
            }
            this.enemyLife = GlobalData_1.default.enemyHPbyID[this.enemynum - 1];
            this.enemyAttack = GlobalData_1.default.enemyAttackById[this.enemynum - 1];
            this.enemyLV = GlobalData_1.default.enemyLevelById[this.enemynum - 1];
        }
        else if (this.enemynum == 5) {
            if (cc.find("Canvas/enemy").getComponent(cc.Sprite).spriteFrame == null) {
                cc.find("Canvas/enemy").getComponent(cc.Sprite).spriteFrame = this.enemy2;
                cc.find("Canvas/enemy").color = cc.Color.RED;
            }
            this.enemyLife = GlobalData_1.default.enemyHPbyID[this.enemynum - 1];
            this.enemyAttack = GlobalData_1.default.enemyAttackById[this.enemynum - 1];
            this.enemyLV = GlobalData_1.default.enemyLevelById[this.enemynum - 1];
        }
        else if (this.enemynum == 6) {
            if (cc.find("Canvas/enemy").getComponent(cc.Sprite).spriteFrame == null) {
                cc.find("Canvas/enemy").getComponent(cc.Sprite).spriteFrame = this.enemy3;
                // cc.find("Canvas/enemy").getComponent(cc.Sprite).spriteFrame.setFlipX(true);
                cc.find("Canvas/enemy").scaleX *= -1;
                cc.find("Canvas/enemy").width = 300;
                cc.find("Canvas/enemy").y = 0;
            }
            this.enemyLife = GlobalData_1.default.enemyHPbyID[this.enemynum - 1];
            this.enemyAttack = GlobalData_1.default.enemyAttackById[this.enemynum - 1];
            this.enemyLV = GlobalData_1.default.enemyLevelById[this.enemynum - 1];
        }
        else if (this.enemynum == 7) {
            if (cc.find("Canvas/enemy").getComponent(cc.Sprite).spriteFrame == null) {
                cc.find("Canvas/enemy").getComponent(cc.Sprite).spriteFrame = this.enemy7;
                cc.find("Canvas/enemy").color = cc.Color.RED;
            }
            this.enemyLife = GlobalData_1.default.enemyHPbyID[this.enemynum - 1];
            this.enemyAttack = GlobalData_1.default.enemyAttackById[this.enemynum - 1];
            this.enemyLV = GlobalData_1.default.enemyLevelById[this.enemynum - 1];
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
            //console.log("GlobalData.myelf:", GlobalData.myelf);
            this.last_myself = GlobalData_1.default.myelf;
            this.renew = true;
        }
        this.node.getComponent(cc.Sprite).spriteFrame = this.sprite[this.bag[GlobalData_1.default.myelf]];
        this.updateUI(dt);
        if (this.enemyLife <= 0 && !this.isWin) {
            GlobalData_1.default.pokewoman.push(this.enemynum);
            if (this.enemynum == 4) {
                GlobalData_1.default.isEnenmyMagic = true;
            }
            else if (this.enemynum == 5) {
                GlobalData_1.default.isEnenmyRed = true;
            }
            else if (this.enemynum == 6) {
                GlobalData_1.default.isBoss1 = true;
            }
            else if (this.enemynum == 7) {
                GlobalData_1.default.isEnenmyFish = true;
            }
            GlobalData_1.default.myPokewomanHP[GlobalData_1.default.pokewoman.length - 1] = (GlobalData_1.default.pokewomanBaseHP[GlobalData_1.default.pokewoman[GlobalData_1.default.pokewoman.length - 1]] +
                GlobalData_1.default.level * GlobalData_1.default.pokewomanHPscale[GlobalData_1.default.pokewoman[GlobalData_1.default.pokewoman.length - 1]]);
            GlobalData_1.default.fullHP[GlobalData_1.default.pokewoman.length - 1] = GlobalData_1.default.myPokewomanHP[GlobalData_1.default.pokewoman.length - 1];
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
        if (GlobalData_1.default.myPokewomanHP[GlobalData_1.default.myelf] <= 0 && !this.isLose) {
            GlobalData_1.default.myPokewomanHP[GlobalData_1.default.myelf] = 0;
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
        //console.log(GlobalData.myelf);
        //console.log(GlobalData.myPokewomanHP);
        //console.log(GlobalData.fullHP);
        this.myHP.progress = GlobalData_1.default.myPokewomanHP[GlobalData_1.default.myelf] / GlobalData_1.default.fullHP[GlobalData_1.default.myelf];
        this.enemyHP.progress = this.enemyLife / GlobalData_1.default.enemyHPbyID[this.enemynum - 1];
        var myLifeLabel = cc.find("Canvas/myLife").getComponent(cc.Label);
        var enemyLifeLabel = cc.find("Canvas/enemyLife").getComponent(cc.Label);
        this.enemyLVlabel.string = 'Lv. ' + this.enemyLV.toString();
        this.myLVlabel.string = 'Lv. ' + GlobalData_1.default.level.toString();
        myLifeLabel.string = ((Array(7).join("0") + GlobalData_1.default.myPokewomanHP[GlobalData_1.default.myelf].toString()).slice(-3)) + '/' + GlobalData_1.default.fullHP[GlobalData_1.default.myelf].toString();
        enemyLifeLabel.string = ((Array(7).join("0") + this.enemyLife.toString()).slice(-3)) + '/' + GlobalData_1.default.enemyHPbyID[this.enemynum - 1].toString();
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
            //console.log("enemyNum in mylife deduct:", this.enemynum);
            var enhance = (this.enemyLV * 0.75 + this.enemyAttack) / this.enemyAttack;
            if (this.enemynum == 4)
                GlobalData_1.default.myPokewomanHP[GlobalData_1.default.myelf] -= (10 * enhance);
            else if (this.enemynum == 5)
                GlobalData_1.default.myPokewomanHP[GlobalData_1.default.myelf] -= (20 * enhance);
            else if (this.enemynum == 6)
                GlobalData_1.default.myPokewomanHP[GlobalData_1.default.myelf] -= (45 * enhance);
            else if (this.enemynum == 7)
                GlobalData_1.default.myPokewomanHP[GlobalData_1.default.myelf] -= (10 * enhance);
            GlobalData_1.default.myPokewomanHP[GlobalData_1.default.myelf] = Math.round(GlobalData_1.default.myPokewomanHP[GlobalData_1.default.myelf]);
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
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "myLVlabel", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "enemyLVlabel", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxiYXR0bGVfbWFuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZCQUF3QjtBQUN4QiwyQ0FBc0M7QUFFaEMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUE0WkM7UUF6WkcsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQVcsT0FBTyxDQUFDO1FBR3ZCLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRy9CLGNBQVEsR0FBaUIsSUFBSSxDQUFDO1FBRzlCLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRy9CLG9CQUFjLEdBQWlCLElBQUksQ0FBQztRQUdwQyxnQkFBVSxHQUFZLElBQUksQ0FBQztRQUczQixZQUFNLEdBQW1CLElBQUksQ0FBQztRQUc5QixZQUFNLEdBQW1CLElBQUksQ0FBQztRQUc5QixZQUFNLEdBQW1CLElBQUksQ0FBQztRQUc5QixZQUFNLEdBQW1CLElBQUksQ0FBQztRQUc5QixVQUFJLEdBQW1CLElBQUksQ0FBQztRQUc1QixhQUFPLEdBQW1CLElBQUksQ0FBQztRQUcvQixTQUFHLEdBQVEsSUFBSSxDQUFDO1FBR2hCLFlBQU0sR0FBcUIsRUFBRSxDQUFDO1FBRzlCLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFHM0Isa0JBQVksR0FBYSxJQUFJLENBQUM7UUFFOUIsU0FBRyxHQUFhLG9CQUFVLENBQUMsU0FBUyxDQUFDO1FBRXJDLFlBQU0sR0FBVSxvQkFBVSxDQUFDLE1BQU0sQ0FBQztRQUUxQixZQUFNLEdBQVcsR0FBRyxDQUFDO1FBQ3JCLGVBQVMsR0FBVyxHQUFHLENBQUM7UUFDeEIsV0FBSyxHQUFZLEtBQUssQ0FBQztRQUN2QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBQ3ZCLGVBQVMsR0FBWSxLQUFL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ekIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRVQsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxVQUFTLE1BQU07WUFDekMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDeEIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRVQsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxVQUFTLE1BQU07WUFDekMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDMUIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRVQsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUMsZUFBZSxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUE7SUFDekksQ0FBQztJQUVELHlCQUFNLEdBQU47UUFDSSxtQkFBbUI7UUFDbkIsSUFBSSxlQUFlLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxVQUFTLE1BQU07WUFDN0MsSUFBSSxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUM7UUFDekIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRVQsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxVQUFTLE1BQU07WUFDekMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDeEIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRVQsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxVQUFTLE1BQU07WUFDekMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDMUIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRVQsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUMsZUFBZSxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUE7SUFDekksQ0FBQztJQUVELHlCQUFNLEdBQU47UUFDSSxtQkFBbUI7UUFDbkIsSUFBSSxlQUFlLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxVQUFTLE1BQU07WUFDN0MsSUFBSSxDQUFDLFNBQVMsSUFBSSxHQUFHLENBQUM7UUFDMUIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRVQsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxVQUFTLE1BQU07WUFDekMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDeEIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRVQsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxVQUFTLE1BQU07WUFDekMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDMUIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRVQsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUMsZUFBZSxF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Q0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUUsV0FBVyxFQUFDLFlBQVksRUFBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO2lCQUMvSSxJQUFHLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQztnQkFDdEIsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO2lCQUN6SixJQUFHLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQztnQkFDMUIsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO2lCQUNuSixJQUFHLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxFQUFDO2dCQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQzthQUFDO1FBRWxKLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUtULElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDcEMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFBO0lBQ3pELENBQUM7SUF0WkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsyQ0FDSTtJQUd2QjtRQURDLFFBQVE7MENBQ2M7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUMsRUFBRSxDQUFDLFNBQVMsRUFBQyxDQUFDOytDQUNDO0lBRy9CO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUMsQ0FBQzs4Q0FDQTtJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBQyxFQUFFLENBQUMsU0FBUyxFQUFDLENBQUM7K0NBQ0M7SUFHL0I7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUMsRUFBRSxDQUFDLFNBQVMsRUFBQyxDQUFDO29EQUNNO0lBR3BDO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUMsQ0FBQztnREFDRTtJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBQyxFQUFFLENBQUMsV0FBVyxFQUFDLENBQUM7NENBQ0Y7SUFHOUI7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUMsRUFBRSxDQUFDLFdBQVcsRUFBQyxDQUFDOzRDQUNGO0lBRzlCO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUMsQ0FBQzs0Q0FDRjtJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBQyxFQUFFLENBQUMsV0FBVyxFQUFDLENBQUM7NENBQ0Y7SUFHOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzswQ0FDRztJQUc1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDOzZDQUNNO0lBRy9CO1FBREMsUUFBUSxDQUFDLGFBQUcsQ0FBQzt5Q0FDRTtJQUdoQjtRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQzs0Q0FDRztJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOytDQUNRO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7a0RBQ1c7SUFuRGIsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQTRaNUI7SUFBRCxlQUFDO0NBNVpELEFBNFpDLENBNVpxQyxFQUFFLENBQUMsU0FBUyxHQTRaakQ7a0JBNVpvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1hbiBmcm9tIFwiLi9tYW5cIjtcclxuaW1wb3J0IEdsb2JhbERhdGEgZnJvbSBcIi4vR2xvYmFsRGF0YVwiO1xyXG5kZWNsYXJlIGNvbnN0IGZpcmViYXNlOiBhbnk7XHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICB0ZXh0OiBzdHJpbmcgPSAnaGVsbG8nO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7dHlwZTpjYy5BdWRpb0NsaXB9KVxyXG4gICAgYmF0dGxlQmdtOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7dHlwZTpjYy5BdWRpb0NsaXB9KVxyXG4gICAgd2luU291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHt0eXBlOmNjLkF1ZGlvQ2xpcH0pXHJcbiAgICBsb3NlU291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHt0eXBlOmNjLkF1ZGlvQ2xpcH0pXHJcbiAgICByZWRfZG9uZ19wdW5jaDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoe3R5cGU6Y2MuTm9kZX0pXHJcbiAgICBtYWluQ2FtZXJhOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoe3R5cGU6Y2MuU3ByaXRlRnJhbWV9KVxyXG4gICAgZW5lbXkxOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHt0eXBlOmNjLlNwcml0ZUZyYW1lfSlcclxuICAgIGVuZW15MjogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7dHlwZTpjYy5TcHJpdGVGcmFtZX0pXHJcbiAgICBlbmVteTM6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoe3R5cGU6Y2MuU3ByaXRlRnJhbWV9KVxyXG4gICAgZW5lbXk3OiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByb2dyZXNzQmFyKVxyXG4gICAgbXlIUDogY2MuUHJvZ3Jlc3NCYXIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Qcm9ncmVzc0JhcilcclxuICAgIGVuZW15SFA6IGNjLlByb2dyZXNzQmFyID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoTWFuKVxyXG4gICAgbWFuOiBNYW4gPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShbY2MuU3ByaXRlRnJhbWVdKVxyXG4gICAgc3ByaXRlOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbXlMVmxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgZW5lbXlMVmxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgYmFnOiBudW1iZXJbXSA9IEdsb2JhbERhdGEucG9rZXdvbWFuO1xyXG5cclxuICAgIG15bGlmZTogbnVtYmVyID1HbG9iYWxEYXRhLm15bGlmZTtcclxuXHJcbiAgICBwcml2YXRlIG15TGlmZTogbnVtYmVyID0gMTAwO1xyXG4gICAgcHJpdmF0ZSBlbmVteUxpZmU6IG51bWJlciA9IDEwMDtcclxuICAgIHByaXZhdGUgaXNXaW46IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgbXlUdXJuOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHByaXZhdGUgZW5lbXlUdXJuOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGlzTG9zZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBlbmVteW51bSA9IDA7XHJcbiAgICBwcml2YXRlIGVuZW15QXR0YWNrIDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBlbmVteUxWIDogbnVtYmVyIDsgIFxyXG4gICAgcHJpdmF0ZSByZW5ldzogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwcml2YXRlIGxhc3RfbXlzZWxmOiBudW1iZXIgPSAtMTtcclxuICAgIHB1YmxpYyBza2lsbDFCdXR0b246IGNjLkJ1dHRvbiA9IG51bGw7XHJcbiAgICBwdWJsaWMgc2tpbGwyQnV0dG9uOiBjYy5CdXR0b24gPSBudWxsO1xyXG4gICAgcHVibGljIHNraWxsM0J1dHRvbjogY2MuQnV0dG9uID0gbnVsbDtcclxuICAgIHB1YmxpYyBza2lsbDRCdXR0b246IGNjLkJ1dHRvbiA9IG51bGw7XHJcblxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2MuZmluZCgnQ2FudmFzL3NraWxscy9iYWcyJykub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvc2tpbGxzJykuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9iYWdzMicpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5za2lsbDFCdXR0b24gPSBjYy5maW5kKFwiQ2FudmFzL3NraWxscy9za2lsbDFcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XHJcbiAgICAgICAgdGhpcy5za2lsbDJCdXR0b24gPSBjYy5maW5kKFwiQ2FudmFzL3NraWxscy9za2lsbDJcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XHJcbiAgICAgICAgdGhpcy5za2lsbDNCdXR0b24gPSBjYy5maW5kKFwiQ2FudmFzL3NraWxscy9za2lsbDNcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XHJcbiAgICAgICAgdGhpcy5za2lsbDRCdXR0b24gPSBjYy5maW5kKFwiQ2FudmFzL3NraWxscy9za2lsbDRcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XHJcbiAgICAgICAgdGhpcy5za2lsbDFCdXR0b24ubm9kZS5vbignY2xpY2snLCB0aGlzLnNraWxsMSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5za2lsbDJCdXR0b24ubm9kZS5vbignY2xpY2snLCB0aGlzLnNraWxsMiwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5za2lsbDNCdXR0b24ubm9kZS5vbignY2xpY2snLCB0aGlzLnNraWxsMywgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5za2lsbDRCdXR0b24ubm9kZS5vbignY2xpY2snLCB0aGlzLnNraWxsNCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5teUxWbGFiZWwuc3RyaW5nID0gJ0x2LiAnICsgR2xvYmFsRGF0YS5sZXZlbC50b1N0cmluZygpO1xyXG4gICAgICAgIHRoaXMubXlMaWZlID0gR2xvYmFsRGF0YS5teVBva2V3b21hbkhQW0dsb2JhbERhdGEubXllbGZdO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLmxhc3RfbXlzZWxmID0gR2xvYmFsRGF0YS5teWVsZjtcclxuICAgICAgICB0aGlzLmVuZW15bnVtID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKVtcImVuZW15TnVtXCJdO1xyXG5cclxuICAgICAgICBpZih0aGlzLmVuZW15bnVtID09IDQpe1xyXG4gICAgICAgICAgICBpZihjYy5maW5kKFwiQ2FudmFzL2VuZW15XCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID09IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9lbmVteVwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuZW5lbXkxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlMaWZlID0gR2xvYmFsRGF0YS5lbmVteUhQYnlJRFt0aGlzLmVuZW15bnVtLTFdO1xyXG4gICAgICAgICAgICB0aGlzLmVuZW15QXR0YWNrID0gR2xvYmFsRGF0YS5lbmVteUF0dGFja0J5SWRbdGhpcy5lbmVteW51bS0xXTtcclxuICAgICAgICAgICAgdGhpcy5lbmVteUxWID0gR2xvYmFsRGF0YS5lbmVteUxldmVsQnlJZFt0aGlzLmVuZW15bnVtLTFdO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9ZWxzZSBpZih0aGlzLmVuZW15bnVtID09IDUpe1xyXG4gICAgICAgICAgICBpZihjYy5maW5kKFwiQ2FudmFzL2VuZW15XCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID09IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9lbmVteVwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuZW5lbXkyO1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9lbmVteVwiKS5jb2xvciA9IGNjLkNvbG9yLlJFRDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmVuZW15TGlmZSA9IEdsb2JhbERhdGEuZW5lbXlIUGJ5SURbdGhpcy5lbmVteW51bS0xXTtcclxuICAgICAgICAgICAgdGhpcy5lbmVteUF0dGFjayA9IEdsb2JhbERhdGEuZW5lbXlBdHRhY2tCeUlkW3RoaXMuZW5lbXludW0tMV07XHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlMViA9IEdsb2JhbERhdGEuZW5lbXlMZXZlbEJ5SWRbdGhpcy5lbmVteW51bS0xXTtcclxuICAgICAgICB9ZWxzZSBpZih0aGlzLmVuZW15bnVtID09IDYpe1xyXG4gICAgICAgICAgICBpZihjYy5maW5kKFwiQ2FudmFzL2VuZW15XCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID09IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9lbmVteVwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuZW5lbXkzO1xyXG4gICAgICAgICAgICAgICAvLyBjYy5maW5kKFwiQ2FudmFzL2VuZW15XCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lLnNldEZsaXBYKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9lbmVteVwiKS5zY2FsZVggKj0gLTE7XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL2VuZW15XCIpLndpZHRoID0gMzAwO1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9lbmVteVwiKS55ID0gMDsgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5lbmVteUxpZmUgPSBHbG9iYWxEYXRhLmVuZW15SFBieUlEW3RoaXMuZW5lbXludW0tMV07XHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlBdHRhY2sgPSBHbG9iYWxEYXRhLmVuZW15QXR0YWNrQnlJZFt0aGlzLmVuZW15bnVtLTFdO1xyXG4gICAgICAgICAgICB0aGlzLmVuZW15TFYgPSBHbG9iYWxEYXRhLmVuZW15TGV2ZWxCeUlkW3RoaXMuZW5lbXludW0tMV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYodGhpcy5lbmVteW51bSA9PSA3KXtcclxuICAgICAgICAgICAgaWYoY2MuZmluZChcIkNhbnZhcy9lbmVteVwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9PSBudWxsKXtcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvZW5lbXlcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmVuZW15NztcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvZW5lbXlcIikuY29sb3IgPSBjYy5Db2xvci5SRUQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5lbmVteUxpZmUgPSBHbG9iYWxEYXRhLmVuZW15SFBieUlEW3RoaXMuZW5lbXludW0tMV07XHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlBdHRhY2sgPSBHbG9iYWxEYXRhLmVuZW15QXR0YWNrQnlJZFt0aGlzLmVuZW15bnVtLTFdO1xyXG4gICAgICAgICAgICB0aGlzLmVuZW15TFYgPSBHbG9iYWxEYXRhLmVuZW15TGV2ZWxCeUlkW3RoaXMuZW5lbXludW0tMV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLmJhdHRsZUJnbSwgdHJ1ZSk7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIGxldCBlbmVteVBhcnRpY2xlRWZmZWN0MiA9IGNjLmZpbmQoXCJDYW52YXMvZW5lbXkvb25Mb2FkXCIpLmdldENvbXBvbmVudChjYy5QYXJ0aWNsZVN5c3RlbSk7XHJcbiAgICAgICAgaWYodGhpcy5lbmVteW51bSA9PSA0KXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzLmVuZW15bnVtID09IDRcIik7XHJcbiAgICAgICAgICAgIGVuZW15UGFydGljbGVFZmZlY3QyLnBsYXlPbkxvYWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBlbmVteVBhcnRpY2xlRWZmZWN0Mi5yZXNldFN5c3RlbSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQpe1xyXG4gICAgICAgIGlmKHRoaXMucmVuZXcpe1xyXG4gICAgICAgICAgICB0aGlzLnJlbmV3ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmKEdsb2JhbERhdGEubXllbGYgPT0gMCl7XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL3NraWxscy9za2lsbDEvQmFja2dyb3VuZC9MYWJlbFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwi6a2U5rOV5pS75pOKXCI7XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL3NraWxscy9za2lsbDQvQmFja2dyb3VuZC9MYWJlbFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwi5oe26JuL5pS75pOKXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvc2tpbGxzL3NraWxsMS9CYWNrZ3JvdW5kL0xhYmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCLooZ3mkp5cIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihHbG9iYWxEYXRhLm15ZWxmICE9IHRoaXMubGFzdF9teXNlbGYpe1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiR2xvYmFsRGF0YS5teWVsZjpcIiwgR2xvYmFsRGF0YS5teWVsZik7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdF9teXNlbGYgPSBHbG9iYWxEYXRhLm15ZWxmO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmV3ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGVbdGhpcy5iYWdbR2xvYmFsRGF0YS5teWVsZl1dO1xyXG4gICAgICAgIHRoaXMudXBkYXRlVUkoZHQpO1xyXG4gICAgICAgIGlmKHRoaXMuZW5lbXlMaWZlIDw9IDAgJiYgIXRoaXMuaXNXaW4pe1xyXG4gICAgICAgICAgICBHbG9iYWxEYXRhLnBva2V3b21hbi5wdXNoKHRoaXMuZW5lbXludW0pO1xyXG4gICAgICAgICAgICBpZih0aGlzLmVuZW15bnVtID09IDQpe1xyXG4gICAgICAgICAgICAgICAgR2xvYmFsRGF0YS5pc0VuZW5teU1hZ2ljID0gdHJ1ZTtcclxuICAgICAgICAgICAgfWVsc2UgaWYodGhpcy5lbmVteW51bSA9PSA1KXtcclxuICAgICAgICAgICAgICAgIEdsb2JhbERhdGEuaXNFbmVubXlSZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZih0aGlzLmVuZW15bnVtID09IDYpe1xyXG4gICAgICAgICAgICAgICAgR2xvYmFsRGF0YS5pc0Jvc3MxID0gdHJ1ZTtcclxuICAgICAgICAgICAgfWVsc2UgaWYodGhpcy5lbmVteW51bSA9PSA3KXtcclxuICAgICAgICAgICAgICAgIEdsb2JhbERhdGEuaXNFbmVubXlGaXNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgR2xvYmFsRGF0YS5teVBva2V3b21hbkhQW0dsb2JhbERhdGEucG9rZXdvbWFuLmxlbmd0aC0xXSA9IChHbG9iYWxEYXRhLnBva2V3b21hbkJhc2VIUFtHbG9iYWxEYXRhLnBva2V3b21hbltHbG9iYWxEYXRhLnBva2V3b21hbi5sZW5ndGgtMV1dICsgXHJcbiAgICAgICAgICAgIEdsb2JhbERhdGEubGV2ZWwqR2xvYmFsRGF0YS5wb2tld29tYW5IUHNjYWxlW0dsb2JhbERhdGEucG9rZXdvbWFuW0dsb2JhbERhdGEucG9rZXdvbWFuLmxlbmd0aC0xXV0pXHJcbiAgICAgICAgICAgIEdsb2JhbERhdGEuZnVsbEhQW0dsb2JhbERhdGEucG9rZXdvbWFuLmxlbmd0aC0xXSA9IEdsb2JhbERhdGEubXlQb2tld29tYW5IUFtHbG9iYWxEYXRhLnBva2V3b21hbi5sZW5ndGgtMV07XHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlMaWZlID0gMDtcclxuICAgICAgICAgICAgdGhpcy5pc1dpbiA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlIUC5wcm9ncmVzcyA9IDA7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBhdXNlTXVzaWMoKTtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLndpblNvdW5kLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIEdsb2JhbERhdGEuZXhwICs9IDEwMDtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJtYXAyXCIsICgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVuZW15TnVtU3RyaW5nID0gY2MuanMuZm9ybWF0U3RyKFwiJWRcIiwgdGhpcy5lbmVteW51bSk7XHJcbiAgICAgICAgICAgICAgICAgICAgR2xvYmFsRGF0YS5ub2RlVG9EZXN0cm95LnB1c2goZW5lbXlOdW1TdHJpbmcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSwgNCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihHbG9iYWxEYXRhLm15UG9rZXdvbWFuSFBbR2xvYmFsRGF0YS5teWVsZl08PTAgJiYgIXRoaXMuaXNMb3NlKXtcclxuICAgICAgICAgICAgR2xvYmFsRGF0YS5teVBva2V3b21hbkhQW0dsb2JhbERhdGEubXllbGZdID0gMDtcclxuICAgICAgICAgICAgdGhpcy5pc0xvc2UgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm15VHVybiA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmVuZW15VHVybiA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLm15SFAucHJvZ3Jlc3MgPSAwO1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wYXVzZU11c2ljKCk7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5sb3NlU291bmQsIGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJtYXAyXCIpO1xyXG4gICAgICAgICAgICB9LCA0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMuZW5lbXlUdXJuICYmICF0aGlzLm15VHVybiAmJiB0aGlzLmVuZW15TGlmZSA+IDApe1xyXG4gICAgICAgICAgICB0aGlzLmVuZW15VHVybiA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLm15VHVybiA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlUdXJuQWN0aW9uKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZighdGhpcy5lbmVteVR1cm4gJiYgdGhpcy5teVR1cm4gJiYgdGhpcy5teUxpZmUgPiAwKXtcclxuXHJcbiAgICAgICAgICAgIC8vY2MuZmluZChcIkNhbnZhcy9za2lsbDFcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gdGhpcy5teVR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvc2tpbGxzL3NraWxsMVwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0aGlzLm15VHVybjtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL3NraWxscy9za2lsbDJcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gdGhpcy5teVR1cm47XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9za2lsbHMvc2tpbGwzXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IHRoaXMubXlUdXJuO1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvc2tpbGxzL3NraWxsNFwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0aGlzLm15VHVybjtcclxuICAgIC8vfVxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldE11c2ljVm9sdW1lKEdsb2JhbERhdGEudm9sdW1lKTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRFZmZlY3RzVm9sdW1lKEdsb2JhbERhdGEudm9sdW1lKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVVSShkdCl7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhHbG9iYWxEYXRhLm15ZWxmKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKEdsb2JhbERhdGEubXlQb2tld29tYW5IUCk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhHbG9iYWxEYXRhLmZ1bGxIUCk7XHJcbiAgICAgICAgdGhpcy5teUhQLnByb2dyZXNzID0gR2xvYmFsRGF0YS5teVBva2V3b21hbkhQW0dsb2JhbERhdGEubXllbGZdIC8gR2xvYmFsRGF0YS5mdWxsSFBbR2xvYmFsRGF0YS5teWVsZl07XHJcbiAgICAgICAgdGhpcy5lbmVteUhQLnByb2dyZXNzID0gdGhpcy5lbmVteUxpZmUgLyBHbG9iYWxEYXRhLmVuZW15SFBieUlEW3RoaXMuZW5lbXludW0tMV07XHJcbiAgICAgICAgY29uc3QgbXlMaWZlTGFiZWwgPSBjYy5maW5kKFwiQ2FudmFzL215TGlmZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIGNvbnN0IGVuZW15TGlmZUxhYmVsID0gY2MuZmluZChcIkNhbnZhcy9lbmVteUxpZmVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICB0aGlzLmVuZW15TFZsYWJlbC5zdHJpbmcgPSAnTHYuICcrdGhpcy5lbmVteUxWLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgdGhpcy5teUxWbGFiZWwuc3RyaW5nID0gJ0x2LiAnKyBHbG9iYWxEYXRhLmxldmVsLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgbXlMaWZlTGFiZWwuc3RyaW5nID0gKChBcnJheSg3KS5qb2luKFwiMFwiKSArIEdsb2JhbERhdGEubXlQb2tld29tYW5IUFtHbG9iYWxEYXRhLm15ZWxmXS50b1N0cmluZygpKS5zbGljZSgtMykpICsgJy8nICsgR2xvYmFsRGF0YS5mdWxsSFBbR2xvYmFsRGF0YS5teWVsZl0udG9TdHJpbmcoKTtcclxuICAgICAgICBlbmVteUxpZmVMYWJlbC5zdHJpbmcgPSAoKEFycmF5KDcpLmpvaW4oXCIwXCIpICsgdGhpcy5lbmVteUxpZmUudG9TdHJpbmcoKSkuc2xpY2UoLTMpKSArJy8nKyBHbG9iYWxEYXRhLmVuZW15SFBieUlEW3RoaXMuZW5lbXludW0tMV0udG9TdHJpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICBza2lsbDEoKXtcclxuICAgICAgICBsZXQgZW5lbXlMaWZlRGVkdWN0ID0gY2MuY2FsbEZ1bmMoZnVuY3Rpb24odGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIGlmKEdsb2JhbERhdGEubXllbGYgPT0gMCkgdGhpcy5lbmVteUxpZmUgLT0gODA7XHJcbiAgICAgICAgICAgIGVsc2UgdGhpcy5lbmVteUxpZmUgLT0gMjA7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIGxldCB0dXJuU3dpdGNoMSA9IGNjLmNhbGxGdW5jKGZ1bmN0aW9uKHRhcmdldCkge1xyXG4gICAgICAgICAgICB0aGlzLm15VHVybiA9IGZhbHNlO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICBsZXQgdHVyblN3aXRjaDIgPSBjYy5jYWxsRnVuYyhmdW5jdGlvbih0YXJnZXQpIHtcclxuICAgICAgICAgICAgdGhpcy5lbmVteVR1cm4gPSB0cnVlO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZSh0dXJuU3dpdGNoMSwgY2MubW92ZUJ5KDEsIGNjLnYyKDUyMCwgMCkpLCBjYy5tb3ZlQnkoMSwgY2MudjIoLTUyMCwgMCkpLGVuZW15TGlmZURlZHVjdCwgdHVyblN3aXRjaDIpKVxyXG4gICAgfVxyXG5cclxuICAgIHNraWxsMigpe1xyXG4gICAgICAgIC8vY2MubG9nKFwic2tpbGwyXCIpO1xyXG4gICAgICAgIGxldCBlbmVteUxpZmVEZWR1Y3QgPSBjYy5jYWxsRnVuYyhmdW5jdGlvbih0YXJnZXQpIHtcclxuICAgICAgICAgICAgdGhpcy5lbmVteUxpZmUgLT0gMjA7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIGxldCB0dXJuU3dpdGNoMSA9IGNjLmNhbGxGdW5jKGZ1bmN0aW9uKHRhcmdldCkge1xyXG4gICAgICAgICAgICB0aGlzLm15VHVybiA9IGZhbHNlO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICBsZXQgdHVyblN3aXRjaDIgPSBjYy5jYWxsRnVuYyhmdW5jdGlvbih0YXJnZXQpIHtcclxuICAgICAgICAgICAgdGhpcy5lbmVteVR1cm4gPSB0cnVlO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKHR1cm5Td2l0Y2gxLCBjYy5tb3ZlQnkoMSwgY2MudjIoNTIwLCAwKSksIGNjLm1vdmVCeSgxLCBjYy52MigtNTIwLCAwKSksZW5lbXlMaWZlRGVkdWN0LCB0dXJuU3dpdGNoMikpXHJcbiAgICB9XHJcblxyXG4gICAgc2tpbGwzKCl7XHJcbiAgICAgICAgLy9jYy5sb2coXCJza2lsbDNcIik7XHJcbiAgICAgICAgbGV0IGVuZW15TGlmZURlZHVjdCA9IGNjLmNhbGxGdW5jKGZ1bmN0aW9uKHRhcmdldCkge1xyXG4gICAgICAgICAgICB0aGlzLmVuZW15TGlmZSAtPSAyMDtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgbGV0IHR1cm5Td2l0Y2gxID0gY2MuY2FsbEZ1bmMoZnVuY3Rpb24odGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIHRoaXMubXlUdXJuID0gZmFsc2U7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIGxldCB0dXJuU3dpdGNoMiA9IGNjLmNhbGxGdW5jKGZ1bmN0aW9uKHRhcmdldCkge1xyXG4gICAgICAgICAgICB0aGlzLmVuZW15VHVybiA9IHRydWU7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UodHVyblN3aXRjaDEsIGNjLm1vdmVCeSgxLCBjYy52Mig1MjAsIDApKSwgY2MubW92ZUJ5KDEsIGNjLnYyKC01MjAsIDApKSxlbmVteUxpZmVEZWR1Y3QsIHR1cm5Td2l0Y2gyKSlcclxuICAgIH1cclxuXHJcbiAgICBza2lsbDQoKXtcclxuICAgICAgICAvL2NjLmxvZyhcInNraWxsNFwiKTtcclxuICAgICAgICBsZXQgZW5lbXlMaWZlRGVkdWN0ID0gY2MuY2FsbEZ1bmMoZnVuY3Rpb24odGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlMaWZlIC09IDEwMDtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgbGV0IHR1cm5Td2l0Y2gxID0gY2MuY2FsbEZ1bmMoZnVuY3Rpb24odGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIHRoaXMubXlUdXJuID0gZmFsc2U7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIGxldCB0dXJuU3dpdGNoMiA9IGNjLmNhbGxGdW5jKGZ1bmN0aW9uKHRhcmdldCkge1xyXG4gICAgICAgICAgICB0aGlzLmVuZW15VHVybiA9IHRydWU7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UodHVyblN3aXRjaDEsIGNjLm1vdmVCeSgxLCBjYy52Mig1MjAsIDApKSwgY2MubW92ZUJ5KDEsIGNjLnYyKC01MjAsIDApKSxlbmVteUxpZmVEZWR1Y3QsIHR1cm5Td2l0Y2gyKSlcclxuICAgIH1cclxuICAgIGVuZW15VHVybkFjdGlvbigpe1xyXG4gICAgICAgIGxldCBlbmVteUFuaW1hdGlvbiA9IGNjLmZpbmQoXCJDYW52YXMvZW5lbXlcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICAgICAgbGV0IGVuZW15UGFydGljbGVFZmZlY3QgPSBjYy5maW5kKFwiQ2FudmFzL2VuZW15L21hZ2ljXCIpLmdldENvbXBvbmVudChjYy5QYXJ0aWNsZVN5c3RlbSk7XHJcbiAgICAgICAgbGV0IGVuZW15UGFydGljbGVFZmZlY3QzID0gY2MuZmluZChcIkNhbnZhcy9lbmVteS9wdW5jaFwiKS5nZXRDb21wb25lbnQoY2MuUGFydGljbGVTeXN0ZW0pO1xyXG4gICAgICAgIGxldCBlbmVteVBhcnRpY2xlRWZmZWN0NCA9IGNjLmZpbmQoXCJDYW52YXMvZW5lbXkvYm9vbVwiKS5nZXRDb21wb25lbnQoY2MuUGFydGljbGVTeXN0ZW0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBzaGFrZUNhbWVyYSA9IGNjLmNhbGxGdW5jKGZ1bmN0aW9uKHRhcmdldCkge1xyXG4gICAgICAgICAgICBjb25zdCBtYWluQ2FtZXJhID0gY2MuQ2FtZXJhLm1haW47XHJcbiAgICAgICAgICAgIHRoaXMub3JpZ2luYWxQb3NpdGlvbiA9IG1haW5DYW1lcmEubm9kZS5wb3NpdGlvbi5jbG9uZSgpO1xyXG4gICAgICAgICAgICBjb25zdCBzaGFrZVNlcXVlbmNlID0gY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgICAgICBjYy5tb3ZlVG8oMC4wNSwgY2MudjIodGhpcy5vcmlnaW5hbFBvc2l0aW9uLnggLCB0aGlzLm9yaWdpbmFsUG9zaXRpb24ueSArIDgpKSxcclxuICAgICAgICAgICAgICAgIGNjLm1vdmVUbygwLjA1LCBjYy52Mih0aGlzLm9yaWdpbmFsUG9zaXRpb24ueCwgdGhpcy5vcmlnaW5hbFBvc2l0aW9uLnkgLSA4KSksXHJcbiAgICAgICAgICAgICAgICBjYy5tb3ZlVG8oMC4wNSwgdGhpcy5vcmlnaW5hbFBvc2l0aW9uKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgXHJcbiAgICAgICAgICAgIC8vIFJ1biB0aGUgc2hha2Ugc2VxdWVuY2Ugb24gdGhlIGNhbWVyYVxyXG4gICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhXCIpLmdldENvbXBvbmVudChjYy5DYW1lcmEpLm5vZGUucnVuQWN0aW9uKHNoYWtlU2VxdWVuY2UpO1xyXG4gICAgICAgICAgICAvL3RoaXMuY2FtZXJhLm5vZGUucnVuQWN0aW9uKHNoYWtlU2VxdWVuY2UpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgc2hha2VDYW1lcmEyID0gY2MuY2FsbEZ1bmMoZnVuY3Rpb24odGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1haW5DYW1lcmEgPSBjYy5DYW1lcmEubWFpbjtcclxuICAgICAgICAgICAgdGhpcy5vcmlnaW5hbFBvc2l0aW9uID0gbWFpbkNhbWVyYS5ub2RlLnBvc2l0aW9uLmNsb25lKCk7XHJcbiAgICAgICAgICAgLy9sZXQgc2hha2VTZXF1ZW5jZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzaGFrZVNlcXVlbmNlID0gY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgY2MubW92ZVRvKDAuMDUsIGNjLnYyKHRoaXMub3JpZ2luYWxQb3NpdGlvbi54KzE1ICwgdGhpcy5vcmlnaW5hbFBvc2l0aW9uLnkpKSxcclxuICAgICAgICAgICAgICAgICAgICBjYy5tb3ZlVG8oMC4wNSwgY2MudjIodGhpcy5vcmlnaW5hbFBvc2l0aW9uLngtMTUsIHRoaXMub3JpZ2luYWxQb3NpdGlvbi55KSksXHJcbiAgICAgICAgICAgICAgICAgICAgY2MubW92ZVRvKDAuMDUsIHRoaXMub3JpZ2luYWxQb3NpdGlvbilcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmFcIikuZ2V0Q29tcG9uZW50KGNjLkNhbWVyYSkubm9kZS5ydW5BY3Rpb24oc2hha2VTZXF1ZW5jZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuZW5lbXludW0gPT0gNCl7XHJcbiAgICAgICAgICAgIGVuZW15QW5pbWF0aW9uLnBsYXkoXCJkb25nX21vdmVcIik7XHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5lbmVteW51bSA9PSA1KXtcclxuICAgICAgICAgICAgZW5lbXlBbmltYXRpb24ucGxheShcInJlZF9kb25nX21vdmVcIik7XHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5lbmVteW51bSA9PSA2KXtcclxuICAgICAgICAgICAgZW5lbXlBbmltYXRpb24ucGxheShcImJvb21cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYodGhpcy5lbmVteW51bSA9PSA3KXtcclxuICAgICAgICAgICAgZW5lbXlBbmltYXRpb24ucGxheShcImZpc2gzXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbXlMaWZlRGVkdWN0ID0gY2MuY2FsbEZ1bmMoZnVuY3Rpb24odGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJlbmVteU51bSBpbiBteWxpZmUgZGVkdWN0OlwiLCB0aGlzLmVuZW15bnVtKTtcclxuICAgICAgICAgICAgY29uc3QgZW5oYW5jZSA9ICh0aGlzLmVuZW15TFYgKiAwLjc1ICsgdGhpcy5lbmVteUF0dGFjaykgLyB0aGlzLmVuZW15QXR0YWNrXHJcbiAgICAgICAgICAgIGlmKHRoaXMuZW5lbXludW0gPT0gNCkgR2xvYmFsRGF0YS5teVBva2V3b21hbkhQW0dsb2JhbERhdGEubXllbGZdIC09ICgxMCAqIGVuaGFuY2UpO1xyXG4gICAgICAgICAgICBlbHNlIGlmKHRoaXMuZW5lbXludW0gPT0gNSkgR2xvYmFsRGF0YS5teVBva2V3b21hbkhQW0dsb2JhbERhdGEubXllbGZdIC09ICgyMCAqIGVuaGFuY2UpO1xyXG4gICAgICAgICAgICBlbHNlIGlmKHRoaXMuZW5lbXludW0gPT0gNikgR2xvYmFsRGF0YS5teVBva2V3b21hbkhQW0dsb2JhbERhdGEubXllbGZdIC09ICg0NSAqIGVuaGFuY2UpO1xyXG4gICAgICAgICAgICBlbHNlIGlmKHRoaXMuZW5lbXludW0gPT0gNykgR2xvYmFsRGF0YS5teVBva2V3b21hbkhQW0dsb2JhbERhdGEubXllbGZdIC09ICgxMCAqIGVuaGFuY2UpO1xyXG4gICAgICAgICAgICBHbG9iYWxEYXRhLm15UG9rZXdvbWFuSFBbR2xvYmFsRGF0YS5teWVsZl0gPSBNYXRoLnJvdW5kKEdsb2JhbERhdGEubXlQb2tld29tYW5IUFtHbG9iYWxEYXRhLm15ZWxmXSk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIGxldCB0dXJuU3dpdGNoMSA9IGNjLmNhbGxGdW5jKGZ1bmN0aW9uKHRhcmdldCkge1xyXG4gICAgICAgICAgICB0aGlzLm15VHVybiA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmVuZW15VHVybiA9IGZhbHNlO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICBsZXQgdHVyblN3aXRjaDIgPSBjYy5jYWxsRnVuYyhmdW5jdGlvbih0YXJnZXQpIHtcclxuICAgICAgICAgICAgdGhpcy5teVR1cm4gPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmVuZW15VHVybiA9IGZhbHNlO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICBsZXQgcGFydGljbGVBY3Rpb24gPSBjYy5jYWxsRnVuYyhmdW5jdGlvbih0YXJnZXQpIHtcclxuICAgICAgICAgICAgaWYodGhpcy5lbmVteW51bSA9PSA0ICllbmVteVBhcnRpY2xlRWZmZWN0LnJlc2V0U3lzdGVtKCk7XHJcbiAgICAgICAgICAgIGVsc2UgaWYodGhpcy5lbmVteW51bSA9PSA1KSBlbmVteVBhcnRpY2xlRWZmZWN0My5yZXNldFN5c3RlbSgpO1xyXG4gICAgICAgICAgICBlbHNlIGlmKHRoaXMuZW5lbXludW0gPT0gNil7IFxyXG4gICAgICAgICAgICAgICAgZW5lbXlQYXJ0aWNsZUVmZmVjdDQucmVzZXRTeXN0ZW0oKTtcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvZW5lbXkvYm9vbVwiKS5ydW5BY3Rpb24oY2MubW92ZUJ5KDAuMiwgY2MudjIoLTUyNSwgMCkpKTtcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvZW5lbXkvYm9vbVwiKS54ID0gMTcuMzY2O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIGxldCBzb3VuZCA9IGNjLmNhbGxGdW5jKGZ1bmN0aW9uKHRhcmdldCkge1xyXG4gICAgICAgICAgICBpZih0aGlzLmVuZW15bnVtID09IDQgKXt9Ly9lbmVteVBhcnRpY2xlRWZmZWN0LnJlc2V0U3lzdGVtKCk7XHJcbiAgICAgICAgICAgIGVsc2UgaWYodGhpcy5lbmVteW51bSA9PSA1KSB7XHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMucmVkX2RvbmdfcHVuY2gsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic291bmRcIik7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMuZW5lbXludW0gPT0gNikge1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnJlZF9kb25nX3B1bmNoLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNvdW5kXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIHRoaXMpOyBcclxuICAgICAgICBcclxuICAgICAgICBsZXQgbW92ZUFjdGlvbiA9IGNjLmNhbGxGdW5jKGZ1bmN0aW9uKHRhcmdldCkge1xyXG4gICAgICAgICAgICBpZih0aGlzLmVuZW15bnVtID09IDQpXHJcbiAgICAgICAgICAgICAgICBlbmVteS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MubW92ZUJ5KDAuNiwgY2MudjIoMCwgNTApKSwgY2MubW92ZUJ5KDAuMiwgY2MudjIoMCwgLTUwKSksIHBhcnRpY2xlQWN0aW9uLCBzaGFrZUNhbWVyYSxteUxpZmVEZWR1Y3QsdHVyblN3aXRjaDIpKTtcclxuICAgICAgICAgICAgZWxzZSBpZih0aGlzLmVuZW15bnVtID09IDUpXHJcbiAgICAgICAgICAgICAgICBlbmVteS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MubW92ZUJ5KDAuOCwgY2MudjIoLTQ2MCwgMCkpLCBzb3VuZCwgc2hha2VDYW1lcmEyLCBwYXJ0aWNsZUFjdGlvbiwgY2MubW92ZUJ5KDEuNSwgY2MudjIoNDYwLCAwKSksbXlMaWZlRGVkdWN0LHR1cm5Td2l0Y2gyKSk7XHJcbiAgICAgICAgICAgIGVsc2UgaWYodGhpcy5lbmVteW51bSA9PSA2KVxyXG4gICAgICAgICAgICBlbmVteS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MubW92ZUJ5KDAuNiwgY2MudjIoMCwgMjApKSwgc291bmQsIHNoYWtlQ2FtZXJhMiwgcGFydGljbGVBY3Rpb24sIGNjLm1vdmVCeSgwLjEsIGNjLnYyKDAsIC0yMCkpLG15TGlmZURlZHVjdCx0dXJuU3dpdGNoMikpO1xyXG4gICAgICAgICAgICBlbHNlIGlmKHRoaXMuZW5lbXludW0gPT0gNyl7ZW5lbXkucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLm1vdmVCeSgxLCBjYy52MigtNDgwLCAwKSksIGNjLm1vdmVCeSgxLCBjYy52Mig1MjAsIDApKSxteUxpZmVEZWR1Y3QsdHVyblN3aXRjaDIpKTt9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICBcclxuXHJcblxyXG4gICAgICAgIGxldCBlbmVteSA9IGNjLmZpbmQoXCJDYW52YXMvZW5lbXlcIik7XHJcbiAgICAgICAgZW5lbXkucnVuQWN0aW9uKGNjLnNlcXVlbmNlKHR1cm5Td2l0Y2gxLCBtb3ZlQWN0aW9uKSlcclxuICAgIH1cclxuICAgIFxyXG5cclxufSJdfQ==