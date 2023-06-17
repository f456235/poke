"use strict";
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
            cc.audioEngine.pauseMusic();
            cc.audioEngine.playEffect(this.winSound, false);
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
    };
    NewClass.prototype.updateUI = function (dt) {
        cc.find("Canvas/myLife").getComponent(cc.Label).string = (Array(7).join("0") + this.myLife.toString()).slice(-3);
        cc.find("Canvas/enemyLife").getComponent(cc.Label).string = (Array(7).join("0") + this.enemyLife.toString()).slice(-3);
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
        var enemyAnimation = cc.find("Canvas/enemy").getComponent(cc.Animation);
        var enemyParticleEffect = cc.find("Canvas/enemy/magic").getComponent(cc.ParticleSystem);
        var shakeCamera = cc.callFunc(function (target) {
            var mainCamera = cc.Camera.main;
            this.originalPosition = mainCamera.node.position.clone();
            var shakeSequence = cc.sequence(cc.moveTo(0.05, cc.v2(this.originalPosition.x, this.originalPosition.y + 8)), cc.moveTo(0.05, cc.v2(this.originalPosition.x, this.originalPosition.y - 8)), cc.moveTo(0.05, this.originalPosition));
            // Run the shake sequence on the camera
            cc.find("Canvas/Main Camera").getComponent(cc.Camera).node.runAction(shakeSequence);
            //this.camera.node.runAction(shakeSequence);
        });
        if (this.enemynum == 4) {
            enemyAnimation.play("dong_move");
        }
        else if (this.enemynum == 5) {
        }
        else if (this.enemynum == 6) {
        }
        var myLifeDeduct = cc.callFunc(function (target) {
            //console.log("enemyNum in mylife deduct:", this.enemynum);
            if (this.enemynum == 4)
                this.myLife -= 10;
            else if (this.enemynum == 5)
                this.myLife -= 20;
            else if (this.enemynum == 6)
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
            enemyParticleEffect.resetSystem();
        }, this);
        // let particleAction = cc.callFunc(function(target) {
        //     enemyParticleEffect.stopSystem();
        // }, this);
        var moveAction = cc.callFunc(function (target) {
            if (this.enemynum == 4)
                enemy.runAction(cc.sequence(cc.moveBy(0.6, cc.v2(0, 50)), cc.moveBy(0.2, cc.v2(0, -50)), particleAction, shakeCamera));
            else if (this.enemynum == 5)
                enemy.runAction(cc.sequence(cc.moveBy(1, cc.v2(-520, 0)), cc.moveBy(1, cc.v2(520, 0))));
            else if (this.enemynum == 6)
                enemy.runAction(cc.sequence(cc.moveBy(1, cc.v2(-520, 0)), cc.moveBy(1, cc.v2(520, 0))));
        }, this);
        var enemy = cc.find("Canvas/enemy");
        enemy.runAction(cc.sequence(turnSwitch1, moveAction, myLifeDeduct, turnSwitch2));
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