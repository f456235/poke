
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/script/GlobalData');
require('./assets/script/bag');
require('./assets/script/bag_back');
require('./assets/script/battle_man');
require('./assets/script/block_sprite');
require('./assets/script/camera');
require('./assets/script/enemy');
require('./assets/script/gamemanager');
require('./assets/script/gift');
require('./assets/script/handleSetting');
require('./assets/script/libaoma');
require('./assets/script/login');
require('./assets/script/man');
require('./assets/script/register');
require('./assets/script/select_dong');
require('./assets/script/setting');
require('./assets/script/universe');
require('./assets/script/universe_select');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/bag.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2ab411x31hC6I0V08ZjdW/K', 'bag');
// script/bag.ts

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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        _this.camera = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad() {
    //     this.node.on('click', ()=>{
    //         cc.director.loadScene('bag');
    //     });
    // }
    NewClass.prototype.onLoad = function () {
        var button = this.getComponent(cc.Button);
        button.node.on(cc.Node.EventType.TOUCH_END, this.onButtonClick, this);
    };
    NewClass.prototype.onButtonClick = function () {
        cc.director.loadScene('bag');
    };
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.update = function (dt) {
        // console.log(this.node.x);
        // console.log(this.node.y);
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    __decorate([
        property({ type: cc.Camera })
    ], NewClass.prototype, "camera", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxiYWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFtQ0M7UUFoQ0csV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQVcsT0FBTyxDQUFDO1FBR3ZCLFlBQU0sR0FBYyxJQUFJLENBQUM7O0lBMEI3QixDQUFDO0lBeEJHLHdCQUF3QjtJQUV4QixhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLHdDQUF3QztJQUN4QyxVQUFVO0lBQ1YsSUFBSTtJQUNKLHlCQUFNLEdBQU47UUFDSSxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBRUQsZ0NBQWEsR0FBYjtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCx3QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELHlCQUFNLEdBQU4sVUFBUSxFQUFFO1FBQ04sNEJBQTRCO1FBQzVCLDRCQUE0QjtJQUNoQyxDQUFDO0lBL0JEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ0k7SUFHdkI7UUFEQyxRQUFROzBDQUNjO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUMsQ0FBQzs0Q0FDRjtJQVRSLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FtQzVCO0lBQUQsZUFBQztDQW5DRCxBQW1DQyxDQW5DcUMsRUFBRSxDQUFDLFNBQVMsR0FtQ2pEO2tCQW5Db0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICB0ZXh0OiBzdHJpbmcgPSAnaGVsbG8nO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7dHlwZTpjYy5DYW1lcmF9KVxyXG4gICAgY2FtZXJhOiBjYy5DYW1lcmEgPSBudWxsO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCgpIHtcclxuICAgIC8vICAgICB0aGlzLm5vZGUub24oJ2NsaWNrJywgKCk9PntcclxuICAgIC8vICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdiYWcnKTtcclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vIH1cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBjb25zdCBidXR0b24gPSB0aGlzLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4gICAgICAgIGJ1dHRvbi5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vbkJ1dHRvbkNsaWNrLCB0aGlzKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgb25CdXR0b25DbGljaygpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ2JhZycpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubm9kZS54KTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm5vZGUueSk7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/GlobalData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '82690sReQhC9549JIczU9Ud', 'GlobalData');
// script/GlobalData.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var GlobalData = /** @class */ (function () {
    function GlobalData() {
    }
    GlobalData.uid = "";
    GlobalData.pokewoman = [];
    GlobalData.level = 1;
    GlobalData.PlayerPosX = 29;
    GlobalData.PlayerPosY = -62;
    GlobalData.cameraPosX = 138;
    GlobalData.cameraPosY = 71;
    GlobalData.volume = 0.5;
    GlobalData.mute = this.volume == 0 ? false : true;
    GlobalData.map = 'map2';
    return GlobalData;
}());
exports.default = GlobalData;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxHbG9iYWxEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7QUFDbEY7SUFBQTtJQVdBLENBQUM7SUFWVSxjQUFHLEdBQVcsRUFBRSxDQUFDO0lBQ2pCLG9CQUFTLEdBQVUsRUFBRSxDQUFDO0lBQ3RCLGdCQUFLLEdBQVcsQ0FBQyxDQUFDO0lBQ2xCLHFCQUFVLEdBQVksRUFBRSxDQUFDO0lBQ3pCLHFCQUFVLEdBQVksQ0FBQyxFQUFFLENBQUM7SUFDMUIscUJBQVUsR0FBWSxHQUFHLENBQUM7SUFDMUIscUJBQVUsR0FBWSxFQUFFLENBQUM7SUFDekIsaUJBQU0sR0FBWSxHQUFHLENBQUM7SUFDdEIsZUFBSSxHQUFhLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNqRCxjQUFHLEdBQVksTUFBTSxDQUFDO0lBQ2pDLGlCQUFDO0NBWEQsQUFXQyxJQUFBO2tCQVhvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHbG9iYWxEYXRhIHtcclxuICAgIHN0YXRpYyB1aWQ6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBzdGF0aWMgcG9rZXdvbWFuOiBhbnlbXSA9IFtdO1xyXG4gICAgc3RhdGljIGxldmVsOiBudW1iZXIgPSAxO1xyXG4gICAgc3RhdGljIFBsYXllclBvc1ggOiBudW1iZXIgPSAyOTtcclxuICAgIHN0YXRpYyBQbGF5ZXJQb3NZIDogbnVtYmVyID0gLTYyO1xyXG4gICAgc3RhdGljIGNhbWVyYVBvc1ggOiBudW1iZXIgPSAxMzg7XHJcbiAgICBzdGF0aWMgY2FtZXJhUG9zWSA6IG51bWJlciA9IDcxO1xyXG4gICAgc3RhdGljIHZvbHVtZSA6IG51bWJlciA9IDAuNTtcclxuICAgIHN0YXRpYyBtdXRlIDogYm9vbGVhbiA9IHRoaXMudm9sdW1lID09IDAgPyBmYWxzZSA6IHRydWU7XHJcbiAgICBzdGF0aWMgbWFwIDogc3RyaW5nID0gJ21hcDInO1xyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

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
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
        _this.myLife = 100;
        _this.enemyLife = 100;
        _this.isWin = false;
        _this.myTurn = true;
        _this.enemyTurn = false;
        _this.isLose = false;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
        cc.audioEngine.playMusic(this.battleBgm, true);
        this.initSkill1();
        this.initSkill2();
        this.initSkill3();
        this.initSkill4();
    };
    NewClass.prototype.update = function (dt) {
        this.updateUI(dt);
        if (this.enemyLife <= 0 && !this.isWin) {
            this.enemyLife = 0;
            this.isWin = true;
            cc.audioEngine.pauseMusic();
            cc.audioEngine.playEffect(this.winSound, false);
            this.scheduleOnce(function () {
                cc.director.loadScene("map2");
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
        cc.find("Canvas/skill1").getComponent(cc.Button).interactable = this.myTurn;
        cc.find("Canvas/skill2").getComponent(cc.Button).interactable = this.myTurn;
        cc.find("Canvas/skill3").getComponent(cc.Button).interactable = this.myTurn;
        cc.find("Canvas/skill4").getComponent(cc.Button).interactable = this.myTurn;
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
        cc.find("Canvas/skill1").getComponent(cc.Button).clickEvents.push(clickEventHandler);
    };
    NewClass.prototype.initSkill2 = function () {
        var clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node;
        clickEventHandler.component = "battle_man";
        clickEventHandler.handler = "skill2";
        cc.find("Canvas/skill2").getComponent(cc.Button).clickEvents.push(clickEventHandler);
    };
    NewClass.prototype.initSkill3 = function () {
        var clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node;
        clickEventHandler.component = "battle_man";
        clickEventHandler.handler = "skill3";
        cc.find("Canvas/skill3").getComponent(cc.Button).clickEvents.push(clickEventHandler);
    };
    NewClass.prototype.initSkill4 = function () {
        var clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node;
        clickEventHandler.component = "battle_man";
        clickEventHandler.handler = "skill4";
        cc.find("Canvas/skill4").getComponent(cc.Button).clickEvents.push(clickEventHandler);
    };
    NewClass.prototype.skill1 = function () {
        cc.log("skill1");
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
        cc.log("skill2");
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
        cc.log("skill3");
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
        cc.log("skill4");
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
        var myLifeDeduct = cc.callFunc(function (target) {
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
        var enemy = cc.find("Canvas/enemy");
        enemy.runAction(cc.sequence(turnSwitch1, cc.moveBy(1, cc.v2(-520, 0)), cc.moveBy(1, cc.v2(520, 0)), myLifeDeduct, turnSwitch2));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxiYXR0bGVfbWFuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBeU5DO1FBdE5HLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFXLE9BQU8sQ0FBQztRQUd2QixlQUFTLEdBQWlCLElBQUksQ0FBQztRQUcvQixjQUFRLEdBQWlCLElBQUksQ0FBQztRQUc5QixlQUFTLEdBQWlCLElBQUksQ0FBQztRQUcvQixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUVuQixZQUFNLEdBQVcsR0FBRyxDQUFDO1FBQ3JCLGVBQVMsR0FBVyxHQUFHLENBQUM7UUFDeEIsV0FBSyxHQUFZLEtBQUssQ0FBQztRQUN2QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBQ3ZCLGVBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsWUFBTSxHQUFZLEtBQUssQ0FBQzs7SUFnTXBDLENBQUM7SUE5TEcsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZix3QkFBSyxHQUFMO1FBQ0ksRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELHlCQUFNLEdBQU4sVUFBTyxFQUFFO1FB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QUFFLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBQyxlQUFlLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQTtJQUN6SSxDQUFDO0lBRUQseUJBQU0sR0FBTjtRQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDakIsSUFBSSxlQUFlLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxVQUFTLE1BQU07WUFDN0MsSUFBSSxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUM7UUFDekIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRVQsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxVQUFTLE1BQU07WUFDekMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDeEIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRVQsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxVQUFTLE1BQU07WUFDekMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDMUIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRVQsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUMsZUFBZSxFQUFFLFdBQVcsQ0FBQyxDQUFDLENB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NUIsT0FBTztPQUNhLFFBQVEsQ0F5TjVCO0lBQUQsZUFBQztDQXpORCxBQXlOQyxDQXpOcUMsRUFBRSxDQUFDLFNBQVMsR0F5TmpEO2tCQXpOb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICB0ZXh0OiBzdHJpbmcgPSAnaGVsbG8nO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7dHlwZTpjYy5BdWRpb0NsaXB9KVxyXG4gICAgYmF0dGxlQmdtOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7dHlwZTpjYy5BdWRpb0NsaXB9KVxyXG4gICAgd2luU291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHt0eXBlOmNjLkF1ZGlvQ2xpcH0pXHJcbiAgICBsb3NlU291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHt0eXBlOmNjLk5vZGV9KVxyXG4gICAgbWFpbkNhbWVyYTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBteUxpZmU6IG51bWJlciA9IDEwMDtcclxuICAgIHByaXZhdGUgZW5lbXlMaWZlOiBudW1iZXIgPSAxMDA7XHJcbiAgICBwcml2YXRlIGlzV2luOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIG15VHVybjogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwcml2YXRlIGVuZW15VHVybjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBpc0xvc2U6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHRoaXMuYmF0dGxlQmdtLCB0cnVlKTtcclxuICAgICAgICB0aGlzLmluaXRTa2lsbDEoKTtcclxuICAgICAgICB0aGlzLmluaXRTa2lsbDIoKTtcclxuICAgICAgICB0aGlzLmluaXRTa2lsbDMoKTtcclxuICAgICAgICB0aGlzLmluaXRTa2lsbDQoKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQpe1xyXG4gICAgICAgIHRoaXMudXBkYXRlVUkoZHQpO1xyXG4gICAgICAgIGlmKHRoaXMuZW5lbXlMaWZlIDw9IDAgJiYgIXRoaXMuaXNXaW4pe1xyXG4gICAgICAgICAgICB0aGlzLmVuZW15TGlmZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuaXNXaW4gPSB0cnVlO1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wYXVzZU11c2ljKCk7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy53aW5Tb3VuZCwgZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIm1hcDJcIik7XHJcbiAgICAgICAgICAgIH0sIDQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5teUxpZmU8PTAgJiYgIXRoaXMuaXNMb3NlKXtcclxuICAgICAgICAgICAgdGhpcy5teUxpZmUgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmlzTG9zZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubXlUdXJuID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlUdXJuID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBhdXNlTXVzaWMoKTtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmxvc2VTb3VuZCwgZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIm1hcDJcIik7XHJcbiAgICAgICAgICAgIH0sIDQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5lbmVteVR1cm4gJiYgIXRoaXMubXlUdXJuICYmIHRoaXMuZW5lbXlMaWZlID4gMCl7XHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlUdXJuID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubXlUdXJuID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5lbmVteVR1cm5BY3Rpb24oKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAvL2NjLmZpbmQoXCJDYW52YXMvc2tpbGwxXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IHRoaXMubXlUdXJuO1xyXG4gICAgICAgICAgICAvLyB9LCAyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKCF0aGlzLmVuZW15VHVybiAmJiB0aGlzLm15VHVybiAmJiB0aGlzLm15TGlmZSA+IDApe1xyXG5cclxuICAgICAgICAgICAgLy9jYy5maW5kKFwiQ2FudmFzL3NraWxsMVwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0aGlzLm15VHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9za2lsbDFcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gdGhpcy5teVR1cm47XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9za2lsbDJcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gdGhpcy5teVR1cm47XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9za2lsbDNcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gdGhpcy5teVR1cm47XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9za2lsbDRcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gdGhpcy5teVR1cm47XHJcbiAgICAvL31cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVVSShkdCl7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9teUxpZmVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSAoQXJyYXkoNykuam9pbihcIjBcIikgKyB0aGlzLm15TGlmZS50b1N0cmluZygpKS5zbGljZSgtMyk7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9lbmVteUxpZmVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSAoQXJyYXkoNykuam9pbihcIjBcIikgKyB0aGlzLmVuZW15TGlmZS50b1N0cmluZygpKS5zbGljZSgtMyk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdFNraWxsMSgpe1xyXG4gICAgICAgIGxldCBjbGlja0V2ZW50SGFuZGxlciA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIudGFyZ2V0ID0gdGhpcy5ub2RlOyBcclxuICAgICAgICBjbGlja0V2ZW50SGFuZGxlci5jb21wb25lbnQgPSBcImJhdHRsZV9tYW5cIjtcclxuICAgICAgICBjbGlja0V2ZW50SGFuZGxlci5oYW5kbGVyID0gXCJza2lsbDFcIjtcclxuXHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9za2lsbDFcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChjbGlja0V2ZW50SGFuZGxlcik7XHJcblxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGluaXRTa2lsbDIoKXtcclxuICAgICAgICBsZXQgY2xpY2tFdmVudEhhbmRsZXIgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIGNsaWNrRXZlbnRIYW5kbGVyLnRhcmdldCA9IHRoaXMubm9kZTsgXHJcbiAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIuY29tcG9uZW50ID0gXCJiYXR0bGVfbWFuXCI7XHJcbiAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIuaGFuZGxlciA9IFwic2tpbGwyXCI7XHJcblxyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvc2tpbGwyXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goY2xpY2tFdmVudEhhbmRsZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRTa2lsbDMoKXtcclxuICAgICAgICBsZXQgY2xpY2tFdmVudEhhbmRsZXIgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIGNsaWNrRXZlbnRIYW5kbGVyLnRhcmdldCA9IHRoaXMubm9kZTsgXHJcbiAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIuY29tcG9uZW50ID0gXCJiYXR0bGVfbWFuXCI7XHJcbiAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIuaGFuZGxlciA9IFwic2tpbGwzXCI7XHJcblxyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvc2tpbGwzXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goY2xpY2tFdmVudEhhbmRsZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRTa2lsbDQoKXtcclxuICAgICAgICBsZXQgY2xpY2tFdmVudEhhbmRsZXIgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIGNsaWNrRXZlbnRIYW5kbGVyLnRhcmdldCA9IHRoaXMubm9kZTsgXHJcbiAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIuY29tcG9uZW50ID0gXCJiYXR0bGVfbWFuXCI7XHJcbiAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIuaGFuZGxlciA9IFwic2tpbGw0XCI7XHJcblxyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvc2tpbGw0XCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goY2xpY2tFdmVudEhhbmRsZXIpO1xyXG5cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBza2lsbDEoKXtcclxuICAgICAgICBjYy5sb2coXCJza2lsbDFcIik7XHJcbiAgICAgICAgbGV0IGVuZW15TGlmZURlZHVjdCA9IGNjLmNhbGxGdW5jKGZ1bmN0aW9uKHRhcmdldCkge1xyXG4gICAgICAgICAgICB0aGlzLmVuZW15TGlmZSAtPSA1MDtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgbGV0IHR1cm5Td2l0Y2gxID0gY2MuY2FsbEZ1bmMoZnVuY3Rpb24odGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIHRoaXMubXlUdXJuID0gZmFsc2U7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIGxldCB0dXJuU3dpdGNoMiA9IGNjLmNhbGxGdW5jKGZ1bmN0aW9uKHRhcmdldCkge1xyXG4gICAgICAgICAgICB0aGlzLmVuZW15VHVybiA9IHRydWU7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UodHVyblN3aXRjaDEsIGNjLm1vdmVCeSgxLCBjYy52Mig1MjAsIDApKSwgY2MubW92ZUJ5KDEsIGNjLnYyKC01MjAsIDApKSxlbmVteUxpZmVEZWR1Y3QsIHR1cm5Td2l0Y2gyKSlcclxuICAgIH1cclxuXHJcbiAgICBza2lsbDIoKXtcclxuICAgICAgICBjYy5sb2coXCJza2lsbDJcIik7XHJcbiAgICAgICAgbGV0IGVuZW15TGlmZURlZHVjdCA9IGNjLmNhbGxGdW5jKGZ1bmN0aW9uKHRhcmdldCkge1xyXG4gICAgICAgICAgICB0aGlzLmVuZW15TGlmZSAtPSAyMDtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgbGV0IHR1cm5Td2l0Y2gxID0gY2MuY2FsbEZ1bmMoZnVuY3Rpb24odGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIHRoaXMubXlUdXJuID0gZmFsc2U7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIGxldCB0dXJuU3dpdGNoMiA9IGNjLmNhbGxGdW5jKGZ1bmN0aW9uKHRhcmdldCkge1xyXG4gICAgICAgICAgICB0aGlzLmVuZW15VHVybiA9IHRydWU7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UodHVyblN3aXRjaDEsIGNjLm1vdmVCeSgxLCBjYy52Mig1MjAsIDApKSwgY2MubW92ZUJ5KDEsIGNjLnYyKC01MjAsIDApKSxlbmVteUxpZmVEZWR1Y3QsIHR1cm5Td2l0Y2gyKSlcclxuICAgIH1cclxuXHJcbiAgICBza2lsbDMoKXtcclxuICAgICAgICBjYy5sb2coXCJza2lsbDNcIik7XHJcbiAgICAgICAgbGV0IGVuZW15TGlmZURlZHVjdCA9IGNjLmNhbGxGdW5jKGZ1bmN0aW9uKHRhcmdldCkge1xyXG4gICAgICAgICAgICB0aGlzLmVuZW15TGlmZSAtPSAyMDtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgbGV0IHR1cm5Td2l0Y2gxID0gY2MuY2FsbEZ1bmMoZnVuY3Rpb24odGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIHRoaXMubXlUdXJuID0gZmFsc2U7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIGxldCB0dXJuU3dpdGNoMiA9IGNjLmNhbGxGdW5jKGZ1bmN0aW9uKHRhcmdldCkge1xyXG4gICAgICAgICAgICB0aGlzLmVuZW15VHVybiA9IHRydWU7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UodHVyblN3aXRjaDEsIGNjLm1vdmVCeSgxLCBjYy52Mig1MjAsIDApKSwgY2MubW92ZUJ5KDEsIGNjLnYyKC01MjAsIDApKSxlbmVteUxpZmVEZWR1Y3QsIHR1cm5Td2l0Y2gyKSlcclxuICAgIH1cclxuXHJcbiAgICBza2lsbDQoKXtcclxuICAgICAgICBjYy5sb2coXCJza2lsbDRcIik7XHJcbiAgICAgICAgbGV0IGVuZW15TGlmZURlZHVjdCA9IGNjLmNhbGxGdW5jKGZ1bmN0aW9uKHRhcmdldCkge1xyXG4gICAgICAgICAgICB0aGlzLmVuZW15TGlmZSAtPSAxMDA7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIGxldCB0dXJuU3dpdGNoMSA9IGNjLmNhbGxGdW5jKGZ1bmN0aW9uKHRhcmdldCkge1xyXG4gICAgICAgICAgICB0aGlzLm15VHVybiA9IGZhbHNlO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICBsZXQgdHVyblN3aXRjaDIgPSBjYy5jYWxsRnVuYyhmdW5jdGlvbih0YXJnZXQpIHtcclxuICAgICAgICAgICAgdGhpcy5lbmVteVR1cm4gPSB0cnVlO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKHR1cm5Td2l0Y2gxLCBjYy5tb3ZlQnkoMSwgY2MudjIoNTIwLCAwKSksIGNjLm1vdmVCeSgxLCBjYy52MigtNTIwLCAwKSksZW5lbXlMaWZlRGVkdWN0LCB0dXJuU3dpdGNoMikpXHJcbiAgICB9XHJcblxyXG4gICAgZW5lbXlUdXJuQWN0aW9uKCl7XHJcbiAgICAgICAgbGV0IG15TGlmZURlZHVjdCA9IGNjLmNhbGxGdW5jKGZ1bmN0aW9uKHRhcmdldCkge1xyXG4gICAgICAgICAgICB0aGlzLm15TGlmZSAtPSA0MDtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgbGV0IHR1cm5Td2l0Y2gxID0gY2MuY2FsbEZ1bmMoZnVuY3Rpb24odGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIHRoaXMubXlUdXJuID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlUdXJuID0gZmFsc2U7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIGxldCB0dXJuU3dpdGNoMiA9IGNjLmNhbGxGdW5jKGZ1bmN0aW9uKHRhcmdldCkge1xyXG4gICAgICAgICAgICB0aGlzLm15VHVybiA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlUdXJuID0gZmFsc2U7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG5cclxuICAgICAgICBsZXQgZW5lbXkgPSBjYy5maW5kKFwiQ2FudmFzL2VuZW15XCIpO1xyXG4gICAgICAgIGVuZW15LnJ1bkFjdGlvbihjYy5zZXF1ZW5jZSh0dXJuU3dpdGNoMSwgY2MubW92ZUJ5KDEsIGNjLnYyKC01MjAsIDApKSwgY2MubW92ZUJ5KDEsIGNjLnYyKDUyMCwgMCkpLG15TGlmZURlZHVjdCwgdHVyblN3aXRjaDIpKVxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/gift.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1ae6bvSC09F4afmHQVDGmgS', 'gift');
// script/gift.ts

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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        _this.camera = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad() {
    //     this.node.on('click', ()=>{
    //         cc.director.loadScene('bag');
    //     });
    // }
    NewClass.prototype.onLoad = function () {
        var button = this.getComponent(cc.Button);
        button.node.on(cc.Node.EventType.TOUCH_END, this.onButtonClick, this);
    };
    NewClass.prototype.onButtonClick = function () {
        cc.director.loadScene('libaoma');
    };
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.update = function (dt) {
        // console.log(this.node.x);
        // console.log(this.node.y);
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    __decorate([
        property({ type: cc.Camera })
    ], NewClass.prototype, "camera", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnaWZ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBbUNDO1FBaENHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFXLE9BQU8sQ0FBQztRQUd2QixZQUFNLEdBQWMsSUFBSSxDQUFDOztJQTBCN0IsQ0FBQztJQXhCRyx3QkFBd0I7SUFFeEIsYUFBYTtJQUNiLGtDQUFrQztJQUNsQyx3Q0FBd0M7SUFDeEMsVUFBVTtJQUNWLElBQUk7SUFDSix5QkFBTSxHQUFOO1FBQ0ksSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUVELGdDQUFhLEdBQWI7UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsd0JBQUssR0FBTDtJQUVBLENBQUM7SUFFRCx5QkFBTSxHQUFOLFVBQVEsRUFBRTtRQUNOLDRCQUE0QjtRQUM1Qiw0QkFBNEI7SUFDaEMsQ0FBQztJQS9CRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzJDQUNJO0lBR3ZCO1FBREMsUUFBUTswQ0FDYztJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBQyxFQUFFLENBQUMsTUFBTSxFQUFDLENBQUM7NENBQ0Y7SUFUUixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBbUM1QjtJQUFELGVBQUM7Q0FuQ0QsQUFtQ0MsQ0FuQ3FDLEVBQUUsQ0FBQyxTQUFTLEdBbUNqRDtrQkFuQ29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgdGV4dDogc3RyaW5nID0gJ2hlbGxvJztcclxuXHJcbiAgICBAcHJvcGVydHkoe3R5cGU6Y2MuQ2FtZXJhfSlcclxuICAgIGNhbWVyYTogY2MuQ2FtZXJhID0gbnVsbDtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQoKSB7XHJcbiAgICAvLyAgICAgdGhpcy5ub2RlLm9uKCdjbGljaycsICgpPT57XHJcbiAgICAvLyAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnYmFnJyk7XHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyB9XHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgY29uc3QgYnV0dG9uID0gdGhpcy5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcclxuICAgICAgICBidXR0b24ubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25CdXR0b25DbGljaywgdGhpcyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIG9uQnV0dG9uQ2xpY2soKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdsaWJhb21hJyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5ub2RlLngpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubm9kZS55KTtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/block_sprite.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b52d8j9EgdGj7Uu84EwFZEQ', 'block_sprite');
// script/block_sprite.ts

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
var GlobalData_1 = require("./GlobalData");
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        _this.sprite = [];
        _this.index = 0;
        /* get a return array from other script */
        // bag: number[] = [3, 4, 1, 2, 5, 0];
        _this.bag = GlobalData_1.default.pokewoman;
        // LIFE-CYCLE CALLBACKS:
        _this.num = 0;
        _this.nm = null;
        _this.atk_num = null;
        _this.hp_num = null;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        var _this = this;
        this.nm = cc.find("Canvas/block/name").getComponent(cc.Label);
        this.atk_num = cc.find("Canvas/block/atk_num").getComponent(cc.Label);
        this.hp_num = cc.find("Canvas/block/hp_num").getComponent(cc.Label);
        cc.director.getPhysicsManager().enabled = true;
        var uid = GlobalData_1.default.uid;
        // console.log("uid:",uid);
        firebase.database().ref(uid + 'pokewoman').on('value', function (snapshot) {
            _this.num = snapshot.val();
            // console.log(this.num);
        });
    };
    NewClass.prototype.start = function () {
        var _this = this;
        // this.atk_num.string = "200";
        this.node.getChildByName('Sprite6').active = false;
        this.node.getChildByName('name').active = false;
        this.node.getChildByName('atk').active = false;
        this.node.getChildByName('atk_num').active = false;
        this.node.getChildByName('hp').active = false;
        this.node.getChildByName('hp_num').active = false;
        // iterate through bag
        // i : bag.index , child.index
        console.log(this.bag);
        for (var i = 0; i < 6; i++) {
            this.node.getChildByName('Sprite' + i).getComponent(cc.Sprite).spriteFrame = this.sprite[this.bag[i]];
            // scale 0.1
            this.node.getChildByName('Sprite' + i).scale = 0.05;
            // onload click event
            if (this.bag[i] == null) {
                // console.log("bag[",i,"] is null");
                this.node.getChildByName('Sprite' + i).active = false;
            }
        }
        // Check the value of myArray[0] in Firebase
        // Update spriteFrame based on myArray[0] value
        /*if (this.num === 0) {
            // const spriteFrame0 = cc.resources.get("src/dong0", cc.SpriteFrame);
            // this.getComponent(cc.Sprite).spriteFrame = spriteFrame0;
            // cc.resources.load("test_assets/image/spriteFrame", cc.SpriteFrame, (err, spriteFrame) => {
            //     this.node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
            // });
            cc.loader.loadRes('../src/dong1', cc.SpriteFrame, function (err, spriteFrame) {
                this.node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
            });
        } else if (this.num === 1) {
            // Set spriteFrame to sprite 1
            // Assuming you have a spriteFrame named "sprite1" in your project's assets
            // const spriteFrame1 = cc.resources.get("src/dong0", cc.SpriteFrame);
            // this.getComponent(cc.Sprite).spriteFrame = spriteFrame1;
            cc.loader.loadRes('../src/dong2', cc.SpriteFrame, function (err, spriteFrame) {
                this.node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
            });
        } else if (this.num === 2) {
            // Set spriteFrame to sprite 2
            // Assuming you have a spriteFrame named "sprite2" in your project's assets
            // const spriteFrame2 = cc.resources.get("src/dong0", cc.SpriteFrame);
            // this.getComponent(cc.Sprite).spriteFrame = spriteFrame2;
            cc.loader.loadRes('../src/dong3', cc.SpriteFrame, function (err, spriteFrame) {
                this.node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
            });
        }*/
        cc.find('Canvas/block/Sprite0').on('click', function () {
            _this.node.getChildByName('Sprite6').getComponent(cc.Sprite).spriteFrame = _this.sprite[_this.bag[0]];
            _this.node.getChildByName('Sprite6').active = true;
            _this.node.getChildByName('Sprite6').scale = 0.1;
            _this.update_s6(_this.bag[0]);
            // this.nm.string = "岩東勇";
            // this.atk_num.string = "100";
        });
        cc.find('Canvas/block/Sprite1').on('click', function () {
            _this.node.getChildByName('Sprite6').getComponent(cc.Sprite).spriteFrame = _this.sprite[_this.bag[1]];
            _this.node.getChildByName('Sprite6').active = true;
            _this.node.getChildByName('Sprite6').scale = 0.1;
            _this.update_s6(_this.bag[1]);
            // this.nm.string = "炎東勇";
            // this.atk_num.string = "100";
        });
        cc.find('Canvas/block/Sprite2').on('click', function () {
            _this.node.getChildByName('Sprite6').getComponent(cc.Sprite).spriteFrame = _this.sprite[_this.bag[2]];
            _this.node.getChildByName('Sprite6').active = true;
            _this.node.getChildByName('Sprite6').scale = 0.1;
            _this.update_s6(_this.bag[2]);
            // this.nm.string = "嚴冬勇";
            // this.atk_num.string = "100";
        });
        cc.find('Canvas/block/Sprite3').on('click', function () {
            _this.node.getChildByName('Sprite6').getComponent(cc.Sprite).spriteFrame = _this.sprite[_this.bag[3]];
            _this.node.getChildByName('Sprite6').active = true;
            _this.node.getChildByName('Sprite6').scale = 0.1;
            _this.update_s6(_this.bag[3]);
        });
        cc.find('Canvas/block/Sprite4').on('click', function () {
            _this.node.getChildByName('Sprite6').getComponent(cc.Sprite).spriteFrame = _this.sprite[_this.bag[4]];
            _this.node.getChildByName('Sprite6').active = true;
            _this.node.getChildByName('Sprite6').scale = 0.1;
            _this.update_s6(_this.bag[4]);
        });
        cc.find('Canvas/block/Sprite5').on('click', function () {
            _this.node.getChildByName('Sprite6').getComponent(cc.Sprite).spriteFrame = _this.sprite[_this.bag[5]];
            _this.node.getChildByName('Sprite6').active = true;
            _this.node.getChildByName('Sprite6').scale = 0.1;
            _this.update_s6(_this.bag[5]);
        });
    };
    NewClass.prototype.update_s6 = function (a) {
        this.node.getChildByName('name').active = true;
        this.node.getChildByName('atk').active = true;
        this.node.getChildByName('atk_num').active = true;
        this.node.getChildByName('hp').active = true;
        this.node.getChildByName('hp_num').active = true;
        console.log("hi:", a);
        if (a == 0) {
            this.nm.string = "岩東勇";
            this.atk_num.string = "20";
            this.hp_num.string = "100";
        }
        else if (a == 1) {
            this.nm.string = "炎東勇";
            this.atk_num.string = "100";
            this.hp_num.string = "20";
        }
        else if (a == 2) {
            this.nm.string = "嚴冬勇";
            this.atk_num.string = "50";
            this.hp_num.string = "50";
        }
        else if (a == 3) {
            this.nm.string = "魔關羽";
            this.atk_num.string = "300";
            this.hp_num.string = "10";
        }
        // console.log(this.nm.string);
    };
    NewClass.prototype.update = function (dt) {
        // console.log(this.nm.string);
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], NewClass.prototype, "sprite", void 0);
    __decorate([
        property
    ], NewClass.prototype, "index", void 0);
    __decorate([
        property
    ], NewClass.prototype, "num", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "nm", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "atk_num", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "hp_num", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxibG9ja19zcHJpdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFDMUMsMkNBQXNDO0FBR3RDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBOEtDO1FBM0tHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFXLE9BQU8sQ0FBQztRQUd2QixZQUFNLEdBQXFCLEVBQUUsQ0FBQztRQUc5QixXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBRWxCLDBDQUEwQztRQUMxQyxzQ0FBc0M7UUFDdEMsU0FBRyxHQUFZLG9CQUFVLENBQUMsU0FBUyxDQUFDO1FBRXBDLHdCQUF3QjtRQUV4QixTQUFHLEdBQVcsQ0FBQyxDQUFDO1FBR2hCLFFBQUUsR0FBYSxJQUFJLENBQUM7UUFFcEIsYUFBTyxHQUFhLElBQUksQ0FBQztRQUV6QixZQUFNLEdBQWEsSUFBSSxDQUFDOztJQW1KNUIsQ0FBQztJQWpKRyx5QkFBTSxHQUFOO1FBQUEsaUJBWUM7UUFYRyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwRSxFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUUvQyxJQUFJLEdBQUcsR0FBRyxvQkFBVSxDQUFDLEdBQUcsQ0FBQztRQUN6QiwyQkFBMkI7UUFDM0IsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFBLFFBQVE7WUFDM0QsS0FBSSxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDMUIseUJBQXlCO1FBQzdCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHdCQUFLLEdBQUw7UUFBQSxpQkE2RkM7UUE1RkcsK0JBQStCO1FBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNoRCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQy9DLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2xELHNCQUFzQjtRQUN0Qiw4QkFBOEI7UUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEcsWUFBWTtZQUNaLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ3BELHFCQUFxQjtZQUNyQixJQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUUsSUFBSSxFQUFDO2dCQUNqQixxQ0FBcUM7Z0JBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2FBQ3pEO1NBRUo7UUFDRCw0Q0FBNEM7UUFFNUMsK0NBQStDO1FBQy9DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1dBeUJHO1FBQ0gsRUFBRSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUU7WUFDeEMsS0FBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkcsS0FBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNsRCxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1lBQ2hELEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVCLDBCQUEwQjtZQUMxQiwrQkFBK0I7UUFDbkMsQ0FBQyxDQUFDLENBQUM7UUFDSCxFQUFFLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRTtZQUN4QyxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuRyxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ2xELEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7WUFDaEQsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUIsMEJBQTBCO1lBQzFCLCtCQUErQjtRQUNuQyxDQUFDLENBQUMsQ0FBQztRQUNILEVBQUUsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFO1lBQ3hDLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25HLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbEQsS0FBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztZQUNoRCxLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QiwwQkFBMEI7WUFDMUIsK0JBQStCO1FBQ25DLENBQUMsQ0FBQyxDQUFDO1FBQ0gsRUFBRSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUU7WUFDeEMsS0FBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkcsS0FBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNsRCxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1lBQ2hELEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsRUFBRSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUU7WUFDeEMsS0FBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkcsS0FBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNsRCxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1lBQ2hELEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsRUFBRSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUU7WUFDeEMsS0FBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkcsS0FBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNsRCxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1lBQ2hELEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNELDRCQUFTLEdBQVQsVUFBVSxDQUFDO1FBRVAsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUMvQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbEQsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUM3QyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2pELE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLElBQUcsQ0FBQyxJQUFFLENBQUMsRUFDUDtZQUNJLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQzlCO2FBQ0ksSUFBRyxDQUFDLElBQUUsQ0FBQyxFQUNaO1lBQ0ksSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDN0I7YUFDSSxJQUFHLENBQUMsSUFBRSxDQUFDLEVBQ1o7WUFDSSxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUM3QjthQUNJLElBQUcsQ0FBQyxJQUFFLENBQUMsRUFDWjtZQUNJLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQzdCO1FBQ0QsK0JBQStCO0lBQ25DLENBQUM7SUFDRCx5QkFBTSxHQUFOLFVBQVEsRUFBRTtRQUNOLCtCQUErQjtJQUNuQyxDQUFDO0lBMUtEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ0k7SUFHdkI7UUFEQyxRQUFROzBDQUNjO0lBR3ZCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDOzRDQUNHO0lBRzlCO1FBREMsUUFBUTsyQ0FDUztJQVFsQjtRQURDLFFBQVE7eUNBQ087SUFHaEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt3Q0FDQztJQUVwQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzZDQUNNO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NENBQ0s7SUEzQlAsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQThLNUI7SUFBRCxlQUFDO0NBOUtELEFBOEtDLENBOUtxQyxFQUFFLENBQUMsU0FBUyxHQThLakQ7a0JBOUtvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcbmltcG9ydCBHbG9iYWxEYXRhIGZyb20gXCIuL0dsb2JhbERhdGFcIjtcclxuZGVjbGFyZSBjb25zdCBmaXJlYmFzZTogYW55O1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHRleHQ6IHN0cmluZyA9ICdoZWxsbyc7XHJcblxyXG4gICAgQHByb3BlcnR5KFtjYy5TcHJpdGVGcmFtZV0pXHJcbiAgICBzcHJpdGU6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGluZGV4OiBudW1iZXIgPSAwO1xyXG5cclxuICAgIC8qIGdldCBhIHJldHVybiBhcnJheSBmcm9tIG90aGVyIHNjcmlwdCAqL1xyXG4gICAgLy8gYmFnOiBudW1iZXJbXSA9IFszLCA0LCAxLCAyLCA1LCAwXTtcclxuICAgIGJhZzogbnVtYmVyW10gPUdsb2JhbERhdGEucG9rZXdvbWFuO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBudW06IG51bWJlciA9IDA7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbm06IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGF0a19udW06IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGhwX251bTogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdGhpcy5ubSA9IGNjLmZpbmQoXCJDYW52YXMvYmxvY2svbmFtZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIHRoaXMuYXRrX251bSA9IGNjLmZpbmQoXCJDYW52YXMvYmxvY2svYXRrX251bVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIHRoaXMuaHBfbnVtID0gY2MuZmluZChcIkNhbnZhcy9ibG9jay9ocF9udW1cIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICB2YXIgdWlkID0gR2xvYmFsRGF0YS51aWQ7ICBcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInVpZDpcIix1aWQpO1xyXG4gICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKHVpZCArICdwb2tld29tYW4nKS5vbigndmFsdWUnLCBzbmFwc2hvdCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubnVtID0gc25hcHNob3QudmFsKCk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubnVtKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5hdGtfbnVtLnN0cmluZyA9IFwiMjAwXCI7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdTcHJpdGU2JykuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCduYW1lJykuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdhdGsnKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2F0a19udW0nKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2hwJykuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdocF9udW0nKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAvLyBpdGVyYXRlIHRocm91Z2ggYmFnXHJcbiAgICAgICAgLy8gaSA6IGJhZy5pbmRleCAsIGNoaWxkLmluZGV4XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5iYWcpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnU3ByaXRlJyArIGkpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGVbdGhpcy5iYWdbaV1dO1xyXG4gICAgICAgICAgICAvLyBzY2FsZSAwLjFcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdTcHJpdGUnICsgaSkuc2NhbGUgPSAwLjA1O1xyXG4gICAgICAgICAgICAvLyBvbmxvYWQgY2xpY2sgZXZlbnRcclxuICAgICAgICAgICAgaWYodGhpcy5iYWdbaV09PW51bGwpe1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJiYWdbXCIsaSxcIl0gaXMgbnVsbFwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnU3ByaXRlJyArIGkpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBDaGVjayB0aGUgdmFsdWUgb2YgbXlBcnJheVswXSBpbiBGaXJlYmFzZVxyXG5cclxuICAgICAgICAvLyBVcGRhdGUgc3ByaXRlRnJhbWUgYmFzZWQgb24gbXlBcnJheVswXSB2YWx1ZVxyXG4gICAgICAgIC8qaWYgKHRoaXMubnVtID09PSAwKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnN0IHNwcml0ZUZyYW1lMCA9IGNjLnJlc291cmNlcy5nZXQoXCJzcmMvZG9uZzBcIiwgY2MuU3ByaXRlRnJhbWUpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWUwO1xyXG4gICAgICAgICAgICAvLyBjYy5yZXNvdXJjZXMubG9hZChcInRlc3RfYXNzZXRzL2ltYWdlL3Nwcml0ZUZyYW1lXCIsIGNjLlNwcml0ZUZyYW1lLCAoZXJyLCBzcHJpdGVGcmFtZSkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgIC8vIH0pO1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcygnLi4vc3JjL2RvbmcxJywgY2MuU3ByaXRlRnJhbWUsIGZ1bmN0aW9uIChlcnIsIHNwcml0ZUZyYW1lKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm51bSA9PT0gMSkge1xyXG4gICAgICAgICAgICAvLyBTZXQgc3ByaXRlRnJhbWUgdG8gc3ByaXRlIDFcclxuICAgICAgICAgICAgLy8gQXNzdW1pbmcgeW91IGhhdmUgYSBzcHJpdGVGcmFtZSBuYW1lZCBcInNwcml0ZTFcIiBpbiB5b3VyIHByb2plY3QncyBhc3NldHNcclxuICAgICAgICAgICAgLy8gY29uc3Qgc3ByaXRlRnJhbWUxID0gY2MucmVzb3VyY2VzLmdldChcInNyYy9kb25nMFwiLCBjYy5TcHJpdGVGcmFtZSk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTE7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCcuLi9zcmMvZG9uZzInLCBjYy5TcHJpdGVGcmFtZSwgZnVuY3Rpb24gKGVyciwgc3ByaXRlRnJhbWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubnVtID09PSAyKSB7XHJcbiAgICAgICAgICAgIC8vIFNldCBzcHJpdGVGcmFtZSB0byBzcHJpdGUgMlxyXG4gICAgICAgICAgICAvLyBBc3N1bWluZyB5b3UgaGF2ZSBhIHNwcml0ZUZyYW1lIG5hbWVkIFwic3ByaXRlMlwiIGluIHlvdXIgcHJvamVjdCdzIGFzc2V0c1xyXG4gICAgICAgICAgICAvLyBjb25zdCBzcHJpdGVGcmFtZTIgPSBjYy5yZXNvdXJjZXMuZ2V0KFwic3JjL2RvbmcwXCIsIGNjLlNwcml0ZUZyYW1lKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lMjtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoJy4uL3NyYy9kb25nMycsIGNjLlNwcml0ZUZyYW1lLCBmdW5jdGlvbiAoZXJyLCBzcHJpdGVGcmFtZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0qL1xyXG4gICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9ibG9jay9TcHJpdGUwJykub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ1Nwcml0ZTYnKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByaXRlW3RoaXMuYmFnWzBdXTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdTcHJpdGU2JykuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdTcHJpdGU2Jykuc2NhbGUgPSAwLjE7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlX3M2KHRoaXMuYmFnWzBdKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5ubS5zdHJpbmcgPSBcIuWyqeadseWLh1wiO1xyXG4gICAgICAgICAgICAvLyB0aGlzLmF0a19udW0uc3RyaW5nID0gXCIxMDBcIjtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjYy5maW5kKCdDYW52YXMvYmxvY2svU3ByaXRlMScpLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdTcHJpdGU2JykuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnNwcml0ZVt0aGlzLmJhZ1sxXV07XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnU3ByaXRlNicpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnU3ByaXRlNicpLnNjYWxlID0gMC4xO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZV9zNih0aGlzLmJhZ1sxXSk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMubm0uc3RyaW5nID0gXCLngo7mnbHli4dcIjtcclxuICAgICAgICAgICAgLy8gdGhpcy5hdGtfbnVtLnN0cmluZyA9IFwiMTAwXCI7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY2MuZmluZCgnQ2FudmFzL2Jsb2NrL1Nwcml0ZTInKS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnU3ByaXRlNicpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGVbdGhpcy5iYWdbMl1dO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ1Nwcml0ZTYnKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ1Nwcml0ZTYnKS5zY2FsZSA9IDAuMTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVfczYodGhpcy5iYWdbMl0pO1xyXG4gICAgICAgICAgICAvLyB0aGlzLm5tLnN0cmluZyA9IFwi5Zq05Yas5YuHXCI7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuYXRrX251bS5zdHJpbmcgPSBcIjEwMFwiO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9ibG9jay9TcHJpdGUzJykub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ1Nwcml0ZTYnKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByaXRlW3RoaXMuYmFnWzNdXTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdTcHJpdGU2JykuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdTcHJpdGU2Jykuc2NhbGUgPSAwLjE7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlX3M2KHRoaXMuYmFnWzNdKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjYy5maW5kKCdDYW52YXMvYmxvY2svU3ByaXRlNCcpLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdTcHJpdGU2JykuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnNwcml0ZVt0aGlzLmJhZ1s0XV07XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnU3ByaXRlNicpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnU3ByaXRlNicpLnNjYWxlID0gMC4xO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZV9zNih0aGlzLmJhZ1s0XSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY2MuZmluZCgnQ2FudmFzL2Jsb2NrL1Nwcml0ZTUnKS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnU3ByaXRlNicpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGVbdGhpcy5iYWdbNV1dO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ1Nwcml0ZTYnKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ1Nwcml0ZTYnKS5zY2FsZSA9IDAuMTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVfczYodGhpcy5iYWdbNV0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlX3M2KGEpICBcclxuICAgIHtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ25hbWUnKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnYXRrJykuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2F0a19udW0nKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnaHAnKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnaHBfbnVtJykuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImhpOlwiLGEpO1xyXG4gICAgICAgIGlmKGE9PTApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm5tLnN0cmluZyA9IFwi5bKp5p2x5YuHXCI7XHJcbiAgICAgICAgICAgIHRoaXMuYXRrX251bS5zdHJpbmcgPSBcIjIwXCI7XHJcbiAgICAgICAgICAgIHRoaXMuaHBfbnVtLnN0cmluZyA9IFwiMTAwXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoYT09MSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubm0uc3RyaW5nID0gXCLngo7mnbHli4dcIjtcclxuICAgICAgICAgICAgdGhpcy5hdGtfbnVtLnN0cmluZyA9IFwiMTAwXCI7XHJcbiAgICAgICAgICAgIHRoaXMuaHBfbnVtLnN0cmluZyA9IFwiMjBcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihhPT0yKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5ubS5zdHJpbmcgPSBcIuWatOWGrOWLh1wiO1xyXG4gICAgICAgICAgICB0aGlzLmF0a19udW0uc3RyaW5nID0gXCI1MFwiO1xyXG4gICAgICAgICAgICB0aGlzLmhwX251bS5zdHJpbmcgPSBcIjUwXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoYT09MylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubm0uc3RyaW5nID0gXCLprZTpl5znvr1cIjtcclxuICAgICAgICAgICAgdGhpcy5hdGtfbnVtLnN0cmluZyA9IFwiMzAwXCI7XHJcbiAgICAgICAgICAgIHRoaXMuaHBfbnVtLnN0cmluZyA9IFwiMTBcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5ubS5zdHJpbmcpO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubm0uc3RyaW5nKTtcclxuICAgIH1cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/gamemanager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0fe66XBYGBCg5ftEm54Wh9M', 'gamemanager');
// script/gamemanager.ts

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
var GameManager = /** @class */ (function (_super) {
    __extends(GameManager, _super);
    function GameManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.palse = false;
        return _this;
    }
    GameManager.prototype.onLoad = function () {
    };
    GameManager = __decorate([
        ccclass
    ], GameManager);
    return GameManager;
}(cc.Component));
exports.default = GameManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lbWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUs1QztJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQVVDO1FBUkcsV0FBSyxHQUFDLEtBQUssQ0FBQzs7SUFRaEIsQ0FBQztJQU5HLDRCQUFNLEdBQU47SUFFQSxDQUFDO0lBTmdCLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0FVL0I7SUFBRCxrQkFBQztDQVZELEFBVUMsQ0FWd0MsRUFBRSxDQUFDLFNBQVMsR0FVcEQ7a0JBVm9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuaW1wb3J0IEdsb2JhbERhdGEgZnJvbSAnLi4vc2NyaXB0L0dsb2JhbERhdGEnO1xyXG5kZWNsYXJlIGNvbnN0IGZpcmViYXNlOiBhbnk7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIFxyXG4gICAgcGFsc2U9ZmFsc2U7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuXHJcblxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/bag_back.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c0011QnCHlP14ln+Yr1eLEy', 'bag_back');
// script/bag_back.ts

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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewClass.prototype.onLoad = function () {
        cc.director.getPhysicsManager().enabled = true;
        cc.find('Canvas/block/brown/back').on('click', function () {
            cc.director.loadScene('map2');
        });
    };
    NewClass.prototype.start = function () {
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxiYWdfYmFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUk1QztJQUFzQyw0QkFBWTtJQUFsRDs7SUFlQSxDQUFDO0lBWkcseUJBQU0sR0FBTjtRQUVJLEVBQUUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQy9DLEVBQUUsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFO1lBQ3ZDLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHdCQUFLLEdBQUw7SUFDQSxDQUFDO0lBWmdCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FlNUI7SUFBRCxlQUFDO0NBZkQsQUFlQyxDQWZxQyxFQUFFLENBQUMsU0FBUyxHQWVqRDtrQkFmb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbmRlY2xhcmUgY29uc3QgZmlyZWJhc2U6IGFueTtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgY2MuZmluZCgnQ2FudmFzL2Jsb2NrL2Jyb3duL2JhY2snKS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ21hcDInKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

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
        // if(this.node.name == "Turtle") {
        //     this.node.scaleX = this.node.scaleX;
        //     this.node.scaleY = this.node.scaleY;
        // }
        // else {
        //      this.schedule(function() { 
        //          this.node.scaleX *= -1;
        //      }, 0.1);
        //  }
    };
    Enemy.prototype.update = function (dt) {
        //if(!this.anim.getAnimationState("enemy-walk").isPlaying)
        //  this.anim.play("enemy-walk");  
        this.node.x = this.node.x + this.enemySpeed * dt;
    };
    Enemy.prototype.onBeginContact = function (contact, self, other) {
        if (other.tag != 2) {
            //cc.log("enemy contact blocks")
            //if(!(contact.getWorldManifold().normal.x != -1) && !(contact.getWorldManifold().normal.y != -0)) { //right bound
            this.enemySpeed *= -1;
            this.node.scaleX *= -1;
        }
        else {
            this.enemySpeed *= 0;
            if (other.scaleX == this.node.scaleX)
                this.node.scaleX *= -1;
            else
                this.node.scaleX *= 1;
        }
        //else if(!(contact.getWorldManifold().normal.x != 1) && !(contact.getWorldManifold().normal.y != -0)) { //left bound
        //this.enemySpeed *= -1;
        //this.node.scaleX *= -1;
        //}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxlbmVteS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2QkFBd0I7QUFDbEIsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBbUMseUJBQVk7SUFBL0M7UUFBQSxxRUFvREM7UUFuRFcsZ0JBQVUsR0FBVyxFQUFFLENBQUM7UUFFeEIsVUFBSSxHQUFHLElBQUksQ0FBQztRQUdwQixTQUFHLEdBQVEsSUFBSSxDQUFDOztJQThDcEIsQ0FBQztJQTVDRyxxQkFBSyxHQUFMO1FBQ0ksbUNBQW1DO1FBQ25DLDJDQUEyQztRQUMzQywyQ0FBMkM7UUFDM0MsSUFBSTtRQUNKLFNBQVM7UUFDVCxtQ0FBbUM7UUFDbkMsbUNBQW1DO1FBQ25DLGdCQUFnQjtRQUNoQixLQUFLO0lBQ1QsQ0FBQztJQUVELHNCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsMERBQTBEO1FBQ3hELG1DQUFtQztRQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztJQUN2RCxDQUFDO0lBR0QsOEJBQWMsR0FBZCxVQUFlLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSztRQUMvQixJQUFHLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFO1lBQ2YsZ0NBQWdDO1lBQ2hDLGtIQUFrSDtZQUM5RyxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQzFCO2FBQUk7WUFFRCxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQztZQUNyQixJQUFHLEtBQUssQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNO2dCQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQzs7Z0JBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQztTQUM5QjtRQUNELHFIQUFxSDtRQUNqSCx3QkFBd0I7UUFDeEIseUJBQXlCO1FBQzdCLEdBQUc7SUFDWCxDQUFDO0lBRUQsc0JBQU0sR0FBTjtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQy9DLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUNoRCxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUE3Q0M7UUFEQyxRQUFRLENBQUMsYUFBRyxDQUFDO3NDQUNFO0lBTkMsS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQW9EekI7SUFBRCxZQUFDO0NBcERELEFBb0RDLENBcERrQyxFQUFFLENBQUMsU0FBUyxHQW9EOUM7a0JBcERvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1hbiBmcm9tIFwiLi9tYW5cIjtcclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbmVteSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBwcml2YXRlIGVuZW15U3BlZWQ6IG51bWJlciA9IDUwO1xyXG5cclxuICAgIHByaXZhdGUgYW5pbSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KG1hbilcclxuICAgIG1hbjogbWFuID0gbnVsbDtcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICAvLyBpZih0aGlzLm5vZGUubmFtZSA9PSBcIlR1cnRsZVwiKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMubm9kZS5zY2FsZVggPSB0aGlzLm5vZGUuc2NhbGVYO1xyXG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUuc2NhbGVZID0gdGhpcy5ub2RlLnNjYWxlWTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICB0aGlzLnNjaGVkdWxlKGZ1bmN0aW9uKCkgeyBcclxuICAgICAgICAvLyAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYICo9IC0xO1xyXG4gICAgICAgIC8vICAgICAgfSwgMC4xKTtcclxuICAgICAgICAvLyAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIC8vaWYoIXRoaXMuYW5pbS5nZXRBbmltYXRpb25TdGF0ZShcImVuZW15LXdhbGtcIikuaXNQbGF5aW5nKVxyXG4gICAgICAgICAgLy8gIHRoaXMuYW5pbS5wbGF5KFwiZW5lbXktd2Fsa1wiKTsgIFxyXG4gICAgICAgICAgdGhpcy5ub2RlLnggPSB0aGlzLm5vZGUueCArIHRoaXMuZW5lbXlTcGVlZCAqIGR0O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBvbkJlZ2luQ29udGFjdChjb250YWN0LCBzZWxmLCBvdGhlcikge1xyXG4gICAgICAgIGlmKG90aGVyLnRhZyAhPSAyKSB7XHJcbiAgICAgICAgICAgIC8vY2MubG9nKFwiZW5lbXkgY29udGFjdCBibG9ja3NcIilcclxuICAgICAgICAgICAgLy9pZighKGNvbnRhY3QuZ2V0V29ybGRNYW5pZm9sZCgpLm5vcm1hbC54ICE9IC0xKSAmJiAhKGNvbnRhY3QuZ2V0V29ybGRNYW5pZm9sZCgpLm5vcm1hbC55ICE9IC0wKSkgeyAvL3JpZ2h0IGJvdW5kXHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZW15U3BlZWQgKj0gLTE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYICo9IC0xO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmVteVNwZWVkICo9IDA7XHJcbiAgICAgICAgICAgICAgICBpZihvdGhlci5zY2FsZVggPT0gdGhpcy5ub2RlLnNjYWxlWClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYICo9IC0xO1xyXG4gICAgICAgICAgICAgICAgZWxzZSB0aGlzLm5vZGUuc2NhbGVYICo9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy9lbHNlIGlmKCEoY29udGFjdC5nZXRXb3JsZE1hbmlmb2xkKCkubm9ybWFsLnggIT0gMSkgJiYgIShjb250YWN0LmdldFdvcmxkTWFuaWZvbGQoKS5ub3JtYWwueSAhPSAtMCkpIHsgLy9sZWZ0IGJvdW5kXHJcbiAgICAgICAgICAgICAgICAvL3RoaXMuZW5lbXlTcGVlZCAqPSAtMTtcclxuICAgICAgICAgICAgICAgIC8vdGhpcy5ub2RlLnNjYWxlWCAqPSAtMTtcclxuICAgICAgICAgICAgLy99XHJcbiAgICB9XHJcbiAgICBcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHZhciBtYW5hZ2VyID0gY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpO1xyXG4gICAgICAgIG1hbmFnZXIuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5hbmltID0gdGhpcy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTsgXHJcbiAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/login.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '639abIFlBBLWo5pa1bbo+/q', 'login');
// script/login.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var GlobalData_1 = require("./GlobalData");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        _this.email = null;
        _this.password = null;
        _this.login = null;
        _this.toRegister = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        this.login = cc.find('login').getComponent(cc.Button);
        this.login.node.on('click', this.handleLogin, this);
        this.toRegister = cc.find('register').getComponent(cc.Button);
        this.toRegister.node.on('click', this.toRegisterPage, this);
    };
    NewClass.prototype.handleLogin = function () {
        var auth = firebase.auth();
        auth.signInWithEmailAndPassword(this.email, this.password)
            .then(function (userCredential) {
            GlobalData_1.default.uid = userCredential.user.uid;
            var database = firebase.database();
            var userRef = database.ref('user').child(GlobalData_1.default.uid);
            userRef.once('value', function (snapshot) {
                var userData = snapshot.val();
                if (userData && userData.myArray) {
                    GlobalData_1.default.pokewoman = userData.myArray;
                    console.log(GlobalData_1.default.pokewoman);
                }
                else {
                    console.log("myArray not found in user data");
                }
                console.log(GlobalData_1.default.uid);
                cc.director.loadScene('map2');
            });
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    NewClass.prototype.toRegisterPage = function () {
        cc.director.loadScene('register');
    };
    NewClass.prototype.update = function (dt) {
        this.email = cc.find('account/label').getComponent(cc.Label).string;
        this.password = cc.find('password/label').getComponent(cc.Label).string;
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRiwyQ0FBc0M7QUFFaEMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUF1REM7UUFwREcsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQVcsT0FBTyxDQUFDO1FBRWhCLFdBQUssR0FBVSxJQUFJLENBQUM7UUFDcEIsY0FBUSxHQUFVLElBQUksQ0FBQztRQUN2QixXQUFLLEdBQWEsSUFBSSxDQUFDO1FBQ3ZCLGdCQUFVLEdBQWEsSUFBSSxDQUFDOztJQTRDdkMsQ0FBQztJQTNDRyx3QkFBd0I7SUFFeEIseUJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUMsSUFBSSxDQUFDLFdBQVcsRUFBQyxJQUFJLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFDLElBQUksQ0FBQyxjQUFjLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELDhCQUFXLEdBQVg7UUFDSSxJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLDBCQUEwQixDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUN6RCxJQUFJLENBQUMsVUFBQyxjQUFjO1lBQ3JCLG9CQUFVLENBQUMsR0FBRyxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBRXpDLElBQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNyQyxJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxvQkFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRTNELE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQUMsUUFBUTtnQkFDM0IsSUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUNoQyxJQUFJLFFBQVEsSUFBSSxRQUFRLENBQUMsT0FBTyxFQUFFO29CQUM5QixvQkFBVSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDO29CQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7aUJBQ3JDO3FCQUFNO29CQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztpQkFDakQ7Z0JBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUM1QixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNsQyxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFDLEtBQUs7WUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBQ0gsQ0FBQztJQUVELGlDQUFjLEdBQWQ7UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBQ0QseUJBQU0sR0FBTixVQUFRLEVBQUU7UUFDTixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDcEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDNUUsQ0FBQztJQW5ERDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzJDQUNJO0lBR3ZCO1FBREMsUUFBUTswQ0FDYztJQU5OLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0F1RDVCO0lBQUQsZUFBQztDQXZERCxBQXVEQyxDQXZEcUMsRUFBRSxDQUFDLFNBQVMsR0F1RGpEO2tCQXZEb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBHbG9iYWxEYXRhIGZyb20gXCIuL0dsb2JhbERhdGFcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5kZWNsYXJlIGNvbnN0IGZpcmViYXNlIDogYW55O1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHRleHQ6IHN0cmluZyA9ICdoZWxsbyc7XHJcblxyXG4gICAgcHVibGljIGVtYWlsOnN0cmluZyA9IG51bGw7XHJcbiAgICBwdWJsaWMgcGFzc3dvcmQ6c3RyaW5nID0gbnVsbDtcclxuICAgIHB1YmxpYyBsb2dpbjpjYy5CdXR0b24gPSBudWxsO1xyXG4gICAgcHVibGljIHRvUmVnaXN0ZXI6Y2MuQnV0dG9uID0gbnVsbDtcclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdGhpcy5sb2dpbiA9IGNjLmZpbmQoJ2xvZ2luJykuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XHJcbiAgICAgICAgdGhpcy5sb2dpbi5ub2RlLm9uKCdjbGljaycsdGhpcy5oYW5kbGVMb2dpbix0aGlzKTtcclxuICAgICAgICB0aGlzLnRvUmVnaXN0ZXIgPSBjYy5maW5kKCdyZWdpc3RlcicpLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4gICAgICAgIHRoaXMudG9SZWdpc3Rlci5ub2RlLm9uKCdjbGljaycsdGhpcy50b1JlZ2lzdGVyUGFnZSx0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVMb2dpbigpe1xyXG4gICAgICAgIGNvbnN0IGF1dGggPSBmaXJlYmFzZS5hdXRoKCk7XHJcbiAgICAgICAgYXV0aC5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCh0aGlzLmVtYWlsLCB0aGlzLnBhc3N3b3JkKVxyXG4gICAgICAgIC50aGVuKCh1c2VyQ3JlZGVudGlhbCkgPT4ge1xyXG4gICAgICAgIEdsb2JhbERhdGEudWlkID0gdXNlckNyZWRlbnRpYWwudXNlci51aWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgZGF0YWJhc2UgPSBmaXJlYmFzZS5kYXRhYmFzZSgpO1xyXG4gICAgICAgIGNvbnN0IHVzZXJSZWYgPSBkYXRhYmFzZS5yZWYoJ3VzZXInKS5jaGlsZChHbG9iYWxEYXRhLnVpZCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdXNlclJlZi5vbmNlKCd2YWx1ZScsIChzbmFwc2hvdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB1c2VyRGF0YSA9IHNuYXBzaG90LnZhbCgpO1xyXG4gICAgICAgICAgICBpZiAodXNlckRhdGEgJiYgdXNlckRhdGEubXlBcnJheSkge1xyXG4gICAgICAgICAgICAgICAgR2xvYmFsRGF0YS5wb2tld29tYW4gPSB1c2VyRGF0YS5teUFycmF5O1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coR2xvYmFsRGF0YS5wb2tld29tYW4pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJteUFycmF5IG5vdCBmb3VuZCBpbiB1c2VyIGRhdGFcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKEdsb2JhbERhdGEudWlkKTtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdtYXAyJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRvUmVnaXN0ZXJQYWdlKCl7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdyZWdpc3RlcicpO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIHRoaXMuZW1haWwgPSBjYy5maW5kKCdhY2NvdW50L2xhYmVsJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc7XHJcbiAgICAgICAgdGhpcy5wYXNzd29yZCA9IGNjLmZpbmQoJ3Bhc3N3b3JkL2xhYmVsJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/register.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3576fo2O/lL2JgpoYZrhI4j', 'register');
// script/register.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var GlobalData_1 = require("./GlobalData");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.email = null;
        _this.password = null;
        _this.register = null;
        _this.toLogin = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        this.register = cc.find('register').getComponent(cc.Button);
        this.register.node.on('click', this.handleRegister, this);
        this.toLogin = cc.find('login').getComponent(cc.Button);
        this.toLogin.node.on('click', this.toLoginPage, this);
    };
    NewClass.prototype.handleRegister = function () {
        var auth = firebase.auth();
        auth.createUserWithEmailAndPassword(this.email, this.password)
            .then(function (userCredential) {
            GlobalData_1.default.uid = userCredential.user.uid;
            var database = firebase.database();
            firebase.database().ref('user').child(GlobalData_1.default.uid).set({
                level: GlobalData_1.default.level,
                myArray: [],
            });
            cc.director.loadScene('select');
        })
            .catch(function (err) {
            console.log(err.message);
            cc.error(err.message);
        });
    };
    NewClass.prototype.toLoginPage = function () {
        cc.director.loadScene('login');
    };
    NewClass.prototype.update = function (dt) {
        this.email = cc.find('account/label').getComponent(cc.Label).string;
        this.password = cc.find('password/label').getComponent(cc.Label).string;
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxyZWdpc3Rlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRiwyQ0FBc0M7QUFFaEMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUEwQ0M7UUF2Q0csV0FBSyxHQUFhLElBQUksQ0FBQztRQUNoQixXQUFLLEdBQVUsSUFBSSxDQUFDO1FBQ3BCLGNBQVEsR0FBVSxJQUFJLENBQUM7UUFDdkIsY0FBUSxHQUFhLElBQUksQ0FBQztRQUMxQixhQUFPLEdBQWEsSUFBSSxDQUFDOztJQW1DcEMsQ0FBQztJQWxDRyx3QkFBd0I7SUFFeEIseUJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUMsSUFBSSxDQUFDLGNBQWMsRUFBQyxJQUFJLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFDLElBQUksQ0FBQyxXQUFXLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELGlDQUFjLEdBQWQ7UUFDSSxJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLDhCQUE4QixDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUM1RCxJQUFJLENBQUMsVUFBQyxjQUFjO1lBQ2pCLG9CQUFVLENBQUMsR0FBRyxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFBO1lBQ3hDLElBQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNyQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxvQkFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztnQkFDdEQsS0FBSyxFQUFFLG9CQUFVLENBQUMsS0FBSztnQkFDdkIsT0FBTyxFQUFFLEVBQUU7YUFDZCxDQUFDLENBQUM7WUFDSCxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQyxHQUFHO1lBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDekIsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsOEJBQVcsR0FBWDtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFDRCx5QkFBTSxHQUFOLFVBQVEsRUFBRTtRQUNOLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNwRSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUM1RSxDQUFDO0lBdENEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ0k7SUFITixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBMEM1QjtJQUFELGVBQUM7Q0ExQ0QsQUEwQ0MsQ0ExQ3FDLEVBQUUsQ0FBQyxTQUFTLEdBMENqRDtrQkExQ29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgR2xvYmFsRGF0YSBmcm9tIFwiLi9HbG9iYWxEYXRhXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuZGVjbGFyZSBjb25zdCBmaXJlYmFzZSA6IGFueTtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBwdWJsaWMgZW1haWw6c3RyaW5nID0gbnVsbDtcclxuICAgIHB1YmxpYyBwYXNzd29yZDpzdHJpbmcgPSBudWxsO1xyXG4gICAgcHVibGljIHJlZ2lzdGVyOmNjLkJ1dHRvbiA9IG51bGw7XHJcbiAgICBwdWJsaWMgdG9Mb2dpbjpjYy5CdXR0b24gPSBudWxsO1xyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyID0gY2MuZmluZCgncmVnaXN0ZXInKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyLm5vZGUub24oJ2NsaWNrJyx0aGlzLmhhbmRsZVJlZ2lzdGVyLHRoaXMpO1xyXG4gICAgICAgIHRoaXMudG9Mb2dpbiA9IGNjLmZpbmQoJ2xvZ2luJykuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XHJcbiAgICAgICAgdGhpcy50b0xvZ2luLm5vZGUub24oJ2NsaWNrJyx0aGlzLnRvTG9naW5QYWdlLHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVJlZ2lzdGVyKCl7XHJcbiAgICAgICAgY29uc3QgYXV0aCA9IGZpcmViYXNlLmF1dGgoKTtcclxuICAgICAgICBhdXRoLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCh0aGlzLmVtYWlsLHRoaXMucGFzc3dvcmQpXHJcbiAgICAgICAgLnRoZW4oKHVzZXJDcmVkZW50aWFsKT0+e1xyXG4gICAgICAgICAgICBHbG9iYWxEYXRhLnVpZCA9IHVzZXJDcmVkZW50aWFsLnVzZXIudWlkXHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGFiYXNlID0gZmlyZWJhc2UuZGF0YWJhc2UoKTtcclxuICAgICAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJ3VzZXInKS5jaGlsZChHbG9iYWxEYXRhLnVpZCkuc2V0KHtcclxuICAgICAgICAgICAgICAgIGxldmVsOiBHbG9iYWxEYXRhLmxldmVsLFxyXG4gICAgICAgICAgICAgICAgbXlBcnJheTogW10sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ3NlbGVjdCcpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgY2MuZXJyb3IoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRvTG9naW5QYWdlKCl7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdsb2dpbicpO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIHRoaXMuZW1haWwgPSBjYy5maW5kKCdhY2NvdW50L2xhYmVsJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc7XHJcbiAgICAgICAgdGhpcy5wYXNzd29yZCA9IGNjLmZpbmQoJ3Bhc3N3b3JkL2xhYmVsJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/camera.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e2cc6lDaHpCkYJUApleIHEQ', 'camera');
// script/camera.ts

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
var GlobalData_1 = require("./GlobalData");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        _this.player = null;
        _this.camera = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        // cc.director.getPhysicsManager().enabled = true;
        this.node.setPosition(GlobalData_1.default.cameraPosX, GlobalData_1.default.cameraPosY);
        // const bagNode = cc.find('Canvas/Main Camera/bag');
        // bagNode.on(cc.Node.EventType.MOUSE_ENTER, this.onBagMouseEnter, this);
        // bagNode.on(cc.Node.EventType.MOUSE_LEAVE, this.onBagMouseLeave, this);
        // cc.find('Canvas/Main Camera').on('click', () => {
        //     cc.director.loadScene('bag');
        // });
    };
    // onBagMouseEnter(event) {
    //     const bagNode = event.currentTarget;
    //     bagNode.color = cc.Color.YELLOW; // 设置鼠标悬停时的颜色，这里示例为黄色
    // }
    // onBagMouseLeave(event) {
    //     const bagNode = event.currentTarget;
    //     bagNode.color = cc.Color.WHITE; // 恢复原始颜色
    // }
    // onDestroy() {
    //     const bagNode = cc.find('Canvas/Main Camera/bag');
    //     bagNode.off(cc.Node.EventType.MOUSE_ENTER, this.onBagMouseEnter, this);
    //     bagNode.off(cc.Node.EventType.MOUSE_LEAVE, this.onBagMouseLeave, this);
    // }
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.update = function (dt) {
        // cc.find('Canvas/Main Camera/bag').on('click', () => {
        //     cc.director.loadScene('bag');
        // });
        //cc.log(this.node.x);
        if (this.player.x <= 62 && this.player.x >= -62)
            this.node.x = this.player.x;
        //else this.node.x = 62;
        if (this.player.y <= 140 && this.player.y >= -136)
            this.node.y = this.player.y;
        //else this.node.y = -147;
        GlobalData_1.default.cameraPosX = this.node.position.x;
        GlobalData_1.default.cameraPosY = this.node.position.y;
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    __decorate([
        property({ type: cc.Node })
    ], NewClass.prototype, "player", void 0);
    __decorate([
        property({ type: cc.Camera })
    ], NewClass.prototype, "camera", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjYW1lcmEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXNDO0FBRWhDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBNERDO1FBekRHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFXLE9BQU8sQ0FBQztRQUd2QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBR3ZCLFlBQU0sR0FBYyxJQUFJLENBQUM7O0lBZ0Q3QixDQUFDO0lBOUNHLHdCQUF3QjtJQUV4Qix5QkFBTSxHQUFOO1FBQ0ksa0RBQWtEO1FBQ2xELElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLG9CQUFVLENBQUMsVUFBVSxFQUFDLG9CQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbkUscURBQXFEO1FBQ3JELHlFQUF5RTtRQUN6RSx5RUFBeUU7UUFFekUsb0RBQW9EO1FBQ3BELG9DQUFvQztRQUNwQyxNQUFNO0lBQ1YsQ0FBQztJQUNELDJCQUEyQjtJQUMzQiwyQ0FBMkM7SUFDM0MsNkRBQTZEO0lBQzdELElBQUk7SUFFSiwyQkFBMkI7SUFDM0IsMkNBQTJDO0lBQzNDLGdEQUFnRDtJQUNoRCxJQUFJO0lBQ0osZ0JBQWdCO0lBQ2hCLHlEQUF5RDtJQUN6RCw4RUFBOEU7SUFDOUUsOEVBQThFO0lBQzlFLElBQUk7SUFFSix3QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELHlCQUFNLEdBQU4sVUFBUSxFQUFFO1FBQ04sd0RBQXdEO1FBQ3hELG9DQUFvQztRQUNwQyxNQUFNO1FBQ04sc0JBQXNCO1FBQ3RCLElBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBRTtRQUNqQyx3QkFBd0I7UUFDeEIsSUFBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHO1lBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFFO1FBQzdCLDBCQUEwQjtRQUMzQixvQkFBVSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDN0Msb0JBQVUsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUF4REQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsyQ0FDSTtJQUd2QjtRQURDLFFBQVE7MENBQ2M7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUMsRUFBRSxDQUFDLElBQUksRUFBQyxDQUFDOzRDQUNGO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUMsQ0FBQzs0Q0FDRjtJQVpSLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0E0RDVCO0lBQUQsZUFBQztDQTVERCxBQTREQyxDQTVEcUMsRUFBRSxDQUFDLFNBQVMsR0E0RGpEO2tCQTVEb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHbG9iYWxEYXRhIGZyb20gXCIuL0dsb2JhbERhdGFcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICB0ZXh0OiBzdHJpbmcgPSAnaGVsbG8nO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7dHlwZTpjYy5Ob2RlfSlcclxuICAgIHBsYXllcjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHt0eXBlOmNjLkNhbWVyYX0pXHJcbiAgICBjYW1lcmE6IGNjLkNhbWVyYSA9IG51bGw7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIC8vIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKEdsb2JhbERhdGEuY2FtZXJhUG9zWCxHbG9iYWxEYXRhLmNhbWVyYVBvc1kpO1xyXG4gICAgICAgIC8vIGNvbnN0IGJhZ05vZGUgPSBjYy5maW5kKCdDYW52YXMvTWFpbiBDYW1lcmEvYmFnJyk7XHJcbiAgICAgICAgLy8gYmFnTm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9FTlRFUiwgdGhpcy5vbkJhZ01vdXNlRW50ZXIsIHRoaXMpO1xyXG4gICAgICAgIC8vIGJhZ05vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfTEVBVkUsIHRoaXMub25CYWdNb3VzZUxlYXZlLCB0aGlzKTtcclxuICAgIFxyXG4gICAgICAgIC8vIGNjLmZpbmQoJ0NhbnZhcy9NYWluIENhbWVyYScpLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAvLyAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdiYWcnKTtcclxuICAgICAgICAvLyB9KTtcclxuICAgIH1cclxuICAgIC8vIG9uQmFnTW91c2VFbnRlcihldmVudCkge1xyXG4gICAgLy8gICAgIGNvbnN0IGJhZ05vZGUgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xyXG4gICAgLy8gICAgIGJhZ05vZGUuY29sb3IgPSBjYy5Db2xvci5ZRUxMT1c7IC8vIOiuvue9rum8oOagh+aCrOWBnOaXtueahOminOiJsu+8jOi/memHjOekuuS+i+S4uum7hOiJslxyXG4gICAgLy8gfVxyXG4gICAgXHJcbiAgICAvLyBvbkJhZ01vdXNlTGVhdmUoZXZlbnQpIHtcclxuICAgIC8vICAgICBjb25zdCBiYWdOb2RlID0gZXZlbnQuY3VycmVudFRhcmdldDtcclxuICAgIC8vICAgICBiYWdOb2RlLmNvbG9yID0gY2MuQ29sb3IuV0hJVEU7IC8vIOaBouWkjeWOn+Wni+minOiJslxyXG4gICAgLy8gfVxyXG4gICAgLy8gb25EZXN0cm95KCkge1xyXG4gICAgLy8gICAgIGNvbnN0IGJhZ05vZGUgPSBjYy5maW5kKCdDYW52YXMvTWFpbiBDYW1lcmEvYmFnJyk7XHJcbiAgICAvLyAgICAgYmFnTm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRU5URVIsIHRoaXMub25CYWdNb3VzZUVudGVyLCB0aGlzKTtcclxuICAgIC8vICAgICBiYWdOb2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9MRUFWRSwgdGhpcy5vbkJhZ01vdXNlTGVhdmUsIHRoaXMpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIC8vIGNjLmZpbmQoJ0NhbnZhcy9NYWluIENhbWVyYS9iYWcnKS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnYmFnJyk7XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgLy9jYy5sb2codGhpcy5ub2RlLngpO1xyXG4gICAgICAgIGlmKHRoaXMucGxheWVyLnggPD0gNjIgJiYgdGhpcy5wbGF5ZXIueCA+PSAtNjIpIFxyXG4gICAgICAgICAgICB0aGlzLm5vZGUueCA9IHRoaXMucGxheWVyLnggO1xyXG4gICAgICAgIC8vZWxzZSB0aGlzLm5vZGUueCA9IDYyO1xyXG4gICAgICAgIGlmKHRoaXMucGxheWVyLnkgPD0gMTQwICYmIHRoaXMucGxheWVyLnkgPj0gLTEzNikgXHJcbiAgICAgICAgdGhpcy5ub2RlLnkgPSB0aGlzLnBsYXllci55IDtcclxuICAgICAgICAvL2Vsc2UgdGhpcy5ub2RlLnkgPSAtMTQ3O1xyXG4gICAgICAgR2xvYmFsRGF0YS5jYW1lcmFQb3NYID0gdGhpcy5ub2RlLnBvc2l0aW9uLng7XHJcbiAgICAgICBHbG9iYWxEYXRhLmNhbWVyYVBvc1kgPSB0aGlzLm5vZGUucG9zaXRpb24ueTtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/libaoma.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'faf16SdgkVINYE19C/NE6+y', 'libaoma');
// script/libaoma.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var GlobalData_1 = require("./GlobalData");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        _this.code = null;
        _this.yes = null;
        _this.no = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        this.yes = cc.find('Canvas/yes').getComponent(cc.Button);
        this.yes.node.on('click', this.handle, this);
        this.no = cc.find('Canvas/no').getComponent(cc.Button);
        this.no.node.on('click', this.nope, this);
    };
    NewClass.prototype.handle = function () {
        if (this.code == 'tk888') {
            GlobalData_1.default.pokewoman.push(3);
            cc.director.loadScene('map2');
        }
        else {
            cc.error('wrong code');
        }
    };
    NewClass.prototype.nope = function () {
        cc.director.loadScene('map2');
    };
    NewClass.prototype.update = function (dt) {
        this.code = cc.find('Canvas/e1/label').getComponent(cc.Label).string;
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxsaWJhb21hLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLDJDQUFzQztBQUVoQyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQXNDQztRQW5DRyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLFVBQUksR0FBVyxPQUFPLENBQUM7UUFFaEIsVUFBSSxHQUFVLElBQUksQ0FBQztRQUNuQixTQUFHLEdBQWEsSUFBSSxDQUFDO1FBQ3JCLFFBQUUsR0FBYSxJQUFJLENBQUM7O0lBNEIvQixDQUFDO0lBM0JHLHdCQUF3QjtJQUV4Qix5QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBQyxJQUFJLENBQUMsTUFBTSxFQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQseUJBQU0sR0FBTjtRQUNJLElBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxPQUFPLEVBQ3ZCO1lBQ0ksb0JBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdCLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2pDO2FBRUQ7WUFDSSxFQUFFLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQzFCO0lBQ0wsQ0FBQztJQUVELHVCQUFJLEdBQUo7UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBQ0QseUJBQU0sR0FBTixVQUFRLEVBQUU7UUFDTixJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUN6RSxDQUFDO0lBbENEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ0k7SUFHdkI7UUFEQyxRQUFROzBDQUNjO0lBTk4sUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXNDNUI7SUFBRCxlQUFDO0NBdENELEFBc0NDLENBdENxQyxFQUFFLENBQUMsU0FBUyxHQXNDakQ7a0JBdENvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IEdsb2JhbERhdGEgZnJvbSBcIi4vR2xvYmFsRGF0YVwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcbmRlY2xhcmUgY29uc3QgZmlyZWJhc2UgOiBhbnk7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgdGV4dDogc3RyaW5nID0gJ2hlbGxvJztcclxuXHJcbiAgICBwdWJsaWMgY29kZTpzdHJpbmcgPSBudWxsO1xyXG4gICAgcHVibGljIHllczpjYy5CdXR0b24gPSBudWxsO1xyXG4gICAgcHVibGljIG5vOmNjLkJ1dHRvbiA9IG51bGw7XHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIHRoaXMueWVzID0gY2MuZmluZCgnQ2FudmFzL3llcycpLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4gICAgICAgIHRoaXMueWVzLm5vZGUub24oJ2NsaWNrJyx0aGlzLmhhbmRsZSx0aGlzKTtcclxuICAgICAgICB0aGlzLm5vID0gY2MuZmluZCgnQ2FudmFzL25vJykuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XHJcbiAgICAgICAgdGhpcy5uby5ub2RlLm9uKCdjbGljaycsdGhpcy5ub3BlLHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZSgpe1xyXG4gICAgICAgIGlmKHRoaXMuY29kZSA9PSAndGs4ODgnKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgR2xvYmFsRGF0YS5wb2tld29tYW4ucHVzaCgzKTtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdtYXAyJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNjLmVycm9yKCd3cm9uZyBjb2RlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5vcGUoKXtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ21hcDInKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICB0aGlzLmNvZGUgPSBjYy5maW5kKCdDYW52YXMvZTEvbGFiZWwnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZztcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/select_dong.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4962czxJgVH3Id4UBfgF5Bo', 'select_dong');
// script/select_dong.ts

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
var GlobalData_1 = require("./GlobalData");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewClass.prototype.onLoad = function () {
        var uid = GlobalData_1.default.uid;
        var database = firebase.database();
        cc.director.getPhysicsManager().enabled = true;
        cc.find('Canvas/select/dong1/dong1_btn').on('click', function () {
            firebase.database().ref('user').child(GlobalData_1.default.uid).update({
                myArray: [0],
            });
            GlobalData_1.default.pokewoman.push(0);
            cc.director.loadScene('map2');
        });
        cc.find('Canvas/select/dong2/dong2_btn').on('click', function () {
            firebase.database().ref('user').child(GlobalData_1.default.uid).update({
                myArray: [1],
            });
            GlobalData_1.default.pokewoman.push(1);
            cc.director.loadScene('map2');
        });
        cc.find('Canvas/select/dong3/dong3_btn').on('click', function () {
            firebase.database().ref('user').child(GlobalData_1.default.uid).update({
                myArray: [2],
            });
            GlobalData_1.default.pokewoman.push(2);
            cc.director.loadScene('map2');
        });
        // cc.find('Canvas/logout').on('click', () => {
        //     cc.director.loadScene('login');
        // });
    };
    NewClass.prototype.start = function () {
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxzZWxlY3RfZG9uZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBc0M7QUFFaEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFJNUM7SUFBc0MsNEJBQVk7SUFBbEQ7O0lBb0NBLENBQUM7SUFsQ0cseUJBQU0sR0FBTjtRQUNJLElBQUksR0FBRyxHQUFHLG9CQUFVLENBQUMsR0FBRyxDQUFDO1FBQ3pCLElBQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNyQyxFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUMvQyxFQUFFLENBQUMsSUFBSSxDQUFDLCtCQUErQixDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRTtZQUM3QyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxvQkFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztnQkFDekQsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ2YsQ0FBQyxDQUFDO1lBQ0gsb0JBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdCLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsRUFBRSxDQUFDLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUU7WUFDN0MsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsb0JBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7Z0JBQ3pELE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQzthQUNmLENBQUMsQ0FBQztZQUNILG9CQUFVLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3QixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsQyxDQUFDLENBQUMsQ0FBQztRQUNQLEVBQUUsQ0FBQyxJQUFJLENBQUMsK0JBQStCLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFO1lBQzdDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLG9CQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDO2dCQUN6RCxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDZixDQUFDLENBQUM7WUFDSCxvQkFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDLENBQUM7UUFDSCwrQ0FBK0M7UUFDL0Msc0NBQXNDO1FBQ3RDLE1BQU07SUFFVixDQUFDO0lBRUQsd0JBQUssR0FBTDtJQUNBLENBQUM7SUFsQ2dCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FvQzVCO0lBQUQsZUFBQztDQXBDRCxBQW9DQyxDQXBDcUMsRUFBRSxDQUFDLFNBQVMsR0FvQ2pEO2tCQXBDb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHbG9iYWxEYXRhIGZyb20gXCIuL0dsb2JhbERhdGFcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbmRlY2xhcmUgY29uc3QgZmlyZWJhc2U6IGFueTtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdmFyIHVpZCA9IEdsb2JhbERhdGEudWlkO1xyXG4gICAgICAgIGNvbnN0IGRhdGFiYXNlID0gZmlyZWJhc2UuZGF0YWJhc2UoKTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9zZWxlY3QvZG9uZzEvZG9uZzFfYnRuJykub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJ3VzZXInKS5jaGlsZChHbG9iYWxEYXRhLnVpZCkudXBkYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBteUFycmF5OiBbMF0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIEdsb2JhbERhdGEucG9rZXdvbWFuLnB1c2goMCk7XHJcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ21hcDInKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjYy5maW5kKCdDYW52YXMvc2VsZWN0L2RvbmcyL2RvbmcyX2J0bicpLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCd1c2VyJykuY2hpbGQoR2xvYmFsRGF0YS51aWQpLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgbXlBcnJheTogWzFdLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBHbG9iYWxEYXRhLnBva2V3b21hbi5wdXNoKDEpO1xyXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdtYXAyJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9zZWxlY3QvZG9uZzMvZG9uZzNfYnRuJykub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJ3VzZXInKS5jaGlsZChHbG9iYWxEYXRhLnVpZCkudXBkYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBteUFycmF5OiBbMl0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIEdsb2JhbERhdGEucG9rZXdvbWFuLnB1c2goMik7XHJcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ21hcDInKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBjYy5maW5kKCdDYW52YXMvbG9nb3V0Jykub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ2xvZ2luJyk7XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
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
        return _this;
    }
    NewClass.prototype.start = function () {
        cc.audioEngine.playMusic(this.bgm, true);
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
            case cc.macro.KEY.up:
                this.isMovingUp = true;
                // this.playAnimation("man_up");
                //this.animation.play("man_up");
                break;
            case cc.macro.KEY.down:
                this.isMovingDown = true;
                // this.playAnimation("man_down");
                //this.animation.play("man_down");
                break;
            case cc.macro.KEY.left:
                this.isMovingLeft = true;
                // this.playAnimation("man_left");
                //this.animation.play("man_left");
                break;
            case cc.macro.KEY.right:
                this.isMovingRight = true;
                // this.playAnimation("man_right");
                //this.animation.play("man_right");
                break;
        }
    };
    NewClass.prototype.onKeyUp = function (event) {
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
    NewClass.prototype.update = function (dt) {
        //cc.log(this.node.x, this.node.y);
        // 根据按键状态更新角色位置
        if (this.Gamemanger.palse == false) {
            if (this.isMovingUp) {
                this.node.y += (this.moveSpeed * dt - 0.5);
                if (!this.animation.getAnimationState("man_up").isPlaying)
                    this.animation.play("man_up");
            }
            if (this.isMovingDown) {
                this.node.y -= this.moveSpeed * dt - 0.5;
                if (!this.animation.getAnimationState("man_down").isPlaying)
                    this.animation.play("man_down");
            }
            if (this.isMovingLeft) {
                this.node.x -= this.moveSpeed * dt - +0.5;
                if (!this.animation.getAnimationState("man_left").isPlaying)
                    this.animation.play("man_left");
            }
            if (this.isMovingRight) {
                this.node.x += this.moveSpeed * dt - 0.5;
                if (!this.animation.getAnimationState("man_right").isPlaying)
                    this.animation.play("man_right");
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
        cc.log("Player hits the bush");
        var worldManifold = contact.getWorldManifold();
        var points = worldManifold.points;
        var normal = worldManifold.normal;
        if (otherCollider.tag == 1) {
            cc.log("Player hits the enemy");
            this.isBattle = true;
            cc.audioEngine.pauseMusic();
            cc.audioEngine.playEffect(this.goinSound, false);
            var canvasNode = cc.find("Canvas"); // 获取画布节点
            var blinkAction = cc.blink(2, 5); // 闪烁动画，持续时间为2秒，闪烁次数为5次
            this.Gamemanger.palse = true;
            console.log(this.Gamemanger.palse);
            canvasNode.runAction(cc.sequence(blinkAction, cc.callFunc(function () {
                cc.director.loadScene("battle");
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
        property
    ], NewClass.prototype, "text", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], NewClass.prototype, "bgm", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], NewClass.prototype, "goinSound", void 0);
    __decorate([
        property(cc.Integer)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxtYW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFDMUMsNkNBQXdDO0FBQ3hDLDJDQUFzQztBQUV0QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQXVMQztRQXBMRyxnQkFBVSxHQUFnQixJQUFJLENBQUM7UUFHL0IsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQVcsT0FBTyxDQUFDO1FBR3ZCLFNBQUcsR0FBaUIsSUFBSSxDQUFDO1FBR3pCLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRy9CLGVBQVMsR0FBVyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0I7UUFFdkMsZUFBUyxHQUFFLElBQUksQ0FBQyxDQUFDLE9BQU87UUFFaEIsY0FBUSxHQUFZLEtBQUssQ0FBQztRQUUxQixnQkFBVSxHQUFZLEtBQUssQ0FBQztRQUM1QixrQkFBWSxHQUFZLEtBQUssQ0FBQztRQUM5QixrQkFBWSxHQUFZLEtBQUssQ0FBQztRQUM5QixtQkFBYSxHQUFZLEtBQUssQ0FBQzs7SUE0SjNDLENBQUM7SUF6Skcsd0JBQUssR0FBTDtRQUNJLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzVFLGdDQUFnQztRQUNoQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDbEMsQ0FBQztJQUVELHlCQUFNLEdBQU47UUFDSSxTQUFTO1FBQ1QsRUFBRSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFB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QUMsdUJBQXVCO1lBQ3pELElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUM1QixXQUFXLEVBQ1gsRUFBRSxDQUFDLFFBQVEsQ0FBQztnQkFDUixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNwQyxDQUFDLENBQUMsQ0FDTCxDQUFDLENBQUM7WUFDSCw4QkFBOEI7WUFDOUIsa0RBQWtEO1NBQ3JEO0lBQ0wsQ0FBQztJQW5MRDtRQURDLFFBQVEsQ0FBQyxxQkFBVyxDQUFDO2dEQUNTO0lBRy9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ0k7SUFHdkI7UUFEQyxRQUFROzBDQUNjO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUMsQ0FBQzt5Q0FDTDtJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBQyxFQUFFLENBQUMsU0FBUyxFQUFDLENBQUM7K0NBQ0M7SUFHL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzsrQ0FDQztJQWxCTCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBdUw1QjtJQUFELGVBQUM7Q0F2TEQsQUF1TEMsQ0F2THFDLEVBQUUsQ0FBQyxTQUFTLEdBdUxqRDtrQkF2TG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuaW1wb3J0IEdhbWVNYW5hZ2VyIGZyb20gXCIuL2dhbWVtYW5hZ2VyXCI7XHJcbmltcG9ydCBHbG9iYWxEYXRhIGZyb20gXCIuL0dsb2JhbERhdGFcIjtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShHYW1lTWFuYWdlcilcclxuICAgIEdhbWVtYW5nZXI6IEdhbWVNYW5hZ2VyID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgdGV4dDogc3RyaW5nID0gJ2hlbGxvJztcclxuXHJcbiAgICBAcHJvcGVydHkoe3R5cGU6Y2MuQXVkaW9DbGlwfSlcclxuICAgIGJnbTogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuICAgIFxyXG4gICAgQHByb3BlcnR5KHt0eXBlOmNjLkF1ZGlvQ2xpcH0pXHJcbiAgICBnb2luU291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkludGVnZXIpXHJcbiAgICBtb3ZlU3BlZWQ6IG51bWJlciA9IDE7IC8vIOenu+WKqOmAn+W6pu+8jOWPr+S7peagueaNrumcgOimgeiwg+aVtFxyXG5cclxuICAgIGFuaW1hdGlvbj0gbnVsbDsgLy8g5Yqo55S757uE5Lu2XHJcblxyXG4gICAgcHJpdmF0ZSBpc0JhdHRsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgaXNNb3ZpbmdVcDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBpc01vdmluZ0Rvd246IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgaXNNb3ZpbmdMZWZ0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGlzTW92aW5nUmlnaHQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblxyXG4gICAgc3RhcnQoKXtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5iZ20sIHRydWUpO1xyXG4gICAgICAgIHRoaXMuR2FtZW1hbmdlciA9IGNjLmZpbmQoJ0NhbnZhcy9nYW1lbWFuYWdlcicpLmdldENvbXBvbmVudCgnZ2FtZW1hbmFnZXInKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLkdhbWVtYW5nZXIpO1xyXG4gICAgICAgIHRoaXMuR2FtZW1hbmdlci5wYWxzZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICAvLyDms6jlhozplK7nm5jkuovku7ZcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHZhciBtYW5hZ2VyID0gY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpO1xyXG4gICAgICAgIG1hbmFnZXIuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb24gPSB0aGlzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsIHRoaXMub25LZXlVcCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKEdsb2JhbERhdGEuUGxheWVyUG9zWCxHbG9iYWxEYXRhLlBsYXllclBvc1kpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICAvLyDnp7vpmaTplK7nm5jkuovku7bnm5HlkKxcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsIHRoaXMub25LZXlVcCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcGxheUFuaW1hdGlvbihhbmltYXRpb25OYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5hbmltYXRpb24gJiYgdGhpcy5hbmltYXRpb24uZ2V0QW5pbWF0aW9uU3RhdGUoYW5pbWF0aW9uTmFtZSkuaXNQbGF5aW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uLnBsYXkoYW5pbWF0aW9uTmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RvcEFuaW1hdGlvbihhbmltYXRpb25OYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5hbmltYXRpb24gJiYgdGhpcy5hbmltYXRpb24uZ2V0QW5pbWF0aW9uU3RhdGUoYW5pbWF0aW9uTmFtZSkuaXNQbGF5aW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uLnN0b3AoYW5pbWF0aW9uTmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uS2V5RG93bihldmVudDogY2MuRXZlbnQuRXZlbnRLZXlib2FyZCkge1xyXG4gICAgICAgIHN3aXRjaChldmVudC5rZXlDb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnVwOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc01vdmluZ1VwID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMucGxheUFuaW1hdGlvbihcIm1hbl91cFwiKTtcclxuICAgICAgICAgICAgICAgIC8vdGhpcy5hbmltYXRpb24ucGxheShcIm1hbl91cFwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kb3duOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc01vdmluZ0Rvd24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5wbGF5QW5pbWF0aW9uKFwibWFuX2Rvd25cIik7XHJcbiAgICAgICAgICAgICAgICAvL3RoaXMuYW5pbWF0aW9uLnBsYXkoXCJtYW5fZG93blwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5sZWZ0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc01vdmluZ0xlZnQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5wbGF5QW5pbWF0aW9uKFwibWFuX2xlZnRcIik7XHJcbiAgICAgICAgICAgICAgICAvL3RoaXMuYW5pbWF0aW9uLnBsYXkoXCJtYW5fbGVmdFwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5yaWdodDpcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNNb3ZpbmdSaWdodCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnBsYXlBbmltYXRpb24oXCJtYW5fcmlnaHRcIik7XHJcbiAgICAgICAgICAgICAgICAvL3RoaXMuYW5pbWF0aW9uLnBsYXkoXCJtYW5fcmlnaHRcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25LZXlVcChldmVudDogY2MuRXZlbnQuRXZlbnRLZXlib2FyZCkge1xyXG4gICAgICAgIHN3aXRjaChldmVudC5rZXlDb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnVwOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc01vdmluZ1VwID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgdGhpcy5zdG9wQW5pbWF0aW9uKFwibWFuX3VwXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmRvd246XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzTW92aW5nRG93biA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgIHRoaXMuc3RvcEFuaW1hdGlvbihcIm1hbl9kb3duXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmxlZnQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzTW92aW5nTGVmdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgIHRoaXMuc3RvcEFuaW1hdGlvbihcIm1hbl9sZWZ0XCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnJpZ2h0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc01vdmluZ1JpZ2h0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgdGhpcy5zdG9wQW5pbWF0aW9uKFwibWFuX3JpZ2h0XCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdDogbnVtYmVyKSB7XHJcbiAgICAgICAgLy9jYy5sb2codGhpcy5ub2RlLngsIHRoaXMubm9kZS55KTtcclxuICAgICAgICAvLyDmoLnmja7mjInplK7nirbmgIHmm7TmlrDop5LoibLkvY3nva5cclxuICAgICAgICBpZih0aGlzLkdhbWVtYW5nZXIucGFsc2U9PWZhbHNlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNNb3ZpbmdVcCkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUueSArPSAodGhpcy5tb3ZlU3BlZWQgKiBkdCAtIDAuNSApO1xyXG4gICAgICAgICAgICAgICAgaWYoIXRoaXMuYW5pbWF0aW9uLmdldEFuaW1hdGlvblN0YXRlKFwibWFuX3VwXCIpLmlzUGxheWluZyl0aGlzLmFuaW1hdGlvbi5wbGF5KFwibWFuX3VwXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzTW92aW5nRG93bikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnkgLT0gdGhpcy5tb3ZlU3BlZWQgKiBkdCAtIDAuNTtcclxuICAgICAgICAgICAgICAgIGlmKCF0aGlzLmFuaW1hdGlvbi5nZXRBbmltYXRpb25TdGF0ZShcIm1hbl9kb3duXCIpLmlzUGxheWluZyl0aGlzLmFuaW1hdGlvbi5wbGF5KFwibWFuX2Rvd25cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNNb3ZpbmdMZWZ0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUueCAtPSB0aGlzLm1vdmVTcGVlZCAqIGR0IC0gKyAwLjU7XHJcbiAgICAgICAgICAgICAgICBpZighdGhpcy5hbmltYXRpb24uZ2V0QW5pbWF0aW9uU3RhdGUoXCJtYW5fbGVmdFwiKS5pc1BsYXlpbmcpdGhpcy5hbmltYXRpb24ucGxheShcIm1hbl9sZWZ0XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzTW92aW5nUmlnaHQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS54ICs9IHRoaXMubW92ZVNwZWVkICogZHQgLSAwLjU7XHJcbiAgICAgICAgICAgICAgICBpZighdGhpcy5hbmltYXRpb24uZ2V0QW5pbWF0aW9uU3RhdGUoXCJtYW5fcmlnaHRcIikuaXNQbGF5aW5nKXRoaXMuYW5pbWF0aW9uLnBsYXkoXCJtYW5fcmlnaHRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKCh0aGlzLm5vZGUueCA+PSA0OCAmJiB0aGlzLm5vZGUueCA8PSA4OCkgJiYgKHRoaXMubm9kZS55ID49IDUwICYmIHRoaXMubm9kZS55IDw9IDg2KSAmJiB0aGlzLmlzQmF0dGxlID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuaXNCYXR0bGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyBjYy5hdWRpb0VuZ2luZS5wYXVzZU11c2ljKCk7XHJcbiAgICAgICAgICAgIC8vIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5nb2luU291bmQsIGZhbHNlKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgLy8gdmFyIGNhbnZhc05vZGUgPSBjYy5maW5kKFwiQ2FudmFzXCIpOyAvLyDojrflj5bnlLvluIPoioLngrlcclxuICAgICAgICAgICAgLy8gdmFyIGJsaW5rQWN0aW9uID0gY2MuYmxpbmsoMiwgNSk7IC8vIOmXqueDgeWKqOeUu++8jOaMgee7reaXtumXtOS4ujLnp5LvvIzpl6rng4HmrKHmlbDkuLo15qyhXHJcbiAgICAgICAgICAgIC8vIHRoaXMuR2FtZW1hbmdlci5wYWxzZSA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuR2FtZW1hbmdlci5wYWxzZSk7XHJcbiAgICAgICAgICAgIC8vIGNhbnZhc05vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICAvLyAgICAgYmxpbmtBY3Rpb24sXHJcbiAgICAgICAgICAgIC8vICAgICBjYy5jYWxsRnVuYyhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiYmF0dGxlXCIpO1xyXG4gICAgICAgICAgICAvLyAgICAgfSlcclxuICAgICAgICAgICAgLy8gKSk7XHJcbiAgICAgICAgfSAgIFxyXG4gICAgICAgIEdsb2JhbERhdGEuUGxheWVyUG9zWCA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpLng7XHJcbiAgICAgICAgR2xvYmFsRGF0YS5QbGF5ZXJQb3NZID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCkueTsgIFxyXG4gICAgfVxyXG5cclxuICAgIG9uQmVnaW5Db250YWN0KGNvbnRhY3QsIHNlbGZDb2xsaWRlciwgb3RoZXJDb2xsaWRlcikge1xyXG4gICAgICAgIGNjLmxvZyhcIlBsYXllciBoaXRzIHRoZSBidXNoXCIpO1xyXG4gICAgICAgIGxldCB3b3JsZE1hbmlmb2xkID0gY29udGFjdC5nZXRXb3JsZE1hbmlmb2xkKCk7XHJcbiAgICAgICAgbGV0IHBvaW50cyA9IHdvcmxkTWFuaWZvbGQucG9pbnRzO1xyXG4gICAgICAgIGxldCBub3JtYWwgPSB3b3JsZE1hbmlmb2xkLm5vcm1hbDtcclxuICAgICAgICBpZihvdGhlckNvbGxpZGVyLnRhZyA9PSAxKXtcclxuICAgICAgICAgICAgY2MubG9nKFwiUGxheWVyIGhpdHMgdGhlIGVuZW15XCIpO1xyXG4gICAgICAgICAgICB0aGlzLmlzQmF0dGxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGF1c2VNdXNpYygpO1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuZ29pblNvdW5kLCBmYWxzZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIHZhciBjYW52YXNOb2RlID0gY2MuZmluZChcIkNhbnZhc1wiKTsgLy8g6I635Y+W55S75biD6IqC54K5XHJcbiAgICAgICAgICAgIHZhciBibGlua0FjdGlvbiA9IGNjLmJsaW5rKDIsIDUpOyAvLyDpl6rng4HliqjnlLvvvIzmjIHnu63ml7bpl7TkuLoy56eS77yM6Zeq54OB5qyh5pWw5Li6NeasoVxyXG4gICAgICAgICAgICB0aGlzLkdhbWVtYW5nZXIucGFsc2UgPSB0cnVlO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLkdhbWVtYW5nZXIucGFsc2UpO1xyXG4gICAgICAgICAgICBjYW52YXNOb2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShcclxuICAgICAgICAgICAgICAgIGJsaW5rQWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgY2MuY2FsbEZ1bmMoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImJhdHRsZVwiKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICkpO1xyXG4gICAgICAgICAgICAvL2NjLmF1ZGlvRW5naW5lLnBhdXNlTXVzaWMoKTtcclxuICAgICAgICAgICAgLy9jYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuYmF0dGxlQmdtLCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/handleSetting.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7677e2WM5lKEZMWMP0sxwHk', 'handleSetting');
// script/handleSetting.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var GlobalData_1 = require("./GlobalData");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.volume_slider = null;
        _this.save = null;
        _this.quit = null;
        _this.back = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        this.save.node.on('click', this.SaveGame, this);
        this.quit.node.on('click', this.quitGame, this);
        this.back.node.on('click', this.backToMap, this);
    };
    NewClass.prototype.SaveGame = function () {
        var uid = GlobalData_1.default.uid;
        var database = firebase.database();
        var userRef = database.ref().child('user').child(uid);
        userRef.child('myArray').set(GlobalData_1.default.pokewoman)
            .then(function () {
            console.log('myArray saved successfully');
        })
            .catch(function (error) {
            console.error('Error saving myArray:', error);
        });
    };
    NewClass.prototype.quitGame = function () {
        GlobalData_1.default.uid = "";
        var auth = firebase.auth();
        auth.signOut().then(function () {
            // User signed out successfully
            cc.director.loadScene('login');
        }).catch(function (error) {
            // An error occurred while signing out
            console.error("Sign out error:", error);
        });
    };
    NewClass.prototype.backToMap = function () {
        cc.director.loadScene('map2');
    };
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.update = function (dt) {
        GlobalData_1.default.volume = this.volume_slider.progress;
    };
    __decorate([
        property(cc.Slider)
    ], NewClass.prototype, "volume_slider", void 0);
    __decorate([
        property(cc.Button)
    ], NewClass.prototype, "save", void 0);
    __decorate([
        property(cc.Button)
    ], NewClass.prototype, "quit", void 0);
    __decorate([
        property(cc.Button)
    ], NewClass.prototype, "back", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxoYW5kbGVTZXR0aW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLDJDQUFzQztBQUVoQyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQXlEQztRQXRERyxtQkFBYSxHQUFjLElBQUksQ0FBQztRQUdoQyxVQUFJLEdBQWMsSUFBSSxDQUFDO1FBR3ZCLFVBQUksR0FBYyxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFjLElBQUksQ0FBQzs7SUE2QzNCLENBQUM7SUF6Q0csd0JBQXdCO0lBRXhCLHlCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFDLElBQUksQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBQyxJQUFJLENBQUMsUUFBUSxFQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUMsSUFBSSxDQUFDLFNBQVMsRUFBQyxJQUFJLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsMkJBQVEsR0FBUjtRQUNJLElBQU0sR0FBRyxHQUFHLG9CQUFVLENBQUMsR0FBRyxDQUFDO1FBQzNCLElBQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNyQyxJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN4RCxPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxvQkFBVSxDQUFDLFNBQVMsQ0FBQzthQUM3QyxJQUFJLENBQUM7WUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUM7UUFDOUMsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUMsS0FBSztZQUNULE9BQU8sQ0FBQyxLQUFLLENBQUMsdUJBQXVCLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDbEQsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBQ0QsMkJBQVEsR0FBUjtRQUNJLG9CQUFVLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUNwQixJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQztZQUNoQiwrQkFBK0I7WUFDL0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUMsS0FBSztZQUNiLHNDQUFzQztZQUN0QyxPQUFPLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzFDLENBQUMsQ0FBQyxDQUFDO0lBQ1QsQ0FBQztJQUNELDRCQUFTLEdBQVQ7UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBQ0Qsd0JBQUssR0FBTDtJQUVBLENBQUM7SUFFRCx5QkFBTSxHQUFOLFVBQVEsRUFBRTtRQUNOLG9CQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO0lBQ3BELENBQUM7SUFyREQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzttREFDWTtJQUdoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzBDQUNHO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7MENBQ0c7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzswQ0FDRztJQVpOLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0F5RDVCO0lBQUQsZUFBQztDQXpERCxBQXlEQyxDQXpEcUMsRUFBRSxDQUFDLFNBQVMsR0F5RGpEO2tCQXpEb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBHbG9iYWxEYXRhIGZyb20gXCIuL0dsb2JhbERhdGFcIjtcclxuZGVjbGFyZSBjb25zdCBmaXJlYmFzZSA6IGFueSA7XHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TbGlkZXIpXHJcbiAgICB2b2x1bWVfc2xpZGVyOiBjYy5TbGlkZXIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBzYXZlOiBjYy5CdXR0b24gPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBxdWl0OiBjYy5CdXR0b24gPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBiYWNrOiBjYy5CdXR0b24gPSBudWxsO1xyXG5cclxuXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB0aGlzLnNhdmUubm9kZS5vbignY2xpY2snLHRoaXMuU2F2ZUdhbWUsdGhpcyk7XHJcbiAgICAgICAgdGhpcy5xdWl0Lm5vZGUub24oJ2NsaWNrJyx0aGlzLnF1aXRHYW1lLHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYmFjay5ub2RlLm9uKCdjbGljaycsdGhpcy5iYWNrVG9NYXAsdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgU2F2ZUdhbWUoKSB7XHJcbiAgICAgICAgY29uc3QgdWlkID0gR2xvYmFsRGF0YS51aWQ7XHJcbiAgICAgICAgY29uc3QgZGF0YWJhc2UgPSBmaXJlYmFzZS5kYXRhYmFzZSgpO1xyXG4gICAgICAgIGNvbnN0IHVzZXJSZWYgPSBkYXRhYmFzZS5yZWYoKS5jaGlsZCgndXNlcicpLmNoaWxkKHVpZCk7XHJcbiAgICAgICAgdXNlclJlZi5jaGlsZCgnbXlBcnJheScpLnNldChHbG9iYWxEYXRhLnBva2V3b21hbilcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ215QXJyYXkgc2F2ZWQgc3VjY2Vzc2Z1bGx5Jyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHNhdmluZyBteUFycmF5OicsIGVycm9yKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBxdWl0R2FtZSgpe1xyXG4gICAgICAgIEdsb2JhbERhdGEudWlkID0gXCJcIjtcclxuICAgICAgICBjb25zdCBhdXRoID0gZmlyZWJhc2UuYXV0aCgpO1xyXG4gICAgICAgIGF1dGguc2lnbk91dCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBVc2VyIHNpZ25lZCBvdXQgc3VjY2Vzc2Z1bGx5XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnbG9naW4nKTtcclxuICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAvLyBBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBzaWduaW5nIG91dFxyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiU2lnbiBvdXQgZXJyb3I6XCIsIGVycm9yKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgYmFja1RvTWFwKCl7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdtYXAyJyk7XHJcbiAgICB9XHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBHbG9iYWxEYXRhLnZvbHVtZSA9IHRoaXMudm9sdW1lX3NsaWRlci5wcm9ncmVzcztcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/setting.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7c2c8dN56ZMCoF5vATlE0Um', 'setting');
// script/setting.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.setting_btn = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        this.setting_btn = this.getComponent(cc.Button);
        this.setting_btn.node.on('click', this.toSetting, this);
    };
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.toSetting = function () {
        cc.director.loadScene('setting');
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxzZXR0aW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBa0JDO1FBZlUsaUJBQVcsR0FBZSxJQUFJLENBQUM7O1FBY3RDLGlCQUFpQjtJQUNyQixDQUFDO0lBZEcsd0JBQXdCO0lBRXhCLHlCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUMsSUFBSSxDQUFDLFNBQVMsRUFBQyxJQUFJLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQsd0JBQUssR0FBTDtJQUVBLENBQUM7SUFDRCw0QkFBUyxHQUFUO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQWhCZ0IsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWtCNUI7SUFBRCxlQUFDO0NBbEJELEFBa0JDLENBbEJxQyxFQUFFLENBQUMsU0FBUyxHQWtCakQ7a0JBbEJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgXHJcbiAgICBwdWJsaWMgc2V0dGluZ19idG4gOiBjYy5CdXR0b24gPSBudWxsO1xyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB0aGlzLnNldHRpbmdfYnRuID0gdGhpcy5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcclxuICAgICAgICB0aGlzLnNldHRpbmdfYnRuLm5vZGUub24oJ2NsaWNrJyx0aGlzLnRvU2V0dGluZyx0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfVxyXG4gICAgdG9TZXR0aW5nKCl7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdzZXR0aW5nJyk7XHJcbiAgICB9XHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/universe_select.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cae20nrkCVIxL1GbA60rjuj', 'universe_select');
// script/universe_select.ts

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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewClass.prototype.onLoad = function () {
        cc.director.getPhysicsManager().enabled = true;
        cc.find('Canvas/p1').on('click', function () {
            cc.director.loadScene('map2');
        });
        cc.find('Canvas/p2').on('click', function () {
            cc.director.loadScene('map2');
        });
        cc.find('Canvas/p3').on('click', function () {
            cc.director.loadScene('map2');
        });
    };
    NewClass.prototype.start = function () {
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx1bml2ZXJzZV9zZWxlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFJNUM7SUFBc0MsNEJBQVk7SUFBbEQ7O0lBa0JBLENBQUM7SUFoQkcseUJBQU0sR0FBTjtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQy9DLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRTtZQUN6QixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0QyxDQUFDLENBQUMsQ0FBQztRQUNILEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRTtZQUN6QixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsQyxDQUFDLENBQUMsQ0FBQztRQUNQLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRTtZQUN6QixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCx3QkFBSyxHQUFMO0lBQ0EsQ0FBQztJQWhCZ0IsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWtCNUI7SUFBRCxlQUFDO0NBbEJELEFBa0JDLENBbEJxQyxFQUFFLENBQUMsU0FBUyxHQWtCakQ7a0JBbEJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdsb2JhbERhdGEgZnJvbSBcIi4vR2xvYmFsRGF0YVwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuZGVjbGFyZSBjb25zdCBmaXJlYmFzZTogYW55O1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9wMScpLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnbWFwMicpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9wMicpLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnbWFwMicpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBjYy5maW5kKCdDYW52YXMvcDMnKS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ21hcDInKTtcclxuICAgICAgICB9KTsgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgfVxyXG5cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/universe.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '92c1bLVf2RJgLClfOvw57ah', 'universe');
// script/universe.ts

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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        _this.camera = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad() {
    //     this.node.on('click', ()=>{
    //         cc.director.loadScene('bag');
    //     });
    // }
    NewClass.prototype.onLoad = function () {
        var button = this.getComponent(cc.Button);
        button.node.on(cc.Node.EventType.TOUCH_END, this.onButtonClick, this);
    };
    NewClass.prototype.onButtonClick = function () {
        cc.director.loadScene('universe');
    };
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.update = function (dt) {
        // console.log(this.node.x);
        // console.log(this.node.y);
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    __decorate([
        property({ type: cc.Camera })
    ], NewClass.prototype, "camera", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx1bml2ZXJzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQW1DQztRQWhDRyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLFVBQUksR0FBVyxPQUFPLENBQUM7UUFHdkIsWUFBTSxHQUFjLElBQUksQ0FBQzs7SUEwQjdCLENBQUM7SUF4Qkcsd0JBQXdCO0lBRXhCLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsd0NBQXdDO0lBQ3hDLFVBQVU7SUFDVixJQUFJO0lBQ0oseUJBQU0sR0FBTjtRQUNJLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFFRCxnQ0FBYSxHQUFiO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQseUJBQU0sR0FBTixVQUFRLEVBQUU7UUFDTiw0QkFBNEI7UUFDNUIsNEJBQTRCO0lBQ2hDLENBQUM7SUEvQkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsyQ0FDSTtJQUd2QjtRQURDLFFBQVE7MENBQ2M7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUMsRUFBRSxDQUFDLE1BQU0sRUFBQyxDQUFDOzRDQUNGO0lBVFIsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQW1DNUI7SUFBRCxlQUFDO0NBbkNELEFBbUNDLENBbkNxQyxFQUFFLENBQUMsU0FBUyxHQW1DakQ7a0JBbkNvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHRleHQ6IHN0cmluZyA9ICdoZWxsbyc7XHJcblxyXG4gICAgQHByb3BlcnR5KHt0eXBlOmNjLkNhbWVyYX0pXHJcbiAgICBjYW1lcmE6IGNjLkNhbWVyYSA9IG51bGw7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkKCkge1xyXG4gICAgLy8gICAgIHRoaXMubm9kZS5vbignY2xpY2snLCAoKT0+e1xyXG4gICAgLy8gICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ2JhZycpO1xyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gfVxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XHJcbiAgICAgICAgYnV0dG9uLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uQnV0dG9uQ2xpY2ssIHRoaXMpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBvbkJ1dHRvbkNsaWNrKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgndW5pdmVyc2UnKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm5vZGUueCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5ub2RlLnkpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------
