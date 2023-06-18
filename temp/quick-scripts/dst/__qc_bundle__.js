
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
require('./assets/script/bags2');
require('./assets/script/battle_bag');
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
require('./assets/script/man2');
require('./assets/script/no');
require('./assets/script/register');
require('./assets/script/select_dong');
require('./assets/script/setting');
require('./assets/script/universe');
require('./assets/script/universe_select');
require('./assets/script/yuan');

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
                    var __filename = 'preview-scripts/assets/script/battle_bag.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7c477OQJjtGqKdA1lP6WL15', 'battle_bag');
// script/battle_bag.ts

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
        // LIFE-CYCLE CALLBACKS:
        _this.nowchoose = 0;
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
        this.node.getChildByName('select').active = false;
        this.node.getChildByName('select_label').active = false;
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
            _this.nowchoose = 0;
            // this.nm.string = "岩東勇";
            // this.atk_num.string = "100";
        });
        cc.find('Canvas/block/Sprite1').on('click', function () {
            _this.node.getChildByName('Sprite6').getComponent(cc.Sprite).spriteFrame = _this.sprite[_this.bag[1]];
            _this.node.getChildByName('Sprite6').active = true;
            _this.node.getChildByName('Sprite6').scale = 0.1;
            _this.update_s6(_this.bag[1]);
            _this.nowchoose = 1;
            // this.nm.string = "炎東勇";
            // this.atk_num.string = "100";
        });
        cc.find('Canvas/block/Sprite2').on('click', function () {
            _this.node.getChildByName('Sprite6').getComponent(cc.Sprite).spriteFrame = _this.sprite[_this.bag[2]];
            _this.node.getChildByName('Sprite6').active = true;
            _this.node.getChildByName('Sprite6').scale = 0.1;
            _this.update_s6(_this.bag[2]);
            _this.nowchoose = 2;
            // this.nm.string = "嚴冬勇";
            // this.atk_num.string = "100";
        });
        cc.find('Canvas/block/Sprite3').on('click', function () {
            _this.node.getChildByName('Sprite6').getComponent(cc.Sprite).spriteFrame = _this.sprite[_this.bag[3]];
            _this.node.getChildByName('Sprite6').active = true;
            _this.node.getChildByName('Sprite6').scale = 0.1;
            _this.update_s6(_this.bag[3]);
            _this.nowchoose = 3;
        });
        cc.find('Canvas/block/Sprite4').on('click', function () {
            _this.node.getChildByName('Sprite6').getComponent(cc.Sprite).spriteFrame = _this.sprite[_this.bag[4]];
            _this.node.getChildByName('Sprite6').active = true;
            _this.node.getChildByName('Sprite6').scale = 0.1;
            _this.update_s6(_this.bag[4]);
            _this.nowchoose = 4;
        });
        cc.find('Canvas/block/Sprite5').on('click', function () {
            _this.node.getChildByName('Sprite6').getComponent(cc.Sprite).spriteFrame = _this.sprite[_this.bag[5]];
            _this.node.getChildByName('Sprite6').active = true;
            _this.node.getChildByName('Sprite6').scale = 0.1;
            _this.update_s6(_this.bag[5]);
            _this.nowchoose = 5;
        });
        cc.find('Canvas/block/select').on('click', function () {
            GlobalData_1.default.myelf = _this.nowchoose;
            cc.director.loadScene("battle");
        });
    };
    NewClass.prototype.update_s6 = function (a) {
        this.node.getChildByName('name').active = true;
        this.node.getChildByName('atk').active = true;
        this.node.getChildByName('atk_num').active = true;
        this.node.getChildByName('hp').active = true;
        this.node.getChildByName('hp_num').active = true;
        this.node.getChildByName('select').active = true;
        this.node.getChildByName('select_label').active = true;
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
        else if (a == 6) {
            this.nm.string = "fishKing";
            this.atk_num.string = "10";
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
    __decorate([
        property
    ], NewClass.prototype, "nowchoose", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxiYXR0bGVfYmFnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBQzFDLDJDQUFzQztBQUd0QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQXNNQztRQW5NRyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLFVBQUksR0FBVyxPQUFPLENBQUM7UUFHdkIsWUFBTSxHQUFxQixFQUFFLENBQUM7UUFHOUIsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUVsQiwwQ0FBMEM7UUFDMUMsc0NBQXNDO1FBQ3RDLFNBQUcsR0FBWSxvQkFBVSxDQUFDLFNBQVMsQ0FBQztRQUVwQyx3QkFBd0I7UUFFeEIsU0FBRyxHQUFXLENBQUMsQ0FBQztRQUdoQixRQUFFLEdBQWEsSUFBSSxDQUFDO1FBRXBCLGFBQU8sR0FBYSxJQUFJLENBQUM7UUFFekIsWUFBTSxHQUFhLElBQUksQ0FBQztRQUV4Qix3QkFBd0I7UUFFeEIsZUFBUyxHQUFXLENBQUMsQ0FBQzs7SUF1SzFCLENBQUM7SUFyS0cseUJBQU0sR0FBTjtRQUFBLGlCQVlDO1FBWEcsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEUsRUFB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R3ZCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDOzRDQUNHO0lBRzlCO1FBREMsUUFBUTsyQ0FDUztJQVFsQjtRQURDLFFBQVE7eUNBQ087SUFHaEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt3Q0FDQztJQUVwQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzZDQUNNO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NENBQ0s7SUFJeEI7UUFEQyxRQUFROytDQUNhO0lBL0JMLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FzTTVCO0lBQUQsZUFBQztDQXRNRCxBQXNNQyxDQXRNcUMsRUFBRSxDQUFDLFNBQVMsR0FzTWpEO2tCQXRNb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5pbXBvcnQgR2xvYmFsRGF0YSBmcm9tIFwiLi9HbG9iYWxEYXRhXCI7XHJcbmRlY2xhcmUgY29uc3QgZmlyZWJhc2U6IGFueTtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICB0ZXh0OiBzdHJpbmcgPSAnaGVsbG8nO1xyXG5cclxuICAgIEBwcm9wZXJ0eShbY2MuU3ByaXRlRnJhbWVdKVxyXG4gICAgc3ByaXRlOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBpbmRleDogbnVtYmVyID0gMDtcclxuXHJcbiAgICAvKiBnZXQgYSByZXR1cm4gYXJyYXkgZnJvbSBvdGhlciBzY3JpcHQgKi9cclxuICAgIC8vIGJhZzogbnVtYmVyW10gPSBbMywgNCwgMSwgMiwgNSwgMF07XHJcbiAgICBiYWc6IG51bWJlcltdID1HbG9iYWxEYXRhLnBva2V3b21hbjtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgbnVtOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIG5tOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBhdGtfbnVtOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBocF9udW06IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgbm93Y2hvb3NlOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdGhpcy5ubSA9IGNjLmZpbmQoXCJDYW52YXMvYmxvY2svbmFtZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIHRoaXMuYXRrX251bSA9IGNjLmZpbmQoXCJDYW52YXMvYmxvY2svYXRrX251bVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIHRoaXMuaHBfbnVtID0gY2MuZmluZChcIkNhbnZhcy9ibG9jay9ocF9udW1cIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICB2YXIgdWlkID0gR2xvYmFsRGF0YS51aWQ7ICBcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInVpZDpcIix1aWQpO1xyXG4gICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKHVpZCArICdwb2tld29tYW4nKS5vbigndmFsdWUnLCBzbmFwc2hvdCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubnVtID0gc25hcHNob3QudmFsKCk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubnVtKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5hdGtfbnVtLnN0cmluZyA9IFwiMjAwXCI7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdTcHJpdGU2JykuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCduYW1lJykuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdhdGsnKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2F0a19udW0nKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2hwJykuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdocF9udW0nKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3NlbGVjdCcpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnc2VsZWN0X2xhYmVsJykuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgLy8gaXRlcmF0ZSB0aHJvdWdoIGJhZ1xyXG4gICAgICAgIC8vIGkgOiBiYWcuaW5kZXggLCBjaGlsZC5pbmRleFxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYmFnKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ1Nwcml0ZScgKyBpKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByaXRlW3RoaXMuYmFnW2ldXTtcclxuICAgICAgICAgICAgLy8gc2NhbGUgMC4xXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnU3ByaXRlJyArIGkpLnNjYWxlID0gMC4wNTtcclxuICAgICAgICAgICAgLy8gb25sb2FkIGNsaWNrIGV2ZW50XHJcbiAgICAgICAgICAgIGlmKHRoaXMuYmFnW2ldPT1udWxsKXtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiYmFnW1wiLGksXCJdIGlzIG51bGxcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ1Nwcml0ZScgKyBpKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQ2hlY2sgdGhlIHZhbHVlIG9mIG15QXJyYXlbMF0gaW4gRmlyZWJhc2VcclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIHNwcml0ZUZyYW1lIGJhc2VkIG9uIG15QXJyYXlbMF0gdmFsdWVcclxuICAgICAgICAvKmlmICh0aGlzLm51bSA9PT0gMCkge1xyXG4gICAgICAgICAgICAvLyBjb25zdCBzcHJpdGVGcmFtZTAgPSBjYy5yZXNvdXJjZXMuZ2V0KFwic3JjL2RvbmcwXCIsIGNjLlNwcml0ZUZyYW1lKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lMDtcclxuICAgICAgICAgICAgLy8gY2MucmVzb3VyY2VzLmxvYWQoXCJ0ZXN0X2Fzc2V0cy9pbWFnZS9zcHJpdGVGcmFtZVwiLCBjYy5TcHJpdGVGcmFtZSwgKGVyciwgc3ByaXRlRnJhbWUpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICAvLyB9KTtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoJy4uL3NyYy9kb25nMScsIGNjLlNwcml0ZUZyYW1lLCBmdW5jdGlvbiAoZXJyLCBzcHJpdGVGcmFtZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5udW0gPT09IDEpIHtcclxuICAgICAgICAgICAgLy8gU2V0IHNwcml0ZUZyYW1lIHRvIHNwcml0ZSAxXHJcbiAgICAgICAgICAgIC8vIEFzc3VtaW5nIHlvdSBoYXZlIGEgc3ByaXRlRnJhbWUgbmFtZWQgXCJzcHJpdGUxXCIgaW4geW91ciBwcm9qZWN0J3MgYXNzZXRzXHJcbiAgICAgICAgICAgIC8vIGNvbnN0IHNwcml0ZUZyYW1lMSA9IGNjLnJlc291cmNlcy5nZXQoXCJzcmMvZG9uZzBcIiwgY2MuU3ByaXRlRnJhbWUpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWUxO1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcygnLi4vc3JjL2RvbmcyJywgY2MuU3ByaXRlRnJhbWUsIGZ1bmN0aW9uIChlcnIsIHNwcml0ZUZyYW1lKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm51bSA9PT0gMikge1xyXG4gICAgICAgICAgICAvLyBTZXQgc3ByaXRlRnJhbWUgdG8gc3ByaXRlIDJcclxuICAgICAgICAgICAgLy8gQXNzdW1pbmcgeW91IGhhdmUgYSBzcHJpdGVGcmFtZSBuYW1lZCBcInNwcml0ZTJcIiBpbiB5b3VyIHByb2plY3QncyBhc3NldHNcclxuICAgICAgICAgICAgLy8gY29uc3Qgc3ByaXRlRnJhbWUyID0gY2MucmVzb3VyY2VzLmdldChcInNyYy9kb25nMFwiLCBjYy5TcHJpdGVGcmFtZSk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTI7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCcuLi9zcmMvZG9uZzMnLCBjYy5TcHJpdGVGcmFtZSwgZnVuY3Rpb24gKGVyciwgc3ByaXRlRnJhbWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9Ki9cclxuICAgICAgICBjYy5maW5kKCdDYW52YXMvYmxvY2svU3ByaXRlMCcpLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdTcHJpdGU2JykuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnNwcml0ZVt0aGlzLmJhZ1swXV07XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnU3ByaXRlNicpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnU3ByaXRlNicpLnNjYWxlID0gMC4xO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZV9zNih0aGlzLmJhZ1swXSk7XHJcbiAgICAgICAgICAgIHRoaXMubm93Y2hvb3NlPTA7XHJcbiAgICAgICAgICAgIC8vIHRoaXMubm0uc3RyaW5nID0gXCLlsqnmnbHli4dcIjtcclxuICAgICAgICAgICAgLy8gdGhpcy5hdGtfbnVtLnN0cmluZyA9IFwiMTAwXCI7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY2MuZmluZCgnQ2FudmFzL2Jsb2NrL1Nwcml0ZTEnKS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnU3ByaXRlNicpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGVbdGhpcy5iYWdbMV1dO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ1Nwcml0ZTYnKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ1Nwcml0ZTYnKS5zY2FsZSA9IDAuMTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVfczYodGhpcy5iYWdbMV0pO1xyXG4gICAgICAgICAgICB0aGlzLm5vd2Nob29zZT0xO1xyXG4gICAgICAgICAgICAvLyB0aGlzLm5tLnN0cmluZyA9IFwi54KO5p2x5YuHXCI7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuYXRrX251bS5zdHJpbmcgPSBcIjEwMFwiO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9ibG9jay9TcHJpdGUyJykub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ1Nwcml0ZTYnKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByaXRlW3RoaXMuYmFnWzJdXTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdTcHJpdGU2JykuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdTcHJpdGU2Jykuc2NhbGUgPSAwLjE7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlX3M2KHRoaXMuYmFnWzJdKTtcclxuICAgICAgICAgICAgdGhpcy5ub3djaG9vc2U9MjtcclxuICAgICAgICAgICAgLy8gdGhpcy5ubS5zdHJpbmcgPSBcIuWatOWGrOWLh1wiO1xyXG4gICAgICAgICAgICAvLyB0aGlzLmF0a19udW0uc3RyaW5nID0gXCIxMDBcIjtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjYy5maW5kKCdDYW52YXMvYmxvY2svU3ByaXRlMycpLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdTcHJpdGU2JykuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnNwcml0ZVt0aGlzLmJhZ1szXV07XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnU3ByaXRlNicpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnU3ByaXRlNicpLnNjYWxlID0gMC4xO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZV9zNih0aGlzLmJhZ1szXSk7XHJcbiAgICAgICAgICAgIHRoaXMubm93Y2hvb3NlPTM7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY2MuZmluZCgnQ2FudmFzL2Jsb2NrL1Nwcml0ZTQnKS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnU3ByaXRlNicpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGVbdGhpcy5iYWdbNF1dO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ1Nwcml0ZTYnKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ1Nwcml0ZTYnKS5zY2FsZSA9IDAuMTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVfczYodGhpcy5iYWdbNF0pO1xyXG4gICAgICAgICAgICB0aGlzLm5vd2Nob29zZT00O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9ibG9jay9TcHJpdGU1Jykub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ1Nwcml0ZTYnKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByaXRlW3RoaXMuYmFnWzVdXTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdTcHJpdGU2JykuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdTcHJpdGU2Jykuc2NhbGUgPSAwLjE7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlX3M2KHRoaXMuYmFnWzVdKTtcclxuICAgICAgICAgICAgdGhpcy5ub3djaG9vc2U9NTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjYy5maW5kKCdDYW52YXMvYmxvY2svc2VsZWN0Jykub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBHbG9iYWxEYXRhLm15ZWxmID0gdGhpcy5ub3djaG9vc2U7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImJhdHRsZVwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHVwZGF0ZV9zNihhKSAgXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCduYW1lJykuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2F0aycpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdhdGtfbnVtJykuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2hwJykuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2hwX251bScpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdzZWxlY3QnKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnc2VsZWN0X2xhYmVsJykuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImhpOlwiLGEpO1xyXG4gICAgICAgIGlmKGE9PTApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm5tLnN0cmluZyA9IFwi5bKp5p2x5YuHXCI7XHJcbiAgICAgICAgICAgIHRoaXMuYXRrX251bS5zdHJpbmcgPSBcIjIwXCI7XHJcbiAgICAgICAgICAgIHRoaXMuaHBfbnVtLnN0cmluZyA9IFwiMTAwXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoYT09MSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubm0uc3RyaW5nID0gXCLngo7mnbHli4dcIjtcclxuICAgICAgICAgICAgdGhpcy5hdGtfbnVtLnN0cmluZyA9IFwiMTAwXCI7XHJcbiAgICAgICAgICAgIHRoaXMuaHBfbnVtLnN0cmluZyA9IFwiMjBcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihhPT0yKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5ubS5zdHJpbmcgPSBcIuWatOWGrOWLh1wiO1xyXG4gICAgICAgICAgICB0aGlzLmF0a19udW0uc3RyaW5nID0gXCI1MFwiO1xyXG4gICAgICAgICAgICB0aGlzLmhwX251bS5zdHJpbmcgPSBcIjUwXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoYT09MylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubm0uc3RyaW5nID0gXCLprZTpl5znvr1cIjtcclxuICAgICAgICAgICAgdGhpcy5hdGtfbnVtLnN0cmluZyA9IFwiMzAwXCI7XHJcbiAgICAgICAgICAgIHRoaXMuaHBfbnVtLnN0cmluZyA9IFwiMTBcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihhPT02KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5ubS5zdHJpbmcgPSBcImZpc2hLaW5nXCI7XHJcbiAgICAgICAgICAgIHRoaXMuYXRrX251bS5zdHJpbmcgPSBcIjEwXCI7XHJcbiAgICAgICAgICAgIHRoaXMuaHBfbnVtLnN0cmluZyA9IFwiMTBcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5ubS5zdHJpbmcpO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubm0uc3RyaW5nKTtcclxuICAgIH1cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/bags2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0cc47Q6q19H15RwU7uSHQVj', 'bags2');
// script/bags2.ts

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
        _this.nowchoose = 0;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        var _this = this;
        cc.director.getPhysicsManager().enabled = true;
        var uid = GlobalData_1.default.uid;
        firebase.database().ref(uid + 'pokewoman').on('value', function (snapshot) {
            _this.num = snapshot.val();
        });
    };
    NewClass.prototype.start = function () {
        var _this = this;
        for (var i = 0; i < 6; i++) {
            this.node.getChildByName('Sprite' + i).getComponent(cc.Sprite).spriteFrame = this.sprite[this.bag[i]];
            this.node.getChildByName('Sprite' + i).scale = 0.05;
            if (this.bag[i] == null) {
                this.node.getChildByName('Sprite' + i).active = false;
            }
        }
        cc.find('Canvas/bags2/Sprite0').on('click', function () {
            _this.nowchoose = 0;
        });
        cc.find('Canvas/bags2/Sprite1').on('click', function () {
            _this.nowchoose = 1;
        });
        cc.find('Canvas/bags2/Sprite2').on('click', function () {
            _this.nowchoose = 2;
        });
        cc.find('Canvas/bags2/Sprite3').on('click', function () {
            _this.nowchoose = 3;
        });
        cc.find('Canvas/bags2/Sprite4').on('click', function () {
            _this.nowchoose = 4;
        });
        cc.find('Canvas/bags2/Sprite5').on('click', function () {
            _this.nowchoose = 5;
        });
        cc.find('Canvas/bags2/confirm').on('click', function () {
            GlobalData_1.default.myelf = _this.nowchoose;
            cc.find('Canvas/bags2').active = false;
            cc.find('Canvas/skills').active = true;
        });
        cc.find('Canvas/bags2/cancel').on('click', function () {
            cc.find('Canvas/bags2').active = false;
            cc.find('Canvas/skills').active = true;
        });
    };
    NewClass.prototype.update = function (dt) {
        if (this.nowchoose <= 5) {
            var spriteNode = this.node.getChildByName('Sprite' + this.nowchoose);
            var spriteComponent = spriteNode.getComponent(cc.Sprite);
            // Calculate a color variation using a time-based value
            var colorOffset = Math.sin(Date.now() * 0.01) * 0.5 + 0.5;
            // Create a new color with the varying offset
            var newColor = new cc.Color(colorOffset * 255, colorOffset * 255, colorOffset * 255);
            // Assign the new color to the sprite's color property
            spriteComponent.node.color = newColor;
        }
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
    __decorate([
        property
    ], NewClass.prototype, "nowchoose", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxiYWdzMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUMxQywyQ0FBc0M7QUFHdEM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUE2RkM7UUExRkcsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQVcsT0FBTyxDQUFDO1FBR3ZCLFlBQU0sR0FBcUIsRUFBRSxDQUFDO1FBRzlCLFdBQUssR0FBVyxDQUFDLENBQUM7UUFFbEIsMENBQTBDO1FBQzFDLHNDQUFzQztRQUN0QyxTQUFHLEdBQVksb0JBQVUsQ0FBQyxTQUFTLENBQUM7UUFFcEMsd0JBQXdCO1FBRXhCLFNBQUcsR0FBVyxDQUFDLENBQUM7UUFHaEIsUUFBRSxHQUFhLElBQUksQ0FBQztRQUVwQixhQUFPLEdBQWEsSUFBSSxDQUFDO1FBRXpCLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFHeEIsZUFBUyxHQUFXLENBQUMsQ0FBQzs7SUErRDFCLENBQUM7SUE3REcseUJBQU0sR0FBTjtRQUFBLGlCQU9DO1FBTkcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFFL0MsSUFBSSxHQUFHLEdBQUcsb0JBQVUsQ0FBQyxHQUFHLENBQUM7UUFDekIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFBLFFBQVE7WUFDM0QsS0FBSSxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsd0JBQUssR0FBTDtRQUFBLGlCQW9DQztRQW5DRyxLQUFL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LGVBQWUsR0FBRyxVQUFVLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUUzRCx1REFBdUQ7WUFDdkQsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztZQUU1RCw2Q0FBNkM7WUFDN0MsSUFBTSxRQUFRLEdBQUcsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxHQUFHLEVBQUUsV0FBVyxHQUFFLEdBQUcsRUFBRSxXQUFXLEdBQUUsR0FBRyxDQUFDLENBQUM7WUFFckYsc0RBQXNEO1lBQ3RELGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztTQUN6QztJQUNMLENBQUM7SUF6RkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsyQ0FDSTtJQUd2QjtRQURDLFFBQVE7MENBQ2M7SUFHdkI7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7NENBQ0c7SUFHOUI7UUFEQyxRQUFROzJDQUNTO0lBUWxCO1FBREMsUUFBUTt5Q0FDTztJQUdoQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3dDQUNDO0lBRXBCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NkNBQ007SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs0Q0FDSztJQUd4QjtRQURDLFFBQVE7K0NBQ2E7SUE5QkwsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQTZGNUI7SUFBRCxlQUFDO0NBN0ZELEFBNkZDLENBN0ZxQyxFQUFFLENBQUMsU0FBUyxHQTZGakQ7a0JBN0ZvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcbmltcG9ydCBHbG9iYWxEYXRhIGZyb20gXCIuL0dsb2JhbERhdGFcIjtcclxuZGVjbGFyZSBjb25zdCBmaXJlYmFzZTogYW55O1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHRleHQ6IHN0cmluZyA9ICdoZWxsbyc7XHJcblxyXG4gICAgQHByb3BlcnR5KFtjYy5TcHJpdGVGcmFtZV0pXHJcbiAgICBzcHJpdGU6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGluZGV4OiBudW1iZXIgPSAwO1xyXG5cclxuICAgIC8qIGdldCBhIHJldHVybiBhcnJheSBmcm9tIG90aGVyIHNjcmlwdCAqL1xyXG4gICAgLy8gYmFnOiBudW1iZXJbXSA9IFszLCA0LCAxLCAyLCA1LCAwXTtcclxuICAgIGJhZzogbnVtYmVyW10gPUdsb2JhbERhdGEucG9rZXdvbWFuO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBudW06IG51bWJlciA9IDA7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbm06IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGF0a19udW06IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGhwX251bTogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgbm93Y2hvb3NlOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdmFyIHVpZCA9IEdsb2JhbERhdGEudWlkOyAgXHJcbiAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYodWlkICsgJ3Bva2V3b21hbicpLm9uKCd2YWx1ZScsIHNuYXBzaG90ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5udW0gPSBzbmFwc2hvdC52YWwoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdTcHJpdGUnICsgaSkuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnNwcml0ZVt0aGlzLmJhZ1tpXV07XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnU3ByaXRlJyArIGkpLnNjYWxlID0gMC4wNTtcclxuICAgICAgICAgICAgaWYodGhpcy5iYWdbaV09PW51bGwpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdTcHJpdGUnICsgaSkuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9iYWdzMi9TcHJpdGUwJykub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5vd2Nob29zZT0wO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9iYWdzMi9TcHJpdGUxJykub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5vd2Nob29zZT0xO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9iYWdzMi9TcHJpdGUyJykub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5vd2Nob29zZT0yO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9iYWdzMi9TcHJpdGUzJykub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5vd2Nob29zZT0zO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9iYWdzMi9TcHJpdGU0Jykub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5vd2Nob29zZT00O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9iYWdzMi9TcHJpdGU1Jykub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5vd2Nob29zZT01O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9iYWdzMi9jb25maXJtJykub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBHbG9iYWxEYXRhLm15ZWxmID0gdGhpcy5ub3djaG9vc2U7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9iYWdzMicpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvc2tpbGxzJykuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjYy5maW5kKCdDYW52YXMvYmFnczIvY2FuY2VsJykub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvYmFnczInKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL3NraWxscycpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICBpZiAodGhpcy5ub3djaG9vc2UgPD0gNSkge1xyXG4gICAgICAgICAgICBjb25zdCBzcHJpdGVOb2RlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdTcHJpdGUnICsgdGhpcy5ub3djaG9vc2UpO1xyXG4gICAgICAgICAgICBjb25zdCBzcHJpdGVDb21wb25lbnQgPSBzcHJpdGVOb2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIGEgY29sb3IgdmFyaWF0aW9uIHVzaW5nIGEgdGltZS1iYXNlZCB2YWx1ZVxyXG4gICAgICAgICAgICBjb25zdCBjb2xvck9mZnNldCA9IE1hdGguc2luKERhdGUubm93KCkgKiAwLjAxKSAqIDAuNSArIDAuNTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIG5ldyBjb2xvciB3aXRoIHRoZSB2YXJ5aW5nIG9mZnNldFxyXG4gICAgICAgICAgICBjb25zdCBuZXdDb2xvciA9IG5ldyBjYy5Db2xvcihjb2xvck9mZnNldCAqIDI1NSwgY29sb3JPZmZzZXQgKjI1NSwgY29sb3JPZmZzZXQgKjI1NSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBBc3NpZ24gdGhlIG5ldyBjb2xvciB0byB0aGUgc3ByaXRlJ3MgY29sb3IgcHJvcGVydHlcclxuICAgICAgICAgICAgc3ByaXRlQ29tcG9uZW50Lm5vZGUuY29sb3IgPSBuZXdDb2xvcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=
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
    };
    Enemy.prototype.playAnimation = function (animationName) {
        if (this.anim && this.anim.getAnimationState(animationName).isPlaying) {
            return;
        }
        this.anim.play(animationName);
    };
    Enemy.prototype.stopAnimation = function (animationName) {
        if (this.anim && this.anim.getAnimationState(animationName).isPlaying) {
            this.anim.stop(animationName);
        }
    };
    Enemy.prototype.update = function (dt) {
        //cc.log("dong_move");
        if (this.node.name == "4") {
            if (!this.anim.getAnimationState("dong_move").isPlaying)
                this.playAnimation("dong_move");
        }
        else if (this.node.name == "5")
            if (!this.anim.getAnimationState("red_dong_move").isPlaying)
                this.playAnimation("red_dong_move");
        if (this.node.name == "4") {
            if (!this.anim.getAnimationState("dong_move").isPlaying)
                this.playAnimation("dong_move");
        }
        else if (this.node.name == "7")
            if (!this.anim.getAnimationState("fish").isPlaying)
                this.playAnimation("fish");
        //cc.log("dong_move");
        // this.playAnimation("dong_move");  
        this.node.x = this.node.x + this.enemySpeed * dt;
    };
    Enemy.prototype.onBeginContact = function (contact, self, other) {
        if (other.tag != 2) {
            this.enemySpeed *= -1;
            this.node.scaleX *= -1;
        }
        else {
            this.enemySpeed *= 0;
            if (self.tag == 7) {
                this.stopAnimation("fish");
            }
            else {
                this.stopAnimation("dong_move");
            }
            if (other.scaleX == this.node.scaleX)
                this.node.scaleX *= -1;
            else
                this.node.scaleX *= 1;
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxlbmVteS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2QkFBd0I7QUFDbEIsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBbUMseUJBQVk7SUFBL0M7UUFBQSxxRUEwRUM7UUF6RVcsZ0JBQVUsR0FBVyxFQUFFLENBQUM7UUFFaEMsVUFBSSxHQUFHLElBQUksQ0FBQztRQUdaLFNBQUcsR0FBUSxJQUFJLENBQUM7O0lBb0VwQixDQUFDO0lBbEVHLHFCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsNkJBQWEsR0FBYixVQUFjLGFBQXFCO1FBQy9CLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxDQUFDLFNBQVMsRUFBRTtZQUNuRSxPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsNkJBQWEsR0FBYixVQUFjLGFBQXFCO1FBQy9CLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxDQUFDLFNBQVMsRUFBRTtZQUNuRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUNqQztJQUNMLENBQUM7SUFFRCxzQkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNMLHNCQUFzQjtRQUNsQixJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEdBQUcsRUFBQztZQUNyQixJQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTO2dCQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUE7U0FDMUY7YUFDSSxJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEdBQUc7WUFDN0IsSUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsZUFBZSxDQUFDLENBQUMsU0FBUztnQkFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ2hHLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksR0FBRyxFQUFDO1lBQ3JCLElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVM7Z0JBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQTtTQUMxRjthQUNJLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksR0FBRztZQUM3QixJQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTO2dCQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUUsc0JBQXNCO1FBRXZCLHFDQUFxQztRQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztJQUVyRCxDQUFDO0lBR0QsOEJBQWMsR0FBZCxVQUFlLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSztRQUMvQixJQUFHLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFO1lBQ1gsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQztTQUUxQjthQUNHO1lBQ0EsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUM7WUFDckIsSUFBRyxJQUFJLENBQUMsR0FBRyxJQUFFLENBQUMsRUFDZDtnQkFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQzlCO2lCQUVEO2dCQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDbkM7WUFDRCxJQUFHLEtBQUssQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNO2dCQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQzs7Z0JBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQztTQUM5QjtJQUNULENBQUM7SUFFRCxzQkFBTSxHQUFOO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDL0MsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQ2hELE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQW5FQztRQURDLFFBQVEsQ0FBQyxhQUFHLENBQUM7c0NBQ0U7SUFOQyxLQUFLO1FBRHpCLE9BQU87T0FDYSxLQUFLLENBMEV6QjtJQUFELFlBQUM7Q0ExRUQsQUEwRUMsQ0ExRWtDLEVBQUUsQ0FBQyxTQUFTLEdBMEU5QztrQkExRW9CLEtBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWFuIGZyb20gXCIuL21hblwiO1xyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZW15IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIHByaXZhdGUgZW5lbXlTcGVlZDogbnVtYmVyID0gNTA7XHJcblxyXG4gICAgYW5pbSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KE1hbilcclxuICAgIG1hbjogTWFuID0gbnVsbDtcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBwbGF5QW5pbWF0aW9uKGFuaW1hdGlvbk5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLmFuaW0gJiYgdGhpcy5hbmltLmdldEFuaW1hdGlvblN0YXRlKGFuaW1hdGlvbk5hbWUpLmlzUGxheWluZykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmFuaW0ucGxheShhbmltYXRpb25OYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBzdG9wQW5pbWF0aW9uKGFuaW1hdGlvbk5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLmFuaW0gJiYgdGhpcy5hbmltLmdldEFuaW1hdGlvblN0YXRlKGFuaW1hdGlvbk5hbWUpLmlzUGxheWluZykge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW0uc3RvcChhbmltYXRpb25OYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgLy9jYy5sb2coXCJkb25nX21vdmVcIik7XHJcbiAgICAgICAgICAgIGlmKHRoaXMubm9kZS5uYW1lID09IFwiNFwiKXtcclxuICAgICAgICAgICAgICAgIGlmKCF0aGlzLmFuaW0uZ2V0QW5pbWF0aW9uU3RhdGUoXCJkb25nX21vdmVcIikuaXNQbGF5aW5nKSB0aGlzLnBsYXlBbmltYXRpb24oXCJkb25nX21vdmVcIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKHRoaXMubm9kZS5uYW1lID09IFwiNVwiKVxyXG4gICAgICAgICAgICBpZighdGhpcy5hbmltLmdldEFuaW1hdGlvblN0YXRlKFwicmVkX2RvbmdfbW92ZVwiKS5pc1BsYXlpbmcpIHRoaXMucGxheUFuaW1hdGlvbihcInJlZF9kb25nX21vdmVcIik7XHJcbiAgICAgICAgICAgIGlmKHRoaXMubm9kZS5uYW1lID09IFwiNFwiKXtcclxuICAgICAgICAgICAgICAgIGlmKCF0aGlzLmFuaW0uZ2V0QW5pbWF0aW9uU3RhdGUoXCJkb25nX21vdmVcIikuaXNQbGF5aW5nKSB0aGlzLnBsYXlBbmltYXRpb24oXCJkb25nX21vdmVcIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKHRoaXMubm9kZS5uYW1lID09IFwiN1wiKVxyXG4gICAgICAgICAgICBpZighdGhpcy5hbmltLmdldEFuaW1hdGlvblN0YXRlKFwiZmlzaFwiKS5pc1BsYXlpbmcpIHRoaXMucGxheUFuaW1hdGlvbihcImZpc2hcIik7XHJcbiAgICAgICAgICAgIC8vY2MubG9nKFwiZG9uZ19tb3ZlXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgIC8vIHRoaXMucGxheUFuaW1hdGlvbihcImRvbmdfbW92ZVwiKTsgIFxyXG4gICAgICAgIHRoaXMubm9kZS54ID0gdGhpcy5ub2RlLnggKyB0aGlzLmVuZW15U3BlZWQgKiBkdDtcclxuICAgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgb25CZWdpbkNvbnRhY3QoY29udGFjdCwgc2VsZiwgb3RoZXIpIHtcclxuICAgICAgICBpZihvdGhlci50YWcgIT0gMikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmVteVNwZWVkICo9IC0xO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCAqPSAtMTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZW15U3BlZWQgKj0gMDtcclxuICAgICAgICAgICAgICAgIGlmKHNlbGYudGFnPT03KVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcEFuaW1hdGlvbihcImZpc2hcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9wQW5pbWF0aW9uKFwiZG9uZ19tb3ZlXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYob3RoZXIuc2NhbGVYID09IHRoaXMubm9kZS5zY2FsZVgpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCAqPSAtMTtcclxuICAgICAgICAgICAgICAgIGVsc2UgdGhpcy5ub2RlLnNjYWxlWCAqPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHZhciBtYW5hZ2VyID0gY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpO1xyXG4gICAgICAgIG1hbmFnZXIuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5hbmltID0gdGhpcy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTsgXHJcbiAgfVxyXG59XHJcbiJdfQ==
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
        else if (a == 7) {
            this.nm.string = "fishKing";
            this.atk_num.string = "10";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxibG9ja19zcHJpdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFDMUMsMkNBQXNDO0FBR3RDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBb0xDO1FBakxHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFXLE9BQU8sQ0FBQztRQUd2QixZQUFNLEdBQXFCLEVBQUUsQ0FBQztRQUc5QixXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBRWxCLDBDQUEwQztRQUMxQyxzQ0FBc0M7UUFDdEMsU0FBRyxHQUFZLG9CQUFVLENBQUMsU0FBUyxDQUFDO1FBRXBDLHdCQUF3QjtRQUV4QixTQUFHLEdBQVcsQ0FBQyxDQUFDO1FBR2hCLFFBQUUsR0FBYSxJQUFJLENBQUM7UUFFcEIsYUFBTyxHQUFhLElBQUksQ0FBQztRQUV6QixZQUFNLEdBQWEsSUFBSSxDQUFDOztJQXlKNUIsQ0FBQztJQXZKRyx5QkFBTSxHQUFOO1FBQUEsaUJBWUM7UUFYRyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwRSxFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUUvQyxJQUFJLEdBQUcsR0FBRyxvQkFBVSxDQUFDLEdBQUcsQ0FBQztRQUN6QiwyQkFBMkI7UUFDM0IsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFBLFFBQVE7WUFDM0QsS0FBSSxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDMUIseUJBQXlCO1FBQzdCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHdCQUFLLEdBQUw7UUFBQSxpQkE2RkM7UUE1RkcsK0JBQStCO1FBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNoRCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQy9DLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2xELHNCQUFzQjtRQUN0Qiw4QkFBOEI7UUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEcsWUFBWTtZQUNaLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ3BELHFCQUFxQjtZQUNyQixJQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUUsSUFBSSxFQUFDO2dCQUNqQixxQ0FBcUM7Z0JBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2FBQ3pEO1NBRUo7UUFDRCw0Q0FBNEM7UUFFNUMsK0NBQStDO1FBQy9DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1dBeUJHO1FBQ0gsRUFBRSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUU7WUFDeEMsS0FBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkcsS0FBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNsRCxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1lBQ2hELEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVCLDBCQUEwQjtZQUMxQiwrQkFBK0I7UUFDbkMsQ0FBQyxDQUFDLENBQUM7UUFDSCxFQUFFLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRTtZQUN4QyxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuRyxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ2xELEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7WUFDaEQsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUIsMEJBQTBCO1lBQzFCLCtCQUErQjtRQUNuQyxDQUFDLENBQUMsQ0FBQztRQUNILEVBQUUsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFO1lBQ3hDLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25HLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbEQsS0FBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztZQUNoRCxLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QiwwQkFBMEI7WUFDMUIsK0JBQStCO1FBQ25DLENBQUMsQ0FBQyxDQUFDO1FBQ0gsRUFBRSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUU7WUFDeEMsS0FBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkcsS0FBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNsRCxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1lBQ2hELEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsRUFBRSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUU7WUFDeEMsS0FBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkcsS0FBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNsRCxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1lBQ2hELEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsRUFBRSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUU7WUFDeEMsS0FBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkcsS0FBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNsRCxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1lBQ2hELEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNELDRCQUFTLEdBQVQsVUFBVSxDQUFDO1FBRVAsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUMvQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbEQsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUM3QyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2pELE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLElBQUcsQ0FBQyxJQUFFLENBQUMsRUFDUDtZQUNJLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQzlCO2FBQ0ksSUFBRyxDQUFDLElBQUUsQ0FBQyxFQUNaO1lBQ0ksSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDN0I7YUFDSSxJQUFHLENBQUMsSUFBRSxDQUFDLEVBQ1o7WUFDSSxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUM3QjthQUNJLElBQUcsQ0FBQyxJQUFFLENBQUMsRUFDWjtZQUNJLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQzdCO2FBQ0ksSUFBRyxDQUFDLElBQUUsQ0FBQyxFQUNaO1lBQ0ksSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDO1lBQzVCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDN0I7UUFDRCwrQkFBK0I7SUFDbkMsQ0FBQztJQUNELHlCQUFNLEdBQU4sVUFBUSxFQUFFO1FBQ04sK0JBQStCO0lBQ25DLENBQUM7SUFoTEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsyQ0FDSTtJQUd2QjtRQURDLFFBQVE7MENBQ2M7SUFHdkI7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7NENBQ0c7SUFHOUI7UUFEQyxRQUFROzJDQUNTO0lBUWxCO1FBREMsUUFBUTt5Q0FDTztJQUdoQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3dDQUNDO0lBRXBCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NkNBQ007SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs0Q0FDSztJQTNCUCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBb0w1QjtJQUFELGVBQUM7Q0FwTEQsQUFvTEMsQ0FwTHFDLEVBQUUsQ0FBQyxTQUFTLEdBb0xqRDtrQkFwTG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuaW1wb3J0IEdsb2JhbERhdGEgZnJvbSBcIi4vR2xvYmFsRGF0YVwiO1xyXG5kZWNsYXJlIGNvbnN0IGZpcmViYXNlOiBhbnk7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgdGV4dDogc3RyaW5nID0gJ2hlbGxvJztcclxuXHJcbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcclxuICAgIHNwcml0ZTogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgaW5kZXg6IG51bWJlciA9IDA7XHJcblxyXG4gICAgLyogZ2V0IGEgcmV0dXJuIGFycmF5IGZyb20gb3RoZXIgc2NyaXB0ICovXHJcbiAgICAvLyBiYWc6IG51bWJlcltdID0gWzMsIDQsIDEsIDIsIDUsIDBdO1xyXG4gICAgYmFnOiBudW1iZXJbXSA9R2xvYmFsRGF0YS5wb2tld29tYW47XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcbiAgICBAcHJvcGVydHlcclxuICAgIG51bTogbnVtYmVyID0gMDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBubTogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgYXRrX251bTogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgaHBfbnVtOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB0aGlzLm5tID0gY2MuZmluZChcIkNhbnZhcy9ibG9jay9uYW1lXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgdGhpcy5hdGtfbnVtID0gY2MuZmluZChcIkNhbnZhcy9ibG9jay9hdGtfbnVtXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgdGhpcy5ocF9udW0gPSBjYy5maW5kKFwiQ2FudmFzL2Jsb2NrL2hwX251bVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIHZhciB1aWQgPSBHbG9iYWxEYXRhLnVpZDsgIFxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwidWlkOlwiLHVpZCk7XHJcbiAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYodWlkICsgJ3Bva2V3b21hbicpLm9uKCd2YWx1ZScsIHNuYXBzaG90ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5udW0gPSBzbmFwc2hvdC52YWwoKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5udW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICAvLyB0aGlzLmF0a19udW0uc3RyaW5nID0gXCIyMDBcIjtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ1Nwcml0ZTYnKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ25hbWUnKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2F0aycpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnYXRrX251bScpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnaHAnKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2hwX251bScpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIC8vIGl0ZXJhdGUgdGhyb3VnaCBiYWdcclxuICAgICAgICAvLyBpIDogYmFnLmluZGV4ICwgY2hpbGQuaW5kZXhcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmJhZyk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdTcHJpdGUnICsgaSkuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnNwcml0ZVt0aGlzLmJhZ1tpXV07XHJcbiAgICAgICAgICAgIC8vIHNjYWxlIDAuMVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ1Nwcml0ZScgKyBpKS5zY2FsZSA9IDAuMDU7XHJcbiAgICAgICAgICAgIC8vIG9ubG9hZCBjbGljayBldmVudFxyXG4gICAgICAgICAgICBpZih0aGlzLmJhZ1tpXT09bnVsbCl7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImJhZ1tcIixpLFwiXSBpcyBudWxsXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdTcHJpdGUnICsgaSkuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIENoZWNrIHRoZSB2YWx1ZSBvZiBteUFycmF5WzBdIGluIEZpcmViYXNlXHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSBzcHJpdGVGcmFtZSBiYXNlZCBvbiBteUFycmF5WzBdIHZhbHVlXHJcbiAgICAgICAgLyppZiAodGhpcy5udW0gPT09IDApIHtcclxuICAgICAgICAgICAgLy8gY29uc3Qgc3ByaXRlRnJhbWUwID0gY2MucmVzb3VyY2VzLmdldChcInNyYy9kb25nMFwiLCBjYy5TcHJpdGVGcmFtZSk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTA7XHJcbiAgICAgICAgICAgIC8vIGNjLnJlc291cmNlcy5sb2FkKFwidGVzdF9hc3NldHMvaW1hZ2Uvc3ByaXRlRnJhbWVcIiwgY2MuU3ByaXRlRnJhbWUsIChlcnIsIHNwcml0ZUZyYW1lKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCcuLi9zcmMvZG9uZzEnLCBjYy5TcHJpdGVGcmFtZSwgZnVuY3Rpb24gKGVyciwgc3ByaXRlRnJhbWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubnVtID09PSAxKSB7XHJcbiAgICAgICAgICAgIC8vIFNldCBzcHJpdGVGcmFtZSB0byBzcHJpdGUgMVxyXG4gICAgICAgICAgICAvLyBBc3N1bWluZyB5b3UgaGF2ZSBhIHNwcml0ZUZyYW1lIG5hbWVkIFwic3ByaXRlMVwiIGluIHlvdXIgcHJvamVjdCdzIGFzc2V0c1xyXG4gICAgICAgICAgICAvLyBjb25zdCBzcHJpdGVGcmFtZTEgPSBjYy5yZXNvdXJjZXMuZ2V0KFwic3JjL2RvbmcwXCIsIGNjLlNwcml0ZUZyYW1lKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lMTtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoJy4uL3NyYy9kb25nMicsIGNjLlNwcml0ZUZyYW1lLCBmdW5jdGlvbiAoZXJyLCBzcHJpdGVGcmFtZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5udW0gPT09IDIpIHtcclxuICAgICAgICAgICAgLy8gU2V0IHNwcml0ZUZyYW1lIHRvIHNwcml0ZSAyXHJcbiAgICAgICAgICAgIC8vIEFzc3VtaW5nIHlvdSBoYXZlIGEgc3ByaXRlRnJhbWUgbmFtZWQgXCJzcHJpdGUyXCIgaW4geW91ciBwcm9qZWN0J3MgYXNzZXRzXHJcbiAgICAgICAgICAgIC8vIGNvbnN0IHNwcml0ZUZyYW1lMiA9IGNjLnJlc291cmNlcy5nZXQoXCJzcmMvZG9uZzBcIiwgY2MuU3ByaXRlRnJhbWUpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWUyO1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcygnLi4vc3JjL2RvbmczJywgY2MuU3ByaXRlRnJhbWUsIGZ1bmN0aW9uIChlcnIsIHNwcml0ZUZyYW1lKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSovXHJcbiAgICAgICAgY2MuZmluZCgnQ2FudmFzL2Jsb2NrL1Nwcml0ZTAnKS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnU3ByaXRlNicpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGVbdGhpcy5iYWdbMF1dO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ1Nwcml0ZTYnKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ1Nwcml0ZTYnKS5zY2FsZSA9IDAuMTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVfczYodGhpcy5iYWdbMF0pO1xyXG4gICAgICAgICAgICAvLyB0aGlzLm5tLnN0cmluZyA9IFwi5bKp5p2x5YuHXCI7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuYXRrX251bS5zdHJpbmcgPSBcIjEwMFwiO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9ibG9jay9TcHJpdGUxJykub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ1Nwcml0ZTYnKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByaXRlW3RoaXMuYmFnWzFdXTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdTcHJpdGU2JykuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdTcHJpdGU2Jykuc2NhbGUgPSAwLjE7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlX3M2KHRoaXMuYmFnWzFdKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5ubS5zdHJpbmcgPSBcIueCjuadseWLh1wiO1xyXG4gICAgICAgICAgICAvLyB0aGlzLmF0a19udW0uc3RyaW5nID0gXCIxMDBcIjtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjYy5maW5kKCdDYW52YXMvYmxvY2svU3ByaXRlMicpLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdTcHJpdGU2JykuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnNwcml0ZVt0aGlzLmJhZ1syXV07XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnU3ByaXRlNicpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnU3ByaXRlNicpLnNjYWxlID0gMC4xO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZV9zNih0aGlzLmJhZ1syXSk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMubm0uc3RyaW5nID0gXCLlmrTlhqzli4dcIjtcclxuICAgICAgICAgICAgLy8gdGhpcy5hdGtfbnVtLnN0cmluZyA9IFwiMTAwXCI7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY2MuZmluZCgnQ2FudmFzL2Jsb2NrL1Nwcml0ZTMnKS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnU3ByaXRlNicpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGVbdGhpcy5iYWdbM11dO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ1Nwcml0ZTYnKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ1Nwcml0ZTYnKS5zY2FsZSA9IDAuMTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVfczYodGhpcy5iYWdbM10pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9ibG9jay9TcHJpdGU0Jykub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ1Nwcml0ZTYnKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByaXRlW3RoaXMuYmFnWzRdXTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdTcHJpdGU2JykuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdTcHJpdGU2Jykuc2NhbGUgPSAwLjE7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlX3M2KHRoaXMuYmFnWzRdKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjYy5maW5kKCdDYW52YXMvYmxvY2svU3ByaXRlNScpLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdTcHJpdGU2JykuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnNwcml0ZVt0aGlzLmJhZ1s1XV07XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnU3ByaXRlNicpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnU3ByaXRlNicpLnNjYWxlID0gMC4xO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZV9zNih0aGlzLmJhZ1s1XSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVfczYoYSkgIFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnbmFtZScpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdhdGsnKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnYXRrX251bScpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdocCcpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdocF9udW0nKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaGk6XCIsYSk7XHJcbiAgICAgICAgaWYoYT09MClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubm0uc3RyaW5nID0gXCLlsqnmnbHli4dcIjtcclxuICAgICAgICAgICAgdGhpcy5hdGtfbnVtLnN0cmluZyA9IFwiMjBcIjtcclxuICAgICAgICAgICAgdGhpcy5ocF9udW0uc3RyaW5nID0gXCIxMDBcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihhPT0xKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5ubS5zdHJpbmcgPSBcIueCjuadseWLh1wiO1xyXG4gICAgICAgICAgICB0aGlzLmF0a19udW0uc3RyaW5nID0gXCIxMDBcIjtcclxuICAgICAgICAgICAgdGhpcy5ocF9udW0uc3RyaW5nID0gXCIyMFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKGE9PTIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm5tLnN0cmluZyA9IFwi5Zq05Yas5YuHXCI7XHJcbiAgICAgICAgICAgIHRoaXMuYXRrX251bS5zdHJpbmcgPSBcIjUwXCI7XHJcbiAgICAgICAgICAgIHRoaXMuaHBfbnVtLnN0cmluZyA9IFwiNTBcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihhPT0zKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5ubS5zdHJpbmcgPSBcIumtlOmXnOe+vVwiO1xyXG4gICAgICAgICAgICB0aGlzLmF0a19udW0uc3RyaW5nID0gXCIzMDBcIjtcclxuICAgICAgICAgICAgdGhpcy5ocF9udW0uc3RyaW5nID0gXCIxMFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKGE9PTcpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm5tLnN0cmluZyA9IFwiZmlzaEtpbmdcIjtcclxuICAgICAgICAgICAgdGhpcy5hdGtfbnVtLnN0cmluZyA9IFwiMTBcIjtcclxuICAgICAgICAgICAgdGhpcy5ocF9udW0uc3RyaW5nID0gXCIxMFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm5tLnN0cmluZyk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5ubS5zdHJpbmcpO1xyXG4gICAgfVxyXG59Il19
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
        if (this.player.x <= 55 && this.player.x >= -55)
            this.node.x = this.player.x;
        //else this.node.x = 62;
        if (this.player.y <= 136 && this.player.y >= -136)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjYW1lcmEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXNDO0FBRWhDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBNERDO1FBekRHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFXLE9BQU8sQ0FBQztRQUd2QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBR3ZCLFlBQU0sR0FBYyxJQUFJLENBQUM7O0lBZ0Q3QixDQUFDO0lBOUNHLHdCQUF3QjtJQUV4Qix5QkFBTSxHQUFOO1FBQ0ksa0RBQWtEO1FBQ2xELElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLG9CQUFVLENBQUMsVUFBVSxFQUFDLG9CQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbkUscURBQXFEO1FBQ3JELHlFQUF5RTtRQUN6RSx5RUFBeUU7UUFFekUsb0RBQW9EO1FBQ3BELG9DQUFvQztRQUNwQyxNQUFNO0lBQ1YsQ0FBQztJQUNELDJCQUEyQjtJQUMzQiwyQ0FBMkM7SUFDM0MsNkRBQTZEO0lBQzdELElBQUk7SUFFSiwyQkFBMkI7SUFDM0IsMkNBQTJDO0lBQzNDLGdEQUFnRDtJQUNoRCxJQUFJO0lBQ0osZ0JBQWdCO0lBQ2hCLHlEQUF5RDtJQUN6RCw4RUFBOEU7SUFDOUUsOEVBQThFO0lBQzlFLElBQUk7SUFFSix3QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELHlCQUFNLEdBQU4sVUFBUSxFQUFFO1FBQ04sd0RBQXdEO1FBQ3hELG9DQUFvQztRQUNwQyxNQUFNO1FBQ04sc0JBQXNCO1FBQ3RCLElBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBRTtRQUNqQyx3QkFBd0I7UUFDeEIsSUFBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHO1lBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFFO1FBQzdCLDBCQUEwQjtRQUMzQixvQkFBVSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDN0Msb0JBQVUsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUF4REQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsyQ0FDSTtJQUd2QjtRQURDLFFBQVE7MENBQ2M7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUMsRUFBRSxDQUFDLElBQUksRUFBQyxDQUFDOzRDQUNGO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUMsQ0FBQzs0Q0FDRjtJQVpSLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0E0RDVCO0lBQUQsZUFBQztDQTVERCxBQTREQyxDQTVEcUMsRUFBRSxDQUFDLFNBQVMsR0E0RGpEO2tCQTVEb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHbG9iYWxEYXRhIGZyb20gXCIuL0dsb2JhbERhdGFcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICB0ZXh0OiBzdHJpbmcgPSAnaGVsbG8nO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7dHlwZTpjYy5Ob2RlfSlcclxuICAgIHBsYXllcjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHt0eXBlOmNjLkNhbWVyYX0pXHJcbiAgICBjYW1lcmE6IGNjLkNhbWVyYSA9IG51bGw7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIC8vIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKEdsb2JhbERhdGEuY2FtZXJhUG9zWCxHbG9iYWxEYXRhLmNhbWVyYVBvc1kpO1xyXG4gICAgICAgIC8vIGNvbnN0IGJhZ05vZGUgPSBjYy5maW5kKCdDYW52YXMvTWFpbiBDYW1lcmEvYmFnJyk7XHJcbiAgICAgICAgLy8gYmFnTm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9FTlRFUiwgdGhpcy5vbkJhZ01vdXNlRW50ZXIsIHRoaXMpO1xyXG4gICAgICAgIC8vIGJhZ05vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfTEVBVkUsIHRoaXMub25CYWdNb3VzZUxlYXZlLCB0aGlzKTtcclxuICAgIFxyXG4gICAgICAgIC8vIGNjLmZpbmQoJ0NhbnZhcy9NYWluIENhbWVyYScpLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAvLyAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdiYWcnKTtcclxuICAgICAgICAvLyB9KTtcclxuICAgIH1cclxuICAgIC8vIG9uQmFnTW91c2VFbnRlcihldmVudCkge1xyXG4gICAgLy8gICAgIGNvbnN0IGJhZ05vZGUgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xyXG4gICAgLy8gICAgIGJhZ05vZGUuY29sb3IgPSBjYy5Db2xvci5ZRUxMT1c7IC8vIOiuvue9rum8oOagh+aCrOWBnOaXtueahOminOiJsu+8jOi/memHjOekuuS+i+S4uum7hOiJslxyXG4gICAgLy8gfVxyXG4gICAgXHJcbiAgICAvLyBvbkJhZ01vdXNlTGVhdmUoZXZlbnQpIHtcclxuICAgIC8vICAgICBjb25zdCBiYWdOb2RlID0gZXZlbnQuY3VycmVudFRhcmdldDtcclxuICAgIC8vICAgICBiYWdOb2RlLmNvbG9yID0gY2MuQ29sb3IuV0hJVEU7IC8vIOaBouWkjeWOn+Wni+minOiJslxyXG4gICAgLy8gfVxyXG4gICAgLy8gb25EZXN0cm95KCkge1xyXG4gICAgLy8gICAgIGNvbnN0IGJhZ05vZGUgPSBjYy5maW5kKCdDYW52YXMvTWFpbiBDYW1lcmEvYmFnJyk7XHJcbiAgICAvLyAgICAgYmFnTm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRU5URVIsIHRoaXMub25CYWdNb3VzZUVudGVyLCB0aGlzKTtcclxuICAgIC8vICAgICBiYWdOb2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9MRUFWRSwgdGhpcy5vbkJhZ01vdXNlTGVhdmUsIHRoaXMpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIC8vIGNjLmZpbmQoJ0NhbnZhcy9NYWluIENhbWVyYS9iYWcnKS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnYmFnJyk7XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgLy9jYy5sb2codGhpcy5ub2RlLngpO1xyXG4gICAgICAgIGlmKHRoaXMucGxheWVyLnggPD0gNTUgJiYgdGhpcy5wbGF5ZXIueCA+PSAtNTUpIFxyXG4gICAgICAgICAgICB0aGlzLm5vZGUueCA9IHRoaXMucGxheWVyLnggO1xyXG4gICAgICAgIC8vZWxzZSB0aGlzLm5vZGUueCA9IDYyO1xyXG4gICAgICAgIGlmKHRoaXMucGxheWVyLnkgPD0gMTM2ICYmIHRoaXMucGxheWVyLnkgPj0gLTEzNikgXHJcbiAgICAgICAgdGhpcy5ub2RlLnkgPSB0aGlzLnBsYXllci55IDtcclxuICAgICAgICAvL2Vsc2UgdGhpcy5ub2RlLnkgPSAtMTQ3O1xyXG4gICAgICAgR2xvYmFsRGF0YS5jYW1lcmFQb3NYID0gdGhpcy5ub2RlLnBvc2l0aW9uLng7XHJcbiAgICAgICBHbG9iYWxEYXRhLmNhbWVyYVBvc1kgPSB0aGlzLm5vZGUucG9zaXRpb24ueTtcclxuICAgIH1cclxufVxyXG4iXX0=
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
var GlobalData_1 = require("../script/GlobalData");
var GameManager = /** @class */ (function (_super) {
    __extends(GameManager, _super);
    function GameManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.palse = false;
        return _this;
    }
    GameManager.prototype.onLoad = function () {
    };
    GameManager.prototype.update = function () {
        if (GlobalData_1.default.exp >= GlobalData_1.default.level_exp[GlobalData_1.default.level - 1]) {
            GlobalData_1.default.exp -= GlobalData_1.default.level_exp[GlobalData_1.default.level - 1];
            GlobalData_1.default.level += 1;
            cc.find('Canvas/Main Camera/level up').active = true;
            cc.find('Canvas/Main Camera/level up').getComponent(cc.Animation).play();
            this.scheduleOnce(function () {
                cc.find('Canvas/Main Camera/level up').active = false;
            }, 1.2);
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lbWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QyxtREFBOEM7QUFHOUM7SUFBeUMsK0JBQVk7SUFBckQ7UUFBQSxxRUFvQkM7UUFsQkcsV0FBSyxHQUFDLEtBQUssQ0FBQzs7SUFrQmhCLENBQUM7SUFoQkcsNEJBQU0sR0FBTjtJQUVBLENBQUM7SUFDRCw0QkFBTSxHQUFOO1FBQ0ksSUFBRyxvQkFBVSxDQUFDLEdBQUcsSUFBSSxvQkFBVSxDQUFDLFNBQVMsQ0FBQyxvQkFBVSxDQUFDLEtBQUssR0FBQyxDQUFDLENBQUMsRUFBQztZQUMxRCxvQkFBVSxDQUFDLEdBQUcsSUFBSSxvQkFBVSxDQUFDLFNBQVMsQ0FBQyxvQkFBVSxDQUFDLEtBQUssR0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzRCxvQkFBVSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7WUFDdEIsRUFBRSxDQUFDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDckQsRUFBRSxDQUFDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDekUsSUFBSSxDQUFDLFlBQVksQ0FBQztnQkFDZCxFQUFFLENBQUMsSUFBSSxDQUFDLDZCQUE2QixDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUMxRCxDQUFDLEVBQUMsR0FBRyxDQUFDLENBQUE7U0FDVDtJQUNMLENBQUM7SUFqQmdCLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0FvQi9CO0lBQUQsa0JBQUM7Q0FwQkQsQUFvQkMsQ0FwQndDLEVBQUUsQ0FBQyxTQUFTLEdBb0JwRDtrQkFwQm9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuaW1wb3J0IEdsb2JhbERhdGEgZnJvbSAnLi4vc2NyaXB0L0dsb2JhbERhdGEnO1xyXG5kZWNsYXJlIGNvbnN0IGZpcmViYXNlOiBhbnk7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIFxyXG4gICAgcGFsc2U9ZmFsc2U7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgdXBkYXRlKCl7XHJcbiAgICAgICAgaWYoR2xvYmFsRGF0YS5leHAgPj0gR2xvYmFsRGF0YS5sZXZlbF9leHBbR2xvYmFsRGF0YS5sZXZlbC0xXSl7XHJcbiAgICAgICAgICAgIEdsb2JhbERhdGEuZXhwIC09IEdsb2JhbERhdGEubGV2ZWxfZXhwW0dsb2JhbERhdGEubGV2ZWwtMV07XHJcbiAgICAgICAgICAgIEdsb2JhbERhdGEubGV2ZWwgKz0gMTtcclxuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL01haW4gQ2FtZXJhL2xldmVsIHVwJykuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL01haW4gQ2FtZXJhL2xldmVsIHVwJykuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKT0+e1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL01haW4gQ2FtZXJhL2xldmVsIHVwJykuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0sMS4yKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG59XHJcbiJdfQ==
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
        GlobalData_1.default.nodeToDestroy = [];
        var auth = firebase.auth();
        auth.signInWithEmailAndPassword(this.email, this.password)
            .then(function (userCredential) {
            GlobalData_1.default.uid = userCredential.user.uid;
            var database = firebase.database();
            var userRef = database.ref('user').child(GlobalData_1.default.uid);
            userRef.once('value', function (snapshot) {
                var userData = snapshot.val();
                console.log(userData);
                if (userData && userData.myArray) {
                    GlobalData_1.default.pokewoman = userData.myArray;
                    console.log(GlobalData_1.default.pokewoman);
                }
                if (userData && userData.level) {
                    GlobalData_1.default.level = userData.level;
                    console.log(userData.level);
                }
                if (userData && userData.exp) {
                    GlobalData_1.default.exp = userData.exp;
                    console.log(userData.exp);
                }
                else {
                    console.log("myArray not found in user data");
                }
                console.log(GlobalData_1.default.uid);
                cc.director.loadScene('main');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRiwyQ0FBc0M7QUFFaEMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFrRUM7UUEvREcsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQVcsT0FBTyxDQUFDO1FBRWhCLFdBQUssR0FBVSxJQUFJLENBQUM7UUFDcEIsY0FBUSxHQUFVLElBQUksQ0FBQztRQUN2QixXQUFLLEdBQWEsSUFBSSxDQUFDO1FBQ3ZCLGdCQUFVLEdBQWEsSUFBSSxDQUFDOztJQXVEdkMsQ0FBQztJQXRERyx3QkFBd0I7SUFFeEIseUJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUMsSUFBSSxDQUFDLFdBQVcsRUFBQyxJQUFJLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFDLElBQUksQ0FBQyxjQUFjLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELDhCQUFX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YXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBHbG9iYWxEYXRhIGZyb20gXCIuL0dsb2JhbERhdGFcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5kZWNsYXJlIGNvbnN0IGZpcmViYXNlIDogYW55O1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHRleHQ6IHN0cmluZyA9ICdoZWxsbyc7XHJcblxyXG4gICAgcHVibGljIGVtYWlsOnN0cmluZyA9IG51bGw7XHJcbiAgICBwdWJsaWMgcGFzc3dvcmQ6c3RyaW5nID0gbnVsbDtcclxuICAgIHB1YmxpYyBsb2dpbjpjYy5CdXR0b24gPSBudWxsO1xyXG4gICAgcHVibGljIHRvUmVnaXN0ZXI6Y2MuQnV0dG9uID0gbnVsbDtcclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdGhpcy5sb2dpbiA9IGNjLmZpbmQoJ2xvZ2luJykuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XHJcbiAgICAgICAgdGhpcy5sb2dpbi5ub2RlLm9uKCdjbGljaycsdGhpcy5oYW5kbGVMb2dpbix0aGlzKTtcclxuICAgICAgICB0aGlzLnRvUmVnaXN0ZXIgPSBjYy5maW5kKCdyZWdpc3RlcicpLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4gICAgICAgIHRoaXMudG9SZWdpc3Rlci5ub2RlLm9uKCdjbGljaycsdGhpcy50b1JlZ2lzdGVyUGFnZSx0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVMb2dpbigpe1xyXG4gICAgICAgIEdsb2JhbERhdGEubm9kZVRvRGVzdHJveSA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGF1dGggPSBmaXJlYmFzZS5hdXRoKCk7XHJcbiAgICAgICAgYXV0aC5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCh0aGlzLmVtYWlsLCB0aGlzLnBhc3N3b3JkKVxyXG4gICAgICAgIC50aGVuKCh1c2VyQ3JlZGVudGlhbCkgPT4ge1xyXG4gICAgICAgIEdsb2JhbERhdGEudWlkID0gdXNlckNyZWRlbnRpYWwudXNlci51aWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgZGF0YWJhc2UgPSBmaXJlYmFzZS5kYXRhYmFzZSgpO1xyXG4gICAgICAgIGNvbnN0IHVzZXJSZWYgPSBkYXRhYmFzZS5yZWYoJ3VzZXInKS5jaGlsZChHbG9iYWxEYXRhLnVpZCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdXNlclJlZi5vbmNlKCd2YWx1ZScsIChzbmFwc2hvdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB1c2VyRGF0YSA9IHNuYXBzaG90LnZhbCgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh1c2VyRGF0YSk7XHJcbiAgICAgICAgICAgIGlmICh1c2VyRGF0YSAmJiB1c2VyRGF0YS5teUFycmF5KSB7XHJcbiAgICAgICAgICAgICAgICBHbG9iYWxEYXRhLnBva2V3b21hbiA9IHVzZXJEYXRhLm15QXJyYXk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhHbG9iYWxEYXRhLnBva2V3b21hbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYodXNlckRhdGEgJiYgdXNlckRhdGEubGV2ZWwpe1xyXG4gICAgICAgICAgICAgICAgR2xvYmFsRGF0YS5sZXZlbCA9IHVzZXJEYXRhLmxldmVsO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codXNlckRhdGEubGV2ZWwpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYodXNlckRhdGEgJiYgdXNlckRhdGEuZXhwKXtcclxuICAgICAgICAgICAgICAgIEdsb2JhbERhdGEuZXhwID0gdXNlckRhdGEuZXhwO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codXNlckRhdGEuZXhwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibXlBcnJheSBub3QgZm91bmQgaW4gdXNlciBkYXRhXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhHbG9iYWxEYXRhLnVpZCk7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnbWFpbicpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0b1JlZ2lzdGVyUGFnZSgpe1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgncmVnaXN0ZXInKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICB0aGlzLmVtYWlsID0gY2MuZmluZCgnYWNjb3VudC9sYWJlbCcpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nO1xyXG4gICAgICAgIHRoaXMucGFzc3dvcmQgPSBjYy5maW5kKCdwYXNzd29yZC9sYWJlbCcpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
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
        _this.level = null;
        _this.exp = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        this.save.node.on('click', this.SaveGame, this);
        this.quit.node.on('click', this.quitGame, this);
        this.back.node.on('click', this.backToMap, this);
        this.volume_slider.progress = GlobalData_1.default.volume;
        this.level.string = 'Level : Lv.' + GlobalData_1.default.level;
        this.exp.progress = GlobalData_1.default.exp / GlobalData_1.default.level_exp[GlobalData_1.default.level - 1];
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
        userRef.child('level').set(GlobalData_1.default.level)
            .then(function () {
            console.log('level saved successfully');
        })
            .catch(function (error) {
            console.log('error saving level', error);
        });
        userRef.child('exp').set(GlobalData_1.default.exp)
            .then(function () {
            console.log('exp saved successfully');
        })
            .catch(function (error) {
            console.log('error saving exp', error);
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
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "level", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], NewClass.prototype, "exp", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxoYW5kbGVTZXR0aW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLDJDQUFzQztBQUVoQyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQThFQztRQTNFRyxtQkFBYSxHQUFjLElBQUksQ0FBQztRQUdoQyxVQUFJLEdBQWMsSUFBSSxDQUFDO1FBR3ZCLFVBQUksR0FBYyxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFjLElBQUksQ0FBQztRQUd2QixXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLFNBQUcsR0FBb0IsSUFBSSxDQUFDOztJQTREaEMsQ0FBQztJQTFERyx3QkFBd0I7SUFFeEIseUJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUMsSUFBSSxDQUFDLFFBQVEsRUFBQyxJQUFJLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFDLElBQUksQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBQyxJQUFJLENBQUMsU0FBUyxFQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxHQUFHLG9CQUFVLENBQUMsTUFBTSxDQUFDO1FBQ2hELElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLGFBQWEsR0FBRSxvQkFBVSxDQUFD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QUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzJDQUNJO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7eUNBQ0c7SUFsQlgsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQThFNUI7SUFBRCxlQUFDO0NBOUVELEFBOEVDLENBOUVxQyxFQUFFLENBQUMsU0FBUyxHQThFakQ7a0JBOUVvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IEdsb2JhbERhdGEgZnJvbSBcIi4vR2xvYmFsRGF0YVwiO1xyXG5kZWNsYXJlIGNvbnN0IGZpcmViYXNlIDogYW55IDtcclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNsaWRlcilcclxuICAgIHZvbHVtZV9zbGlkZXI6IGNjLlNsaWRlciA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIHNhdmU6IGNjLkJ1dHRvbiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIHF1aXQ6IGNjLkJ1dHRvbiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIGJhY2s6IGNjLkJ1dHRvbiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGV2ZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIFxyXG4gICAgQHByb3BlcnR5KGNjLlByb2dyZXNzQmFyKVxyXG4gICAgZXhwIDogY2MuUHJvZ3Jlc3NCYXIgPSBudWxsO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdGhpcy5zYXZlLm5vZGUub24oJ2NsaWNrJyx0aGlzLlNhdmVHYW1lLHRoaXMpO1xyXG4gICAgICAgIHRoaXMucXVpdC5ub2RlLm9uKCdjbGljaycsdGhpcy5xdWl0R2FtZSx0aGlzKTtcclxuICAgICAgICB0aGlzLmJhY2subm9kZS5vbignY2xpY2snLHRoaXMuYmFja1RvTWFwLHRoaXMpO1xyXG4gICAgICAgIHRoaXMudm9sdW1lX3NsaWRlci5wcm9ncmVzcyA9IEdsb2JhbERhdGEudm9sdW1lO1xyXG4gICAgICAgIHRoaXMubGV2ZWwuc3RyaW5nID0gJ0xldmVsIDogTHYuJysgR2xvYmFsRGF0YS5sZXZlbDtcclxuICAgICAgICB0aGlzLmV4cC5wcm9ncmVzcyA9IEdsb2JhbERhdGEuZXhwL0dsb2JhbERhdGEubGV2ZWxfZXhwW0dsb2JhbERhdGEubGV2ZWwtMV07XHJcbiAgICB9XHJcblxyXG4gICAgU2F2ZUdhbWUoKSB7XHJcbiAgICAgICAgY29uc3QgdWlkID0gR2xvYmFsRGF0YS51aWQ7XHJcbiAgICAgICAgY29uc3QgZGF0YWJhc2UgPSBmaXJlYmFzZS5kYXRhYmFzZSgpO1xyXG4gICAgICAgIGNvbnN0IHVzZXJSZWYgPSBkYXRhYmFzZS5yZWYoKS5jaGlsZCgndXNlcicpLmNoaWxkKHVpZCk7XHJcbiAgICAgICAgdXNlclJlZi5jaGlsZCgnbXlBcnJheScpLnNldChHbG9iYWxEYXRhLnBva2V3b21hbilcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ215QXJyYXkgc2F2ZWQgc3VjY2Vzc2Z1bGx5Jyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHNhdmluZyBteUFycmF5OicsIGVycm9yKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgdXNlclJlZi5jaGlsZCgnbGV2ZWwnKS5zZXQoR2xvYmFsRGF0YS5sZXZlbClcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT57XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbGV2ZWwgc2F2ZWQgc3VjY2Vzc2Z1bGx5Jyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpPT57XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3Igc2F2aW5nIGxldmVsJyxlcnJvcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHVzZXJSZWYuY2hpbGQoJ2V4cCcpLnNldChHbG9iYWxEYXRhLmV4cClcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT57XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXhwIHNhdmVkIHN1Y2Nlc3NmdWxseScpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKT0+e1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIHNhdmluZyBleHAnLGVycm9yKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBxdWl0R2FtZSgpe1xyXG4gICAgICAgIEdsb2JhbERhdGEudWlkID0gXCJcIjtcclxuICAgICAgICBjb25zdCBhdXRoID0gZmlyZWJhc2UuYXV0aCgpO1xyXG4gICAgICAgIGF1dGguc2lnbk91dCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBVc2VyIHNpZ25lZCBvdXQgc3VjY2Vzc2Z1bGx5XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnbG9naW4nKTtcclxuICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAvLyBBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBzaWduaW5nIG91dFxyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiU2lnbiBvdXQgZXJyb3I6XCIsIGVycm9yKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgYmFja1RvTWFwKCl7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdtYXAyJyk7XHJcbiAgICB9XHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBHbG9iYWxEYXRhLnZvbHVtZSA9IHRoaXMudm9sdW1lX3NsaWRlci5wcm9ncmVzcztcclxuICAgIH1cclxufVxyXG4iXX0=
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
        cc.audioEngine.setMusicVolume(GlobalData_1.default.volume);
        cc.audioEngine.setEffectsVolume(GlobalData_1.default.volume);
    };
    Man.prototype.onBeginContact = function (contact, selfCollider, otherCollider) {
        //cc.log("Player hits the bush");
        var worldManifold = contact.getWorldManifold();
        var points = worldManifold.points;
        var normal = worldManifold.normal;
        if (otherCollider.tag == 4 || otherCollider.tag == 5 || otherCollider.tag == 6 || otherCollider.tag == 7) {
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
            cc.audioEngine.pauseMusic();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxtYW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFDMUMsNkNBQXdDO0FBQ3hDLDJDQUFzQztBQUV0QztJQUFpQyx1QkFBWTtJQUE3QztRQUFBLHFFQTZMQztRQTFMRyxnQkFBVSxHQUFnQixJQUFJLENBQUM7UUFHL0IsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQVcsT0FBTyxDQUFDO1FBR3ZCLFNBQUcsR0FBaUIsSUFBSSxDQUFDO1FBR3pCLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRy9CLGVBQVMsR0FBVyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0I7UUFFdkMsZUFBUyxHQUFFLElBQUksQ0FBQyxDQUFDLE9BQU87UUFFaEIsY0FBUSxHQUFZLEtBQUssQ0FBQztRQUUxQixnQkFBVSxHQUFZLEtBQUssQ0FBQztRQUM1QixrQkFBWSxHQUFZLEtBQUssQ0FBQztRQUM5QixrQkFBWSxHQUFZLEtBQUssQ0FBQztRQUM5QixtQkFBYSxHQUFZLEtBQUssQ0FBQztRQUMvQixnQkFBVSxHQUFHLENBQUMsQ0FBQztRQUNoQixjQUFRLEdBQUcsQ0FBQyxDQUFDOztJQWdLeEIsQ0FBQztJQTdKRyxtQkFBSyxHQUFMO1FBQ0ksSUFBSSxhQUFhLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM1RCxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQ3BELHVEQUF1RDtRQUN2RCwwQkFBMEI7UUFDMUIsR0FBRztRQUNILEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBYTtZQUN0QyxrQ0FBa0M7WUFD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LEVBQUUsQ0FBQyxLQUFLLENBQUM7c0NBQ0k7SUFHdkI7UUFEQyxRQUFRO3FDQUNjO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUMsQ0FBQztvQ0FDTDtJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBQyxFQUFFLENBQUMsU0FBUyxFQUFDLENBQUM7MENBQ0M7SUFHL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzswQ0FDQztJQWxCTCxHQUFHO1FBRHZCLE9BQU87T0FDYSxHQUFHLENBNkx2QjtJQUFELFVBQUM7Q0E3TEQsQUE2TEMsQ0E3TGdDLEVBQUUsQ0FBQyxTQUFTLEdBNkw1QztrQkE3TG9CLEdBQUciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuaW1wb3J0IEdhbWVNYW5hZ2VyIGZyb20gXCIuL2dhbWVtYW5hZ2VyXCI7XHJcbmltcG9ydCBHbG9iYWxEYXRhIGZyb20gXCIuL0dsb2JhbERhdGFcIjtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFuIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoR2FtZU1hbmFnZXIpXHJcbiAgICBHYW1lbWFuZ2VyOiBHYW1lTWFuYWdlciA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHRleHQ6IHN0cmluZyA9ICdoZWxsbyc7XHJcblxyXG4gICAgQHByb3BlcnR5KHt0eXBlOmNjLkF1ZGlvQ2xpcH0pXHJcbiAgICBiZ206IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcbiAgICBcclxuICAgIEBwcm9wZXJ0eSh7dHlwZTpjYy5BdWRpb0NsaXB9KVxyXG4gICAgZ29pblNvdW5kOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxyXG4gICAgbW92ZVNwZWVkOiBudW1iZXIgPSAxOyAvLyDnp7vliqjpgJ/luqbvvIzlj6/ku6XmoLnmja7pnIDopoHosIPmlbRcclxuXHJcbiAgICBhbmltYXRpb249IG51bGw7IC8vIOWKqOeUu+e7hOS7tlxyXG5cclxuICAgIHByaXZhdGUgaXNCYXR0bGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIGlzTW92aW5nVXA6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgaXNNb3ZpbmdEb3duOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGlzTW92aW5nTGVmdDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBpc01vdmluZ1JpZ2h0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGRlc3Ryb3ludW0gPSAwO1xyXG4gICAgcHVibGljIGVuZW15TnVtID0gMDtcclxuXHJcblxyXG4gICAgc3RhcnQoKXtcclxuICAgICAgICBsZXQgbm9kZXRvZGVzdG9yeSA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKClbXCJub2RlVG9EZXN0cm95XCJdO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibm9kZVRvRGVzdHJveSBpbiBtYW46XCIsIG5vZGV0b2Rlc3RvcnkpO1xyXG4gICAgICAgIC8vaWYodGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKG5vZGV0b2Rlc3RvcnkpICE9PSBudWxsKXtcclxuICAgICAgICAvLyAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgIC8vfVxyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFNjZW5lKCkud2Fsaygobm9kZTogY2MuTm9kZSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBQZXJmb3JtIG9wZXJhdGlvbnMgb24gZWFjaCBub2RlXHJcbiAgICAgICAgICAgIC8vIEFjY2VzcyBub2RlIHByb3BlcnRpZXMsIGNhbGwgbWV0aG9kcywgZXRjLlxyXG4gICAgICAgICAgICBpZihHbG9iYWxEYXRhLm5vZGVUb0Rlc3Ryb3kuaW5jbHVkZXMobm9kZS5uYW1lKSl7XHJcbiAgICAgICAgICAgICAgICBub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgICAgLy8gVGhpcyBjYWxsYmFjayBpcyBpbnZva2VkIGFmdGVyIHZpc2l0aW5nIGVhY2ggbm9kZSBpbiB0aGUgc2NlbmUgaGllcmFyY2h5XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJJdGVyYXRpb24gY29tcGxldGVcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHRoaXMuYmdtLCB0cnVlKTtcclxuICAgICAgICB0aGlzLkdhbWVtYW5nZXIgPSBjYy5maW5kKCdDYW52YXMvZ2FtZW1hbmFnZXInKS5nZXRDb21wb25lbnQoJ2dhbWVtYW5hZ2VyJyk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5HYW1lbWFuZ2VyKTtcclxuICAgICAgICB0aGlzLkdhbWVtYW5nZXIucGFsc2UgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgLy8g5rOo5YaM6ZSu55uY5LqL5Lu2XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICB2YXIgbWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKTtcclxuICAgICAgICBtYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uID0gdGhpcy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLCB0aGlzLm9uS2V5VXAsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihHbG9iYWxEYXRhLlBsYXllclBvc1gsR2xvYmFsRGF0YS5QbGF5ZXJQb3NZKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgLy8g56e76Zmk6ZSu55uY5LqL5Lu255uR5ZCsXHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLCB0aGlzLm9uS2V5VXAsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHBsYXlBbmltYXRpb24oYW5pbWF0aW9uTmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYW5pbWF0aW9uICYmIHRoaXMuYW5pbWF0aW9uLmdldEFuaW1hdGlvblN0YXRlKGFuaW1hdGlvbk5hbWUpLmlzUGxheWluZykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmFuaW1hdGlvbi5wbGF5KGFuaW1hdGlvbk5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0b3BBbmltYXRpb24oYW5pbWF0aW9uTmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYW5pbWF0aW9uICYmIHRoaXMuYW5pbWF0aW9uLmdldEFuaW1hdGlvblN0YXRlKGFuaW1hdGlvbk5hbWUpLmlzUGxheWluZykge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbi5zdG9wKGFuaW1hdGlvbk5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbktleURvd24oZXZlbnQ6IGNjLkV2ZW50LkV2ZW50S2V5Ym9hcmQpIHtcclxuICAgICAgICBzd2l0Y2goZXZlbnQua2V5Q29kZSkge1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS51cDpcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNNb3ZpbmdVcCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuZG93bjpcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNNb3ZpbmdEb3duID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5sZWZ0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc01vdmluZ0xlZnQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnJpZ2h0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc01vdmluZ1JpZ2h0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbktleVVwKGV2ZW50OiBjYy5FdmVudC5FdmVudEtleWJvYXJkKSB7XHJcbiAgICAgICAgc3dpdGNoKGV2ZW50LmtleUNvZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkudXA6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzTW92aW5nVXAgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICB0aGlzLnN0b3BBbmltYXRpb24oXCJtYW5fdXBcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuZG93bjpcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNNb3ZpbmdEb3duID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgdGhpcy5zdG9wQW5pbWF0aW9uKFwibWFuX2Rvd25cIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkubGVmdDpcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNNb3ZpbmdMZWZ0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgdGhpcy5zdG9wQW5pbWF0aW9uKFwibWFuX2xlZnRcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkucmlnaHQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzTW92aW5nUmlnaHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICB0aGlzLnN0b3BBbmltYXRpb24oXCJtYW5fcmlnaHRcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0OiBudW1iZXIpIHtcclxuICAgICAgICAvL2NjLmxvZyh0aGlzLm5vZGUueCwgdGhpcy5ub2RlLnkpO1xyXG4gICAgICAgIC8vIOagueaNruaMiemUrueKtuaAgeabtOaWsOinkuiJsuS9jee9rlxyXG4gICAgICAgIGlmKHRoaXMuR2FtZW1hbmdlci5wYWxzZT09ZmFsc2UpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc01vdmluZ1VwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS55ICs9ICh0aGlzLm1vdmVTcGVlZCAqIGR0KTtcclxuICAgICAgICAgICAgICAgIGlmKCF0aGlzLmFuaW1hdGlvbi5nZXRBbmltYXRpb25TdGF0ZShcIm1hbl91cFwiKS5pc1BsYXlpbmcpdGhpcy5hbmltYXRpb24ucGxheShcIm1hbl91cFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc01vdmluZ0Rvd24pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS55IC09IHRoaXMubW92ZVNwZWVkICogZHQ7XHJcbiAgICAgICAgICAgICAgICBpZighdGhpcy5hbmltYXRpb24uZ2V0QW5pbWF0aW9uU3RhdGUoXCJtYW5fZG93blwiKS5pc1BsYXlpbmcpdGhpcy5hbmltYXRpb24ucGxheShcIm1hbl9kb3duXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzTW92aW5nTGVmdCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnggLT0gdGhpcy5tb3ZlU3BlZWQgKiBkdDtcclxuICAgICAgICAgICAgICAgIGlmKCF0aGlzLmFuaW1hdGlvbi5nZXRBbmltYXRpb25TdGF0ZShcIm1hbl9sZWZ0XCIpLmlzUGxheWluZyl0aGlzLmFuaW1hdGlvbi5wbGF5KFwibWFuX2xlZnRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNNb3ZpbmdSaWdodCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnggKz0gdGhpcy5tb3ZlU3BlZWQgKiBkdDtcclxuICAgICAgICAgICAgICAgIGlmKCF0aGlzLmFuaW1hdGlvbi5nZXRBbmltYXRpb25TdGF0ZShcIm1hbl9yaWdodFwiKS5pc1BsYXlpbmcpdGhpcy5hbmltYXRpb24ucGxheShcIm1hbl9yaWdodFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZiAoKHRoaXMubm9kZS54ID49IDQ4ICYmIHRoaXMubm9kZS54IDw9IDg4KSAmJiAodGhpcy5ub2RlLnkgPj0gNTAgJiYgdGhpcy5ub2RlLnkgPD0gODYpICYmIHRoaXMuaXNCYXR0bGUgPT0gZmFsc2UpIHtcclxuICAgICAgICB9ICAgXHJcbiAgICAgICAgR2xvYmFsRGF0YS5QbGF5ZXJQb3NYID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCkueDtcclxuICAgICAgICBHbG9iYWxEYXRhLlBsYXllclBvc1kgPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKS55OyAgXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0TXVzaWNWb2x1bWUoR2xvYmFsRGF0YS52b2x1bWUpO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldEVmZmVjdHNWb2x1bWUoR2xvYmFsRGF0YS52b2x1bWUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQmVnaW5Db250YWN0KGNvbnRhY3QsIHNlbGZDb2xsaWRlciwgb3RoZXJDb2xsaWRlcikge1xyXG4gICAgICAgIC8vY2MubG9nKFwiUGxheWVyIGhpdHMgdGhlIGJ1c2hcIik7XHJcbiAgICAgICAgbGV0IHdvcmxkTWFuaWZvbGQgPSBjb250YWN0LmdldFdvcmxkTWFuaWZvbGQoKTtcclxuICAgICAgICBsZXQgcG9pbnRzID0gd29ybGRNYW5pZm9sZC5wb2ludHM7XHJcbiAgICAgICAgbGV0IG5vcm1hbCA9IHdvcmxkTWFuaWZvbGQubm9ybWFsO1xyXG4gICAgICAgIGlmKG90aGVyQ29sbGlkZXIudGFnID09IDQgfHwgb3RoZXJDb2xsaWRlci50YWcgPT0gNSB8fCBvdGhlckNvbGxpZGVyLnRhZyA9PSA2fHwgb3RoZXJDb2xsaWRlci50YWcgPT0gNyl7XHJcbiAgICAgICAgICAgIHRoaXMuZW5lbXlOdW0gPSBvdGhlckNvbGxpZGVyLnRhZztcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImVuZW15TnVtIGluIG1hblwiKTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmVuZW15TnVtKTtcclxuICAgICAgICAgICAgLy9jYy5sb2coXCJQbGF5ZXIgaGl0cyB0aGUgZW5lbXlcIik7XHJcbiAgICAgICAgICAgIHRoaXMuaXNCYXR0bGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyBjYy5hdWRpb0VuZ2luZS5wYXVzZU11c2ljKCk7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5nb2luU291bmQsIGZhbHNlKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgdmFyIGNhbnZhc05vZGUgPSBjYy5maW5kKFwiQ2FudmFzXCIpOyAvLyDojrflj5bnlLvluIPoioLngrlcclxuICAgICAgICAgICAgdmFyIGJsaW5rQWN0aW9uID0gY2MuYmxpbmsoMiwgNSk7IC8vIOmXqueDgeWKqOeUu++8jOaMgee7reaXtumXtOS4ujLnp5LvvIzpl6rng4HmrKHmlbDkuLo15qyhXHJcbiAgICAgICAgICAgIHRoaXMuR2FtZW1hbmdlci5wYWxzZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBhdXNlTXVzaWMoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5HYW1lbWFuZ2VyLnBhbHNlKTtcclxuICAgICAgICAgICAgY2FudmFzTm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgICAgICBibGlua0FjdGlvbixcclxuICAgICAgICAgICAgICAgIGNjLmNhbGxGdW5jKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJiYXR0bGVcIiwgKCkgPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV4dFNjZW5lID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICBuZXh0U2NlbmVbXCJlbmVteU51bVwiXSA9IG90aGVyQ29sbGlkZXIudGFnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJuZXh0U2NlbmVbZW5lbXlOdW1dXCIsIG5leHRTY2VuZVtcImVuZW15TnVtXCJdKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICkpO1xyXG4gICAgICAgICAgICAvL2NjLmF1ZGlvRW5naW5lLnBhdXNlTXVzaWMoKTtcclxuICAgICAgICAgICAgLy9jYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuYmF0dGxlQmdtLCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

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
        // console.log("this.animation:", this.animation);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3JELElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztvQkFDdEQsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO29CQUN0RCxJQUFNLGNBQWMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUM7b0JBQzNFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxjQUFjLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUN4RjthQUNKO1NBQ0o7SUFDTCxDQUFDO0lBeEVEO1FBREMsUUFBUTtvQ0FDYztJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO3lDQUNDO0lBR3RCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NENBQ087SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs0Q0FDTztJQVpULEVBQUU7UUFEdEIsT0FBTztPQUNhLEVBQUUsQ0E0RXRCO0lBQUQsU0FBQztDQTVFRCxBQTRFQyxDQTVFK0IsRUFBRSxDQUFDLFNBQVMsR0E0RTNDO2tCQTVFb0IsRUFBRSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5pbXBvcnQgR2FtZU1hbmFnZXIgZnJvbSBcIi4vZ2FtZW1hbmFnZXJcIjtcclxuaW1wb3J0IEdsb2JhbERhdGEgZnJvbSBcIi4vR2xvYmFsRGF0YVwiO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm8gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgdGV4dDogc3RyaW5nID0gJ2hlbGxvJztcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuSW50ZWdlcilcclxuICAgIG1vdmVTcGVlZDogbnVtYmVyID0gMTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuRmxvYXQpXHJcbiAgICBjaXJjbGVSYWRpdXM6IG51bWJlciA9IDUwOyAvLyDlm7Tnu5XljYrlvoRcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuRmxvYXQpXHJcbiAgICBhbmd1bGFyU3BlZWQ6IG51bWJlciA9IDYwOyAvLyDop5LpgJ/luqbvvIzmjqfliLbmr4/np5Llm7Tnu5XnmoTop5LluqZcclxuXHJcbiAgICAvL0Bwcm9wZXJ0eShjYy5BbmltYXRpb24pXHJcbiAgICBhbmltYXRpb24gPSBudWxsOyAvLyDliqjnlLvnu4Tku7ZcclxuXHJcbiAgICBwcml2YXRlIGlzQmF0dGxlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSB0YXJnZXRNYW46IGNjLk5vZGUgPSBudWxsOyAvLyDnm67moIdtYW7oioLngrlcclxuICAgIHByaXZhdGUgYW5nbGU6IG51bWJlciA9IDA7IC8vIOW9k+WJjeinkuW6plxyXG4gICAgcHJpdmF0ZSB1cGRhdGVUaW1lcjogbnVtYmVyID0gMDsgLy8g5pu05paw5L2N572u55qE6K6h5pe25ZmoXHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgLy8g6I635Y+W5Zy65pmv5Lit55qEXCJtYW5cIuiKgueCuVxyXG4gICAgICAgIHRoaXMudGFyZ2V0TWFuID0gY2MuZmluZChcIkNhbnZhcy9tYW5cIik7XHJcblxyXG4gICAgICAgIC8vIOaSreaUviBcIm5vXCIg5Yqo55S7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKCl7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb24gPSB0aGlzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdDogbnVtYmVyKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJ0aGlzLmFuaW1hdGlvbjpcIiwgdGhpcy5hbmltYXRpb24pO1xyXG4gICAgICAgIGlmICh0aGlzLmFuaW1hdGlvbiAmJiAhdGhpcy5hbmltYXRpb24uZ2V0QW5pbWF0aW9uU3RhdGUoXCJub1wiKS5pc1BsYXlpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb24ucGxheShcIm5vXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDlpoLmnpznm67moIdtYW7oioLngrnlrZjlnKjvvIzliJnlm7Tnu5Xlhbbnp7vliqhcclxuICAgICAgICBpZiAodGhpcy50YXJnZXRNYW4pIHtcclxuICAgICAgICAgICAgLy8g6K6h566X5b2T5YmN5L2N572u5LiO55uu5qCH5L2N572u5LmL6Ze055qE5ZCR6YePXHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldFBvcyA9IHRoaXMudGFyZ2V0TWFuLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50UG9zID0gdGhpcy5ub2RlLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSB0YXJnZXRQb3Muc3ViKGN1cnJlbnRQb3MpO1xyXG5cclxuICAgICAgICAgICAgLy8g6K6h566X5b2T5YmN5L2N572u5LiO55uu5qCH5L2N572u5LmL6Ze055qE6Led56a7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlID0gZGlyZWN0aW9uLm1hZygpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRpc3RhbmNlID4gdGhpcy5jaXJjbGVSYWRpdXMpIHtcclxuICAgICAgICAgICAgICAgIC8vIOagueaNruenu+WKqOmAn+W6puWSjOaXtumXtOmXtOmalOabtOaWsOS9jee9rlxyXG4gICAgICAgICAgICAgICAgY29uc3QgbW92ZURpc3RhbmNlID0gZGlyZWN0aW9uLm5vcm1hbGl6ZSgpLm11bCh0aGlzLm1vdmVTcGVlZCAqIGR0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IGN1cnJlbnRQb3MuYWRkKG1vdmVEaXN0YW5jZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyDmr4/pmpTkuIDmrrXml7bpl7Tlm7Tnu5Xnm67moIfov5DliqjkuIDmrKFcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVGltZXIgKz0gZHQ7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGVJbnRlcnZhbCA9IDAuMDA1OyAvLyDmm7TmlrDkvY3nva7nmoTml7bpl7Tpl7TpmpRcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy51cGRhdGVUaW1lciA+PSB1cGRhdGVJbnRlcnZhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVGltZXIgLT0gdXBkYXRlSW50ZXJ2YWw7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOWbtOe7leebruagh+i/kOWKqFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFuZ2xlSW5jcmVtZW50ID0gdGhpcy5hbmd1bGFyU3BlZWQgKiB1cGRhdGVJbnRlcnZhbDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuZ2xlID0gKHRoaXMuYW5nbGUgKyBhbmdsZUluY3JlbWVudCkgJSAzNjA7IC8vIOWinuWKoOinkuW6puW5tumZkOWItuWcqDAtMzYw6IyD5Zu05YaFXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOagueaNruinkuW6puWSjOWNiuW+hOiuoeeul+aWsOS9jee9rlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJhZGlhbnMgPSBjYy5taXNjLmRlZ3JlZXNUb1JhZGlhbnModGhpcy5hbmdsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2V0WCA9IE1hdGguY29zKHJhZGlhbnMpICogdGhpcy5jaXJjbGVSYWRpdXM7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2V0WSA9IE1hdGguc2luKHJhZGlhbnMpICogdGhpcy5jaXJjbGVSYWRpdXM7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2lyY2xlUG9zaXRpb24gPSBjYy52Mih0YXJnZXRQb3MueCArIG9mZnNldFgsIHRhcmdldFBvcy55ICsgb2Zmc2V0WSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gY2MudjMoY2lyY2xlUG9zaXRpb24ueCwgY2lyY2xlUG9zaXRpb24ueSwgdGhpcy5ub2RlLnBvc2l0aW9uLnopO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19
//------QC-SOURCE-SPLIT------

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
                exp: GlobalData_1.default.exp
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxyZWdpc3Rlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRiwyQ0FBc0M7QUFFaEMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUEyQ0M7UUF4Q0csV0FBSyxHQUFhLElBQUksQ0FBQztRQUNoQixXQUFLLEdBQVUsSUFBSSxDQUFDO1FBQ3BCLGNBQVEsR0FBVSxJQUFJLENBQUM7UUFDdkIsY0FBUSxHQUFhLElBQUksQ0FBQztRQUMxQixhQUFPLEdBQWEsSUFBSSxDQUFDOztJQW9DcEMsQ0FBQztJQW5DRyx3QkFBd0I7SUFFeEIseUJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUMsSUFBSSxDQUFDLGNBQWMsRUFBQyxJQUFJLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFDLElBQUksQ0FBQyxXQUFXLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELGlDQUFjLEdBQWQ7UUFDSSxJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLDhCQUE4QixDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUM1RCxJQUFJLENBQUMsVUFBQyxjQUFjO1lBQ2pCLG9CQUFVLENBQUMsR0FBRyxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFBO1lBQ3hDLElBQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNyQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxvQkFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztnQkFDdEQsS0FBSyxFQUFFLG9CQUFVLENBQUMsS0FBSztnQkFDdkIsT0FBTyxFQUFFLEVBQUU7Z0JBQ1gsR0FBRyxFQUFFLG9CQUFVLENBQUMsR0FBRzthQUN0QixDQUFDLENBQUM7WUFDSCxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQyxHQUFHO1lBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDekIsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsOEJBQVcsR0FBWDtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFDRCx5QkFBTSxHQUFOLFVBQVEsRUFBRTtRQUNOLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNwRSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUM1RSxDQUFDO0lBdkNEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ0k7SUFITixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBMkM1QjtJQUFELGVBQUM7Q0EzQ0QsQUEyQ0MsQ0EzQ3FDLEVBQUUsQ0FBQyxTQUFTLEdBMkNqRDtrQkEzQ29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgR2xvYmFsRGF0YSBmcm9tIFwiLi9HbG9iYWxEYXRhXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuZGVjbGFyZSBjb25zdCBmaXJlYmFzZSA6IGFueTtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBwdWJsaWMgZW1haWw6c3RyaW5nID0gbnVsbDtcclxuICAgIHB1YmxpYyBwYXNzd29yZDpzdHJpbmcgPSBudWxsO1xyXG4gICAgcHVibGljIHJlZ2lzdGVyOmNjLkJ1dHRvbiA9IG51bGw7XHJcbiAgICBwdWJsaWMgdG9Mb2dpbjpjYy5CdXR0b24gPSBudWxsO1xyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyID0gY2MuZmluZCgncmVnaXN0ZXInKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyLm5vZGUub24oJ2NsaWNrJyx0aGlzLmhhbmRsZVJlZ2lzdGVyLHRoaXMpO1xyXG4gICAgICAgIHRoaXMudG9Mb2dpbiA9IGNjLmZpbmQoJ2xvZ2luJykuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XHJcbiAgICAgICAgdGhpcy50b0xvZ2luLm5vZGUub24oJ2NsaWNrJyx0aGlzLnRvTG9naW5QYWdlLHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVJlZ2lzdGVyKCl7XHJcbiAgICAgICAgY29uc3QgYXV0aCA9IGZpcmViYXNlLmF1dGgoKTtcclxuICAgICAgICBhdXRoLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCh0aGlzLmVtYWlsLHRoaXMucGFzc3dvcmQpXHJcbiAgICAgICAgLnRoZW4oKHVzZXJDcmVkZW50aWFsKT0+e1xyXG4gICAgICAgICAgICBHbG9iYWxEYXRhLnVpZCA9IHVzZXJDcmVkZW50aWFsLnVzZXIudWlkXHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGFiYXNlID0gZmlyZWJhc2UuZGF0YWJhc2UoKTtcclxuICAgICAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJ3VzZXInKS5jaGlsZChHbG9iYWxEYXRhLnVpZCkuc2V0KHtcclxuICAgICAgICAgICAgICAgIGxldmVsOiBHbG9iYWxEYXRhLmxldmVsLFxyXG4gICAgICAgICAgICAgICAgbXlBcnJheTogW10sXHJcbiAgICAgICAgICAgICAgICBleHA6IEdsb2JhbERhdGEuZXhwXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ3NlbGVjdCcpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgY2MuZXJyb3IoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRvTG9naW5QYWdlKCl7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdsb2dpbicpO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIHRoaXMuZW1haWwgPSBjYy5maW5kKCdhY2NvdW50L2xhYmVsJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc7XHJcbiAgICAgICAgdGhpcy5wYXNzd29yZCA9IGNjLmZpbmQoJ3Bhc3N3b3JkL2xhYmVsJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuIl19
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
            cc.director.loadScene('main');
        });
        cc.find('Canvas/select/dong2/dong2_btn').on('click', function () {
            firebase.database().ref('user').child(GlobalData_1.default.uid).update({
                myArray: [1],
            });
            GlobalData_1.default.pokewoman.push(1);
            cc.director.loadScene('main');
        });
        cc.find('Canvas/select/dong3/dong3_btn').on('click', function () {
            firebase.database().ref('user').child(GlobalData_1.default.uid).update({
                myArray: [2],
            });
            GlobalData_1.default.pokewoman.push(2);
            cc.director.loadScene('main');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxzZWxlY3RfZG9uZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBc0M7QUFFaEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFJNUM7SUFBc0MsNEJBQVk7SUFBbEQ7O0lBb0NBLENBQUM7SUFsQ0cseUJBQU0sR0FBTjtRQUNJLElBQUksR0FBRyxHQUFHLG9CQUFVLENBQUMsR0FBRyxDQUFDO1FBQ3pCLElBQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNyQyxFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUMvQyxFQUFFLENBQUMsSUFBSSxDQUFDLCtCQUErQixDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRTtZQUM3QyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxvQkFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztnQkFDekQsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ2YsQ0FBQyxDQUFDO1lBQ0gsb0JBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdCLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsRUFBRSxDQUFDLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUU7WUFDN0MsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsb0JBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7Z0JBQ3pELE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQzthQUNmLENBQUMsQ0FBQztZQUNILG9CQUFVLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3QixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsQyxDQUFDLENBQUMsQ0FBQztRQUNQLEVBQUUsQ0FBQyxJQUFJLENBQUMsK0JBQStCLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFO1lBQzdDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLG9CQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDO2dCQUN6RCxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDZixDQUFDLENBQUM7WUFDSCxvQkFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDLENBQUM7UUFDSCwrQ0FBK0M7UUFDL0Msc0NBQXNDO1FBQ3RDLE1BQU07SUFFVixDQUFDO0lBRUQsd0JBQUssR0FBTDtJQUNBLENBQUM7SUFsQ2dCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FvQzVCO0lBQUQsZUFBQztDQXBDRCxBQW9DQyxDQXBDcUMsRUFBRSxDQUFDLFNBQVMsR0FvQ2pEO2tCQXBDb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHbG9iYWxEYXRhIGZyb20gXCIuL0dsb2JhbERhdGFcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbmRlY2xhcmUgY29uc3QgZmlyZWJhc2U6IGFueTtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdmFyIHVpZCA9IEdsb2JhbERhdGEudWlkO1xyXG4gICAgICAgIGNvbnN0IGRhdGFiYXNlID0gZmlyZWJhc2UuZGF0YWJhc2UoKTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9zZWxlY3QvZG9uZzEvZG9uZzFfYnRuJykub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJ3VzZXInKS5jaGlsZChHbG9iYWxEYXRhLnVpZCkudXBkYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBteUFycmF5OiBbMF0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIEdsb2JhbERhdGEucG9rZXdvbWFuLnB1c2goMCk7XHJcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ21haW4nKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjYy5maW5kKCdDYW52YXMvc2VsZWN0L2RvbmcyL2RvbmcyX2J0bicpLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCd1c2VyJykuY2hpbGQoR2xvYmFsRGF0YS51aWQpLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgbXlBcnJheTogWzFdLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBHbG9iYWxEYXRhLnBva2V3b21hbi5wdXNoKDEpO1xyXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdtYWluJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9zZWxlY3QvZG9uZzMvZG9uZzNfYnRuJykub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJ3VzZXInKS5jaGlsZChHbG9iYWxEYXRhLnVpZCkudXBkYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBteUFycmF5OiBbMl0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIEdsb2JhbERhdGEucG9rZXdvbWFuLnB1c2goMik7XHJcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ21haW4nKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBjYy5maW5kKCdDYW52YXMvbG9nb3V0Jykub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ2xvZ2luJyk7XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==
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
    GlobalData.Player2PosX = 35;
    GlobalData.Player2PosY = -62;
    GlobalData.cameraPosX = 138;
    GlobalData.cameraPosY = 71;
    GlobalData.volume = 0.5;
    GlobalData.mute = this.volume == 0 ? false : true;
    GlobalData.map = 'map2';
    GlobalData.nodeToDestroy = [];
    GlobalData.myelf = 0;
    GlobalData.mylife = 0;
    GlobalData.exp = 0;
    GlobalData.level_exp = [50, 120, 190, 290, 390, 500, 610, 670, 800, 1000];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxHbG9iYWxEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7QUFDbEY7SUFBQTtJQWtCQSxDQUFDO0lBakJVLGNBQUcsR0FBVyxFQUFFLENBQUM7SUFDakIsb0JBQVMsR0FBVSxFQUFFLENBQUM7SUFDdEIsZ0JBQUssR0FBVyxDQUFDLENBQUM7SUFDbEIscUJBQVUsR0FBWSxFQUFFLENBQUM7SUFDekIscUJBQVUsR0FBWSxDQUFDLEVBQUUsQ0FBQztJQUMxQixzQkFBVyxHQUFZLEVBQUUsQ0FBQztJQUMxQixzQkFBVyxHQUFZLENBQUMsRUFBRSxDQUFDO0lBQzNCLHFCQUFVLEdBQVksR0FBRyxDQUFDO0lBQzFCLHFCQUFVLEdBQVksRUFBRSxDQUFDO0lBQ3pCLGlCQUFNLEdBQVksR0FBRyxDQUFDO0lBQ3RCLGVBQUksR0FBYSxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDakQsY0FBRyxHQUFZLE1BQU0sQ0FBQztJQUN0Qix3QkFBYSxHQUFjLEVBQUUsQ0FBQztJQUM5QixnQkFBSyxHQUFZLENBQUMsQ0FBQztJQUNuQixpQkFBTSxHQUFZLENBQUMsQ0FBQztJQUNwQixjQUFHLEdBQVksQ0FBQyxDQUFDO0lBQ2pCLG9CQUFTLEdBQWEsQ0FBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxJQUFJLENBQUMsQ0FBQztJQUMzRSxpQkFBQztDQWxCRCxBQWtCQyxJQUFBO2tCQWxCb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2xvYmFsRGF0YSB7XHJcbiAgICBzdGF0aWMgdWlkOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgc3RhdGljIHBva2V3b21hbjogYW55W10gPSBbXTtcclxuICAgIHN0YXRpYyBsZXZlbDogbnVtYmVyID0gMTtcclxuICAgIHN0YXRpYyBQbGF5ZXJQb3NYIDogbnVtYmVyID0gMjk7XHJcbiAgICBzdGF0aWMgUGxheWVyUG9zWSA6IG51bWJlciA9IC02MjtcclxuICAgIHN0YXRpYyBQbGF5ZXIyUG9zWCA6IG51bWJlciA9IDM1O1xyXG4gICAgc3RhdGljIFBsYXllcjJQb3NZIDogbnVtYmVyID0gLTYyO1xyXG4gICAgc3RhdGljIGNhbWVyYVBvc1ggOiBudW1iZXIgPSAxMzg7XHJcbiAgICBzdGF0aWMgY2FtZXJhUG9zWSA6IG51bWJlciA9IDcxO1xyXG4gICAgc3RhdGljIHZvbHVtZSA6IG51bWJlciA9IDAuNTtcclxuICAgIHN0YXRpYyBtdXRlIDogYm9vbGVhbiA9IHRoaXMudm9sdW1lID09IDAgPyBmYWxzZSA6IHRydWU7XHJcbiAgICBzdGF0aWMgbWFwIDogc3RyaW5nID0gJ21hcDInO1xyXG4gICAgc3RhdGljIG5vZGVUb0Rlc3Ryb3kgOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgc3RhdGljIG15ZWxmIDogbnVtYmVyID0gMDtcclxuICAgIHN0YXRpYyBteWxpZmUgOiBudW1iZXIgPSAwO1xyXG4gICAgc3RhdGljIGV4cCA6IG51bWJlciA9IDA7XHJcbiAgICBzdGF0aWMgbGV2ZWxfZXhwOiBudW1iZXJbXSA9IFs1MCwxMjAsMTkwLDI5MCwzOTAsNTAwLDYxMCw2NzAsODAwLDEwMDBdO1xyXG59XHJcbiJdfQ==
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
            cc.director.loadScene('map3');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx1bml2ZXJzZV9zZWxlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFJNUM7SUFBc0MsNEJBQVk7SUFBbEQ7O0lBa0JBLENBQUM7SUFoQkcseUJBQU0sR0FBTjtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQy9DLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRTtZQUN6QixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0QyxDQUFDLENBQUMsQ0FBQztRQUNILEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRTtZQUN6QixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsQyxDQUFDLENBQUMsQ0FBQztRQUNQLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRTtZQUN6QixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCx3QkFBSyxHQUFMO0lBQ0EsQ0FBQztJQWhCZ0IsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWtCNUI7SUFBRCxlQUFDO0NBbEJELEFBa0JDLENBbEJxQyxFQUFFLENBQUMsU0FBUyxHQWtCakQ7a0JBbEJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdsb2JhbERhdGEgZnJvbSBcIi4vR2xvYmFsRGF0YVwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuZGVjbGFyZSBjb25zdCBmaXJlYmFzZTogYW55O1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9wMScpLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnbWFwMycpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9wMicpLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnbWFwMicpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBjYy5maW5kKCdDYW52YXMvcDMnKS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ21hcDInKTtcclxuICAgICAgICB9KTsgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgfVxyXG5cclxufSJdfQ==
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

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/yuan.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c3982MDSRxNJ4Tw7aIjsfeN', 'yuan');
// script/yuan.ts

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
        _this.yuan = null;
        _this.animation = null; // 动画组件
        _this.audioId = -1; // Audio ID for the yuan audio clip
        return _this;
    }
    No.prototype.onLoad = function () {
        this.animation = this.getComponent(cc.Animation);
    };
    No.prototype.start = function () {
        this.audioId = cc.audioEngine.playEffect(this.yuan, false);
        cc.audioEngine.setVolume(this.audioId, 1.0); // Set the volume to 1.0 (maximum)
        this.scheduleOnce(this.changeScene, 4.3); // Schedule the scene change after 2 seconds
    };
    No.prototype.update = function (dt) {
        if (this.animation && !this.animation.getAnimationState("yuan").isPlaying) {
            this.animation.play("yuan");
        }
    };
    No.prototype.changeScene = function () {
        cc.director.loadScene("map2"); // Load the "map2" scene
    };
    __decorate([
        property({ type: cc.AudioClip })
    ], No.prototype, "yuan", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx5dWFuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBSzVDO0lBQWdDLHNCQUFZO0lBQTVDO1FBQUEscUVBMkJDO1FBeEJHLFVBQUksR0FBaUIsSUFBSSxDQUFDO1FBRTFCLGVBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQyxPQUFPO1FBQ3pCLGFBQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLG1DQUFtQzs7SUFxQnJELENBQUM7SUFuQkcsbUJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELGtCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDM0QsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLGtDQUFrQztRQUMvRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyw0Q0FBNEM7SUFDMUYsQ0FBQztJQUVELG1CQUFNLEdBQU4sVUFBTyxFQUFVO1FBQ2IsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLEVBQUU7WUFDdkUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDL0I7SUFDTCxDQUFDO0lBRUQsd0JBQVcsR0FBWDtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsd0JBQXdCO0lBQzNELENBQUM7SUF2QkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO29DQUNQO0lBSFQsRUFBRTtRQUR0QixPQUFPO09BQ2EsRUFBRSxDQTJCdEI7SUFBRCxTQUFDO0NBM0JELEFBMkJDLENBM0IrQixFQUFFLENBQUMsU0FBUyxHQTJCM0M7a0JBM0JvQixFQUFFIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuaW1wb3J0IEdhbWVNYW5hZ2VyIGZyb20gXCIuL2dhbWVtYW5hZ2VyXCI7XHJcbmltcG9ydCBHbG9iYWxEYXRhIGZyb20gXCIuL0dsb2JhbERhdGFcIjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5BdWRpb0NsaXAgfSlcclxuICAgIHl1YW46IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgYW5pbWF0aW9uID0gbnVsbDsgLy8g5Yqo55S757uE5Lu2XHJcbiAgICBhdWRpb0lkID0gLTE7IC8vIEF1ZGlvIElEIGZvciB0aGUgeXVhbiBhdWRpbyBjbGlwXHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uID0gdGhpcy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLmF1ZGlvSWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMueXVhbiwgZmFsc2UpO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldFZvbHVtZSh0aGlzLmF1ZGlvSWQsIDEuMCk7IC8vIFNldCB0aGUgdm9sdW1lIHRvIDEuMCAobWF4aW11bSlcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSh0aGlzLmNoYW5nZVNjZW5lLCA0LjMpOyAvLyBTY2hlZHVsZSB0aGUgc2NlbmUgY2hhbmdlIGFmdGVyIDIgc2Vjb25kc1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYW5pbWF0aW9uICYmICF0aGlzLmFuaW1hdGlvbi5nZXRBbmltYXRpb25TdGF0ZShcInl1YW5cIikuaXNQbGF5aW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uLnBsYXkoXCJ5dWFuXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VTY2VuZSgpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJtYXAyXCIpOyAvLyBMb2FkIHRoZSBcIm1hcDJcIiBzY2VuZVxyXG4gICAgfVxyXG59Il19
//------QC-SOURCE-SPLIT------
