
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxiYXR0bGVfYmFnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBQzFDLDJDQUFzQztBQUd0QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWdNQztRQTdMRyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLFVBQUksR0FBVyxPQUFPLENBQUM7UUFHdkIsWUFBTSxHQUFxQixFQUFFLENBQUM7UUFHOUIsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUVsQiwwQ0FBMEM7UUFDMUMsc0NBQXNDO1FBQ3RDLFNBQUcsR0FBWSxvQkFBVSxDQUFDLFNBQVMsQ0FBQztRQUVwQyx3QkFBd0I7UUFFeEIsU0FBRyxHQUFXLENBQUMsQ0FBQztRQUdoQixRQUFFLEdBQWEsSUFBSSxDQUFDO1FBRXBCLGFBQU8sR0FBYSxJQUFJLENBQUM7UUFFekIsWUFBTSxHQUFhLElBQUksQ0FBQztRQUV4Qix3QkFBd0I7UUFFeEIsZUFBUyxHQUFXLENBQUMsQ0FBQzs7SUFpSzFCLENBQUM7SUEvSkcseUJBQU0sR0FBTjtRQUFBLGlCQVlDO1FBWEcsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEUsRUFB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QUFDLEtBQUssQ0FBQzs2Q0FDTTtJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzRDQUNLO0lBSXhCO1FBREMsUUFBUTsrQ0FDYTtJQS9CTCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBZ001QjtJQUFELGVBQUM7Q0FoTUQsQUFnTUMsQ0FoTXFDLEVBQUUsQ0FBQyxTQUFTLEdBZ01qRDtrQkFoTW9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuaW1wb3J0IEdsb2JhbERhdGEgZnJvbSBcIi4vR2xvYmFsRGF0YVwiO1xyXG5kZWNsYXJlIGNvbnN0IGZpcmViYXNlOiBhbnk7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgdGV4dDogc3RyaW5nID0gJ2hlbGxvJztcclxuXHJcbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcclxuICAgIHNwcml0ZTogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgaW5kZXg6IG51bWJlciA9IDA7XHJcblxyXG4gICAgLyogZ2V0IGEgcmV0dXJuIGFycmF5IGZyb20gb3RoZXIgc2NyaXB0ICovXHJcbiAgICAvLyBiYWc6IG51bWJlcltdID0gWzMsIDQsIDEsIDIsIDUsIDBdO1xyXG4gICAgYmFnOiBudW1iZXJbXSA9R2xvYmFsRGF0YS5wb2tld29tYW47XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcbiAgICBAcHJvcGVydHlcclxuICAgIG51bTogbnVtYmVyID0gMDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBubTogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgYXRrX251bTogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgaHBfbnVtOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcbiAgICBAcHJvcGVydHlcclxuICAgIG5vd2Nob29zZTogbnVtYmVyID0gMDtcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIHRoaXMubm0gPSBjYy5maW5kKFwiQ2FudmFzL2Jsb2NrL25hbWVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICB0aGlzLmF0a19udW0gPSBjYy5maW5kKFwiQ2FudmFzL2Jsb2NrL2F0a19udW1cIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICB0aGlzLmhwX251bSA9IGNjLmZpbmQoXCJDYW52YXMvYmxvY2svaHBfbnVtXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdmFyIHVpZCA9IEdsb2JhbERhdGEudWlkOyAgXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJ1aWQ6XCIsdWlkKTtcclxuICAgICAgICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZih1aWQgKyAncG9rZXdvbWFuJykub24oJ3ZhbHVlJywgc25hcHNob3QgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm51bSA9IHNuYXBzaG90LnZhbCgpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm51bSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vIHRoaXMuYXRrX251bS5zdHJpbmcgPSBcIjIwMFwiO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnU3ByaXRlNicpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnbmFtZScpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnYXRrJykuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdhdGtfbnVtJykuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdocCcpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnaHBfbnVtJykuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdzZWxlY3QnKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3NlbGVjdF9sYWJlbCcpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIC8vIGl0ZXJhdGUgdGhyb3VnaCBiYWdcclxuICAgICAgICAvLyBpIDogYmFnLmluZGV4ICwgY2hpbGQuaW5kZXhcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmJhZyk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdTcHJpdGUnICsgaSkuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnNwcml0ZVt0aGlzLmJhZ1tpXV07XHJcbiAgICAgICAgICAgIC8vIHNjYWxlIDAuMVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ1Nwcml0ZScgKyBpKS5zY2FsZSA9IDAuMDU7XHJcbiAgICAgICAgICAgIC8vIG9ubG9hZCBjbGljayBldmVudFxyXG4gICAgICAgICAgICBpZih0aGlzLmJhZ1tpXT09bnVsbCl7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImJhZ1tcIixpLFwiXSBpcyBudWxsXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdTcHJpdGUnICsgaSkuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIENoZWNrIHRoZSB2YWx1ZSBvZiBteUFycmF5WzBdIGluIEZpcmViYXNlXHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSBzcHJpdGVGcmFtZSBiYXNlZCBvbiBteUFycmF5WzBdIHZhbHVlXHJcbiAgICAgICAgLyppZiAodGhpcy5udW0gPT09IDApIHtcclxuICAgICAgICAgICAgLy8gY29uc3Qgc3ByaXRlRnJhbWUwID0gY2MucmVzb3VyY2VzLmdldChcInNyYy9kb25nMFwiLCBjYy5TcHJpdGVGcmFtZSk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTA7XHJcbiAgICAgICAgICAgIC8vIGNjLnJlc291cmNlcy5sb2FkKFwidGVzdF9hc3NldHMvaW1hZ2Uvc3ByaXRlRnJhbWVcIiwgY2MuU3ByaXRlRnJhbWUsIChlcnIsIHNwcml0ZUZyYW1lKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCcuLi9zcmMvZG9uZzEnLCBjYy5TcHJpdGVGcmFtZSwgZnVuY3Rpb24gKGVyciwgc3ByaXRlRnJhbWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubnVtID09PSAxKSB7XHJcbiAgICAgICAgICAgIC8vIFNldCBzcHJpdGVGcmFtZSB0byBzcHJpdGUgMVxyXG4gICAgICAgICAgICAvLyBBc3N1bWluZyB5b3UgaGF2ZSBhIHNwcml0ZUZyYW1lIG5hbWVkIFwic3ByaXRlMVwiIGluIHlvdXIgcHJvamVjdCdzIGFzc2V0c1xyXG4gICAgICAgICAgICAvLyBjb25zdCBzcHJpdGVGcmFtZTEgPSBjYy5yZXNvdXJjZXMuZ2V0KFwic3JjL2RvbmcwXCIsIGNjLlNwcml0ZUZyYW1lKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lMTtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoJy4uL3NyYy9kb25nMicsIGNjLlNwcml0ZUZyYW1lLCBmdW5jdGlvbiAoZXJyLCBzcHJpdGVGcmFtZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5udW0gPT09IDIpIHtcclxuICAgICAgICAgICAgLy8gU2V0IHNwcml0ZUZyYW1lIHRvIHNwcml0ZSAyXHJcbiAgICAgICAgICAgIC8vIEFzc3VtaW5nIHlvdSBoYXZlIGEgc3ByaXRlRnJhbWUgbmFtZWQgXCJzcHJpdGUyXCIgaW4geW91ciBwcm9qZWN0J3MgYXNzZXRzXHJcbiAgICAgICAgICAgIC8vIGNvbnN0IHNwcml0ZUZyYW1lMiA9IGNjLnJlc291cmNlcy5nZXQoXCJzcmMvZG9uZzBcIiwgY2MuU3ByaXRlRnJhbWUpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWUyO1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcygnLi4vc3JjL2RvbmczJywgY2MuU3ByaXRlRnJhbWUsIGZ1bmN0aW9uIChlcnIsIHNwcml0ZUZyYW1lKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSovXHJcbiAgICAgICAgY2MuZmluZCgnQ2FudmFzL2Jsb2NrL1Nwcml0ZTAnKS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnU3ByaXRlNicpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGVbdGhpcy5iYWdbMF1dO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ1Nwcml0ZTYnKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ1Nwcml0ZTYnKS5zY2FsZSA9IDAuMTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVfczYodGhpcy5iYWdbMF0pO1xyXG4gICAgICAgICAgICB0aGlzLm5vd2Nob29zZT0wO1xyXG4gICAgICAgICAgICAvLyB0aGlzLm5tLnN0cmluZyA9IFwi5bKp5p2x5YuHXCI7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuYXRrX251bS5zdHJpbmcgPSBcIjEwMFwiO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9ibG9jay9TcHJpdGUxJykub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ1Nwcml0ZTYnKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByaXRlW3RoaXMuYmFnWzFdXTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdTcHJpdGU2JykuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdTcHJpdGU2Jykuc2NhbGUgPSAwLjE7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlX3M2KHRoaXMuYmFnWzFdKTtcclxuICAgICAgICAgICAgdGhpcy5ub3djaG9vc2U9MTtcclxuICAgICAgICAgICAgLy8gdGhpcy5ubS5zdHJpbmcgPSBcIueCjuadseWLh1wiO1xyXG4gICAgICAgICAgICAvLyB0aGlzLmF0a19udW0uc3RyaW5nID0gXCIxMDBcIjtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjYy5maW5kKCdDYW52YXMvYmxvY2svU3ByaXRlMicpLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdTcHJpdGU2JykuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnNwcml0ZVt0aGlzLmJhZ1syXV07XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnU3ByaXRlNicpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnU3ByaXRlNicpLnNjYWxlID0gMC4xO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZV9zNih0aGlzLmJhZ1syXSk7XHJcbiAgICAgICAgICAgIHRoaXMubm93Y2hvb3NlPTI7XHJcbiAgICAgICAgICAgIC8vIHRoaXMubm0uc3RyaW5nID0gXCLlmrTlhqzli4dcIjtcclxuICAgICAgICAgICAgLy8gdGhpcy5hdGtfbnVtLnN0cmluZyA9IFwiMTAwXCI7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY2MuZmluZCgnQ2FudmFzL2Jsb2NrL1Nwcml0ZTMnKS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnU3ByaXRlNicpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGVbdGhpcy5iYWdbM11dO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ1Nwcml0ZTYnKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ1Nwcml0ZTYnKS5zY2FsZSA9IDAuMTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVfczYodGhpcy5iYWdbM10pO1xyXG4gICAgICAgICAgICB0aGlzLm5vd2Nob29zZT0zO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9ibG9jay9TcHJpdGU0Jykub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ1Nwcml0ZTYnKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByaXRlW3RoaXMuYmFnWzRdXTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdTcHJpdGU2JykuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdTcHJpdGU2Jykuc2NhbGUgPSAwLjE7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlX3M2KHRoaXMuYmFnWzRdKTtcclxuICAgICAgICAgICAgdGhpcy5ub3djaG9vc2U9NDtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjYy5maW5kKCdDYW52YXMvYmxvY2svU3ByaXRlNScpLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdTcHJpdGU2JykuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnNwcml0ZVt0aGlzLmJhZ1s1XV07XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnU3ByaXRlNicpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnU3ByaXRlNicpLnNjYWxlID0gMC4xO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZV9zNih0aGlzLmJhZ1s1XSk7XHJcbiAgICAgICAgICAgIHRoaXMubm93Y2hvb3NlPTU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY2MuZmluZCgnQ2FudmFzL2Jsb2NrL3NlbGVjdCcpLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgR2xvYmFsRGF0YS5teWVsZiA9IHRoaXMubm93Y2hvb3NlO1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJiYXR0bGVcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVfczYoYSkgIFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnbmFtZScpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdhdGsnKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnYXRrX251bScpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdocCcpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdocF9udW0nKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnc2VsZWN0JykuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3NlbGVjdF9sYWJlbCcpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJoaTpcIixhKTtcclxuICAgICAgICBpZihhPT0wKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5ubS5zdHJpbmcgPSBcIuWyqeadseWLh1wiO1xyXG4gICAgICAgICAgICB0aGlzLmF0a19udW0uc3RyaW5nID0gXCIyMFwiO1xyXG4gICAgICAgICAgICB0aGlzLmhwX251bS5zdHJpbmcgPSBcIjEwMFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKGE9PTEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm5tLnN0cmluZyA9IFwi54KO5p2x5YuHXCI7XHJcbiAgICAgICAgICAgIHRoaXMuYXRrX251bS5zdHJpbmcgPSBcIjEwMFwiO1xyXG4gICAgICAgICAgICB0aGlzLmhwX251bS5zdHJpbmcgPSBcIjIwXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoYT09MilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubm0uc3RyaW5nID0gXCLlmrTlhqzli4dcIjtcclxuICAgICAgICAgICAgdGhpcy5hdGtfbnVtLnN0cmluZyA9IFwiNTBcIjtcclxuICAgICAgICAgICAgdGhpcy5ocF9udW0uc3RyaW5nID0gXCI1MFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKGE9PTMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm5tLnN0cmluZyA9IFwi6a2U6Zec5769XCI7XHJcbiAgICAgICAgICAgIHRoaXMuYXRrX251bS5zdHJpbmcgPSBcIjMwMFwiO1xyXG4gICAgICAgICAgICB0aGlzLmhwX251bS5zdHJpbmcgPSBcIjEwXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubm0uc3RyaW5nKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm5tLnN0cmluZyk7XHJcbiAgICB9XHJcbn0iXX0=