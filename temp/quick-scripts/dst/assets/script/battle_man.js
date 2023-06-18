
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
        _this.mainCamera = null;
        _this.enemy1 = null;
        _this.enemy2 = null;
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
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        // this.enemynum = cc.director.getScene()["enemyNum"];
        // console.log("enemyNum:", this.enemynum);
        // if(this.enemynum !== undefined){
        //     console.log("Number passed from previous scene:", this.enemynum);
        //     //this.enemynum = enemyNum;
        // }
        cc.find('Canvas/skills/bag2').on('click', function () {
            // cc.director.loadScene('bag_battle');
            cc.find('Canvas/skills').active = false;
            cc.find('Canvas/bags2').active = true;
        });
    };
    NewClass.prototype.start = function () {
        this.enemynum = cc.director.getScene()["enemyNum"];
        // this.node.getComponent(cc.Sprite).spriteFrame = this.sprite[this.bag[GlobalData.myelf]];
        //console.log("enemyNum:", this.enemynum);
        if (this.enemynum !== undefined) {
            //console.log("Number passed from previous scene:", this.enemynum);
        }
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
        else if (this.enemynum == 7) {
            if (cc.find("Canvas/enemy").getComponent(cc.Sprite).spriteFrame == null) {
                cc.find("Canvas/enemy").getComponent(cc.Sprite).spriteFrame = this.enemy7;
                cc.find("Canvas/enemy").color = cc.Color.RED;
            }
        }
        cc.audioEngine.playMusic(this.battleBgm, true);
        this.initSkill1();
        this.initSkill2();
        this.initSkill3();
        this.initSkill4();
        var enemyParticleEffect2 = cc.find("Canvas/enemy/onLoad").getComponent(cc.ParticleSystem);
        if (this.enemynum == 4) {
            console.log("this.enemynum == 4");
            enemyParticleEffect2.playOnLoad = true;
            enemyParticleEffect2.resetSystem();
        }
    };
    NewClass.prototype.update = function (dt) {
        // console.log(this.enemynum);
        this.node.getComponent(cc.Sprite).spriteFrame = this.sprite[this.bag[GlobalData_1.default.myelf]];
        this.updateUI(dt);
        if (this.enemyLife <= 0 && !this.isWin) {
            // var uid = GlobalData.uid;
            // const database = firebase.database();
            // firebase.database().ref('user').child(GlobalData.uid).update({
            //     myArray: [this.enemynum],
            // });
            GlobalData_1.default.pokewoman.push(this.enemynum);
            console.log("GlobalData.pokewoman:", GlobalData_1.default.pokewoman);
            this.enemyLife = 0;
            this.isWin = true;
            this.enemyHP.progress = 0;
            cc.audioEngine.pauseMusic();
            cc.audioEngine.playEffect(this.winSound, false);
            GlobalData_1.default.exp += 100;
            this.scheduleOnce(function () {
                var _this = this;
                cc.director.loadScene("map2", function () {
                    // const nextScene = cc.director.getScene();
                    var enemyNumString = cc.js.formatStr("%d", _this.enemynum);
                    GlobalData_1.default.nodeToDestroy.push(enemyNumString);
                    // nextScene["nodeToDestroy"] = enemyNumString;
                    // //console.log("nextScene[nodeToDestroy]", enemyNumString);
                    // console.log("nextScene[nodeToDestroy]", nextScene["nodeToDestroy"]);
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
            //this.scheduleOnce(function() {
            //cc.find("Canvas/skill1").getComponent(cc.Button).interactable = this.myTurn;
            // }, 2);
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
        this.myHP.progress = this.myLife / 100;
        this.enemyHP.progress = this.enemyLife / 100;
        var myLifeLabel = cc.find("Canvas/myLife").getComponent(cc.Label);
        var enemyLifeLabel = cc.find("Canvas/enemyLife").getComponent(cc.Label);
        myLifeLabel.string = ((Array(7).join("0") + this.myLife.toString()).slice(-3)) + ('/100');
        enemyLifeLabel.string = ((Array(7).join("0") + this.enemyLife.toString()).slice(-3)) + ('/100');
    };
    NewClass.prototype.initSkill1 = function () {
        var clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node;
        clickEventHandler.component = "battle_man";
        clickEventHandler.handler = "skill1";
        cc.find("Canvas/skills/skill1").getComponent(cc.Button).clickEvents.push(clickEventHandler);
    };
    NewClass.prototype.initSkill2 = function () {
        var clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node;
        clickEventHandler.component = "battle_man";
        clickEventHandler.handler = "skill2";
        cc.find("Canvas/skills/skill2").getComponent(cc.Button).clickEvents.push(clickEventHandler);
    };
    NewClass.prototype.initSkill3 = function () {
        var clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node;
        clickEventHandler.component = "battle_man";
        clickEventHandler.handler = "skill3";
        cc.find("Canvas/skills/skill3").getComponent(cc.Button).clickEvents.push(clickEventHandler);
    };
    NewClass.prototype.initSkill4 = function () {
        var clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node;
        clickEventHandler.component = "battle_man";
        clickEventHandler.handler = "skill4";
        cc.find("Canvas/skills/skill4").getComponent(cc.Button).clickEvents.push(clickEventHandler);
    };
    NewClass.prototype.skill1 = function () {
        //cc.log("skill1");
        var enemyLifeDeduct = cc.callFunc(function (target) {
            this.enemyLife -= 50;
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
        // console.log(this.enemynum);
        var enemyAnimation = cc.find("Canvas/enemy").getComponent(cc.Animation);
        var enemyParticleEffect = cc.find("Canvas/enemy/magic").getComponent(cc.ParticleSystem);
        var enemyParticleEffect3 = cc.find("Canvas/enemy/punch").getComponent(cc.ParticleSystem);
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
        }
        else if (this.enemynum == 7) {
            enemyAnimation.play("fish3");
        }
        var myLifeDeduct = cc.callFunc(function (target) {
            //console.log("enemyNum in mylife deduct:", this.enemynum);
            if (this.enemynum == 4)
                this.myLife -= 10;
            else if (this.enemynum == 5)
                this.myLife -= 20;
            else if (this.enemynum == 6)
                this.myLife -= 40;
            else if (this.enemynum == 7)
                this.myLife -= 40;
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
        }, this);
        // let particleAction = cc.callFunc(function(target) {
        //     enemyParticleEffect.stopSystem();
        // }, this);
        var moveAction = cc.callFunc(function (target) {
            if (this.enemynum == 4)
                enemy.runAction(cc.sequence(cc.moveBy(0.6, cc.v2(0, 50)), cc.moveBy(0.2, cc.v2(0, -50)), particleAction, shakeCamera, myLifeDeduct));
            else if (this.enemynum == 5)
                enemy.runAction(cc.sequence(cc.moveBy(0.8, cc.v2(-460, 0)), shakeCamera2, particleAction, cc.moveBy(1.5, cc.v2(460, 0)), myLifeDeduct));
            else if (this.enemynum == 6)
                enemy.runAction(cc.sequence(cc.moveBy(1, cc.v2(-480, 0)), cc.moveBy(1, cc.v2(520, 0)), myLifeDeduct));
            else if (this.enemynum == 7)
                enemy.runAction(cc.sequence(cc.moveBy(1, cc.v2(-480, 0)), cc.moveBy(1, cc.v2(520, 0)), myLifeDeduct));
        }, this);
        var enemy = cc.find("Canvas/enemy");
        enemy.runAction(cc.sequence(turnSwitch1, moveAction, turnSwitch2));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxiYXR0bGVfbWFuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZCQUF3QjtBQUN4QiwyQ0FBc0M7QUFFaEMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFnWUM7UUE3WEcsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQVcsT0FBTyxDQUFDO1FBR3ZCLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRy9CLGNBQVEsR0FBaUIsSUFBSSxDQUFDO1FBRzlCLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRy9CLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLFlBQU0sR0FBbUIsSUFBSSxDQUFDO1FBRzlCLFlBQU0sR0FBbUIsSUFBSSxDQUFDO1FBRzlCLFlBQU0sR0FBbUIsSUFBSSxDQUFDO1FBRzlCLFVBQUksR0FBbUIsSUFBSSxDQUFDO1FBRzVCLGFBQU8sR0FBbUIsSUFBSSxDQUFDO1FBRy9CLFNBQUcsR0FBUSxJQUFJLENBQUM7UUFHaEIsWUFBTSxHQUFxQixFQUFFLENBQUM7UUFFOUIsU0FBRyxHQUFZLG9CQUFVLENBQUMsU0FBUyxDQUFDO1FBRXBDLFlBQU0sR0FBVSxvQkFBVSxDQUFDLE1BQU0sQ0FBQztRQUUxQixZQUFNLEdBQVcsR0FBRyxDQUFDO1FBQ3JCLGVBQVMsR0FBVyxHQUFHLENBQUM7UUFDeEIsV0FBSyxHQUFZLEtBQUssQ0FBQztRQUN2QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBQ3ZCLGVBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsWUFBTSxHQUFZLEtBQUssQ0FBQztRQUN4QixjQUFRLEdBQUcsQ0FBQyxDQUFDOztJQTZVekIsQ0FBQztJQTNVRyx3QkFBd0I7SUFFeEIseUJBQU0sR0FBTjtRQUNJLHNE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QUFRLENBQUMsVUFBUyxNQUFNO1lBQ3pDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVULElBQUksV0FBVyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsVUFBUyxNQUFNO1lBQ3pDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQzFCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVULElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFDLGVBQWUsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFBO0lBQ3pJLENBQUM7SUFFRCx5QkFBTSxHQUFOO1FBQ0ksbUJBQW1CO1FBQ25CLElBQUksZUFBZSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsVUFBUyxNQUFNO1lBQzdDLElBQUksQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDO1FBQ3pCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVULElBQUksV0FBVyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsVUFBUyxNQUFNO1lBQ3pDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVULElBQUksV0FBVyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsVUFBUyxNQUFNO1lBQ3pDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQzFCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVULElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxR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QURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBQyxFQUFFLENBQUMsU0FBUyxFQUFDLENBQUM7K0NBQ0M7SUFHL0I7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUMsRUFBRSxDQUFDLElBQUksRUFBQyxDQUFDO2dEQUNFO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUMsQ0FBQzs0Q0FDRjtJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBQyxFQUFFLENBQUMsV0FBVyxFQUFDLENBQUM7NENBQ0Y7SUFHOUI7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUMsRUFBRSxDQUFDLFdBQVcsRUFBQyxDQUFDOzRDQUNGO0lBRzlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7MENBQ0c7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzs2Q0FDTTtJQUcvQjtRQURDLFFBQVEsQ0FBQyxhQUFHLENBQUM7eUNBQ0U7SUFHaEI7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7NENBQ0c7SUF2Q2IsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWdZNUI7SUFBRCxlQUFDO0NBaFlELEFBZ1lDLENBaFlxQyxFQUFFLENBQUMsU0FBUyxHQWdZakQ7a0JBaFlvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1hbiBmcm9tIFwiLi9tYW5cIjtcclxuaW1wb3J0IEdsb2JhbERhdGEgZnJvbSBcIi4vR2xvYmFsRGF0YVwiO1xyXG5kZWNsYXJlIGNvbnN0IGZpcmViYXNlOiBhbnk7XHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICB0ZXh0OiBzdHJpbmcgPSAnaGVsbG8nO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7dHlwZTpjYy5BdWRpb0NsaXB9KVxyXG4gICAgYmF0dGxlQmdtOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7dHlwZTpjYy5BdWRpb0NsaXB9KVxyXG4gICAgd2luU291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHt0eXBlOmNjLkF1ZGlvQ2xpcH0pXHJcbiAgICBsb3NlU291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHt0eXBlOmNjLk5vZGV9KVxyXG4gICAgbWFpbkNhbWVyYTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHt0eXBlOmNjLlNwcml0ZUZyYW1lfSlcclxuICAgIGVuZW15MTogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7dHlwZTpjYy5TcHJpdGVGcmFtZX0pXHJcbiAgICBlbmVteTI6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoe3R5cGU6Y2MuU3ByaXRlRnJhbWV9KVxyXG4gICAgZW5lbXk3OiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByb2dyZXNzQmFyKVxyXG4gICAgbXlIUDogY2MuUHJvZ3Jlc3NCYXIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Qcm9ncmVzc0JhcilcclxuICAgIGVuZW15SFA6IGNjLlByb2dyZXNzQmFyID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoTWFuKVxyXG4gICAgbWFuOiBNYW4gPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShbY2MuU3ByaXRlRnJhbWVdKVxyXG4gICAgc3ByaXRlOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XHJcblxyXG4gICAgYmFnOiBudW1iZXJbXSA9R2xvYmFsRGF0YS5wb2tld29tYW47XHJcblxyXG4gICAgbXlsaWZlOiBudW1iZXIgPUdsb2JhbERhdGEubXlsaWZlO1xyXG5cclxuICAgIHByaXZhdGUgbXlMaWZlOiBudW1iZXIgPSAxMDA7XHJcbiAgICBwcml2YXRlIGVuZW15TGlmZTogbnVtYmVyID0gMTAwO1xyXG4gICAgcHJpdmF0ZSBpc1dpbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBteVR1cm46IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHJpdmF0ZSBlbmVteVR1cm46IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgaXNMb3NlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGVuZW15bnVtID0gMDtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIC8vIHRoaXMuZW5lbXludW0gPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpW1wiZW5lbXlOdW1cIl07XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJlbmVteU51bTpcIiwgdGhpcy5lbmVteW51bSk7XHJcbiAgICAgICAgLy8gaWYodGhpcy5lbmVteW51bSAhPT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJOdW1iZXIgcGFzc2VkIGZyb20gcHJldmlvdXMgc2NlbmU6XCIsIHRoaXMuZW5lbXludW0pO1xyXG4gICAgICAgIC8vICAgICAvL3RoaXMuZW5lbXludW0gPSBlbmVteU51bTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgY2MuZmluZCgnQ2FudmFzL3NraWxscy9iYWcyJykub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ2JhZ19iYXR0bGUnKTtcclxuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL3NraWxscycpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvYmFnczInKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMuZW5lbXludW0gPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpW1wiZW5lbXlOdW1cIl07XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGVbdGhpcy5iYWdbR2xvYmFsRGF0YS5teWVsZl1dO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJlbmVteU51bTpcIiwgdGhpcy5lbmVteW51bSk7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuZW5lbXludW0gIT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJOdW1iZXIgcGFzc2VkIGZyb20gcHJldmlvdXMgc2NlbmU6XCIsIHRoaXMuZW5lbXludW0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5lbmVteW51bSA9PSA0KXtcclxuICAgICAgICAgICAgaWYoY2MuZmluZChcIkNhbnZhcy9lbmVteVwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9PSBudWxsKXtcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvZW5lbXlcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmVuZW15MTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9ZWxzZSBpZih0aGlzLmVuZW15bnVtID09IDUpe1xyXG4gICAgICAgICAgICBpZihjYy5maW5kKFwiQ2FudmFzL2VuZW15XCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID09IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9lbmVteVwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuZW5lbXkyO1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9lbmVteVwiKS5jb2xvciA9IGNjLkNvbG9yLlJFRDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKHRoaXMuZW5lbXludW0gPT0gNyl7XHJcbiAgICAgICAgICAgIGlmKGNjLmZpbmQoXCJDYW52YXMvZW5lbXlcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL2VuZW15XCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5lbmVteTc7XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL2VuZW15XCIpLmNvbG9yID0gY2MuQ29sb3IuUkVEO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLmJhdHRsZUJnbSwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5pbml0U2tpbGwxKCk7XHJcbiAgICAgICAgdGhpcy5pbml0U2tpbGwyKCk7XHJcbiAgICAgICAgdGhpcy5pbml0U2tpbGwzKCk7XHJcbiAgICAgICAgdGhpcy5pbml0U2tpbGw0KCk7XHJcblxyXG4gICAgICAgIGxldCBlbmVteVBhcnRpY2xlRWZmZWN0MiA9IGNjLmZpbmQoXCJDYW52YXMvZW5lbXkvb25Mb2FkXCIpLmdldENvbXBvbmVudChjYy5QYXJ0aWNsZVN5c3RlbSk7XHJcbiAgICAgICAgaWYodGhpcy5lbmVteW51bSA9PSA0KXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzLmVuZW15bnVtID09IDRcIik7XHJcbiAgICAgICAgICAgIGVuZW15UGFydGljbGVFZmZlY3QyLnBsYXlPbkxvYWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBlbmVteVBhcnRpY2xlRWZmZWN0Mi5yZXNldFN5c3RlbSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQpe1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZW5lbXludW0pO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByaXRlW3RoaXMuYmFnW0dsb2JhbERhdGEubXllbGZdXTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVVJKGR0KTtcclxuICAgICAgICBpZih0aGlzLmVuZW15TGlmZSA8PSAwICYmICF0aGlzLmlzV2luKXtcclxuICAgICAgICAgICAgLy8gdmFyIHVpZCA9IEdsb2JhbERhdGEudWlkO1xyXG4gICAgICAgICAgICAvLyBjb25zdCBkYXRhYmFzZSA9IGZpcmViYXNlLmRhdGFiYXNlKCk7XHJcbiAgICAgICAgICAgIC8vIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCd1c2VyJykuY2hpbGQoR2xvYmFsRGF0YS51aWQpLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIC8vICAgICBteUFycmF5OiBbdGhpcy5lbmVteW51bV0sXHJcbiAgICAgICAgICAgIC8vIH0pO1xyXG4gICAgICAgICAgICBHbG9iYWxEYXRhLnBva2V3b21hbi5wdXNoKHRoaXMuZW5lbXludW0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkdsb2JhbERhdGEucG9rZXdvbWFuOlwiLCBHbG9iYWxEYXRhLnBva2V3b21hbik7XHJcblxyXG5cclxuICAgICAgICAgICAgdGhpcy5lbmVteUxpZmUgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmlzV2luID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5lbmVteUhQLnByb2dyZXNzID0gMDtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGF1c2VNdXNpYygpO1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMud2luU291bmQsIGZhbHNlKTtcclxuICAgICAgICAgICAgR2xvYmFsRGF0YS5leHAgKz0gMTAwO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIm1hcDJcIiwgKCk9PntcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCBuZXh0U2NlbmUgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlbmVteU51bVN0cmluZyA9IGNjLmpzLmZvcm1hdFN0cihcIiVkXCIsIHRoaXMuZW5lbXludW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIEdsb2JhbERhdGEubm9kZVRvRGVzdHJveS5wdXNoKGVuZW15TnVtU3RyaW5nKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBuZXh0U2NlbmVbXCJub2RlVG9EZXN0cm95XCJdID0gZW5lbXlOdW1TdHJpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gLy9jb25zb2xlLmxvZyhcIm5leHRTY2VuZVtub2RlVG9EZXN0cm95XVwiLCBlbmVteU51bVN0cmluZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJuZXh0U2NlbmVbbm9kZVRvRGVzdHJveV1cIiwgbmV4dFNjZW5lW1wibm9kZVRvRGVzdHJveVwiXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9LCA0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMubXlMaWZlPD0wICYmICF0aGlzLmlzTG9zZSl7XHJcbiAgICAgICAgICAgIHRoaXMubXlMaWZlID0gMDtcclxuICAgICAgICAgICAgdGhpcy5pc0xvc2UgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm15VHVybiA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmVuZW15VHVybiA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLm15SFAucHJvZ3Jlc3MgPSAwO1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wYXVzZU11c2ljKCk7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5sb3NlU291bmQsIGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJtYXAyXCIpO1xyXG4gICAgICAgICAgICB9LCA0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMuZW5lbXlUdXJuICYmICF0aGlzLm15VHVybiAmJiB0aGlzLmVuZW15TGlmZSA+IDApe1xyXG4gICAgICAgICAgICB0aGlzLmVuZW15VHVybiA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLm15VHVybiA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlUdXJuQWN0aW9uKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvL3RoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgLy9jYy5maW5kKFwiQ2FudmFzL3NraWxsMVwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0aGlzLm15VHVybjtcclxuICAgICAgICAgICAgLy8gfSwgMik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZighdGhpcy5lbmVteVR1cm4gJiYgdGhpcy5teVR1cm4gJiYgdGhpcy5teUxpZmUgPiAwKXtcclxuXHJcbiAgICAgICAgICAgIC8vY2MuZmluZChcIkNhbnZhcy9za2lsbDFcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gdGhpcy5teVR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvc2tpbGxzL3NraWxsMVwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0aGlzLm15VHVybjtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL3NraWxscy9za2lsbDJcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gdGhpcy5teVR1cm47XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9za2lsbHMvc2tpbGwzXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IHRoaXMubXlUdXJuO1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvc2tpbGxzL3NraWxsNFwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0aGlzLm15VHVybjtcclxuICAgIC8vfVxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldE11c2ljVm9sdW1lKEdsb2JhbERhdGEudm9sdW1lKTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRFZmZlY3RzVm9sdW1lKEdsb2JhbERhdGEudm9sdW1lKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVVSShkdCl7XHJcbiAgICAgICAgdGhpcy5teUhQLnByb2dyZXNzID0gdGhpcy5teUxpZmUgLyAxMDA7XHJcbiAgICAgICAgdGhpcy5lbmVteUhQLnByb2dyZXNzID0gdGhpcy5lbmVteUxpZmUgLyAxMDA7XHJcbiAgICAgICAgY29uc3QgbXlMaWZlTGFiZWwgPSBjYy5maW5kKFwiQ2FudmFzL215TGlmZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIGNvbnN0IGVuZW15TGlmZUxhYmVsID0gY2MuZmluZChcIkNhbnZhcy9lbmVteUxpZmVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgXHJcbiAgICAgICAgbXlMaWZlTGFiZWwuc3RyaW5nID0gKChBcnJheSg3KS5qb2luKFwiMFwiKSArIHRoaXMubXlMaWZlLnRvU3RyaW5nKCkpLnNsaWNlKC0zKSkgKyAoJy8xMDAnKTtcclxuICAgICAgICBlbmVteUxpZmVMYWJlbC5zdHJpbmcgPSAoKEFycmF5KDcpLmpvaW4oXCIwXCIpICsgdGhpcy5lbmVteUxpZmUudG9TdHJpbmcoKSkuc2xpY2UoLTMpKSArICgnLzEwMCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRTa2lsbDEoKXtcclxuICAgICAgICBsZXQgY2xpY2tFdmVudEhhbmRsZXIgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIGNsaWNrRXZlbnRIYW5kbGVyLnRhcmdldCA9IHRoaXMubm9kZTsgXHJcbiAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIuY29tcG9uZW50ID0gXCJiYXR0bGVfbWFuXCI7XHJcbiAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIuaGFuZGxlciA9IFwic2tpbGwxXCI7XHJcblxyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvc2tpbGxzL3NraWxsMVwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKGNsaWNrRXZlbnRIYW5kbGVyKTtcclxuXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdFNraWxsMigpe1xyXG4gICAgICAgIGxldCBjbGlja0V2ZW50SGFuZGxlciA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIudGFyZ2V0ID0gdGhpcy5ub2RlOyBcclxuICAgICAgICBjbGlja0V2ZW50SGFuZGxlci5jb21wb25lbnQgPSBcImJhdHRsZV9tYW5cIjtcclxuICAgICAgICBjbGlja0V2ZW50SGFuZGxlci5oYW5kbGVyID0gXCJza2lsbDJcIjtcclxuXHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9za2lsbHMvc2tpbGwyXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goY2xpY2tFdmVudEhhbmRsZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRTa2lsbDMoKXtcclxuICAgICAgICBsZXQgY2xpY2tFdmVudEhhbmRsZXIgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIGNsaWNrRXZlbnRIYW5kbGVyLnRhcmdldCA9IHRoaXMubm9kZTsgXHJcbiAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIuY29tcG9uZW50ID0gXCJiYXR0bGVfbWFuXCI7XHJcbiAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIuaGFuZGxlciA9IFwic2tpbGwzXCI7XHJcblxyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvc2tpbGxzL3NraWxsM1wiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKGNsaWNrRXZlbnRIYW5kbGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0U2tpbGw0KCl7XHJcbiAgICAgICAgbGV0IGNsaWNrRXZlbnRIYW5kbGVyID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBjbGlja0V2ZW50SGFuZGxlci50YXJnZXQgPSB0aGlzLm5vZGU7IFxyXG4gICAgICAgIGNsaWNrRXZlbnRIYW5kbGVyLmNvbXBvbmVudCA9IFwiYmF0dGxlX21hblwiO1xyXG4gICAgICAgIGNsaWNrRXZlbnRIYW5kbGVyLmhhbmRsZXIgPSBcInNraWxsNFwiO1xyXG5cclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL3NraWxscy9za2lsbDRcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChjbGlja0V2ZW50SGFuZGxlcik7XHJcblxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHNraWxsMSgpe1xyXG4gICAgICAgIC8vY2MubG9nKFwic2tpbGwxXCIpO1xyXG4gICAgICAgIGxldCBlbmVteUxpZmVEZWR1Y3QgPSBjYy5jYWxsRnVuYyhmdW5jdGlvbih0YXJnZXQpIHtcclxuICAgICAgICAgICAgdGhpcy5lbmVteUxpZmUgLT0gNTA7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIGxldCB0dXJuU3dpdGNoMSA9IGNjLmNhbGxGdW5jKGZ1bmN0aW9uKHRhcmdldCkge1xyXG4gICAgICAgICAgICB0aGlzLm15VHVybiA9IGZhbHNlO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICBsZXQgdHVyblN3aXRjaDIgPSBjYy5jYWxsRnVuYyhmdW5jdGlvbih0YXJnZXQpIHtcclxuICAgICAgICAgICAgdGhpcy5lbmVteVR1cm4gPSB0cnVlO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKHR1cm5Td2l0Y2gxLCBjYy5tb3ZlQnkoMSwgY2MudjIoNTIwLCAwKSksIGNjLm1vdmVCeSgxLCBjYy52MigtNTIwLCAwKSksZW5lbXlMaWZlRGVkdWN0LCB0dXJuU3dpdGNoMikpXHJcbiAgICB9XHJcblxyXG4gICAgc2tpbGwyKCl7XHJcbiAgICAgICAgLy9jYy5sb2coXCJza2lsbDJcIik7XHJcbiAgICAgICAgbGV0IGVuZW15TGlmZURlZHVjdCA9IGNjLmNhbGxGdW5jKGZ1bmN0aW9uKHRhcmdldCkge1xyXG4gICAgICAgICAgICB0aGlzLmVuZW15TGlmZSAtPSAyMDtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgbGV0IHR1cm5Td2l0Y2gxID0gY2MuY2FsbEZ1bmMoZnVuY3Rpb24odGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIHRoaXMubXlUdXJuID0gZmFsc2U7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIGxldCB0dXJuU3dpdGNoMiA9IGNjLmNhbGxGdW5jKGZ1bmN0aW9uKHRhcmdldCkge1xyXG4gICAgICAgICAgICB0aGlzLmVuZW15VHVybiA9IHRydWU7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UodHVyblN3aXRjaDEsIGNjLm1vdmVCeSgxLCBjYy52Mig1MjAsIDApKSwgY2MubW92ZUJ5KDEsIGNjLnYyKC01MjAsIDApKSxlbmVteUxpZmVEZWR1Y3QsIHR1cm5Td2l0Y2gyKSlcclxuICAgIH1cclxuXHJcbiAgICBza2lsbDMoKXtcclxuICAgICAgICAvL2NjLmxvZyhcInNraWxsM1wiKTtcclxuICAgICAgICBsZXQgZW5lbXlMaWZlRGVkdWN0ID0gY2MuY2FsbEZ1bmMoZnVuY3Rpb24odGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlMaWZlIC09IDIwO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICBsZXQgdHVyblN3aXRjaDEgPSBjYy5jYWxsRnVuYyhmdW5jdGlvbih0YXJnZXQpIHtcclxuICAgICAgICAgICAgdGhpcy5teVR1cm4gPSBmYWxzZTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgbGV0IHR1cm5Td2l0Y2gyID0gY2MuY2FsbEZ1bmMoZnVuY3Rpb24odGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlUdXJuID0gdHJ1ZTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZSh0dXJuU3dpdGNoMSwgY2MubW92ZUJ5KDEsIGNjLnYyKDUyMCwgMCkpLCBjYy5tb3ZlQnkoMSwgY2MudjIoLTUyMCwgMCkpLGVuZW15TGlmZURlZHVjdCwgdHVyblN3aXRjaDIpKVxyXG4gICAgfVxyXG5cclxuICAgIHNraWxsNCgpe1xyXG4gICAgICAgIC8vY2MubG9nKFwic2tpbGw0XCIpO1xyXG4gICAgICAgIGxldCBlbmVteUxpZmVEZWR1Y3QgPSBjYy5jYWxsRnVuYyhmdW5jdGlvbih0YXJnZXQpIHtcclxuICAgICAgICAgICAgdGhpcy5lbmVteUxpZmUgLT0gMTAwO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICBsZXQgdHVyblN3aXRjaDEgPSBjYy5jYWxsRnVuYyhmdW5jdGlvbih0YXJnZXQpIHtcclxuICAgICAgICAgICAgdGhpcy5teVR1cm4gPSBmYWxzZTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgbGV0IHR1cm5Td2l0Y2gyID0gY2MuY2FsbEZ1bmMoZnVuY3Rpb24odGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlUdXJuID0gdHJ1ZTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZSh0dXJuU3dpdGNoMSwgY2MubW92ZUJ5KDEsIGNjLnYyKDUyMCwgMCkpLCBjYy5tb3ZlQnkoMSwgY2MudjIoLTUyMCwgMCkpLGVuZW15TGlmZURlZHVjdCwgdHVyblN3aXRjaDIpKVxyXG4gICAgfVxyXG4gICAgZW5lbXlUdXJuQWN0aW9uKCl7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5lbmVteW51bSk7XHJcbiAgICAgICAgbGV0IGVuZW15QW5pbWF0aW9uID0gY2MuZmluZChcIkNhbnZhcy9lbmVteVwiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICBsZXQgZW5lbXlQYXJ0aWNsZUVmZmVjdCA9IGNjLmZpbmQoXCJDYW52YXMvZW5lbXkvbWFnaWNcIikuZ2V0Q29tcG9uZW50KGNjLlBhcnRpY2xlU3lzdGVtKTtcclxuICAgICAgICBsZXQgZW5lbXlQYXJ0aWNsZUVmZmVjdDMgPSBjYy5maW5kKFwiQ2FudmFzL2VuZW15L3B1bmNoXCIpLmdldENvbXBvbmVudChjYy5QYXJ0aWNsZVN5c3RlbSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHNoYWtlQ2FtZXJhID0gY2MuY2FsbEZ1bmMoZnVuY3Rpb24odGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1haW5DYW1lcmEgPSBjYy5DYW1lcmEubWFpbjtcclxuICAgICAgICAgICAgdGhpcy5vcmlnaW5hbFBvc2l0aW9uID0gbWFpbkNhbWVyYS5ub2RlLnBvc2l0aW9uLmNsb25lKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNoYWtlU2VxdWVuY2UgPSBjYy5zZXF1ZW5jZShcclxuICAgICAgICAgICAgICAgIGNjLm1vdmVUbygwLjA1LCBjYy52Mih0aGlzLm9yaWdpbmFsUG9zaXRpb24ueCAsIHRoaXMub3JpZ2luYWxQb3NpdGlvbi55ICsgOCkpLFxyXG4gICAgICAgICAgICAgICAgY2MubW92ZVRvKDAuMDUsIGNjLnYyKHRoaXMub3JpZ2luYWxQb3NpdGlvbi54LCB0aGlzLm9yaWdpbmFsUG9zaXRpb24ueSAtIDgpKSxcclxuICAgICAgICAgICAgICAgIGNjLm1vdmVUbygwLjA1LCB0aGlzLm9yaWdpbmFsUG9zaXRpb24pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICBcclxuICAgICAgICAgICAgLy8gUnVuIHRoZSBzaGFrZSBzZXF1ZW5jZSBvbiB0aGUgY2FtZXJhXHJcbiAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmFcIikuZ2V0Q29tcG9uZW50KGNjLkNhbWVyYSkubm9kZS5ydW5BY3Rpb24oc2hha2VTZXF1ZW5jZSk7XHJcbiAgICAgICAgICAgIC8vdGhpcy5jYW1lcmEubm9kZS5ydW5BY3Rpb24oc2hha2VTZXF1ZW5jZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBzaGFrZUNhbWVyYTIgPSBjYy5jYWxsRnVuYyhmdW5jdGlvbih0YXJnZXQpIHtcclxuICAgICAgICAgICAgY29uc3QgbWFpbkNhbWVyYSA9IGNjLkNhbWVyYS5tYWluO1xyXG4gICAgICAgICAgICB0aGlzLm9yaWdpbmFsUG9zaXRpb24gPSBtYWluQ2FtZXJhLm5vZGUucG9zaXRpb24uY2xvbmUoKTtcclxuICAgICAgICAgICAvL2xldCBzaGFrZVNlcXVlbmNlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNoYWtlU2VxdWVuY2UgPSBjYy5zZXF1ZW5jZShcclxuICAgICAgICAgICAgICAgICAgICBjYy5tb3ZlVG8oMC4wNSwgY2MudjIodGhpcy5vcmlnaW5hbFBvc2l0aW9uLngrMTUgLCB0aGlzLm9yaWdpbmFsUG9zaXRpb24ueSkpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNjLm1vdmVUbygwLjA1LCBjYy52Mih0aGlzLm9yaWdpbmFsUG9zaXRpb24ueC0xNSwgdGhpcy5vcmlnaW5hbFBvc2l0aW9uLnkpKSxcclxuICAgICAgICAgICAgICAgICAgICBjYy5tb3ZlVG8oMC4wNSwgdGhpcy5vcmlnaW5hbFBvc2l0aW9uKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYVwiKS5nZXRDb21wb25lbnQoY2MuQ2FtZXJhKS5ub2RlLnJ1bkFjdGlvbihzaGFrZVNlcXVlbmNlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5lbmVteW51bSA9PSA0KXtcclxuICAgICAgICAgICAgZW5lbXlBbmltYXRpb24ucGxheShcImRvbmdfbW92ZVwiKTtcclxuICAgICAgICB9ZWxzZSBpZih0aGlzLmVuZW15bnVtID09IDUpe1xyXG4gICAgICAgICAgICBlbmVteUFuaW1hdGlvbi5wbGF5KFwicmVkX2RvbmdfbW92ZVwiKTtcclxuICAgICAgICB9ZWxzZSBpZih0aGlzLmVuZW15bnVtID09IDYpe1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKHRoaXMuZW5lbXludW0gPT0gNyl7XHJcbiAgICAgICAgICAgIGVuZW15QW5pbWF0aW9uLnBsYXkoXCJmaXNoM1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG15TGlmZURlZHVjdCA9IGNjLmNhbGxGdW5jKGZ1bmN0aW9uKHRhcmdldCkge1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiZW5lbXlOdW0gaW4gbXlsaWZlIGRlZHVjdDpcIiwgdGhpcy5lbmVteW51bSk7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuZW5lbXludW0gPT0gNCkgdGhpcy5teUxpZmUgLT0gMTA7XHJcbiAgICAgICAgICAgIGVsc2UgaWYodGhpcy5lbmVteW51bSA9PSA1KSB0aGlzLm15TGlmZSAtPSAyMDtcclxuICAgICAgICAgICAgZWxzZSBpZih0aGlzLmVuZW15bnVtID09IDYpIHRoaXMubXlMaWZlIC09IDQwO1xyXG4gICAgICAgICAgICBlbHNlIGlmKHRoaXMuZW5lbXludW0gPT0gNykgdGhpcy5teUxpZmUgLT0gNDA7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIGxldCB0dXJuU3dpdGNoMSA9IGNjLmNhbGxGdW5jKGZ1bmN0aW9uKHRhcmdldCkge1xyXG4gICAgICAgICAgICB0aGlzLm15VHVybiA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmVuZW15VHVybiA9IGZhbHNlO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICBsZXQgdHVyblN3aXRjaDIgPSBjYy5jYWxsRnVuYyhmdW5jdGlvbih0YXJnZXQpIHtcclxuICAgICAgICAgICAgdGhpcy5teVR1cm4gPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmVuZW15VHVybiA9IGZhbHNlO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICBsZXQgcGFydGljbGVBY3Rpb24gPSBjYy5jYWxsRnVuYyhmdW5jdGlvbih0YXJnZXQpIHtcclxuICAgICAgICAgICAgaWYodGhpcy5lbmVteW51bSA9PSA0ICllbmVteVBhcnRpY2xlRWZmZWN0LnJlc2V0U3lzdGVtKCk7XHJcbiAgICAgICAgICAgIGVsc2UgaWYodGhpcy5lbmVteW51bSA9PSA1KSBlbmVteVBhcnRpY2xlRWZmZWN0My5yZXNldFN5c3RlbSgpO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICAvLyBsZXQgcGFydGljbGVBY3Rpb24gPSBjYy5jYWxsRnVuYyhmdW5jdGlvbih0YXJnZXQpIHtcclxuICAgICAgICAvLyAgICAgZW5lbXlQYXJ0aWNsZUVmZmVjdC5zdG9wU3lzdGVtKCk7XHJcbiAgICAgICAgLy8gfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBtb3ZlQWN0aW9uID0gY2MuY2FsbEZ1bmMoZnVuY3Rpb24odGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuZW5lbXludW0gPT0gNClcclxuICAgICAgICAgICAgICAgIGVuZW15LnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5tb3ZlQnkoMC42LCBjYy52MigwLCA1MCkpLCBjYy5tb3ZlQnkoMC4yLCBjYy52MigwLCAtNTApKSwgcGFydGljbGVBY3Rpb24sIHNoYWtlQ2FtZXJhLG15TGlmZURlZHVjdCkpO1xyXG4gICAgICAgICAgICBlbHNlIGlmKHRoaXMuZW5lbXludW0gPT0gNSlcclxuICAgICAgICAgICAgICAgIGVuZW15LnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5tb3ZlQnkoMC44LCBjYy52MigtNDYwLCAwKSksIHNoYWtlQ2FtZXJhMiwgcGFydGljbGVBY3Rpb24sIGNjLm1vdmVCeSgxLjUsIGNjLnYyKDQ2MCwgMCkpLG15TGlmZURlZHVjdCkpO1xyXG4gICAgICAgICAgICBlbHNlIGlmKHRoaXMuZW5lbXludW0gPT0gNilcclxuICAgICAgICAgICAgICAgIGVuZW15LnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5tb3ZlQnkoMSwgY2MudjIoLTQ4MCwgMCkpLCBjYy5tb3ZlQnkoMSwgY2MudjIoNTIwLCAwKSksbXlMaWZlRGVkdWN0KSk7XHJcbiAgICAgICAgICAgIGVsc2UgaWYodGhpcy5lbmVteW51bSA9PSA3KVxyXG4gICAgICAgICAgICAgICAgZW5lbXkucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLm1vdmVCeSgxLCBjYy52MigtNDgwLCAwKSksIGNjLm1vdmVCeSgxLCBjYy52Mig1MjAsIDApKSxteUxpZmVEZWR1Y3QpKTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgXHJcblxyXG5cclxuICAgICAgICBsZXQgZW5lbXkgPSBjYy5maW5kKFwiQ2FudmFzL2VuZW15XCIpO1xyXG4gICAgICAgIGVuZW15LnJ1bkFjdGlvbihjYy5zZXF1ZW5jZSh0dXJuU3dpdGNoMSwgbW92ZUFjdGlvbiwgIHR1cm5Td2l0Y2gyKSlcclxuICAgIH1cclxuICAgIFxyXG5cclxufVxyXG4iXX0=