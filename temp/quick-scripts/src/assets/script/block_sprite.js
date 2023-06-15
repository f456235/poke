"use strict";
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
        _this.bag = [3, 4, 1, 2, 5, 0];
        // LIFE-CYCLE CALLBACKS:
        _this.num = 0;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.onLoad = function () {
        var _this = this;
        var uid = GlobalData_1.default.uid;
        console.log("uid:", uid);
        firebase.database().ref(uid + 'pokewoman').on('value', function (snapshot) {
            _this.num = snapshot.val();
            console.log(_this.num);
        });
    };
    NewClass.prototype.start = function () {
        // iterate through bag
        // i : bag.index , child.index
        for (var i = 0; i < this.bag.length; i++) {
            this.node.getChildByName('Sprite' + i).getComponent(cc.Sprite).spriteFrame = this.sprite[this.bag[i]];
            // scale 0.1
            this.node.getChildByName('Sprite' + i).scale = 0.05;
            // onload click event
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
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();